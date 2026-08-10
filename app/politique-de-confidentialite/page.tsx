import type { Metadata } from "next";
import { PrivacyContent } from "../privacy-content";
import { createPageMetadata, routes } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Politique de confidentialité",
  description: "Découvrez comment ratheil.info protège vos données et utilise Google Analytics 4 uniquement avec votre consentement.",
  path: routes.privacy.fr,
  locale: "fr",
  languageAlternates: routes.privacy,
});

export default function PrivacyPolicy() {
  return <PrivacyContent language="fr" />;
}
