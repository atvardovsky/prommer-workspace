/** AI-backed writer agent with deterministic post-generation safeguards. */
import type { AiProvider } from "../ports/ai-provider.js";
import { zodOutputContract } from "../ports/ai-provider.js";
import {
  linkedinDraftSchema,
  type LinkedInDraft,
  type SourceBrief,
} from "../../domain/contracts.js";
import { ProviderError } from "../../domain/errors.js";
import { LINKEDIN_WRITER_INSTRUCTIONS } from "../../prompts/linkedin-writer.js";

/** Typed input accepted by the LinkedIn writer. */
export interface LinkedInWriterInput {
  readonly sourceBrief: SourceBrief;
  readonly audience: string;
  readonly angle?: string;
  readonly revisionInstructions?: readonly string[];
}

const draftOutput = zodOutputContract(
  "linkedin_draft",
  "A grounded LinkedIn post draft with source and claim references.",
  linkedinDraftSchema,
);

/** Generate a post through any provider that implements the shared contract. */
export class LinkedInWriterAgent {
  /** Bind the writer to a provider without exposing vendor types. */
  public constructor(private readonly provider: AiProvider) {}

  /** Draft or revise a LinkedIn post from the compact source handoff. */
  public async run(
    input: LinkedInWriterInput,
    signal?: AbortSignal,
  ): Promise<LinkedInDraft> {
    const payload = {
      sourceBrief: input.sourceBrief,
      audience: input.audience,
      ...(input.angle ? { angle: input.angle } : {}),
      ...(input.revisionInstructions
        ? { revisionInstructions: input.revisionInstructions }
        : {}),
    };
    const response = await this.provider.generateStructured({
      operation: "draft-linkedin-post",
      instructions: LINKEDIN_WRITER_INSTRUCTIONS,
      input: JSON.stringify(payload),
      output: draftOutput,
      ...(signal ? { signal } : {}),
    });
    const draft = response.value;
    const knownClaimIds = new Set(
      input.sourceBrief.claims.map((claim) => claim.id),
    );

    // Model output is never trusted to preserve grounding merely because it parsed.
    if (
      draft.sourceUrl !== input.sourceBrief.canonicalUrl ||
      !draft.text.includes(input.sourceBrief.canonicalUrl) ||
      draft.referencedClaimIds.some((id) => !knownClaimIds.has(id))
    ) {
      throw new ProviderError(
        "invalid-output",
        "The generated draft failed deterministic grounding checks.",
      );
    }
    return draft;
  }
}
