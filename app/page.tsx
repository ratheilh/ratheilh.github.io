import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AcademicPage, ExternalLink } from "./site-components";
import { type Language, type Localized, localize } from "./i18n";
import { createPageMetadata, routes, serializeJsonLd, SITE_URL } from "./seo";

export const metadata: Metadata = createPageMetadata({
  title: "Artificial intelligence researcher",
  description: "Academic profile of Vinasétan Ratheil Houndji, an artificial intelligence researcher and lecturer at the University of Abomey-Calavi.",
  path: routes.home.en,
  locale: "en",
  languageAlternates: routes.home,
});

const profilePageJsonLd = serializeJsonLd({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profile-page`,
  url: SITE_URL,
  name: "Profil académique de Vinasetan Ratheil Houndji",
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Vinasetan Ratheil Houndji",
    alternateName: "Ratheil Houndji",
    url: SITE_URL,
    image: `${SITE_URL}/ratheil-houndji.webp`,
    jobTitle: "Enseignant-chercheur en intelligence artificielle",
    affiliation: [
      {
        "@type": "CollegeOrUniversity",
        name: "Université d’Abomey-Calavi",
        url: "https://uac.bj",
      },
      {
        "@type": "EducationalOrganization",
        name: "Institut de Formation et de Recherche en Informatique (IFRI)",
        url: "https://ifri-uac.bj",
      },
    ],
    knowsAbout: [
      "Intelligence artificielle",
      "Apprentissage automatique",
      "Programmation par contraintes",
      "Optimisation combinatoire",
      "Intelligence artificielle responsable et efficiente",
      "Applications de l’intelligence artificielle en santé, agriculture et éducation",
      "Réalités augmentée et virtuelle",
    ],
    sameAs: [
      "https://scholar.google.com/citations?user=36wbP8kAAAAJ&hl=en",
      "https://dblp.org/pid/150/4939",
      "https://orcid.org/0000-0002-5467-9448",
      "https://www.linkedin.com/in/vinasetan/",
      "https://www.youtube.com/channel/UC24YKysMzmerMK2a1PSlYwA",
      "https://www.facebook.com/ratheil",
    ],
  },
});

type EducationItem = {
  dateTime: string;
  period: Localized;
  title: Localized;
  details: Localized;
};

type NewsItem = {
  dateTime: string;
  period: Localized;
  title: Localized;
  details: Localized;
  links?: { href: string; label: Localized }[];
};

const homeContent = {
  profileLabel: { fr: "Profil et coordonnées", en: "Profile and contact details" },
  portraitAlt: { fr: "Portrait de Vinasétan Ratheil Houndji", en: "Portrait of Vinasétan Ratheil Houndji" },
  country: { fr: "Bénin", en: "Benin" },
  cvDownload: { fr: "Télécharger le CV (PDF)", en: "Download CV (PDF)" },
  externalProfiles: { fr: "Profils externes", en: "External profiles" },
  eyebrow: {
    fr: "Enseignant-chercheur en intelligence artificielle et en optimisation",
    en: "Lecturer and researcher in artificial intelligence and optimization",
  },
  positions: {
    fr: [
      "Maître de conférences des universités du CAMES en intelligence artificielle",
      "Chef du département de génie logiciel et Coordonnateur des formations de licence et de master / IFRI-UAC",
      "Président de l'association FRIARE pour une intelligence artificielle responsable et efficiente",
      "General chairman du Benin Workshop on Artificial Intelligence (BWAI)",
    ],
    en: [
      "Associate professor (CAMES) in Artificial Intelligence",
      "Head of the software engineering department and Coordinator of bachelor's and master's programs / IFRI-UAC",
      "President of the FRIARE association for a responsible and efficient AI",
      "General chairman of Benin Workshop on Artificial Intelligence (BWAI)",
    ],
  } satisfies Localized<string[]>,
  aboutTitle: { fr: "À propos", en: "About" },
  aboutParagraphs: {
    fr: [
      "Enseignant-chercheur en intelligence artificielle à l’Institut de Formation et de Recherche en Informatique de l’Université d’Abomey-Calavi, je travaille depuis plus de dix ans sur la recherche fondamentale et appliquée en intelligence artificielle, l’optimisation et le développement de systèmes intelligents.",
      "Mes recherches portent sur l’apprentissage automatique, la programmation par contraintes et l’optimisation combinatoire. Elles trouvent notamment des applications en santé, en agriculture et en éducation.",
      "Au-delà de la recherche, j’accorde une place importante à la formation, à l’encadrement des jeunes chercheurs et à la construction de collaborations scientifiques durables. Je contribue également à plusieurs initiatives destinées à faire progresser l’intelligence artificielle en Afrique, notamment à travers le Benin Workshop on Artificial Intelligence et l’association FRIARE pour une intelligence artificielle responsable et efficiente.",
    ],
    en: [
      "I am an artificial intelligence researcher and lecturer at the Institute of Training and Research in Computer Science of the University of Abomey-Calavi. For more than ten years, I have worked on fundamental and applied research in artificial intelligence, optimization, and intelligent systems.",
      "My research focuses on machine learning, constraint programming, and combinatorial optimization, with applications in health, agriculture, and education.",
      "Beyond research, I am committed to teaching, mentoring young researchers, and building lasting scientific collaborations. I also contribute to initiatives advancing artificial intelligence in Africa, including the Benin Workshop on Artificial Intelligence and the FRIARE association for a responsible and efficient AI.",
    ],
  } satisfies Localized<string[]>,
  educationTitle: { fr: "Éducation", en: "Education" },
  interestsTitle: { fr: "Intérêts scientifiques", en: "Research interests" },
  researchLink: { fr: "Voir la recherche", en: "View research" },
  interests: {
    fr: ["Intelligence artificielle et apprentissage automatique", "Programmation par contraintes et optimisation combinatoire", "Intelligence artificielle responsable et efficiente", "Applications en agriculture, santé et éducation", "Réalités augmentée et virtuelle"],
    en: ["Artificial intelligence and machine learning", "Constraint programming and combinatorial optimization", "Responsible and efficient artificial intelligence", "Applications in agriculture, health, and education", "Augmented and virtual reality"],
  } satisfies Localized<string[]>,
  newsTitle: { fr: "Actualités et activités", en: "News and activities" },
} satisfies Record<string, Localized | Localized<string[]>>;

const education: EducationItem[] = [
  { dateTime: "2025", period: { fr: "Avril–août 2025", en: "April–August 2025" }, title: { fr: "Formation internationale en pédagogie universitaire numérique", en: "International training in digital university pedagogy" }, details: { fr: "Université libre de Bruxelles, Belgique · Major de la cohorte et titulaire de la Chaire du Sud", en: "Université libre de Bruxelles, Belgium · Top-ranked participant and Chair of the South awardee" } },
  { dateTime: "2021", period: { fr: "2021", en: "2021" }, title: { fr: "Master class for teaching online", en: "Master class for teaching online" }, details: { fr: "Arizona State University, États-Unis · Formation en ligne", en: "Arizona State University, United States · Online" } },
  { dateTime: "2017", period: { fr: "2013–2017", en: "2013–2017" }, title: { fr: "Doctorat en sciences de l’ingénieur", en: "PhD in engineering sciences" }, details: { fr: "Sciences informatiques — intelligence artificielle et recherche opérationnelle · UCLouvain et Université d’Abomey-Calavi", en: "Computer science — artificial intelligence and operations research · UCLouvain and University of Abomey-Calavi" } },
  { dateTime: "2017", period: { fr: "2016–2017", en: "2016–2017" }, title: { fr: "Formation à la recherche en sciences de l’ingénieur", en: "Research training in engineering sciences" }, details: { fr: "Université catholique de Louvain, Belgique", en: "Université catholique de Louvain, Belgium" } },
  { dateTime: "2013", period: { fr: "2012–2013", en: "2012–2013" }, title: { fr: "Master en sciences informatiques", en: "Master's degree in computer science" }, details: { fr: "École polytechnique de Louvain, UCLouvain · Distinction, 15/20", en: "Louvain School of Engineering, UCLouvain · Distinction" } },
  { dateTime: "2012", period: { fr: "2011–2012", en: "2011–2012" }, title: { fr: "Cours de renforcement en sciences informatiques et recherche", en: "Advanced courses in computer science and research" }, details: { fr: "Centre de formation et de recherche en informatique, Université d’Abomey-Calavi", en: "Computer Science Training and Research Center, University of Abomey-Calavi" } },
  { dateTime: "2011", period: { fr: "2005–2011", en: "2005–2011" }, title: { fr: "Ingénieur de conception en informatique et télécommunications", en: "Engineering degree in computer science and telecommunications" }, details: { fr: "École polytechnique d’Abomey-Calavi · option réseaux informatiques et internet · mention bien, major de promotion", en: "École polytechnique d’Abomey-Calavi · computer networks and internet specialization · top of the class." } },
  { dateTime: "2005", period: { fr: "2004–2005", en: "2004–2005" }, title: { fr: "Baccalauréat scientifique, série C", en: "Scientific baccalaureate, series C" }, details: { fr: "Collège La Flèche, Cotonou · mention bien", en: "Collège La Flèche, Cotonou" } },
];

const news: NewsItem[] = [
  {
    dateTime: "2026-11-23",
    period: { fr: "Novembre 2026", en: "November 2026" },
    title: { fr: "BWAI 2026 — préparation de la prochaine édition", en: "BWAI 2026 — preparing the next edition" },
    details: { fr: "En qualité de general co-chair, préparation du prochain Benin Workshop on Artificial Intelligence, organisé du 23 au 27 novembre 2026. L’événement réunit chercheurs, étudiants, professionnels et acteurs publics autour de la recherche, de la formation et des usages de l’intelligence artificielle au Bénin.", en: "As general co-chair, preparation of the next Benin Workshop on Artificial Intelligence, taking place from 23 to 27 November 2026. The event brings together researchers, students, professionals, and public-sector stakeholders around AI research, education, and applications in Benin." },
    links: [{ href: "https://bwai-ifri-uac.bj", label: { fr: "Site du BWAI", en: "BWAI website" } }],
  },
  {
    dateTime: "2026-10",
    period: { fr: "Octobre 2026", en: "October 2026" },
    title: { fr: "CARI 2026 — à venir", en: "CARI 2026 — coming soon" },
    details: { fr: "La 18e édition du Colloque africain sur la recherche en informatique et les mathématiques appliquées se tiendra du 21 au 24 octobre à l’Université d’Abomey-Calavi. Ce rendez-vous scientifique panafricain est consacré aux avancées de la recherche et à leurs applications.", en: "The 18th African Conference on Research in Computer Science and Applied Mathematics will take place from 21 to 24 October at the University of Abomey-Calavi. This pan-African scientific forum is devoted to research advances and their applications." },
    links: [{ href: "https://cari-conf.bj/", label: { fr: "Site du CARI 2026", en: "CARI 2026 website" } }],
  },
  {
    dateTime: "2026-09",
    period: { fr: "Septembre 2026", en: "September 2026" },
    title: { fr: "Coordination des projets OpenCS4Dev et ForCES", en: "Coordination of the OpenCS4Dev and ForCES projects" },
    details: { fr: "Coordination Sud de deux projets soutenus par l’ARES. OpenCS4Dev vise la production et la mutualisation de ressources pédagogiques ouvertes pour l’enseignement de l’informatique. ForCES, mené avec l’ULB et l’Université Cheikh-Anta-Diop de septembre 2026 à août 2028, doit co-construire une infrastructure de formation continue en pédagogie universitaire numérique au Bénin et au Sénégal.", en: "Southern coordination of two ARES-supported projects. OpenCS4Dev develops and shares open educational resources for computer science teaching. ForCES, conducted with ULB and Cheikh Anta Diop University from September 2026 to August 2028, will co-design a continuing professional development infrastructure for digital university pedagogy in Benin and Senegal." },
    links: [{ href: "https://moove.ares-ac.be/actu/les-23-projets-damorce-et-de-valorisation-selectionnes-en-2026-seront-mis", label: { fr: "Projet ForCES — ARES", en: "ForCES project — ARES" } }],
  },
  {
    dateTime: "2026-08",
    period: { fr: "Août 2026", en: "August 2026" },
    title: { fr: "Intelligence artificielle neuro-symbolique : concepts et applications", en: "Neuro-symbolic artificial intelligence: concepts and applications" },
    details: { fr: "Communication présentée en août à l’École d’été sur l’intelligence artificielle de Bénin Excellence. Une introduction à la complémentarité entre apprentissage neuronal et raisonnement symbolique, aux principales architectures neuro-symboliques et à leurs applications en santé, agriculture, éducation, cybersécurité et optimisation.", en: "Talk delivered in August at the Benin Excellence Summer School on Artificial Intelligence. An introduction to the complementary strengths of neural learning and symbolic reasoning, the main neuro-symbolic architectures, and their applications in health, agriculture, education, cybersecurity, and optimization." },
    links: [{ href: "https://drive.google.com/file/d/10EymwVu_fvIQA7IZkjVKHtDIuqZEzZ2m/view?usp=drivesdk", label: { fr: "Voir la présentation (PDF)", en: "View slides (PDF)" } }],
  },
  {
    dateTime: "2026-07",
    period: { fr: "Juillet 2026", en: "July 2026" },
    title: { fr: "Gouvernance responsable de l’intelligence artificielle dans l’enseignement supérieur africain", en: "Responsible governance of artificial intelligence in African higher education" },
    details: { fr: "Communication présentée en juillet au colloque « IA, éducation et éthique » de la Commission permanente Éducation et Éthique de l’Académie nationale des sciences, arts et lettres du Bénin. La présentation propose des principes, des dispositifs de gouvernance et un cycle opérationnel fondé sur les risques, la souveraineté des données, l’intégrité académique, l’audit et les voies de recours.", en: "Talk delivered in July at the “AI, Education and Ethics” symposium of the Permanent Commission on Education and Ethics of Benin’s National Academy of Sciences, Arts and Letters. It proposes governance principles, institutional mechanisms, and an operational cycle covering risk levels, data sovereignty, academic integrity, auditing, and avenues for appeal." },
    links: [{ href: "https://drive.google.com/file/d/1ioAclHqtFHFcEJzgyVYT0_MNhjpr7YZD/view?usp=drivesdk", label: { fr: "Voir la présentation (PDF)", en: "View slides (PDF)" } }],
  },
  {
    dateTime: "2026-07",
    period: { fr: "Juillet 2026", en: "July 2026" },
    title: { fr: "L’IA au service de mon parcours académique : opportunités et pièges à éviter", en: "AI in support of my academic journey: opportunities and pitfalls to avoid" },
    details: { fr: "Atelier animé en juillet lors du lancement de la stratégie d’intelligence artificielle de l’Université d’Abomey-Calavi. Destiné aux étudiants, il aborde l’usage académique responsable de l’IA générative, la formulation de prompts, les biais, les hallucinations, la confidentialité, la déclaration des usages ainsi que les droits et obligations prévus par le cadre éthique de l’UAC.", en: "Workshop delivered in July during the launch of the University of Abomey-Calavi’s artificial intelligence strategy. Designed for students, it covers responsible academic use of generative AI, prompt design, bias, hallucinations, confidentiality, disclosure of AI use, and the rights and obligations established by UAC’s ethical framework." },
    links: [{ href: "https://drive.google.com/file/d/1gDTSSiedTM0y9tnnUWzqv9m8qC0XVw4W/view?usp=drivesdk", label: { fr: "Voir la présentation (PDF)", en: "View slides (PDF)" } }],
  },
  {
    dateTime: "2026-05",
    period: { fr: "Mai 2026", en: "May 2026" },
    title: { fr: "Expertise et enseignement international", en: "Expertise and international teaching" },
    details: { fr: "Contribution à la stratégie nationale de l’éducation fondée sur le numérique. En mai, intervention comme formateur à la FIPUN auprès d’enseignants-chercheurs de neuf pays, et séjour comme professeur invité à l’institut ICTEAM de l’UCLouvain pour des échanges scientifiques en intelligence artificielle et en optimisation.", en: "Contribution to the national digital education strategy. In May, delivery of FIPUN training for lecturers and researchers from nine countries, and a visiting professorship at UCLouvain’s ICTEAM institute for scientific exchanges in artificial intelligence and optimization." },
    links: [
      { href: "https://moove.ares-ac.be/actu/pedagogie-universitaire-numerique-former-celles-et-ceux-qui-formeront-leur", label: { fr: "FIPUN — ARES", en: "FIPUN — ARES" } },
      { href: "https://www.uclouvain.be/en/research-institutes/icteam", label: { fr: "ICTEAM — UCLouvain", en: "ICTEAM — UCLouvain" } },
    ],
  },
  {
    dateTime: "2025-08",
    period: { fr: "Août 2025", en: "August 2025" },
    title: { fr: "20e ACP Summer School — première édition africaine", en: "20th ACP Summer School — first African edition" },
    details: { fr: "General chair et coorganisateur avec John Aoga de l’école tenue du 25 au 29 août à l’IFRI. Consacrée à la programmation par contraintes pour le développement durable, elle a réuni 50 participants, dont 86 % d’Africains, et attribué 14 bourses complètes et 30 bourses partielles.", en: "General chair and co-organizer with John Aoga of the school held at IFRI from 25 to 29 August. Focused on constraint programming for sustainable development, it welcomed 50 participants, 86% of whom were African, and awarded 14 full and 30 partial scholarships." },
    links: [
      { href: "https://school.a4cp.org/summer2025/", label: { fr: "Programme de l’école", en: "School program" } },
      { href: "https://www.a4cp.org/-97", label: { fr: "Bilan de l’ACP", en: "ACP report" } },
    ],
  },
];

function HomeContent({ language }: { language: Language }) {
  const about = localize(homeContent.aboutParagraphs, language);
  const positions = localize(homeContent.positions, language);
  const isEnglish = language === "en";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: profilePageJsonLd }} />
      <AcademicPage home language={language}>
      <div className="home-grid">
        <aside className="profile-column" aria-label={localize(homeContent.profileLabel, language)}>
          <Image className="profile-photo" src="/ratheil-houndji.webp" alt={localize(homeContent.portraitAlt, language)} width={600} height={697} priority />
          <div className="profile-details">
            <p><strong>IFRI — {isEnglish ? "University" : "Université"} d’Abomey-Calavi</strong><br />Abomey-Calavi, {localize(homeContent.country, language)}</p>
            <p><a href={isEnglish ? "/cv-vinasetan-ratheil-houndji-en.pdf" : "/cv-vinasetan-ratheil-houndji.pdf"} download>{localize(homeContent.cvDownload, language)}</a></p>
            <p><a href="mailto:ratheil.houndji@uac.bj">ratheil.houndji@uac.bj</a></p>
            <p><a href="mailto:vratheilhoundji@gmail.com">vratheilhoundji@gmail.com</a></p>
            <nav className="profile-links" aria-label={localize(homeContent.externalProfiles, language)}>
              <ExternalLink href={`https://scholar.google.com/citations?user=36wbP8kAAAAJ&hl=${language}`}>Google Scholar</ExternalLink>
              <ExternalLink href="https://dblp.org/pid/150/4939">DBLP</ExternalLink><ExternalLink href="https://orcid.org/0000-0002-5467-9448">ORCID</ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/vinasetan/">LinkedIn</ExternalLink><ExternalLink href="https://www.youtube.com/channel/UC24YKysMzmerMK2a1PSlYwA">YouTube</ExternalLink>
            </nav>
          </div>
        </aside>

        <div className="home-main">
          <header className="identity">
            <p className="eyebrow">{localize(homeContent.eyebrow, language)}</p>
            <h1>Vinasétan Ratheil Houndji</h1>
            <p className="position">{positions.map((position, index) => <span key={position}>{position}{index < positions.length - 1 ? <br /> : null}</span>)}</p>
          </header>

          <section className="biography" aria-labelledby={isEnglish ? "about" : "a-propos"}>
            <h2 id={isEnglish ? "about" : "a-propos"}>{localize(homeContent.aboutTitle, language)}</h2>
            {about.map((paragraph, index) => index === 0 ? (
              <p key={paragraph}>{isEnglish ? "I am an artificial intelligence researcher and lecturer at the " : "Enseignant-chercheur en intelligence artificielle à l’"}<ExternalLink href="https://ifri-uac.bj">{isEnglish ? "Institute of Training and Research in Computer Science" : "Institut de Formation et de Recherche en Informatique"}</ExternalLink>{isEnglish ? " of the University of Abomey-Calavi. For more than ten years, I have worked on fundamental and applied research in artificial intelligence, optimization, and intelligent systems." : " de l’Université d’Abomey-Calavi, je travaille depuis plus de dix ans sur la recherche fondamentale et appliquée en intelligence artificielle, l’optimisation et le développement de systèmes intelligents."}</p>
            ) : <p key={paragraph}>{paragraph}</p>)}
          </section>

          <section className="home-section education" aria-labelledby="education">
            <div className="section-heading"><h2 id="education">{localize(homeContent.educationTitle, language)}</h2></div>
            <ol className="education-list">{education.map((item) => <li key={`${item.dateTime}-${localize(item.title, language)}`}><time dateTime={item.dateTime}>{localize(item.period, language)}</time><p><strong>{localize(item.title, language)}</strong><br />{localize(item.details, language)}</p></li>)}</ol>
          </section>

          <section className="home-section research-summary" aria-labelledby="research-interests">
            <div className="section-heading"><h2 id="research-interests">{localize(homeContent.interestsTitle, language)}</h2><Link href={isEnglish ? "/en/research" : "/recherche"}>{localize(homeContent.researchLink, language)}</Link></div>
            <ul className="compact-list">{localize(homeContent.interests, language).map((interest) => <li key={interest}>{interest}</li>)}</ul>
          </section>

          <section className="home-section" aria-labelledby="news">
            <div className="section-heading"><h2 id="news">{localize(homeContent.newsTitle, language)}</h2></div>
            <ol className="news-list">{news.map((item, index) => <li key={`${item.dateTime}-${index}`}><time dateTime={item.dateTime}>{localize(item.period, language)}</time><p><strong>{localize(item.title, language)}</strong><br />{localize(item.details, language)}{item.links ? <span className="news-links">{item.links.map((link, linkIndex) => <span key={link.href}>{linkIndex > 0 ? " · " : null}<ExternalLink href={link.href}>{localize(link.label, language)}</ExternalLink></span>)}</span> : null}</p></li>)}</ol>
          </section>
        </div>
      </div>
      </AcademicPage>
    </>
  );
}

function Home() {
  return <HomeContent language="en" />;
}

Home.English = function EnglishHome() {
  return <HomeContent language="en" />;
};

Home.French = function FrenchHome() {
  return <HomeContent language="fr" />;
};

export default Home;
