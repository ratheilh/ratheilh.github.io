import type { Metadata } from "next";
import { ServicesContent } from "../services-content";
import { createPageMetadata, routes } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services et responsabilités scientifiques",
  description: "Découvrez les responsabilités scientifiques, expertises académiques et initiatives de Vinasétan Ratheil Houndji au service de la recherche et de la société.",
  path: routes.services.fr,
  locale: "fr",
  languageAlternates: routes.services,
});

export default function Services() {
  return <ServicesContent language="fr" />;
}
