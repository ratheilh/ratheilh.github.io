import type { ReactNode } from "react";
import Link from "next/link";
import { SiteNavigation } from "./navigation-links";

export function SiteHeader() {
  return (
    <header className="site-header"><div className="header-inner"><SiteNavigation /></div></header>
  );
}

export function AcademicPage({ children, home = false, language = "fr" }: { children: ReactNode; home?: boolean; language?: "fr" | "en" }) {
  const privacyHref = language === "en" ? "/en/privacy" : "/politique-de-confidentialite";
  return <><SiteHeader /><main lang={language} className={home ? "content content-home" : "content"}>{children}</main><footer lang={language} className="site-footer"><div>© 2026 Vinasétan Ratheil Esse Houndji · <Link href={privacyHref}>{language === "en" ? "Privacy" : "Confidentialité"}</Link></div><div>IFRI · {language === "en" ? "University of Abomey-Calavi · Benin" : "Université d’Abomey-Calavi · Bénin"}</div></footer></>;
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) { return <a href={href} target="_blank" rel="noreferrer">{children}</a>; }

export function PageIntro({ title, children }: { title: string; children?: ReactNode }) {
  return <div className="page-intro"><h1>{title}</h1>{children ? <p>{children}</p> : null}</div>;
}
