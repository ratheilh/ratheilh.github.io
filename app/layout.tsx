import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { AnalyticsConsent } from "./analytics-consent";
import { SITE_URL } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vinasétan Ratheil Esse Houndji — Artificial intelligence",
    template: "%s — Vinasétan Ratheil Esse Houndji",
  },
  description: "Professional website of Vinasétan Ratheil Esse Houndji, an artificial intelligence researcher and lecturer at the University of Abomey-Calavi.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script id="google-consent-default" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){dataLayer.push(arguments);};
          window['ga-disable-G-4MJSGB4RZT'] = true;
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted'
          });
          gtag('set', 'ads_data_redaction', true);
        `}</Script>
        {children}
        <AnalyticsConsent />
      </body>
    </html>
  );
}
