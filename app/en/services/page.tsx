import type { Metadata } from "next";
import { ServicesContent } from "../../services-content";
import { createPageMetadata, routes } from "../../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Scientific service and responsibilities",
  description: "Explore Vinasétan Ratheil Houndji’s scientific responsibilities, academic expertise, and initiatives serving research communities and society.",
  path: routes.services.en,
  locale: "en",
  languageAlternates: routes.services,
});

export default function Services() {
  return <ServicesContent language="en" />;
}
