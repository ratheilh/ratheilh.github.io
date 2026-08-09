import { ResearchContent } from "../research-content";

export const metadata = { title: "Recherche", alternates: { canonical: "/recherche/", languages: { fr: "/recherche/", en: "/en/research/" } } };

export default function Recherche() {
  return <ResearchContent language="fr" />;
}
