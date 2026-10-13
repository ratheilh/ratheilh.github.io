import type { Metadata } from "next";
import { ErasmusContent } from "../../erasmus-content";
import { createPageMetadata, routes } from "../../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Erasmus mobility at UCLouvain",
  description: "Call for applications for IFRI master’s students: three Erasmus mobility stays at UCLouvain, each lasting three months, funded for the 2026–2029 period.",
  path: routes.erasmus.en,
  locale: "en",
  languageAlternates: routes.erasmus,
});

export default function ErasmusMobility() {
  return <ErasmusContent language="en" />;
}
