import { ArticleService } from "~/services/article.service";

export async function HomeLoader() {
  const articles = await ArticleService.getAll();
  return articles;
}
