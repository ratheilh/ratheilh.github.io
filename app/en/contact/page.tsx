import type { Metadata } from "next";
import { ContactContent } from "../../contact-content";

export const metadata: Metadata = { title: "CV & contact", alternates: { canonical: "/en/contact/", languages: { fr: "/contact/", en: "/en/contact/" } } };

export default function Contact() {
  return <ContactContent language="en" />;
}
