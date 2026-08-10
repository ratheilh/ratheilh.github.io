"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const GA_MEASUREMENT_ID = "G-4MJSGB4RZT";
const CONSENT_STORAGE_KEY = "ratheil.analytics-consent.v1";
const CONSENT_MAX_AGE = 1000 * 60 * 60 * 24 * 183;
const GOOGLE_TAG_ID = "google-analytics-tag";
const GOOGLE_TAG_CONFIGURED = "data-configured";

type ConsentChoice = "accepted" | "rejected";
type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

function getGtag(): Gtag {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = window.gtag ?? function gtag() {
    window.dataLayer?.push(arguments);
  };
  return window.gtag;
}

function updateConsent(analyticsStorage: "granted" | "denied") {
  getGtag()("consent", "update", {
    analytics_storage: analyticsStorage,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function enableAnalytics() {
  const analyticsWindow = window as typeof window & Record<string, unknown>;
  analyticsWindow[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
  updateConsent("granted");

  const existingTag = document.getElementById(GOOGLE_TAG_ID) as HTMLScriptElement | null;
  if (existingTag?.dataset.configured === "true") {
    getGtag()("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
    });
    return;
  }

  getGtag()("js", new Date());
  // GA4 Enhanced Measurement is the single source of page views: it handles
  // both the initial load and Next.js History API navigations without a second listener.
  getGtag()("config", GA_MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const tag = existingTag ?? document.createElement("script");
  tag.id = GOOGLE_TAG_ID;
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  tag.setAttribute(GOOGLE_TAG_CONFIGURED, "true");
  if (!existingTag) document.head.appendChild(tag);
}

function deleteAnalyticsCookies() {
  const hostname = window.location.hostname;
  const hostnameParts = hostname.split(".");
  const parentDomain = hostnameParts.length > 2 ? hostnameParts.slice(-2).join(".") : hostname;
  const domainCandidates = [...new Set([hostname, `.${hostname}`, parentDomain, `.${parentDomain}`])];

  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0]?.trim();
    if (!name || !/^_ga(?:_|$)/.test(name)) return;

    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    domainCandidates.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`;
    });
  });
}

function disableAnalytics() {
  const analyticsWindow = window as typeof window & Record<string, unknown>;
  analyticsWindow[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  updateConsent("denied");
  deleteAnalyticsCookies();
}

function readStoredChoice(): ConsentChoice | null {
  try {
    const saved = JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY) ?? "null") as {
      choice?: ConsentChoice;
      savedAt?: number;
    } | null;
    if (!saved || !["accepted", "rejected"].includes(saved.choice ?? "") || typeof saved.savedAt !== "number") return null;
    if (Date.now() - saved.savedAt > CONSENT_MAX_AGE) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    return saved.choice ?? null;
  } catch {
    return null;
  }
}

function storeChoice(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify({ choice, savedAt: Date.now() }));
  } catch {
    // The choice still applies to this page when storage is unavailable.
  }
}

function hasPrivacySignal() {
  const navigatorWithGpc = navigator as Navigator & { globalPrivacyControl?: boolean };
  return navigatorWithGpc.globalPrivacyControl === true || navigator.doNotTrack === "1";
}

const copy = {
  fr: {
    label: "Préférences de confidentialité",
    title: "Mesure d’audience",
    description: "Avec votre accord, ce site utilise Google Analytics pour comprendre sa fréquentation. Vous pouvez accepter ou refuser les statistiques sans incidence sur votre navigation.",
    accept: "Accepter",
    reject: "Refuser",
    settings: "Confidentialité",
    policy: "Politique de confidentialité",
    policyHref: "/politique-de-confidentialite",
  },
  en: {
    label: "Privacy preferences",
    title: "Audience measurement",
    description: "With your permission, this site uses Google Analytics to understand its audience. You can accept or reject analytics without affecting your browsing.",
    accept: "Accept",
    reject: "Reject",
    settings: "Privacy",
    policy: "Privacy policy",
    policyHref: "/en/privacy",
  },
} as const;

export function AnalyticsConsent() {
  const pathname = usePathname();
  const language = pathname === "/" || pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
  const content = copy[language];
  const [choice, setChoice] = useState<ConsentChoice | null | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedChoice = readStoredChoice();
    const initialChoice = storedChoice ?? (hasPrivacySignal() ? "rejected" : null);
    setChoice(initialChoice);
    setIsOpen(initialChoice === null);
  }, []);

  useEffect(() => {
    if (choice === "accepted") enableAnalytics();
    if (choice === "rejected") disableAnalytics();
  }, [choice]);

  function selectChoice(nextChoice: ConsentChoice) {
    storeChoice(nextChoice);
    if (choice !== nextChoice) setChoice(nextChoice);
    setIsOpen(false);
  }

  if (choice === undefined) return null;

  return (
    <>
      {isOpen ? (
        <section className="consent-banner" role="dialog" aria-label={content.label} aria-describedby="consent-description">
          <div>
            <strong>{content.title}</strong>
            <p id="consent-description">{content.description}</p>
            <Link href={content.policyHref}>{content.policy}</Link>
          </div>
          <div className="consent-actions">
            <button type="button" className="button-secondary" onClick={() => selectChoice("rejected")}>{content.reject}</button>
            <button type="button" className="button-primary" onClick={() => selectChoice("accepted")}>{content.accept}</button>
          </div>
        </section>
      ) : (
        <button type="button" className="consent-settings" onClick={() => setIsOpen(true)}>{content.settings}</button>
      )}
    </>
  );
}
