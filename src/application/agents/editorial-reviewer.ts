/** Independent editorial reviewer agent for the generate-validate handoff. */
import type { AiProvider } from "../ports/ai-provider.js";
import { zodOutputContract } from "../ports/ai-provider.js";
import {
  reviewDecisionSchema,
  type LinkedInDraft,
  type ReviewDecision,
  type SourceBrief,
} from "../../domain/contracts.js";
import { EDITORIAL_REVIEWER_INSTRUCTIONS } from "../../prompts/editorial-reviewer.js";

/** Typed evidence and draft supplied to the reviewer. */
export interface EditorialReviewInput {
  readonly sourceBrief: SourceBrief;
  readonly draft: LinkedInDraft;
}

const reviewOutput = zodOutputContract(
  "editorial_review",
  "Approval or a structured request for revision.",
  reviewDecisionSchema,
);

/** Review a generated draft without mutating or rewriting it. */
export class EditorialReviewerAgent {
  /** Bind the reviewer to a provider through the common port. */
  public constructor(private readonly provider: AiProvider) {}

  /** Return a validated editorial decision for one draft. */
  public async run(
    input: EditorialReviewInput,
    signal?: AbortSignal,
  ): Promise<ReviewDecision> {
    const response = await this.provider.generateStructured({
      operation: "review-linkedin-post",
      instructions: EDITORIAL_REVIEWER_INSTRUCTIONS,
      input: JSON.stringify(input),
      output: reviewOutput,
      ...(signal ? { signal } : {}),
    });
    return response.value;
  }
}
