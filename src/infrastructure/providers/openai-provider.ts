/** OpenAI Responses API adapter for the provider-neutral application port. */
import type {
  AiProvider,
  AiProviderResult,
  StructuredGenerationRequest,
} from "../../application/ports/ai-provider.js";
import { ProviderError } from "../../domain/errors.js";
import { errorCodeForStatus, parseStructuredText } from "./provider-utils.js";

/** Construction options kept independent from process environment variables. */
export interface OpenAiProviderOptions {
  readonly apiKey: string;
  readonly model: string;
  readonly fetchImpl?: typeof fetch;
  readonly baseUrl?: string;
}

interface OpenAiResponseBody {
  readonly output?: readonly {
    readonly content?: readonly {
      readonly type?: string;
      readonly text?: string;
    }[];
  }[];
}

/** Generate validated structured values through OpenAI's Responses API. */
export class OpenAiProvider implements AiProvider {
  public readonly id = "openai";
  private readonly fetchImpl: typeof fetch;
  private readonly baseUrl: string;

  /** Validate static configuration before any potentially billable request. */
  public constructor(private readonly options: OpenAiProviderOptions) {
    if (!options.apiKey || !options.model) {
      throw new ProviderError(
        "configuration",
        "OpenAI requires both an API key and model name.",
      );
    }
    this.fetchImpl = options.fetchImpl ?? globalThis.fetch;
    this.baseUrl = options.baseUrl ?? "https://api.openai.com/v1";
  }

  /** Map a generic structured request to the Responses API and normalize output. */
  public async generateStructured<T>(
    request: StructuredGenerationRequest<T>,
  ): Promise<AiProviderResult<T>> {
    let response: Response;
    try {
      response = await this.fetchImpl(`${this.baseUrl}/responses`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${this.options.apiKey}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: this.options.model,
          instructions: request.instructions,
          input: request.input,
          store: false,
          text: {
            format: {
              type: "json_schema",
              name: request.output.name,
              description: request.output.description,
              schema: request.output.jsonSchema,
              strict: true,
            },
          },
        }),
        ...(request.signal ? { signal: request.signal } : {}),
      });
    } catch (cause) {
      const code =
        cause instanceof DOMException && cause.name === "AbortError"
          ? "timeout"
          : "unavailable";
      throw new ProviderError(code, "OpenAI request failed.", { cause });
    }

    if (!response.ok) {
      throw new ProviderError(
        errorCodeForStatus(response.status),
        `OpenAI returned HTTP ${response.status}.`,
      );
    }
    const body = (await response.json()) as OpenAiResponseBody;
    const text = body.output
      ?.flatMap((item) => item.content ?? [])
      .find((content) => content.type === "output_text")?.text;
    return {
      value: parseStructuredText(text, request.output),
      provider: this.id,
      model: this.options.model,
    };
  }
}
