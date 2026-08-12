import { AcademicPage, ExternalLink, PageIntro } from "./site-components";
import { type Language, type Localized, localize } from "./i18n";

const copy = {
  title: { fr: "CV & contacts", en: "CV & contacts" },
  intro: { fr: "Pour une collaboration scientifique, un encadrement, une conférence ou une initiative liée à l'un de mes domaines d'expertise.", en: "For scientific collaboration, supervision, conferences, or initiatives related to my areas of expertise." },
  cv: { fr: "Curriculum vitæ", en: "Curriculum vitae" },
  download: { fr: "Télécharger CV (PDF)", en: "Download CV (PDF)" },
  address: { fr: "Adresse", en: "Address" },
  university: { fr: "Université d’Abomey-Calavi", en: "University of Abomey-Calavi" },
  country: { fr: "Bénin", en: "Benin" },
  uacEmail: { fr: "Courriel UAC", en: "UAC email" },
  email: { fr: "Courriel", en: "Email" },
  phone: { fr: "Téléphone", en: "Phone" },
  profile: { fr: "Profil scientifique", en: "Research profile" },
  channel: { fr: "Chaîne YouTube", en: "YouTube channel" },
  institution: { fr: "Institution", en: "Institution" },
  institute: { fr: "Institut de Formation et de Recherche en Informatique", en: "Institute of Training and Research in Computer Science" },
  republic: { fr: "République du Bénin", en: "Republic of Benin" },
} satisfies Record<string, Localized>;

export function ContactContent({ language }: { language: Language }) {
  return <AcademicPage language={language}>
    <PageIntro title={localize(copy.title, language)}>{localize(copy.intro, language)}</PageIntro>
    <ul className="contact-list">
      <li><span>{localize(copy.cv, language)}</span> <a href={language === "en" ? "/cv-vinasetan-ratheil-houndji-en.pdf" : "/cv-vinasetan-ratheil-houndji.pdf"} download>{localize(copy.download, language)}</a></li>
      <li><span>{localize(copy.address, language)}</span> IFRI, {localize(copy.university, language)}, BP 2374 Calavi, {localize(copy.country, language)}</li>
      <li><span>{localize(copy.uacEmail, language)}</span> <a href="mailto:ratheil.houndji@uac.bj">ratheil.houndji@uac.bj</a></li>
      <li><span>{localize(copy.email, language)}</span> <a href="mailto:vratheilhoundji@gmail.com">vratheilhoundji@gmail.com</a></li>
      <li><span>{localize(copy.phone, language)}</span> <a href="tel:+22967467365">+229 67 46 73 65</a></li>
      <li><span>LinkedIn</span> <ExternalLink href="https://www.linkedin.com/in/vinasetan/">linkedin.com/in/vinasetan</ExternalLink></li>
      <li><span>Google Scholar</span> <ExternalLink href={`https://scholar.google.com/citations?user=36wbP8kAAAAJ&hl=${language}`}>{localize(copy.profile, language)}</ExternalLink></li>
      <li><span>ORCID</span> <ExternalLink href="https://orcid.org/0000-0002-5467-9448">0000-0002-5467-9448</ExternalLink></li>
      <li><span>YouTube</span> <ExternalLink href="https://www.youtube.com/channel/UC24YKysMzmerMK2a1PSlYwA">{localize(copy.channel, language)}</ExternalLink></li>
      <li><span>Facebook</span> <ExternalLink href="https://www.facebook.com/ratheil">Facebook</ExternalLink></li>
    </ul>
    <h2>{localize(copy.institution, language)}</h2>
    <p><ExternalLink href="https://ifri-uac.bj">{localize(copy.institute, language)}</ExternalLink><br /><ExternalLink href="https://uac.bj">{localize(copy.university, language)}</ExternalLink><br />Abomey-Calavi, {localize(copy.republic, language)}</p>
  </AcademicPage>;
}
