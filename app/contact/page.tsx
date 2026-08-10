import { ContactContent } from "../contact-content";

export const metadata = { title: "CV & contacts", alternates: { canonical: "/contact/", languages: { fr: "/contact/", en: "/en/contact/" } } };

export default function Contact() {
  return <ContactContent language="fr" />;
}
