/** Deterministic HTML-to-article extraction with no model dependency. */
import * as cheerio from "cheerio";

import type { ArticleDocument } from "../../application/ports/article-source.js";

/** Normalize human-readable HTML text while preserving sentence boundaries. */
function normalizeText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

/** Extract the narrow content required by downstream agents. */
export function extractArticle(
  html: string,
  fallbackUrl: string,
): ArticleDocument {
  const $ = cheerio.load(html);
  const container = $("article").first().length
    ? $("article").first()
    : $("main").first();
  const paragraphs = container
    .find("p")
    .toArray()
    .map((element) => normalizeText($(element).text()))
    .filter(Boolean);
  const title =
    normalizeText(container.find("h1").first().text()) ||
    normalizeText($("title").first().text()).replace(/\s*\|.*$/, "");
  const canonicalMetadata = $("link[rel='canonical']").attr("href");

  if (!title || paragraphs.length === 0) {
    throw new Error("The source page does not contain an extractable article.");
  }

  const requestedUrl = new URL(fallbackUrl);
  const canonicalUrl = new URL(canonicalMetadata ?? fallbackUrl, fallbackUrl);
  // A republished article may canonicalize to another site; this product must
  // retain the prommer.net page selected by the operator as its source.
  const validatedUrl =
    canonicalUrl.origin === requestedUrl.origin
      ? canonicalUrl.toString()
      : requestedUrl.toString();
  return {
    title,
    canonicalUrl: validatedUrl,
    text: paragraphs.join("\n\n"),
    paragraphs,
  };
}
