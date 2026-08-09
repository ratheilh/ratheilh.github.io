import type { Metadata } from "next";
import { TeachingContent } from "../../teaching-content";

export const metadata: Metadata = { title: "Teaching", alternates: { canonical: "/en/teaching/", languages: { fr: "/enseignement/", en: "/en/teaching/" } } };

export default function Teaching() {
  return <TeachingContent language="en" />;
}
