/** Anthropic Messages API adapter for the same provider-neutral port. */
import type {
  AiProvider,
  AiProviderResult,
  StructuredGenerationRequest,
} from "../../application/ports/ai-provider.js";
import { ProviderError } from "../../domain/errors.js";
import { errorCodeForStatus, parseStructuredText } from "./provider-utils.js";

/** Construction options kept independent from process environment variables. */
export interface AnthropicProviderOptions {
  readonly apiKey: string;
  readonly model: string;
  readonly fetchImpl?: typeof fetch;
  readonly baseUrl?: string;
  readonly maxTokens?: number;
}

interface AnthropicResponseBody {
  readonly content?: readonly {
    readonly type?: string;
    readonly text?: string;
  }[];
}

/** Generate validated structured values through Anthropic's Messages API. */
export class AnthropicProvider implements AiProvider {
  public readonly id = "anthropic";
  private readonly fetchImpl: typeof fetch;
  private readonly baseUrl: string;

  /** Validate static configuration before any potentially billable request. */
  public constructor(private readonly options: AnthropicProviderOptions) {
    if (!options.apiKey || !options.model) {
      throw new ProviderError(
        "configuration",
        "Anthropic requires both an API key and model name.",
      );
    }
    this.fetchImpl = options.fetchImpl ?? globalThis.fetch;
    this.baseUrl = options.baseUrl ?? "https://api.anthropic.com/v1";
  }

  /** Map a generic request to Messages and normalize its text content. */
  public async generateStructured<T>(
    request: StructuredGenerationRequest<T>,
  ): Promise<AiProviderResult<T>> {
    let response: Response;
    try {
      response = await this.fetchImpl(`${this.baseUrl}/messages`, {
        method: "POST",
        headers: {
          "x-api-key": this.options.apiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: this.options.model,
          max_tokens: this.options.maxTokens ?? 1_500,
          system: request.instructions,
          messages: [{ role: "user", content: request.input }],
          output_config: {
            format: {
              type: "json_schema",
              schema: request.output.jsonSchema,
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
      throw new ProviderError(code, "Anthropic request failed.", { cause });
    }

    if (!response.ok) {
      throw new ProviderError(
        errorCodeForStatus(response.status),
        `Anthropic returned HTTP ${response.status}.`,
      );
    }
    const body = (await response.json()) as AnthropicResponseBody;
    const text = body.content?.find((content) => content.type === "text")?.text;
    return {
      value: parseStructuredText(text, request.output),
      provider: this.id,
      model: this.options.model,
    };
  }
}
