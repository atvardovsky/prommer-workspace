/** Local article adapter used by deterministic tests and the offline demo. */
import type {
  ArticleDocument,
  ArticleSource,
} from "../../application/ports/article-source.js";
import { extractArticle } from "./html-extractor.js";

/** Read an in-memory HTML fixture through the production extraction path. */
export class FixtureArticleSource implements ArticleSource {
  /** Create a source around immutable fixture HTML. */
  public constructor(private readonly html: string) {}

  /** Extract the fixture using the requested URL as its metadata fallback. */
  public async load(articleUrl: string): Promise<ArticleDocument> {
    return extractArticle(this.html, articleUrl);
  }
}
