/** Contract tests define the handoff boundaries before agent implementation. */
import { describe, expect, it } from "vitest";

import {
  linkedinDraftSchema,
  reviewDecisionSchema,
  sourceBriefSchema,
} from "../src/domain/contracts.js";

describe("agent handoff contracts", () => {
  it("accepts complete source, draft, and review values", () => {
    expect(
      sourceBriefSchema.parse({
        title: "AI Is the New OS",
        canonicalUrl: "https://prommer.net/en/tech/ai-is-the-new-os/",
        summary: "AI changes the operating model of knowledge work.",
        claims: [
          {
            id: "claim-1",
            statement: "AI is becoming an operating layer for organizations.",
            evidence:
              "The article describes AI as an organizational operating system.",
          },
        ],
      }),
    ).toBeTruthy();

    expect(
      linkedinDraftSchema.parse({
        text: "AI is becoming the operating layer for modern organizations.\n\nhttps://prommer.net/en/tech/ai-is-the-new-os/",
        sourceUrl: "https://prommer.net/en/tech/ai-is-the-new-os/",
        hashtags: ["AgenticAI"],
        referencedClaimIds: ["claim-1"],
      }),
    ).toBeTruthy();

    expect(
      reviewDecisionSchema.parse({
        approved: true,
        issues: [],
        revisionInstructions: [],
      }),
    ).toBeTruthy();
  });

  it("rejects invalid values at every handoff", () => {
    expect(() => sourceBriefSchema.parse({ title: "Only a title" })).toThrow();
    expect(() =>
      linkedinDraftSchema.parse({ text: "No source link" }),
    ).toThrow();
    expect(() =>
      reviewDecisionSchema.parse({ approved: false, issues: [] }),
    ).toThrow();
  });
});
