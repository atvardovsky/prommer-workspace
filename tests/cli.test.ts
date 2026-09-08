/** The CLI integration test proves a credential-free, end-to-end POC run. */
import { mkdtemp, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { runCli } from "../src/cli.js";

describe("CLI", () => {
  it("runs the offline workflow and prints artifact paths", async () => {
    const directory = await mkdtemp(join(tmpdir(), "prommer-cli-"));
    const fixture = new URL("./fixtures/article.html", import.meta.url)
      .pathname;
    const lines: string[] = [];

    const exitCode = await runCli(["--fixture", fixture, "--out", directory], {
      writeLine: (line) => lines.push(line),
      environment: { AI_PROVIDER: "demo" },
    });

    expect(exitCode).toBe(0);
    expect(lines.join("\n")).toContain("workflow.md");
    const markdown = await readFile(join(directory, "workflow.md"), "utf8");
    expect(markdown).toContain("AI Is the New OS");
    expect(markdown).toContain("Status: APPROVED");
  });
});
