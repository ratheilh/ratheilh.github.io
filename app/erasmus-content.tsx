import { AcademicPage, PageIntro } from "./site-components";
import { type Language, type Localized, localize } from "./i18n";

const contacts = [
  { name: "Ratheil Houndji", email: "ratheil.houndji@uac.bj" },
  { name: "Hélène Verhaeghe", email: "helene.verhaeghe@uclouvain.be" },
];

const applicationSubject = "Candidature mobilité Erasmus IFRI–UCLouvain – NOM Prénom";
const applicationHref = `mailto:${contacts.map((contact) => contact.email).join(",")}?subject=${encodeURIComponent(applicationSubject)}`;

const copy = {
  title: { fr: "Mobilités Erasmus à l’UCLouvain", en: "Erasmus mobility at UCLouvain" },
  subtitle: { fr: "Appel à candidatures pour les étudiants de master de l’IFRI", en: "Call for applications for IFRI master’s students" },
  introduction: {
    fr: "Dans le cadre du partenariat entre l’IFRI de l’Université d’Abomey-Calavi et l’UCLouvain, trois mobilités étudiantes de trois mois en Belgique sont financées pour la période 2026–2029.",
    en: "As part of the partnership between IFRI at the University of Abomey-Calavi and UCLouvain, funding is available for three student mobility stays in Belgium, each lasting three months, for the 2026–2029 period.",
  },
  project: {
    fr: "Cet appel s’adresse aux étudiantes et étudiants de master de l’IFRI souhaitant présenter un projet de stage ou de travail de fin d’études et préciser les objectifs de leur séjour à l’UCLouvain.",
    en: "This call is open to IFRI master’s students wishing to propose an internship or final-year project and outline the objectives of their stay at UCLouvain.",
  },
  mobilityTitle: { fr: "La mobilité", en: "About the mobility" },
  preparationTitle: { fr: "Préparer votre candidature", en: "Prepare your application" },
  documentsIntroduction: { fr: "Votre dossier doit comprendre :", en: "Your application must include:" },
  sendingTitle: { fr: "Envoyer votre dossier", en: "Submit your application" },
  sendingIntroduction: { fr: "Adressez votre candidature aux deux contacts suivants, dans un même courriel :", en: "Send your application to both of the following contacts in a single email:" },
  subjectLabel: { fr: "Objet de l'email :", en: "Email subject:" },
  enquiries: {
    fr: "Pour connaître le calendrier de candidature et discuter des possibilités de séjour, contactez Ratheil Houndji et Hélène Verhaeghe aux adresses indiquées ci-dessus.",
    en: "To find out about the application timeline and discuss possible stays, contact Ratheil Houndji and Hélène Verhaeghe at the addresses listed above.",
  },
} satisfies Record<string, Localized>;

const mobilityFacts: { label: Localized; value: Localized }[] = [
  { label: { fr: "Public concerné", en: "Who can apply" }, value: { fr: "étudiants de master de l’IFRI", en: "IFRI master’s students" } },
  { label: { fr: "Établissement partenaire", en: "Partner institution" }, value: { fr: "UCLouvain", en: "UCLouvain" } },
  { label: { fr: "Pays d’accueil", en: "Host country" }, value: { fr: "Belgique", en: "Belgium" } },
  { label: { fr: "Nombre de mobilités financées", en: "Number of funded mobility stays" }, value: { fr: "trois sur la période 2026–2029", en: "three in total for the 2026–2029 period" } },
  { label: { fr: "Durée", en: "Duration" }, value: { fr: "trois mois par mobilité", en: "three months per stay" } },
];

const applicationDocuments: Localized[] = [
  { fr: "Un curriculum vitæ", en: "A curriculum vitae" },
  { fr: "Une lettre de motivation expliquant les raisons de votre candidature", en: "A motivation letter explaining why you are applying" },
  { fr: "Un résumé du projet de stage ou de travail de fin d’études, accompagné des objectifs du séjour", en: "A summary of your internship or final-year project, including the objectives of your stay" },
];

export function ErasmusContent({ language }: { language: Language }) {
  return (
    <AcademicPage language={language}>
      <article className="erasmus-call">
        <PageIntro title={localize(copy.title, language)}>{localize(copy.subtitle, language)}</PageIntro>
        <p>{localize(copy.introduction, language)}</p>
        <p>{localize(copy.project, language)}</p>

        <section aria-labelledby="mobility-title">
          <h2 id="mobility-title">{localize(copy.mobilityTitle, language)}</h2>
          <ul>{mobilityFacts.map((fact) => <li key={fact.label.fr}><strong>{localize(fact.label, language)}{language === "fr" ? " :" : ":"}</strong> {localize(fact.value, language)}</li>)}</ul>
        </section>

        <section aria-labelledby="preparation-title">
          <h2 id="preparation-title">{localize(copy.preparationTitle, language)}</h2>
          <p>{localize(copy.documentsIntroduction, language)}</p>
          <ul>{applicationDocuments.map((document) => <li key={document.fr}>{localize(document, language)}</li>)}</ul>
        </section>

        <section aria-labelledby="sending-title">
          <h2 id="sending-title">{localize(copy.sendingTitle, language)}</h2>
          <p>{localize(copy.sendingIntroduction, language)}</p>
          <ul className="erasmus-contacts">{contacts.map((contact) => <li key={contact.email}><strong>{contact.name}{language === "fr" ? " :" : ":"}</strong> <a href={applicationHref}>{contact.email}</a></li>)}</ul>
          <p><strong>{localize(copy.subjectLabel, language)}</strong> <span className="erasmus-subject" lang="fr">{applicationSubject}</span></p>
          <p>{localize(copy.enquiries, language)}</p>
        </section>
      </article>
    </AcademicPage>
  );
}
