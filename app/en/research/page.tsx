import type { Metadata } from "next";
import { ResearchContent } from "../../research-content";

export const metadata: Metadata = { title: "Research", alternates: { canonical: "/en/research/", languages: { fr: "/recherche/", en: "/en/research/" } } };

export default function Research() {
  return <ResearchContent language="en" />;
}
