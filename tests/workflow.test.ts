/** Orchestrator tests prove order, handoffs, and the bounded-revision invariant. */
import { describe, expect, it } from "vitest";

import type { SourceBrief } from "../src/domain/contracts.js";
import { LinkedInWorkflow } from "../src/application/workflow/linkedin-workflow.js";
import { LinkedInWriterAgent } from "../src/application/agents/linkedin-writer.js";
import { EditorialReviewerAgent } from "../src/application/agents/editorial-reviewer.js";
import { ScriptedAiProvider } from "./helpers.js";

const sourceBrief: SourceBrief = {
  title: "Article",
  canonicalUrl: "https://prommer.net/article",
  summary: "A summary",
  claims: [{ id: "claim-1", statement: "Claim", evidence: "Evidence" }],
};

const firstDraft = {
  text: "First draft https://prommer.net/article",
  sourceUrl: "https://prommer.net/article",
  hashtags: ["AI"],
  referencedClaimIds: ["claim-1"],
};

const revisedDraft = {
  ...firstDraft,
  text: "Revised draft https://prommer.net/article",
};

/** A minimal source-agent stub keeps workflow tests focused on orchestration. */
const sourceAgent = { run: async () => sourceBrief };

describe("LinkedIn workflow", () => {
  it("approves a first draft with exact agent order", async () => {
    const provider = new ScriptedAiProvider([
      firstDraft,
      { approved: true, issues: [], revisionInstructions: [] },
    ]);
    const workflow = new LinkedInWorkflow(
      sourceAgent,
      new LinkedInWriterAgent(provider),
      new EditorialReviewerAgent(provider),
    );

    const result = await workflow.run({
      articleUrl: sourceBrief.canonicalUrl,
      audience: "AI operators",
    });

    expect(provider.requests.map((request) => request.operation)).toEqual([
      "draft-linkedin-post",
      "review-linkedin-post",
    ]);
    expect(result.status).toBe("approved");
    expect(result.revisionCount).toBe(0);
  });

  it("passes review feedback into exactly one revision", async () => {
    const provider = new ScriptedAiProvider([
      firstDraft,
      {
        approved: false,
        issues: ["Weak opening"],
        revisionInstructions: ["Strengthen the opening"],
      },
      revisedDraft,
      { approved: true, issues: [], revisionInstructions: [] },
    ]);
    const workflow = new LinkedInWorkflow(
      sourceAgent,
      new LinkedInWriterAgent(provider),
      new EditorialReviewerAgent(provider),
    );

    const result = await workflow.run({
      articleUrl: sourceBrief.canonicalUrl,
      audience: "AI operators",
    });

    expect(result.draft.text).toContain("Revised");
    expect(result.revisionCount).toBe(1);
    expect(provider.requests[2]?.input).toContain("Strengthen the opening");
  });

  it("stops for human review after the retry limit", async () => {
    const rejection = {
      approved: false,
      issues: ["Still too generic"],
      revisionInstructions: ["Add a concrete point"],
    };
    const provider = new ScriptedAiProvider([
      firstDraft,
      rejection,
      revisedDraft,
      rejection,
    ]);
    const workflow = new LinkedInWorkflow(
      sourceAgent,
      new LinkedInWriterAgent(provider),
      new EditorialReviewerAgent(provider),
    );

    const result = await workflow.run({
      articleUrl: sourceBrief.canonicalUrl,
      audience: "AI operators",
    });

    expect(result.status).toBe("needs-human-review");
    expect(result.revisionCount).toBe(1);
    expect(provider.requests).toHaveLength(4);
  });
});
