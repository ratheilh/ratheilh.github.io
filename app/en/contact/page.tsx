import type { Metadata } from "next";
import { ContactContent } from "../../contact-content";
import { createPageMetadata, routes } from "../../seo";

export const metadata: Metadata = createPageMetadata({
  title: "CV and contact",
  description: "View Vinasétan Ratheil Houndji’s curriculum vitae and professional contact details for research collaborations, supervision, and speaking engagements.",
  path: routes.contact.en,
  locale: "en",
  languageAlternates: routes.contact,
});

export default function Contact() {
  return <ContactContent language="en" />;
}
