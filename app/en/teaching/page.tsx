import type { Metadata } from "next";
import { TeachingContent } from "../../teaching-content";
import { createPageMetadata, routes } from "../../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Teaching in artificial intelligence and optimization",
  description: "Explore Vinasétan Ratheil Houndji’s courses and teaching resources in artificial intelligence, optimization, algorithms, and software engineering.",
  path: routes.teaching.en,
  locale: "en",
  languageAlternates: routes.teaching,
});

export default function Teaching() {
  return <TeachingContent language="en" />;
}
