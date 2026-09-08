/** Runtime-validated values passed between workflow stages. */
import { z } from "zod";

/** One article claim with the exact evidence that grounds it. */
export const groundedClaimSchema = z.object({
  id: z.string().min(1),
  statement: z.string().min(1),
  evidence: z.string().min(1),
});

/** A compact, evidence-bearing representation of a source article. */
export const sourceBriefSchema = z.object({
  title: z.string().min(1),
  canonicalUrl: z.string().url(),
  summary: z.string().min(1),
  claims: z.array(groundedClaimSchema).min(1),
});

/** The writer's output, including the claims it intentionally reused. */
export const linkedinDraftSchema = z.object({
  text: z.string().min(1).max(3_000),
  sourceUrl: z.string().url(),
  hashtags: z.array(z.string().regex(/^[A-Za-z0-9]+$/)).max(5),
  referencedClaimIds: z.array(z.string().min(1)).min(1),
});

/** The independent reviewer decision supplied to the workflow controller. */
export const reviewDecisionSchema = z
  .object({
    approved: z.boolean(),
    issues: z.array(z.string().min(1)),
    revisionInstructions: z.array(z.string().min(1)),
  })
  .superRefine((decision, context) => {
    // A rejected draft must provide actionable feedback for the bounded retry.
    if (!decision.approved && decision.revisionInstructions.length === 0) {
      context.addIssue({
        code: "custom",
        message: "Rejected reviews require revision instructions.",
        path: ["revisionInstructions"],
      });
    }
  });

/** Inputs supplied by the operator at the start of a workflow run. */
export const workflowInputSchema = z.object({
  articleUrl: z.string().url(),
  audience: z.string().min(1),
  angle: z.string().min(1).optional(),
});

/** A trace entry makes agent handoffs inspectable without storing raw prompts. */
export const traceEventSchema = z.object({
  step: z.enum(["source-analysis", "linkedin-writing", "editorial-review"]),
  attempt: z.number().int().positive(),
  status: z.enum(["completed", "approved", "revision-requested"]),
  summary: z.string().min(1),
});

/** Inferred TypeScript type for an evidence-backed source brief. */
export type SourceBrief = z.infer<typeof sourceBriefSchema>;

/** Inferred TypeScript type for a proposed LinkedIn post. */
export type LinkedInDraft = z.infer<typeof linkedinDraftSchema>;

/** Inferred TypeScript type for an editorial decision. */
export type ReviewDecision = z.infer<typeof reviewDecisionSchema>;

/** Inferred TypeScript type for operator-supplied workflow inputs. */
export type WorkflowInput = z.infer<typeof workflowInputSchema>;

/** Inferred TypeScript type for a safe, compact execution trace. */
export type TraceEvent = z.infer<typeof traceEventSchema>;

/** The complete inspectable result of a workflow run. */
export interface WorkflowResult {
  readonly status: "approved" | "needs-human-review";
  readonly sourceBrief: SourceBrief;
  readonly draft: LinkedInDraft;
  readonly review: ReviewDecision;
  readonly revisionCount: number;
  readonly trace: readonly TraceEvent[];
}
