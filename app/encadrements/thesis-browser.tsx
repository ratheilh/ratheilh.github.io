"use client";

import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { type Language, type Localized, localize } from "../i18n";

type ThesisKind = "master" | "engineer" | "bachelor";
type ThesisRecord = { title: string; name: string; details: string; href?: string };
export type ThesisCollection = {
  kind: ThesisKind;
  groups: { year: string; items: ThesisRecord[] }[];
};

const copy = {
  contents: { fr: "Sur cette page", en: "On this page" },
  doctoral: { fr: "Doctorats", en: "PhD theses" },
  resources: { fr: "Ressources utiles pour les étudiants", en: "Useful resources for students" },
  backToTop: { fr: "Retour en haut", en: "Back to top" },
  searchTitle: { fr: "Rechercher un mémoire", en: "Find a thesis" },
  searchHint: {
    fr: "Recherche par étudiant ou par titre dans la sélection de mémoires ci-dessous.",
    en: "Search the selection of student theses below by student name or title.",
  },
  query: { fr: "Étudiant ou titre", en: "Student name or title" },
  placeholder: { fr: "Nom, mot-clé…", en: "Name, keyword…" },
  degree: { fr: "Diplôme", en: "Degree" },
  allDegrees: { fr: "Tous les diplômes", en: "All degrees" },
  year: { fr: "Année", en: "Year" },
  allYears: { fr: "Toutes les années", en: "All years" },
  reset: { fr: "Réinitialiser", en: "Reset filters" },
  empty: {
    fr: "Aucun mémoire ne correspond à ces critères. Modifiez la recherche ou réinitialisez les filtres.",
    en: "No theses match these criteria. Change your search or reset the filters.",
  },
  download: { fr: "Télécharger le mémoire (PDF)", en: "Download thesis (PDF)" },
  newTab: { fr: "nouvel onglet", en: "opens in a new tab" },
} satisfies Record<string, Localized>;

const degrees: Record<ThesisKind, { short: Localized; title: Localized; id: string }> = {
  master: {
    short: { fr: "Master", en: "Master’s" },
    title: { fr: "Mémoires de master", en: "Master’s theses" },
    id: "master-supervision",
  },
  engineer: {
    short: { fr: "Ingénieur", en: "Engineering" },
    title: { fr: "Mémoires d’ingénieur", en: "Engineering degree theses" },
    id: "engineer-supervision",
  },
  bachelor: {
    short: { fr: "Licence", en: "Bachelor’s" },
    title: { fr: "Mémoires de licence", en: "Bachelor’s theses" },
    id: "bachelor-supervision",
  },
};

function normalizeSearch(value: string) {
  return value.normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function degreeDetails(value: string, language: Language) {
  if (language === "fr") return value;
  return value
    .replace(/^Licence\b/, "Bachelor’s")
    .replace(/^Ingénieur\b/, "Engineering degree")
    .replace(/^Master\b/, "Master’s");
}

function revealAnchor(event: MouseEvent<HTMLAnchorElement>) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const id = event.currentTarget.hash.slice(1);
  const target = document.getElementById(id);
  if (!target) return;

  // Reveal the target before native fragment navigation, even if its section is folded.
  let ancestor: HTMLElement | null = target;
  while (ancestor) {
    if (ancestor instanceof HTMLDetailsElement) ancestor.open = true;
    ancestor = ancestor.parentElement;
  }
  target.focus({ preventScroll: true });
}

