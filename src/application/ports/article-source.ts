/** Boundary for obtaining already-cleaned article content. */

/** Deterministic content returned by an article source adapter. */
export interface ArticleDocument {
  readonly title: string;
  readonly canonicalUrl: string;
  readonly text: string;
  readonly paragraphs: readonly string[];
}

/** Tool contract owned by the source analyst agent. */
export interface ArticleSource {
  load(articleUrl: string, signal?: AbortSignal): Promise<ArticleDocument>;
}
