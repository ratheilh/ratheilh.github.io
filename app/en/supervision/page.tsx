import type { Metadata } from "next";
import Supervision from "../../encadrements/page";
import { createPageMetadata, routes } from "../../seo";

export const metadata: Metadata = createPageMetadata({
  title: "PhD and student supervision",
  description: "Explore ongoing PhD research and selected master’s, engineering, and bachelor’s theses supervised by Vinasétan Ratheil Houndji.",
  path: routes.supervision.en,
  locale: "en",
  languageAlternates: routes.supervision,
});

export default Supervision.English;
