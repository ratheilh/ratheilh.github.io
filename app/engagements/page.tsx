import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createPageMetadata, routes } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Engagements scientifiques et académiques",
  description: "Découvrez les engagements scientifiques, académiques et associatifs de Vinasétan Ratheil Houndji en faveur de la recherche et de l’intelligence artificielle.",
  path: routes.engagements,
  locale: "fr",
});

export default function EngagementsRedirect() {
  redirect("/services");
}
