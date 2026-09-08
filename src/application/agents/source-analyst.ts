/** Source analyst agent: tool ownership, normalization, and claim grounding. */
import type { ArticleSource } from "../ports/article-source.js";
import { sourceBriefSchema, type SourceBrief } from "../../domain/contracts.js";

/** Minimal behavior the workflow requires from a source analyst. */
export interface SourceAnalyst {
  run(articleUrl: string, signal?: AbortSignal): Promise<SourceBrief>;
}

/** Convert a cleaned article into an evidence-bearing model handoff. */
export class SourceAnalystAgent implements SourceAnalyst {
  /** Bind the analyst to one swappable article retrieval tool. */
  public constructor(private readonly source: ArticleSource) {}

  /** Extract claims deterministically so downstream generation stays grounded. */
  public async run(
    articleUrl: string,
    signal?: AbortSignal,
  ): Promise<SourceBrief> {
    const article = await this.source.load(articleUrl, signal);
    const claims = article.paragraphs.slice(0, 6).map((paragraph, index) => ({
      id: `claim-${index + 1}`,
      statement: paragraph,
      evidence: paragraph,
    }));

    return sourceBriefSchema.parse({
      title: article.title,
      canonicalUrl: article.canonicalUrl,
      summary: article.paragraphs[0],
      claims,
    });
  }
}