export function ThesisBrowser({ language, collections, doctoralSection, studentResources }: {
  language: Language;
  collections: ThesisCollection[];
  doctoralSection: ReactNode;
  studentResources: ReactNode;
}) {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<ThesisKind | "all">("all");
  const [year, setYear] = useState("all");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function updateBackToTop() {
      setShowBackToTop(window.scrollY > 400);
    }
    updateBackToTop();
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    return () => window.removeEventListener("scroll", updateBackToTop);
  }, []);

  const terms = normalizeSearch(query).split(" ").filter(Boolean);
  const hasFilters = query !== "" || kind !== "all" || year !== "all";
  const years = [...new Set(collections.flatMap((collection) => collection.groups.map((group) => group.year)))]
    .sort((a, b) => Number(b) - Number(a));
  const filteredCollections = collections
    .filter((collection) => kind === "all" || collection.kind === kind)
    .map((collection) => ({
      ...collection,
      groups: collection.groups
        .filter((group) => year === "all" || group.year === year)
        .map((group) => ({
          ...group,
          items: group.items.filter((item) => {
            const searchable = normalizeSearch(item.name + " " + item.title);
            return terms.every((term) => searchable.includes(term));
          }),
        }))
        .filter((group) => group.items.length > 0),
    }))
    .filter((collection) => collection.groups.length > 0);
  const count = filteredCollections.reduce((total, collection) =>
    total + collection.groups.reduce((subtotal, group) => subtotal + group.items.length, 0), 0);
  const resultLabel = language === "fr"
    ? count + (count === 1 ? " mémoire affiché" : " mémoires affichés")
    : count + (count === 1 ? " thesis shown" : " theses shown");

  function resetFilters() {
    setQuery("");
    setKind("all");
    setYear("all");
  }

  return (
    <div className="supervision-content">
      <nav className="supervision-contents" aria-label={localize(copy.contents, language)}>
        <p className="supervision-contents-title">{localize(copy.contents, language)}</p>
        <ul>
          <li><a href="#phd-supervision" onClick={revealAnchor}>{localize(copy.doctoral, language)}</a></li>
          <li><a href="#thesis-search-title" onClick={revealAnchor}>{localize(copy.searchTitle, language)}</a></li>
          {filteredCollections.map((collection) => (
            <li key={collection.kind}>
              <a href={"#" + degrees[collection.kind].id} onClick={revealAnchor}>
                {localize(degrees[collection.kind].short, language)}
              </a>
            </li>
          ))}
          <li><a href="#student-resources-title" onClick={revealAnchor}>{localize(copy.resources, language)}</a></li>
        </ul>
      </nav>

      {doctoralSection}

      <section className="supervision-search" aria-labelledby="thesis-search-title">
        <h2 id="thesis-search-title" tabIndex={-1}>{localize(copy.searchTitle, language)}</h2>
        <p id="thesis-search-hint">{localize(copy.searchHint, language)}</p>
        <div className="supervision-filters" role="search" aria-labelledby="thesis-search-title">
          <label className="supervision-query" htmlFor="thesis-query">
            {localize(copy.query, language)}
            <input id="thesis-query" type="search" value={query}
              placeholder={localize(copy.placeholder, language)}
              aria-describedby="thesis-search-hint"
              onChange={(event) => setQuery(event.target.value)} />
          </label>
          <label htmlFor="thesis-degree">
            {localize(copy.degree, language)}
            <select id="thesis-degree" value={kind} onChange={(event) => setKind(event.target.value as ThesisKind | "all")}>
              <option value="all">{localize(copy.allDegrees, language)}</option>
              {collections.map((collection) => (
                <option key={collection.kind} value={collection.kind}>{localize(degrees[collection.kind].short, language)}</option>
              ))}
            </select>
          </label>
          <label htmlFor="thesis-year">
            {localize(copy.year, language)}
            <select id="thesis-year" value={year} onChange={(event) => setYear(event.target.value)}>
              <option value="all">{localize(copy.allYears, language)}</option>
              {years.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <button type="button" onClick={resetFilters} disabled={!hasFilters}>
            {localize(copy.reset, language)}
          </button>
        </div>
        <p className="supervision-results" role="status" aria-live="polite" aria-atomic="true">{resultLabel}</p>
        {count === 0 ? <p className="notice">{localize(copy.empty, language)}</p> : null}
      </section>

      {filteredCollections.map((collection) => {
        const degree = degrees[collection.kind];
        return (
          <section key={collection.kind} className="collapsible-page-section" aria-labelledby={degree.id}>
            <details open>
              <summary><h2 id={degree.id} tabIndex={-1}>{localize(degree.title, language)}</h2></summary>
              <div className="collapsible-page-content">
                <nav className="supervision-year-links" aria-label={localize(degree.title, language) + " — " + localize(copy.year, language)}>
                  <ul>
                    {collection.groups.map((group) => (
                      <li key={group.year}>
                        <a href={"#" + collection.kind + "-" + group.year} onClick={revealAnchor}>{group.year}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
                {collection.groups.map((group) => (
                  <section key={group.year}>
                    <h3 id={collection.kind + "-" + group.year} tabIndex={-1}>{group.year}</h3>
                    <ul className="publication-list compact-record-list supervision-records">
                      {group.items.map((item) => (
                        <li key={item.title + ":" + item.name}>
                          <span className="title">{item.title}</span>
                          <span className="details">
                            {item.name ? <><strong>{item.name}</strong>{" · "}</> : null}
                            {degreeDetails(item.details, language)}{item.details ? " · " : ""}{group.year}
                          </span>
                          {item.href ? (
                            <a className="supervision-download" href={item.href} target="_blank" rel="noreferrer"
                              aria-label={localize(copy.download, language) + " — " + item.name + " (" + localize(copy.newTab, language) + ")"}>
                              {localize(copy.download, language)}
                            </a>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </details>
          </section>
        );
      })}

      {studentResources}

      {showBackToTop ? (
        <a className="supervision-back-to-top" href="#supervision-top" onClick={revealAnchor}
          aria-label={localize(copy.backToTop, language)} title={localize(copy.backToTop, language)}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
            <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      ) : null}
    </div>
  );
}
