import type { Metadata } from "next";
import Publications from "../../publications/page";

export const metadata: Metadata = {
  title: "Publications",
  alternates: { canonical: "/en/publications/", languages: { fr: "/publications/", en: "/en/publications/" } },
};

export default Publications.English;
