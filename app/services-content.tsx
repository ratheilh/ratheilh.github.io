import { AcademicPage, ExternalLink, PageIntro } from "./site-components";
import { type Language, type Localized, localize } from "./i18n";

type EvaluatedThesis = {
  year: string;
  candidate: string;
  title: Localized;
  institution: Localized;
  role: Localized;
};

const copy = {
  title: { fr: "Services", en: "Services" },
  intro: { fr: "Responsabilités scientifiques, expertise académique et initiatives au service des communautés de recherche et de la société.", en: "Scientific responsibilities, academic expertise, and initiatives serving research communities and society." },
  evaluationsTitle: { fr: "Évaluation de thèses", en: "PhD thesis evaluation" },
  evaluationsIntro: { fr: "Participation à l’évaluation de travaux doctoraux en intelligence artificielle, en informatique et dans leurs domaines d’application.", en: "Participation in the evaluation of doctoral research in artificial intelligence, computer science, and their application domains." },
  friaTitle: { fr: "Fondation FRIARE", en: "FRIARE Foundation" },
  bwaiTitle: { fr: "Benin Workshop on Artificial Intelligence", en: "Benin Workshop on Artificial Intelligence" },
  summerTitle: { fr: "ACP Summer School 2025", en: "ACP Summer School 2025" },
  mifyTitle: { fr: "Mify Artificial Intelligence Contest", en: "Mify Artificial Intelligence Contest" },
  expertiseTitle: { fr: "Expertise et service scientifique", en: "Expertise and scientific service" },
  previousTitle: { fr: "Autres responsabilités", en: "Other responsibilities" },
} satisfies Record<string, Localized>;

const evaluatedTheses: EvaluatedThesis[] = [
  { year: "2026", candidate: "Merveille Santi Zinsou", title: { fr: "A robust and interpretable AI framework for the histopathological diagnosis of infectious skin diseases: the SINDI approach validated on mycetoma", en: "A robust and interpretable AI framework for the histopathological diagnosis of infectious skin diseases: the SINDI approach validated on mycetoma" }, institution: { fr: "Université Gaston Berger de Saint-Louis, Sénégal", en: "Gaston Berger University of Saint-Louis, Senegal" }, role: { fr: "Rapporteur de thèse", en: "Thesis reviewer" } },
  { year: "2026", candidate: "Abdoulaye Déthié Sarr", title: { fr: "Modélisation thématique pour la détection de points de vue sur un corpus wolof-français", en: "Topic modeling for viewpoint detection in a Wolof–French corpus" }, institution: { fr: "Université Alioune Diop de Bambey, Sénégal", en: "Alioune Diop University of Bambey, Senegal" }, role: { fr: "Examinateur", en: "Examiner" } },
  { year: "2023", candidate: "Charles Thomas", title: { fr: "Advanced modelling and search techniques for routing and scheduling problems", en: "Advanced modelling and search techniques for routing and scheduling problems" }, institution: { fr: "UCLouvain — Louvain School of Engineering, Belgique", en: "UCLouvain — Louvain School of Engineering, Belgium" }, role: { fr: "Membre du jury", en: "Jury member" } },
];

const expertise: { year?: string; text: Localized }[] = [
  { year: "2026", text: { fr: "expert IA et numérique auprès du ministère de l’Enseignement supérieur et de la Recherche scientifique pour l’élaboration de la stratégie nationale de l’éducation fondée sur le numérique ;", en: "AI and digital expert to the Ministry of Higher Education and Scientific Research for the development of the national digital education strategy;" } },
  { year: "2025", text: { fr: "élaboration d’un guide et formation des acteurs de l’écosystème des données probantes à l’utilisation de l’IA ;", en: "development of a guide and training for evidence-ecosystem stakeholders on the use of AI;" } },
  { year: "2024", text: { fr: "contribution à l’étude de faisabilité de la stratégie nationale de l’intelligence artificielle et des mégadonnées du Bénin ;", en: "contribution to the feasibility study for Benin's national artificial intelligence and big data strategy;" } },
  { year: "2022–2023", text: { fr: "contribution à la SNIAM et à la cartographie de l’écosystème béninois de l’intelligence artificielle ;", en: "contribution to the national AI and big data strategy and mapping of Benin's artificial intelligence ecosystem;" } },
];

