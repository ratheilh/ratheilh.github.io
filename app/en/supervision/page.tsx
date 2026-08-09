import type { Metadata } from "next";
import Supervision from "../../encadrements/page";

export const metadata: Metadata = {
  title: "Supervision",
  alternates: { canonical: "/en/supervision/", languages: { fr: "/encadrements/", en: "/en/supervision/" } },
};

export default Supervision.English;
