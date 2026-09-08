/** Stable error categories exposed by every model-provider adapter. */
export type ProviderErrorCode =
  | "auth"
  | "rate-limit"
  | "timeout"
  | "unavailable"
  | "invalid-output"
  | "configuration";

/** A vendor-neutral provider failure that is safe to display and test. */
export class ProviderError extends Error {
  /** Create a normalized provider failure without retaining secret headers. */
  public constructor(
    public readonly code: ProviderErrorCode,
    message: string,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = "ProviderError";
  }
}
