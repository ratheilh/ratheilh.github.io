import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ratheilh.github.io"),
  title: {
    default: "Vinasetan Ratheil Houndji — Intelligence artificielle",
    template: "%s — Vinasetan Ratheil Houndji",
  },
  description: "Site professionnel de Vinasetan Ratheil Houndji, enseignant-chercheur en intelligence artificielle à l’Université d’Abomey-Calavi.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
