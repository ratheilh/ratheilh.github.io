import type { Metadata } from "next";
import { TeachingContent } from "../teaching-content";
import { createPageMetadata, routes } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Enseignements en intelligence artificielle et optimisation",
  description: "Découvrez les enseignements et ressources pédagogiques de Vinasétan Ratheil Houndji en intelligence artificielle, optimisation et génie logiciel.",
  path: routes.teaching.fr,
  locale: "fr",
  languageAlternates: routes.teaching,
});

export default function Enseignement() {
  return <TeachingContent language="fr" />;
}
