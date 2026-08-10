import type { Metadata } from "next";
import Publications from "../../publications/page";
import { createPageMetadata, routes } from "../../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Scientific publications",
  description: "Browse Vinasétan Ratheil Houndji’s journal articles, conference papers, presentations, and datasets in artificial intelligence and optimization.",
  path: routes.publications.en,
  locale: "en",
  languageAlternates: routes.publications,
});

export default Publications.English;
