/** Agent tests verify typed boundaries and keep prompt wording flexible. */
import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

import { EditorialReviewerAgent } from "../src/application/agents/editorial-reviewer.js";
import { LinkedInWriterAgent } from "../src/application/agents/linkedin-writer.js";
import { SourceAnalystAgent } from "../src/application/agents/source-analyst.js";
import { FixtureArticleSource } from "../src/infrastructure/article/fixture-article-source.js";
import { ScriptedAiProvider } from "./helpers.js";

describe("workflow agents", () => {
  it("builds a grounded source brief from an article tool", async () => {
    const html = await readFile(
      new URL("./fixtures/article.html", import.meta.url),
      "utf8",
    );
    const agent = new SourceAnalystAgent(new FixtureArticleSource(html));

    const brief = await agent.run(
      "https://prommer.net/en/tech/ai-is-the-new-os/",
    );

    expect(brief.claims[0]?.id).toBe("claim-1");
    expect(brief.claims[0]?.evidence).toContain("operating layer");
    expect(brief.canonicalUrl).toBe(
      "https://prommer.net/en/tech/ai-is-the-new-os/",
    );
  });

  it("hands only the source brief to the LinkedIn writer", async () => {
    const provider = new ScriptedAiProvider([
      {
        text: "A grounded post\n\nhttps://prommer.net/article",
        sourceUrl: "https://prommer.net/article",
        hashtags: ["AgenticAI"],
        referencedClaimIds: ["claim-1"],
      },
    ]);
    const writer = new LinkedInWriterAgent(provider);
    const sourceBrief = {
      title: "Article",
      canonicalUrl: "https://prommer.net/article",
      summary: "A summary",
      claims: [{ id: "claim-1", statement: "Claim", evidence: "Evidence" }],
    };

    const draft = await writer.run({ sourceBrief, audience: "AI operators" });

    expect(draft.sourceUrl).toBe(sourceBrief.canonicalUrl);
    expect(provider.requests[0]?.operation).toBe("draft-linkedin-post");
    expect(provider.requests[0]?.input).toContain('"claims"');
    expect(provider.requests[0]?.input).not.toContain("<article>");
  });

  it("returns an actionable independent review decision", async () => {
    const provider = new ScriptedAiProvider([
      {
        approved: false,
        issues: ["The opening is too vague."],
        revisionInstructions: ["Open with the article thesis."],
      },
    ]);
    const reviewer = new EditorialReviewerAgent(provider);

    const decision = await reviewer.run({
      sourceBrief: {
        title: "Article",
        canonicalUrl: "https://prommer.net/article",
        summary: "A summary",
        claims: [{ id: "claim-1", statement: "Claim", evidence: "Evidence" }],
      },
      draft: {
        text: "A draft https://prommer.net/article",
        sourceUrl: "https://prommer.net/article",
        hashtags: ["AI"],
        referencedClaimIds: ["claim-1"],
      },
    });

    expect(decision.approved).toBe(false);
    expect(decision.revisionInstructions[0]).toContain("thesis");
    expect(provider.requests[0]?.operation).toBe("review-linkedin-post");
  });
});
