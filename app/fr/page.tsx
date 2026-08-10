import type { Metadata } from "next";
import Home from "../page";
import { createPageMetadata, routes } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Enseignant-chercheur en intelligence artificielle",
  description: "Site académique de Vinasétan Ratheil Houndji, enseignant-chercheur en intelligence artificielle à l’Université d’Abomey-Calavi.",
  path: routes.home.fr,
  locale: "fr",
  languageAlternates: routes.home,
});

export default Home.French;
