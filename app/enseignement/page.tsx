import { TeachingContent } from "../teaching-content";

export const metadata = { title: "Enseignement", alternates: { canonical: "/enseignement/", languages: { fr: "/enseignement/", en: "/en/teaching/" } } };

export default function Enseignement() {
  return <TeachingContent language="fr" />;
}
