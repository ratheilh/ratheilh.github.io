import type { Metadata } from "next";
import { ResearchContent } from "../../research-content";
import { createPageMetadata, routes } from "../../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Research in artificial intelligence and optimization",
  description: "Explore Vinasétan Ratheil Houndji’s research areas, projects, and prototypes in artificial intelligence, machine learning, and optimization.",
  path: routes.research.en,
  locale: "en",
  languageAlternates: routes.research,
});

export default function Research() {
  return <ResearchContent language="en" />;
}
