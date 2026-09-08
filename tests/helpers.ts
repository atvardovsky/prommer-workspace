/** Reusable deterministic fixtures keep application tests offline and explicit. */
import type {
  AiProvider,
  AiProviderResult,
  StructuredGenerationRequest,
} from "../src/application/ports/ai-provider.js";

/** A provider double that records calls and returns queued structured values. */
export class ScriptedAiProvider implements AiProvider {
  public readonly id = "scripted-test";
  public readonly requests: StructuredGenerationRequest<unknown>[] = [];

  /** Create a provider with exactly the responses expected by one test. */
  public constructor(private readonly responses: unknown[]) {}

  /** Validate and return the next response, failing on unexpected calls. */
  public async generateStructured<T>(
    request: StructuredGenerationRequest<T>,
  ): Promise<AiProviderResult<T>> {
    this.requests.push(request as StructuredGenerationRequest<unknown>);
    const response = this.responses.shift();
    if (response === undefined) {
      throw new Error(`Unexpected provider call: ${request.operation}`);
    }
    return {
      value: request.output.parse(response),
      provider: this.id,
      model: "scripted",
    };
  }
}
