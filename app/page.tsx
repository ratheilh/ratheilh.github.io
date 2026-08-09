import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AcademicPage, ExternalLink } from "./site-components";
import { type Language, type Localized, localize } from "./i18n";

export const metadata: Metadata = {
  title: "Artificial Intelligence Researcher",
  description: "Professional website of Vinasétan Ratheil Esse Houndji, an artificial intelligence researcher and lecturer at the University of Abomey-Calavi.",
  alternates: { canonical: "/", languages: { fr: "/fr/", en: "/" } },
};

type EducationItem = {
  dateTime: string;
  period: Localized;
  title: Localized;
  details: Localized;
};

type NewsItem = {
  year: string;
  title: Localized;
  details: Localized;
};

const homeContent = {
  profileLabel: { fr: "Profil et coordonnées", en: "Profile and contact details" },
  portraitAlt: { fr: "Portrait de Vinasétan Ratheil Esse Houndji", en: "Portrait of Vinasétan Ratheil Esse Houndji" },
  country: { fr: "Bénin", en: "Benin" },
  cvDownload: { fr: "Télécharger le CV (PDF)", en: "Download CV (PDF)" },
  externalProfiles: { fr: "Profils externes", en: "External profiles" },
  eyebrow: {
    fr: "Enseignant-chercheur en intelligence artificielle et en optimisation",
    en: "Lecturer and researcher in artificial intelligence and optimization",
  },
  positions: {
    fr: [
      "Maître de conférences des universités du CAMES",
      "Chef du département Génie logiciel & Coordonnateur des formations de Licence et de Master / IFRI-UAC",
      "General co-Chair du BWAI & Président de la Fondation FRIARE (2023–2026)",
    ],
    en: [
      "Associate Professor (CAMES)",
      "Head of the Software Engineering Department & Coordinator of Bachelor's and Master's programs / IFRI-UAC",
      "General co-Chair of BWAI & President of the FRIARE Foundation (2023–2026)",
    ],
  } satisfies Localized<string[]>,
  aboutTitle: { fr: "À propos", en: "About" },
  aboutParagraphs: {
    fr: [
      "Enseignant-chercheur en intelligence artificielle à l’Institut de Formation et de Recherche en Informatique de l’Université d’Abomey-Calavi, je travaille depuis plus de dix ans sur la recherche fondamentale et appliquée en intelligence artificielle, l’optimisation et le développement de systèmes intelligents.",
      "Mes recherches portent sur l’apprentissage automatique, la programmation par contraintes et l’optimisation combinatoire. Elles trouvent notamment des applications en santé, en agriculture et en éducation.",
      "Au-delà de la recherche, j’accorde une place importante à la formation, à l’encadrement des jeunes chercheurs et à la construction de collaborations scientifiques durables. Je contribue également à plusieurs initiatives destinées à faire progresser l’intelligence artificielle en Afrique, notamment à travers le Benin Workshop on Artificial Intelligence et l’Association FRIARE.",
    ],
    en: [
      "I am an artificial intelligence researcher and lecturer at the Institute of Training and Research in Computer Science of the University of Abomey-Calavi. For more than ten years, I have worked on fundamental and applied research in artificial intelligence, optimization, and intelligent systems.",
      "My research focuses on machine learning, constraint programming, and combinatorial optimization, with applications in health, agriculture, and education.",
      "Beyond research, I am committed to teaching, mentoring young researchers, and building lasting scientific collaborations. I also contribute to initiatives advancing artificial intelligence in Africa, including the Benin Workshop on Artificial Intelligence and FRIARE.",
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
  { dateTime: "2025", period: { fr: "Avril–août 2025", en: "April–August 2025" }, title: { fr: "Formation internationale en pédagogie universitaire numérique", en: "International Training in Digital University Pedagogy" }, details: { fr: "Université libre de Bruxelles, Belgique · Major de la cohorte et titulaire de la Chaire du Sud", en: "Université libre de Bruxelles, Belgium · Top-ranked participant and Chair of the South awardee" } },
  { dateTime: "2021", period: { fr: "2021", en: "2021" }, title: { fr: "Master Class for Teaching Online", en: "Master Class for Teaching Online" }, details: { fr: "Arizona State University, États-Unis · Formation en ligne", en: "Arizona State University, United States · Online" } },
  { dateTime: "2017", period: { fr: "2013–2017", en: "2013–2017" }, title: { fr: "Doctorat en sciences de l’ingénieur", en: "PhD in Engineering Sciences" }, details: { fr: "Sciences informatiques — intelligence artificielle et recherche opérationnelle · UCLouvain et Université d’Abomey-Calavi", en: "Computer science — artificial intelligence and operations research · UCLouvain and University of Abomey-Calavi" } },
  { dateTime: "2017", period: { fr: "2016–2017", en: "2016–2017" }, title: { fr: "Formation à la recherche en sciences de l’ingénieur", en: "Research Training in Engineering Sciences" }, details: { fr: "Université catholique de Louvain, Belgique", en: "Université catholique de Louvain, Belgium" } },
  { dateTime: "2013", period: { fr: "2012–2013", en: "2012–2013" }, title: { fr: "Master en sciences informatiques", en: "Master's degree in Computer Science" }, details: { fr: "École polytechnique de Louvain, UCLouvain · Distinction, 15/20", en: "Louvain School of Engineering, UCLouvain · Distinction" } },
  { dateTime: "2012", period: { fr: "2011–2012", en: "2011–2012" }, title: { fr: "Cours de renforcement en sciences informatiques et recherche", en: "Advanced courses in computer science and research" }, details: { fr: "Centre de formation et de recherche en informatique, Université d’Abomey-Calavi", en: "Computer Science Training and Research Center, University of Abomey-Calavi" } },
  { dateTime: "2011", period: { fr: "2005–2011", en: "2005–2011" }, title: { fr: "Ingénieur de conception en informatique et télécommunications", en: "Engineering degree in Computer Science and Telecommunications" }, details: { fr: "École polytechnique d’Abomey-Calavi · Option Réseaux informatiques et Internet · Mention Bien, major de promotion", en: "École Polytechnique d’Abomey-Calavi · Computer Networks and Internet specialization · Top of the class." } },
  { dateTime: "2005", period: { fr: "2004–2005", en: "2004–2005" }, title: { fr: "Baccalauréat scientifique, série C", en: "Scientific Baccalaureate, Series C" }, details: { fr: "Collège La Flèche, Cotonou · Mention Bien", en: "Collège La Flèche, Cotonou" } },
];

const news: NewsItem[] = [
  { year: "2026", title: { fr: "Coming soon", en: "Coming soon" }, details: { fr: "CARI 2026", en: "CARI 2026" } },
  { year: "2026", title: { fr: "Coming soon", en: "Coming soon" }, details: { fr: "BWAI 2026", en: "BWAI 2026" } },
  { year: "2026", title: { fr: "OpenCS4Dev et ForCES", en: "OpenCS4Dev and ForCES" }, details: { fr: "Coordination Sud de deux projets ARES consacrés aux ressources pédagogiques ouvertes en informatique et à la formation continue des enseignants du supérieur.", en: "Southern coordination of two ARES projects on open computer science learning resources and continuing professional development for higher-education teachers." } },
  { year: "2026", title: { fr: "Expertise et enseignement international", en: "Expertise and international teaching" }, details: { fr: "Contribution à la stratégie nationale de l’éducation basée sur le numérique, formateur à la FIPUN et professeur invité à l’UCLouvain.", en: "Contribution to the national digital education strategy, FIPUN trainer, and visiting professor at UCLouvain." } },
  { year: "2025", title: { fr: "ACP Summer School 2025", en: "ACP Summer School 2025" }, details: { fr: "Présidence générale de la 20e édition, première organisation en Afrique de cette école internationale de programmation par contraintes.", en: "General Chair of the 20th edition, the first edition of this international constraint programming school held in Africa." } },
];

function HomeContent({ language }: { language: Language }) {
  const about = localize(homeContent.aboutParagraphs, language);
  const positions = localize(homeContent.positions, language);
  const isEnglish = language === "en";

  return (
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
            <h1>Vinasétan Ratheil Esse Houndji</h1>
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
            <ol className="news-list">{news.map((item, index) => <li key={`${item.year}-${index}`}><time dateTime={item.year}>{item.year}</time><p><strong>{localize(item.title, language)}</strong><br />{localize(item.details, language)}</p></li>)}</ol>
          </section>
        </div>
      </div>
    </AcademicPage>
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
