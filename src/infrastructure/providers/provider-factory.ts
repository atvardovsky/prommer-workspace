/** Composition helper for choosing a provider without changing application code. */
import type { AiProvider } from "../../application/ports/ai-provider.js";
import { ProviderError } from "../../domain/errors.js";
import { AnthropicProvider } from "./anthropic-provider.js";
import { DeterministicProvider } from "./deterministic-provider.js";
import { OpenAiProvider } from "./openai-provider.js";

/** Environment values consumed at the outermost composition boundary. */
export type ProviderEnvironment = Readonly<Record<string, string | undefined>>;

/** Build a configured provider while keeping secrets out of agents and traces. */
export function createAiProvider(environment: ProviderEnvironment): AiProvider {
  const provider = environment.AI_PROVIDER ?? "demo";
  if (provider === "demo") return new DeterministicProvider();
  if (provider === "openai") {
    return new OpenAiProvider({
      apiKey: environment.OPENAI_API_KEY ?? "",
      model: environment.OPENAI_MODEL ?? "",
    });
  }
  if (provider === "anthropic") {
    return new AnthropicProvider({
      apiKey: environment.ANTHROPIC_API_KEY ?? "",
      model: environment.ANTHROPIC_MODEL ?? "",
    });
  }
  throw new ProviderError(
    "configuration",
    `Unsupported AI_PROVIDER value: ${provider}.`,
  );
}
