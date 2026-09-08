/** Shared parsing and error normalization for provider adapters. */
import type { OutputContract } from "../../application/ports/ai-provider.js";
import { ProviderError, type ProviderErrorCode } from "../../domain/errors.js";

/** Map provider HTTP responses into one stable application error taxonomy. */
export function errorCodeForStatus(status: number): ProviderErrorCode {
  if (status === 401 || status === 403) return "auth";
  if (status === 429) return "rate-limit";
  if (status >= 500) return "unavailable";
  return "unavailable";
}

/** Parse model text as JSON, then apply the requested runtime contract. */
export function parseStructuredText<T>(
  text: string | undefined,
  output: OutputContract<T>,
): T {
  if (!text) {
    throw new ProviderError(
      "invalid-output",
      "The provider returned no structured text.",
    );
  }
  try {
    return output.parse(JSON.parse(text));
  } catch (cause) {
    if (cause instanceof ProviderError) throw cause;
    throw new ProviderError(
      "invalid-output",
      `The provider response did not satisfy ${output.name}.`,
      { cause },
    );
  }
}
