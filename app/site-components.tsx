import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [["/recherche", "Recherche"], ["/publications", "Publications"], ["/enseignement", "Enseignement"], ["/encadrements", "Encadrements"], ["/engagements", "Engagements"], ["/contact", "Contact"]];

function NavigationLinks() {
  return <>{navigation.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}</>;
}

export function SiteHeader() {
  return (
    <header className="site-header"><div className="header-inner">
      <Link className="brand" href="/" aria-label="Accueil">Ratheil Houndji</Link>
      <nav className="desktop-nav" aria-label="Navigation principale"><NavigationLinks /></nav>
      <details className="mobile-menu"><summary>Menu <span aria-hidden="true">☰</span></summary><nav aria-label="Navigation mobile"><NavigationLinks /></nav></details>
    </div></header>
  );
}

export function AcademicPage({ children, home = false }: { children: ReactNode; home?: boolean }) {
  return <><SiteHeader /><main className={home ? "content content-home" : "content"}>{children}</main><footer className="site-footer"><div>© 2026 Vinasetan Ratheil Houndji</div><div>IFRI · Université d’Abomey-Calavi · Bénin</div></footer></>;
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) { return <a href={href} target="_blank" rel="noreferrer">{children}</a>; }

export function PageIntro({ title, children }: { title: string; children?: ReactNode }) {
  return <div className="page-intro"><h1>{title}</h1>{children ? <p>{children}</p> : null}</div>;
}
