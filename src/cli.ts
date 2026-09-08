/** CLI composition root for fixture demos and live provider-backed runs. */
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

import { EditorialReviewerAgent } from "./application/agents/editorial-reviewer.js";
import { LinkedInWriterAgent } from "./application/agents/linkedin-writer.js";
import { SourceAnalystAgent } from "./application/agents/source-analyst.js";
import { LinkedInWorkflow } from "./application/workflow/linkedin-workflow.js";
import { FixtureArticleSource } from "./infrastructure/article/fixture-article-source.js";
import { HttpArticleSource } from "./infrastructure/article/http-article-source.js";
import { FilesystemArtifactPublisher } from "./infrastructure/publishing/filesystem-artifact-publisher.js";
import { createAiProvider } from "./infrastructure/providers/provider-factory.js";
import type { ProviderEnvironment } from "./infrastructure/providers/provider-factory.js";

/** Injectable CLI output used by tests without intercepting global console state. */
export interface CliIo {
  readonly writeLine: (line: string) => void;
  readonly environment?: ProviderEnvironment;
}

/** Parsed operator options with conservative POC defaults. */
interface CliOptions {
  readonly fixture?: string;
  readonly articleUrl?: string;
  readonly outputDirectory: string;
  readonly audience: string;
  readonly angle?: string;
}

/** Parse the intentionally small flag surface without adding a CLI framework. */
function parseOptions(args: readonly string[]): CliOptions {
  const values = new Map<string, string>();
  for (let index = 0; index < args.length; index += 2) {
    const flag = args[index];
    const value = args[index + 1];
    if (!flag?.startsWith("--") || !value) {
      throw new Error(`Expected --flag value near ${flag ?? "end of input"}.`);
    }
    values.set(flag, value);
  }
  const fixture = values.get("--fixture");
  const articleUrl = values.get("--url");
  const angle = values.get("--angle");
  if (!fixture && !articleUrl) {
    throw new Error(
      "Supply either --fixture <html-file> or --url <prommer.net-url>.",
    );
  }
  return {
    ...(fixture ? { fixture } : {}),
    ...(articleUrl ? { articleUrl } : {}),
    outputDirectory: values.get("--out") ?? "artifacts/latest",
    audience: values.get("--audience") ?? "founders and AI-native operators",
    ...(angle ? { angle } : {}),
  };
}

/** Run one workflow and return a process-compatible exit code. */
export async function runCli(
  args: readonly string[],
  io: CliIo = { writeLine: (line) => console.log(line) },
): Promise<number> {
  try {
    const options = parseOptions(args);
    const source = options.fixture
      ? new FixtureArticleSource(await readFile(options.fixture, "utf8"))
      : new HttpArticleSource();
    const articleUrl =
      options.articleUrl ?? "https://prommer.net/en/tech/ai-is-the-new-os/";
    const provider = createAiProvider(io.environment ?? process.env);
    const workflow = new LinkedInWorkflow(
      new SourceAnalystAgent(source),
      new LinkedInWriterAgent(provider),
      new EditorialReviewerAgent(provider),
    );
    const result = await workflow.run({
      articleUrl,
      audience: options.audience,
      ...(options.angle ? { angle: options.angle } : {}),
    });
    const artifacts = await new FilesystemArtifactPublisher().publish(
      result,
      options.outputDirectory,
    );
    io.writeLine(`Status: ${result.status}`);
    io.writeLine(`Markdown: ${artifacts.markdownPath}`);
    io.writeLine(`JSON: ${artifacts.jsonPath}`);
    return result.status === "approved" ? 0 : 2;
  } catch (cause) {
    io.writeLine(
      `Error: ${cause instanceof Error ? cause.message : String(cause)}`,
    );
    return 1;
  }
}

// Execute only when this module is the process entry point, not when tests import it.
const entryPath = process.argv[1];
if (entryPath && import.meta.url === pathToFileURL(entryPath).href) {
  process.exitCode = await runCli(process.argv.slice(2));
}
