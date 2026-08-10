import type { Metadata } from "next";
import { ResearchContent } from "../research-content";
import { createPageMetadata, routes } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Recherche en intelligence artificielle et optimisation",
  description: "Découvrez les axes, projets et prototypes de recherche de Vinasétan Ratheil Houndji en intelligence artificielle, apprentissage automatique et optimisation.",
  path: routes.research.fr,
  locale: "fr",
  languageAlternates: routes.research,
});

export default function Recherche() {
  return <ResearchContent language="fr" />;
}
