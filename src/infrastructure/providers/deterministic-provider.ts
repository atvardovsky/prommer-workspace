/** Credential-free workflow simulator for demos and local development. */
import type {
  AiProvider,
  AiProviderResult,
  StructuredGenerationRequest,
} from "../../application/ports/ai-provider.js";
import type { LinkedInDraft, SourceBrief } from "../../domain/contracts.js";

/** Expected writer payload understood by the deterministic simulator. */
interface WriterPayload {
  readonly sourceBrief: SourceBrief;
  readonly revisionInstructions?: readonly string[];
}

/** Expected reviewer payload understood by the deterministic simulator. */
interface ReviewerPayload {
  readonly sourceBrief: SourceBrief;
  readonly draft: LinkedInDraft;
}

/** Exercise real handoffs predictably; this is not a substitute for an LLM. */
export class DeterministicProvider implements AiProvider {
  public readonly id = "deterministic-simulator";

  /** Derive a repeatable structured response from each typed operation input. */
  public async generateStructured<T>(
    request: StructuredGenerationRequest<T>,
  ): Promise<AiProviderResult<T>> {
    const payload = JSON.parse(request.input) as
      WriterPayload | ReviewerPayload;
    const value =
      request.operation === "draft-linkedin-post"
        ? this.createDraft(payload as WriterPayload)
        : this.reviewDraft(payload as ReviewerPayload);
    return {
      value: request.output.parse(value),
      provider: this.id,
      model: "offline-rules-v1",
    };
  }

  /** Produce a compact draft grounded in the first three source claims. */
  private createDraft(payload: WriterPayload): LinkedInDraft {
    const claims = payload.sourceBrief.claims.slice(0, 3);
    const revisionNote = payload.revisionInstructions?.length
      ? `\n\nRevision applied: ${payload.revisionInstructions.join(" ")}`
      : "";
    const bullets = claims.map((claim) => `• ${claim.statement}`).join("\n");
    return {
      text: `${payload.sourceBrief.title}\n\n${payload.sourceBrief.summary}\n\n${bullets}${revisionNote}\n\nWhat workflow would you redesign first?\n\n${payload.sourceBrief.canonicalUrl}`,
      sourceUrl: payload.sourceBrief.canonicalUrl,
      hashtags: ["AgenticAI", "AIOperations"],
      referencedClaimIds: claims.map((claim) => claim.id),
    };
  }

  /** Apply deterministic grounding checks to prove the review branch offline. */
  private reviewDraft(payload: ReviewerPayload): {
    approved: boolean;
    issues: string[];
    revisionInstructions: string[];
  } {
    const knownClaims = new Set(
      payload.sourceBrief.claims.map((claim) => claim.id),
    );
    const issues: string[] = [];
    if (!payload.draft.text.includes(payload.sourceBrief.canonicalUrl)) {
      issues.push("The canonical source URL is missing from the post text.");
    }
    if (payload.draft.referencedClaimIds.some((id) => !knownClaims.has(id))) {
      issues.push("The draft references an unsupported claim.");
    }
    return {
      approved: issues.length === 0,
      issues,
      revisionInstructions: issues.map((issue) => `Fix: ${issue}`),
    };
  }
}
