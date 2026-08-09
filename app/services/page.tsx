import { ServicesContent } from "../services-content";

export const metadata = { title: "Services", alternates: { canonical: "/services/", languages: { fr: "/services/", en: "/en/services/" } } };

export default function Services() {
  return <ServicesContent language="fr" />;
}
