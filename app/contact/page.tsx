import { ContactContent } from "../contact-content";

export const metadata = { title: "CV & Contacts", alternates: { canonical: "/contact/", languages: { fr: "/contact/", en: "/en/contact/" } } };

export default function Contact() {
  return <ContactContent language="fr" />;
}
