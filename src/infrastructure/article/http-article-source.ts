/** Production article tool for narrowly scoped prommer.net HTTP reads. */
import type {
  ArticleDocument,
  ArticleSource,
} from "../../application/ports/article-source.js";
import { extractArticle } from "./html-extractor.js";

/** Options controlling network behavior without leaking fetch into the app. */
export interface HttpArticleSourceOptions {
  readonly fetchImpl?: typeof fetch;
  readonly timeoutMs?: number;
  readonly maxBytes?: number;
}

/** Fetch and extract public prommer.net articles with bounded resource use. */
export class HttpArticleSource implements ArticleSource {
  private readonly fetchImpl: typeof fetch;
  private readonly timeoutMs: number;
  private readonly maxBytes: number;

  /** Create an HTTP source with injectable transport for deterministic tests. */
  public constructor(options: HttpArticleSourceOptions = {}) {
    this.fetchImpl = options.fetchImpl ?? globalThis.fetch;
    this.timeoutMs = options.timeoutMs ?? 10_000;
    this.maxBytes = options.maxBytes ?? 1_000_000;
  }

  /** Load one HTTPS article while enforcing the product's source boundary. */
  public async load(
    articleUrl: string,
    signal?: AbortSignal,
  ): Promise<ArticleDocument> {
    const url = new URL(articleUrl);
    if (
      url.protocol !== "https:" ||
      (url.hostname !== "prommer.net" && url.hostname !== "www.prommer.net")
    ) {
      throw new Error("Article URL must be an HTTPS prommer.net URL.");
    }

    const timeoutSignal = AbortSignal.timeout(this.timeoutMs);
    const combinedSignal = signal
      ? AbortSignal.any([signal, timeoutSignal])
      : timeoutSignal;
    const response = await this.fetchImpl(url, {
      headers: { "user-agent": "prommer-linkedin-workflow/0.1" },
      redirect: "follow",
      signal: combinedSignal,
    });

    if (!response.ok) {
      throw new Error(`Article fetch failed with HTTP ${response.status}.`);
    }
    const finalUrl = new URL(response.url || url.toString());
    if (
      finalUrl.protocol !== "https:" ||
      (finalUrl.hostname !== "prommer.net" &&
        finalUrl.hostname !== "www.prommer.net")
    ) {
      throw new Error("Article redirect left the permitted prommer.net host.");
    }

    const html = await response.text();
    if (Buffer.byteLength(html, "utf8") > this.maxBytes) {
      throw new Error("Article exceeds the configured size limit.");
    }
    return extractArticle(html, finalUrl.toString());
  }
}
