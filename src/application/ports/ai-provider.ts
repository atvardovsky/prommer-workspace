/** Vendor-neutral structured generation port used by application agents. */
import { z } from "zod";

/** Logical model task names make tests and traces independent of prompts. */
export type AiOperation = "draft-linkedin-post" | "review-linkedin-post";

/** Runtime and JSON Schema representations of one expected model output. */
export interface OutputContract<T> {
  readonly name: string;
  readonly description: string;
  readonly jsonSchema: Record<string, unknown>;
  readonly parse: (value: unknown) => T;
}

/** One provider-neutral request for validated structured generation. */
export interface StructuredGenerationRequest<T> {
  readonly operation: AiOperation;
  readonly instructions: string;
  readonly input: string;
  readonly output: OutputContract<T>;
  readonly signal?: AbortSignal;
}

/** Normalized metadata and validated content returned by any provider. */
export interface AiProviderResult<T> {
  readonly value: T;
  readonly provider: string;
  readonly model: string;
}

/** The only model-provider dependency visible to application code. */
export interface AiProvider {
  readonly id: string;
  generateStructured<T>(
    request: StructuredGenerationRequest<T>,
  ): Promise<AiProviderResult<T>>;
}

/** Convert a Zod schema into the dual runtime/JSON contract providers need. */
export function zodOutputContract<T>(
  name: string,
  description: string,
  schema: z.ZodType<T>,
): OutputContract<T> {
  return {
    name,
    description,
    jsonSchema: z.toJSONSchema(schema) as Record<string, unknown>,
    parse: (value) => schema.parse(value),
  };
}
