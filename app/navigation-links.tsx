"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, type MouseEvent } from "react";
import type { Localized } from "./i18n";

const navigationItems: { href: Localized; label: Localized }[] = [
  { href: { fr: "/recherche", en: "/en/research" }, label: { fr: "Recherche", en: "Research" } },
  { href: { fr: "/publications", en: "/en/publications" }, label: { fr: "Publications", en: "Publications" } },
  { href: { fr: "/enseignement", en: "/en/teaching" }, label: { fr: "Enseignements", en: "Teaching" } },
  { href: { fr: "/encadrements", en: "/en/supervision" }, label: { fr: "Encadrements", en: "Supervision" } },
  { href: { fr: "/services", en: "/en/services" }, label: { fr: "Services", en: "Services" } },
  { href: { fr: "/contact", en: "/en/contact" }, label: { fr: "CV & contacts", en: "CV & contact" } },
];

const frenchToEnglish: Record<string, string> = Object.fromEntries([
  ["/fr", "/"],
  ...navigationItems.map((item) => [item.href.fr, item.href.en]),
  ["/engagements", "/en/services"],
]);

const englishToFrench: Record<string, string> = Object.fromEntries([
  ["/", "/fr"],
  ["/en", "/fr"],
  ...navigationItems.map((item) => [item.href.en, item.href.fr]),
]);

function cleanPath(pathname: string) {
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
}

function handleNavigationClick(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

export function SiteNavigation() {
  const pathname = usePathname();
  const currentPath = cleanPath(pathname);
  const isEnglish = currentPath === "/" || currentPath === "/en" || currentPath.startsWith("/en/");
  const language = isEnglish ? "en" : "fr";
  const navigation = navigationItems.map((item) => [item.href[language], item.label[language]]);
  const frenchHref = isEnglish ? (englishToFrench[currentPath] ?? "/fr") : currentPath;
  const englishHref = isEnglish ? currentPath : (frenchToEnglish[currentPath] ?? "/");

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "fr";
  }, [isEnglish]);

  return (
    <>
      <Link className="brand" href={isEnglish ? "/" : "/fr"} onClick={handleNavigationClick} scroll aria-label={isEnglish ? "Ratheil Houndji — Home" : "Ratheil Houndji — Accueil"}>
        <svg className="brand-monogram" viewBox="0 0 60 44" aria-hidden="true">
          <text className="brand-initial brand-initial-r" x="3" y="34">R</text>
          <text className="brand-initial brand-initial-h" x="26" y="34">H</text>
          <path className="brand-signature" d="M6 40H54" />
        </svg>
      </Link>
      <nav className="desktop-nav" aria-label={isEnglish ? "Main navigation" : "Navigation principale"}>
        {navigation.map(([href, label]) => {
          const isActive = currentPath === href || currentPath.startsWith(`${href}/`);
          return <Link href={href} key={href} onClick={handleNavigationClick} scroll aria-current={isActive ? "page" : undefined}>{label}</Link>;
        })}
      </nav>
      <div className="header-actions">
        <nav className="language-switcher" aria-label={isEnglish ? "Language" : "Langue"}>
          <Link href={frenchHref} hrefLang="fr" lang="fr" onClick={handleNavigationClick} scroll aria-current={!isEnglish ? "page" : undefined}>FR</Link>
          <span aria-hidden="true">/</span>
          <Link href={englishHref} hrefLang="en" lang="en" onClick={handleNavigationClick} scroll aria-current={isEnglish ? "page" : undefined}>EN</Link>
        </nav>
        <details className="mobile-menu">
          <summary>{isEnglish ? "Menu" : "Menu"} <span aria-hidden="true">☰</span></summary>
          <nav aria-label={isEnglish ? "Mobile navigation" : "Navigation mobile"}>
            {navigation.map(([href, label]) => {
              const isActive = currentPath === href || currentPath.startsWith(`${href}/`);
              return <Link href={href} key={href} onClick={handleNavigationClick} scroll aria-current={isActive ? "page" : undefined}>{label}</Link>;
            })}
          </nav>
        </details>
      </div>
    </>
  );
}
