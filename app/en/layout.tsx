import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  description: "Professional website of Vinasétan Ratheil Esse Houndji, an artificial intelligence researcher and lecturer at the University of Abomey-Calavi.",
  alternates: {
    languages: {
      fr: "/fr/",
      en: "/",
    },
  },
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <div lang="en">{children}</div>;
}
