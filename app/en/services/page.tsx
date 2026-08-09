import type { Metadata } from "next";
import { ServicesContent } from "../../services-content";

export const metadata: Metadata = { title: "Services", alternates: { canonical: "/en/services/", languages: { fr: "/services/", en: "/en/services/" } } };

export default function Services() {
  return <ServicesContent language="en" />;
}
