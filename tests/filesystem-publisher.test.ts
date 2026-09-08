/** Filesystem publication tests verify the inspectable human-review artifact. */
import { mkdtemp, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { FilesystemArtifactPublisher } from "../src/infrastructure/publishing/filesystem-artifact-publisher.js";

describe("filesystem artifact publisher", () => {
  it("writes readable Markdown and parseable JSON", async () => {
    const directory = await mkdtemp(join(tmpdir(), "prommer-workflow-"));
    const publisher = new FilesystemArtifactPublisher();
    const result = {
      status: "approved" as const,
      sourceBrief: {
        title: "Article",
        canonicalUrl: "https://prommer.net/article",
        summary: "Summary",
        claims: [{ id: "claim-1", statement: "Claim", evidence: "Evidence" }],
      },
      draft: {
        text: "Final post https://prommer.net/article",
        sourceUrl: "https://prommer.net/article",
        hashtags: ["AI"],
        referencedClaimIds: ["claim-1"],
      },
      review: { approved: true, issues: [], revisionInstructions: [] },
      revisionCount: 0,
      trace: [
        {
          step: "source-analysis" as const,
          attempt: 1,
          status: "completed" as const,
          summary: "Extracted article",
        },
      ],
    };

    const artifacts = await publisher.publish(result, directory);

    const json = JSON.parse(await readFile(artifacts.jsonPath, "utf8"));
    const markdown = await readFile(artifacts.markdownPath, "utf8");
    expect(json.status).toBe("approved");
    expect(markdown).toContain("Final post");
    expect(markdown).toContain("https://prommer.net/article");
    expect(markdown).toContain("Human approval required");
  });
});
