/** HTML extraction tests protect the article-content trust boundary. */
import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

import { extractArticle } from "../src/infrastructure/article/html-extractor.js";

describe("article extraction", () => {
  it("extracts canonical article content while excluding navigation", async () => {
    const html = await readFile(
      new URL("./fixtures/article.html", import.meta.url),
      "utf8",
    );

    const article = extractArticle(html, "https://prommer.net/fallback");

    expect(article.title).toBe("AI Is the New OS");
    expect(article.canonicalUrl).toBe(
      "https://prommer.net/en/tech/ai-is-the-new-os/",
    );
    expect(article.paragraphs).toHaveLength(3);
    expect(article.text).not.toContain("Home About Contact");
    expect(article.text).not.toContain("Copyright");
  });

  it("keeps the requested source when canonical metadata leaves prommer.net", () => {
    const article = extractArticle(
      `<html><head><link rel="canonical" href="https://publisher.example/original" /></head>
       <body><article><h1>Republished article</h1><p>Grounded paragraph.</p></article></body></html>`,
      "https://prommer.net/en/tech/republished/",
    );

    expect(article.canonicalUrl).toBe(
      "https://prommer.net/en/tech/republished/",
    );
  });
});
