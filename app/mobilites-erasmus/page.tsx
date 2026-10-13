import type { Metadata } from "next";
import { ErasmusContent } from "../erasmus-content";
import { createPageMetadata, routes } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Mobilités Erasmus à l’UCLouvain",
  description: "Appel à candidatures pour les étudiants de master de l’IFRI : trois mobilités Erasmus de trois mois à l’UCLouvain, financées sur la période 2026–2029.",
  path: routes.erasmus.fr,
  locale: "fr",
  languageAlternates: routes.erasmus,
});

export default function MobilitesErasmus() {
  return <ErasmusContent language="fr" />;
}
