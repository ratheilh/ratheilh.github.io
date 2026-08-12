import type { Metadata } from "next";

export const SITE_URL = "https://ratheil.info";
export const SITE_NAME = "Vinasétan Ratheil Houndji";

type SitePath = `/${string}`;
type Locale = "fr" | "en";
type LanguageAlternates = {
  fr: SitePath;
  en: SitePath;
  xDefault?: SitePath;
};

export const routes = {
  home: { fr: "/fr/", en: "/", xDefault: "/" },
  research: { fr: "/recherche/", en: "/en/research/" },
  publications: { fr: "/publications/", en: "/en/publications/" },
  teaching: { fr: "/enseignement/", en: "/en/teaching/" },
  supervision: { fr: "/encadrements/", en: "/en/supervision/" },
  services: { fr: "/services/", en: "/en/services/" },
  contact: { fr: "/contact/", en: "/en/contact/" },
  engagements: "/engagements/",
} as const;

export const publicPaths: SitePath[] = [
  routes.home.en,
  routes.home.fr,
  routes.research.fr,
  routes.publications.fr,
  routes.teaching.fr,
  routes.supervision.fr,
  routes.services.fr,
  routes.contact.fr,
  routes.research.en,
  routes.publications.en,
  routes.teaching.en,
  routes.supervision.en,
  routes.services.en,
  routes.contact.en,
];

export function absoluteUrl(path: SitePath): string {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  locale,
  languageAlternates,
}: {
  title: string;
  description: string;
  path: SitePath;
  locale: Locale;
  languageAlternates?: LanguageAlternates;
}): Metadata {
  const canonical = absoluteUrl(path);
  const socialTitle = `${title} — ${SITE_NAME}`;
  const image = {
    url: absoluteUrl("/ratheil-houndji.webp"),
    width: 600,
    height: 697,
    alt: locale === "fr" ? `Portrait de ${SITE_NAME}` : `Portrait of ${SITE_NAME}`,
  };

  return {
    title,
    description,
    alternates: {
      canonical,
      ...(languageAlternates
        ? {
            languages: {
              fr: absoluteUrl(languageAlternates.fr),
              en: absoluteUrl(languageAlternates.en),
              "x-default": absoluteUrl(languageAlternates.xDefault ?? languageAlternates.en),
            },
          }
        : {}),
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: socialTitle,
      description,
      siteName: SITE_NAME,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: [locale === "fr" ? "en_US" : "fr_FR"],
      images: [image],
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
      images: [image.url],
    },
  };
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
