/** Filesystem exporter for transparent operator review and later publication. */
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import type { WorkflowResult } from "../../domain/contracts.js";

/** Paths produced by one filesystem publication operation. */
export interface PublishedArtifacts {
  readonly jsonPath: string;
  readonly markdownPath: string;
}

/** Write a machine-readable trace and a human-readable approval document. */
export class FilesystemArtifactPublisher {
  /** Export artifacts locally; this class never posts to LinkedIn. */
  public async publish(
    result: WorkflowResult,
    outputDirectory: string,
  ): Promise<PublishedArtifacts> {
    await mkdir(outputDirectory, { recursive: true });
    const jsonPath = join(outputDirectory, "workflow.json");
    const markdownPath = join(outputDirectory, "workflow.md");
    const traceRows = result.trace
      .map(
        (event) =>
          `| ${event.step} | ${event.attempt} | ${event.status} | ${event.summary.replaceAll("|", "\\|")} |`,
      )
      .join("\n");
    const markdown = `# ${result.sourceBrief.title} — LinkedIn draft

Status: ${result.status.toUpperCase()}

> Human approval required before posting to LinkedIn.

## Final post

${result.draft.text}

${result.draft.hashtags.map((tag) => `#${tag}`).join(" ")}

## Source

- [${result.sourceBrief.title}](${result.sourceBrief.canonicalUrl})
- Claims referenced: ${result.draft.referencedClaimIds.join(", ")}
- Revisions: ${result.revisionCount}

## Workflow trace

| Step | Attempt | Status | Handoff summary |
| --- | ---: | --- | --- |
${traceRows}
`;

    // Persist only normalized contracts and summaries, never provider headers or prompts.
    await Promise.all([
      writeFile(jsonPath, `${JSON.stringify(result, null, 2)}\n`, "utf8"),
      writeFile(markdownPath, markdown, "utf8"),
    ]);
    return { jsonPath, markdownPath };
  }
}
