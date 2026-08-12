import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vinasétan Ratheil Houndji — Artificial intelligence",
    template: "%s — Vinasétan Ratheil Houndji",
  },
  description: "Professional website of Vinasétan Ratheil Houndji, an artificial intelligence researcher and lecturer at the University of Abomey-Calavi.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
