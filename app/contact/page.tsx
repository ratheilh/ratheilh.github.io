import type { Metadata } from "next";
import { ContactContent } from "../contact-content";
import { createPageMetadata, routes } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "CV et contacts",
  description: "Consultez le curriculum vitæ et les coordonnées professionnelles de Vinasétan Ratheil Houndji pour une collaboration, un encadrement ou une conférence.",
  path: routes.contact.fr,
  locale: "fr",
  languageAlternates: routes.contact,
});

export default function Contact() {
  return <ContactContent language="fr" />;
}
