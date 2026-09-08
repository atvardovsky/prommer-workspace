/** Explicit workflow controller for typed handoffs and bounded revision. */
import type { EditorialReviewerAgent } from "../agents/editorial-reviewer.js";
import type { LinkedInWriterAgent } from "../agents/linkedin-writer.js";
import type { SourceAnalyst } from "../agents/source-analyst.js";
import {
  workflowInputSchema,
  type TraceEvent,
  type WorkflowInput,
  type WorkflowResult,
} from "../../domain/contracts.js";

/** Coordinate source analysis, writing, review, and at most one revision. */
export class LinkedInWorkflow {
  /** Compose agents and make the retry limit visible at the control boundary. */
  public constructor(
    private readonly sourceAnalyst: SourceAnalyst,
    private readonly writer: LinkedInWriterAgent,
    private readonly reviewer: EditorialReviewerAgent,
    private readonly maxRevisions = 1,
  ) {
    if (!Number.isInteger(maxRevisions) || maxRevisions < 0) {
      throw new Error("maxRevisions must be a non-negative integer.");
    }
  }

  /** Run the full multi-agent path and stop before consequential publication. */
  public async run(
    rawInput: WorkflowInput,
    signal?: AbortSignal,
  ): Promise<WorkflowResult> {
    const input = workflowInputSchema.parse(rawInput);
    const trace: TraceEvent[] = [];
    const sourceBrief = await this.sourceAnalyst.run(input.articleUrl, signal);
    trace.push({
      step: "source-analysis",
      attempt: 1,
      status: "completed",
      summary: `Grounded ${sourceBrief.claims.length} claims from ${sourceBrief.title}.`,
    });

    let draft = await this.writer.run(
      {
        sourceBrief,
        audience: input.audience,
        ...(input.angle ? { angle: input.angle } : {}),
      },
      signal,
    );
    trace.push({
      step: "linkedin-writing",
      attempt: 1,
      status: "completed",
      summary: "Created the initial LinkedIn draft.",
    });
    let review = await this.reviewer.run({ sourceBrief, draft }, signal);
    trace.push({
      step: "editorial-review",
      attempt: 1,
      status: review.approved ? "approved" : "revision-requested",
      summary: review.approved
        ? "Reviewer approved the initial draft."
        : review.issues.join("; "),
    });

    let revisionCount = 0;
    // The controller, not the model, owns retry termination.
    while (!review.approved && revisionCount < this.maxRevisions) {
      revisionCount += 1;
      draft = await this.writer.run(
        {
          sourceBrief,
          audience: input.audience,
          ...(input.angle ? { angle: input.angle } : {}),
          revisionInstructions: review.revisionInstructions,
        },
        signal,
      );
      trace.push({
        step: "linkedin-writing",
        attempt: revisionCount + 1,
        status: "completed",
        summary: "Revised the draft using reviewer feedback.",
      });
      review = await this.reviewer.run({ sourceBrief, draft }, signal);
      trace.push({
        step: "editorial-review",
        attempt: revisionCount + 1,
        status: review.approved ? "approved" : "revision-requested",
        summary: review.approved
          ? "Reviewer approved the revised draft."
          : review.issues.join("; "),
      });
    }

    return {
      status: review.approved ? "approved" : "needs-human-review",
      sourceBrief,
      draft,
      review,
      revisionCount,
      trace,
    };
  }
}