const otherResponsibilities: Localized<string[]> = {
  fr: [
    "Chef du département de génie logiciel de l’IFRI depuis 2022 et coordonnateur des formations de licence et de master en génie logiciel, intelligence artificielle, sécurité informatique, systèmes embarqués et internet des objets, et internet et multimédia ;",
    "Participation, depuis 2015, à la conception, à la rédaction et à la validation de plusieurs offres de formation : licences et masters de l’IFRI en intelligence artificielle, génie logiciel, sécurité informatique et internet et multimédia, ainsi que le master en hydro-informatique de l’Institut national de l’eau ;",
    "Participation à des points d’étape de thèse et à des comités de suivi doctoral ;",
    "Membre ou président de jury de nombreuses soutenances de mémoires de licence, de master et d’ingénieur depuis 2014 ;",
    "Coordonnateur des formations de master en génie logiciel, sécurité informatique, et systèmes d’information et réseaux informatiques, de janvier 2019 à juillet 2022 ;",
    "Fondateur et coordonnateur de Startup Grind University of Abomey-Calavi, de 2020 à 2021 ;",
    "Responsable des groupes pédagogiques de troisième année en génie logiciel et sécurité informatique, de janvier à décembre 2018 ;",
    "Participation, en 2018, à la rédaction et à la validation du projet de création d’un centre d’excellence en eau et assainissement, comme représentant de l’IFRI pour l’hydro-informatique ;",
    "Curateur du Cotonou Hub de la Global Shapers Community, de 2018 à 2019 ;",
    "Cofondateur et directeur général de Machine Intelligence For You (MIFY), d’août 2017 à septembre 2018.",
  ],
  en: [
    "Head of IFRI’s software engineering department since 2022 and coordinator of bachelor’s and master’s programs in software engineering, artificial intelligence, cybersecurity, embedded systems and the internet of things, and internet and multimedia;",
    "Contribution, since 2015, to the design, drafting, and validation of several academic programs: IFRI bachelor’s and master’s programs in artificial intelligence, software engineering, cybersecurity, and internet and multimedia, as well as the National Water Institute’s master’s program in hydroinformatics;",
    "Participation in PhD progress reviews and doctoral monitoring committees;",
    "Member or chair of numerous bachelor’s, master’s, and engineering thesis defense committees since 2014;",
    "Coordinator of master’s programs in software engineering, cybersecurity, and information systems and computer networks, January 2019–July 2022;",
    "Founder and coordinator of Startup Grind University of Abomey-Calavi, 2020–2021;",
    "Coordinator of third-year software engineering and cybersecurity teaching groups, January–December 2018;",
    "Contribution in 2018 to drafting and validating the project to create a center of excellence in water and sanitation, as IFRI’s representative for Hydroinformatics;",
    "Curator of the Cotonou Hub of the Global Shapers Community, 2018–2019;",
    "Co-founder and chief executive officer of Machine Intelligence For You (MIFY), August 2017–September 2018.",
  ],
};

export function ServicesContent({ language }: { language: Language }) {
  const isEnglish = language === "en";
  return <AcademicPage language={language}>
    <PageIntro title={localize(copy.title, language)}>{localize(copy.intro, language)}</PageIntro>
    <h2>{localize(copy.evaluationsTitle, language)}</h2><p>{localize(copy.evaluationsIntro, language)}</p>
    <ol className="publication-list">{evaluatedTheses.map((thesis) => <li key={`${thesis.year}-${thesis.candidate}`}><span className="title">{localize(thesis.title, language)}</span><span className="details"><strong>{thesis.candidate}</strong> · {localize(thesis.institution, language)} · {thesis.year}<br />{localize(thesis.role, language)}</span></li>)}</ol>

    <h2>{localize(copy.friaTitle, language)}</h2>
    <p>{isEnglish ? "From 2023 to 2026, I served as president of the " : "J’ai présidé de 2023 à 2026 la "}<ExternalLink href="https://friare.org">{isEnglish ? "Ratheil Foundation for Responsible and Efficient Artificial Intelligence (FRIARE)" : "Fondation Ratheil pour une Intelligence Artificielle Responsable et Efficiente (FRIARE)"}</ExternalLink>{isEnglish ? ", dedicated to awareness, research, public dialogue, training, and project support in Africa." : ", consacrée à la sensibilisation, à la recherche, au dialogue public, à la formation et à l’accompagnement de projets en Afrique."}</p>

    <h2>{localize(copy.bwaiTitle, language)}</h2>
    <p>{isEnglish ? "I am general co-chair of the " : "Je suis general co-chair du "}<ExternalLink href="https://bwai-ifri-uac.bj">Benin Workshop on Artificial Intelligence</ExternalLink>{isEnglish ? " and have contributed to five editions since 2018. This national conference brings together researchers, students, professionals, and public-sector stakeholders around artificial intelligence in Benin." : " et ai contribué à cinq éditions depuis 2018. Cette conférence nationale réunit chercheurs, étudiants, professionnels et acteurs publics autour de l’intelligence artificielle au Bénin."}</p>

    <h2>{localize(copy.summerTitle, language)}</h2>
    <p>{isEnglish ? "I served as general chair of the " : "J’ai été general chair de la "}<ExternalLink href="https://school.a4cp.org/summer2025/index.html">{isEnglish ? "20th ACP Summer School" : "20e édition de l’ACP Summer School"}</ExternalLink>{isEnglish ? " in 2025, the first African edition of this international constraint programming school." : ", organisée en 2025. Il s’agissait de la première édition en Afrique de cette école internationale de programmation par contraintes."}</p>

    <h2>{localize(copy.mifyTitle, language)}</h2>
    <p>{isEnglish ? "From 2017 to 2022, I chaired the competition committee for six editions of the " : "J’ai assuré de 2017 à 2022 la présidence du comité de compétition de six éditions du "}<ExternalLink href="https://maic.mify-ai.com/">Mify Artificial Intelligence Contest</ExternalLink>{isEnglish ? ", an international competition designed to develop practical skills in artificial intelligence and problem solving." : ", concours international destiné à développer les compétences pratiques en intelligence artificielle et en résolution de problèmes."}</p>

    <h2>{localize(copy.expertiseTitle, language)}</h2>
    <ul>{expertise.map((item) => <li key={item.year}><strong>{item.year} :</strong> {localize(item.text, language)}</li>)}<li>{isEnglish ? "member of the " : "membre de l’"}<ExternalLink href="https://www.a4cp.org/">Association for Constraint Programming</ExternalLink>{isEnglish ? " and scientific committees including CP, JFPC, and CARI." : " et de comités scientifiques, notamment CP, JFPC et CARI."}</li></ul>

    <h2>{localize(copy.previousTitle, language)}</h2><ul>{localize(otherResponsibilities, language).map((item) => <li key={item}>{item}</li>)}</ul>
  </AcademicPage>;
}
