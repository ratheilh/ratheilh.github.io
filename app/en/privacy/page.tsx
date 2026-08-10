import type { Metadata } from "next";
import { PrivacyContent } from "../../privacy-content";
import { createPageMetadata, routes } from "../../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy policy",
  description: "Learn how ratheil.info protects your data and uses Google Analytics 4 only with your consent.",
  path: routes.privacy.en,
  locale: "en",
  languageAlternates: routes.privacy,
});

export default function PrivacyPolicy() {
  return <PrivacyContent language="en" />;
}
