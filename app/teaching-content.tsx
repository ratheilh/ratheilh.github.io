import { AcademicPage, ExternalLink, PageIntro } from "./site-components";
import { type Language, type Localized, localize } from "./i18n";

type Course = { title: Localized; program: Localized };
type CourseGroup = { title: Localized; courses: Course[] };
type TeachingResource = { name: Localized; description: Localized; href: string };

const copy = {
  title: { fr: "Enseignements", en: "Teaching" },
  intro: { fr: "Enseignements en intelligence artificielle, optimisation, algorithmique et programmation, principalement à l’IFRI.", en: "Courses in artificial intelligence, optimization, algorithms, and programming, primarily at IFRI." },
  pedagogyTitle: { fr: "Formation en pédagogie universitaire", en: "Training in university pedagogy" },
  pedagogy: { fr: "Major de la cohorte 2025 de la formation internationale en pédagogie universitaire numérique de l’Université libre de Bruxelles. En mai 2026, j’y suis intervenu comme titulaire de la Chaire du Sud sur les outils numériques au service de la pédagogie universitaire auprès d’enseignants-chercheurs de neuf pays.", en: "I was the top-ranked participant in the 2025 international training in digital university pedagogy at the Université libre de Bruxelles. In May 2026, I returned as a Chair of the South awardee, leading workshops on digital tools for university teaching for lecturers and researchers from nine countries." },
  resourceTitle: { fr: "Quelques ressources pédagogiques générales", en: "Some general teaching resources" },
} satisfies Record<string, Localized>;

const groups: CourseGroup[] = [
  { title: { fr: "Intelligence artificielle", en: "Artificial intelligence" }, courses: [
    { title: { fr: "Intelligence artificielle et applications", en: "Artificial intelligence and applications" }, program: { fr: "Master IFRI, depuis 2014–2015", en: "IFRI master's program, since 2014–2015" } },
    { title: { fr: "Concepts et applications de l’apprentissage automatique", en: "Machine learning concepts and applications" }, program: { fr: "Licence IA, depuis 2022–2023", en: "AI bachelor's program, since 2022–2023" } },
    { title: { fr: "Techniques de résolution de problèmes par la recherche", en: "Search-based problem-solving techniques" }, program: { fr: "Licence IA, depuis 2022–2023", en: "AI bachelor's program, since 2022–2023" } },
  ] },
  { title: { fr: "Optimisation et algorithmique", en: "Optimization and algorithms" }, courses: [
    { title: { fr: "Outils de résolution de problèmes complexes", en: "Complex problem-solving tools" }, program: { fr: "Master IFRI, depuis 2015–2016", en: "IFRI master's program, since 2015–2016" } },
    { title: { fr: "Algorithmes avancés", en: "Advanced algorithms" }, program: { fr: "Master IFRI, depuis 2019–2020", en: "IFRI master's program, since 2019–2020" } },
    { title: { fr: "Outils de résolution de problèmes d’optimisation", en: "Optimization problem-solving tools" }, program: { fr: "Licence IA, depuis 2022–2023", en: "AI bachelor's program, since 2022–2023" } },
  ] },
  { title: { fr: "Génie logiciel", en: "Software engineering" }, courses: [
    { title: { fr: "Analyse et conception orientées objet", en: "Object-oriented analysis and design" }, program: { fr: "Licence IFRI, depuis 2015–2016", en: "IFRI bachelor's program, since 2015–2016" } },
  ] },
];

const resources: TeachingResource[] = [
  {
    name: { fr: "Modèle de cahier des charges de mémoire", en: "Thesis project specification template" },
    description: { fr: "un modèle Word détaillé et structuré pour guider les étudiants dans la rédaction du cahier des charges de leur mémoire.", en: "a detailed, structured Word template guiding students through the preparation of their thesis project specifications." },
    href: "/teaching-resources/modele-cahier-des-charges-memoire.docx",
  },
  {
    name: { fr: "Réussir son mémoire en informatique", en: "Succeeding with your computer science thesis" },
    description: { fr: "un guide synthétique de 10 pages présentant les repères essentiels, du choix du sujet à la soutenance.", en: "a concise 10-page guide in French covering the essential steps from topic selection to thesis defense." },
    href: "/teaching-resources/reussir-son-memoire-en-informatique.pdf",
  },
  {
    name: { fr: "Travailler en équipe", en: "Working as a team" },
    description: { fr: "un support pédagogique consacré au travail en équipe.", en: "a French-language teaching resource about teamwork." },
    href: "/teaching-resources/travailler-en-equipe.pdf",
  },
];

function GeneralTeachingResources({ language }: { language: Language }) {
  return <>
    <h2>{localize(copy.resourceTitle, language)}</h2>
    <ul className="compact-list">
      {resources.map((resource) => (
        <li key={resource.href}>
          <ExternalLink href={resource.href}>{localize(resource.name, language)}</ExternalLink>
          {" / "}{localize(resource.description, language)}
        </li>
      ))}
    </ul>
  </>;
}

export function TeachingContent({ language }: { language: Language }) {
  return <AcademicPage language={language}>
    <PageIntro title={localize(copy.title, language)}>{localize(copy.intro, language)}</PageIntro>
    {groups.map((group) => <section key={group.title.fr}><h2>{localize(group.title, language)}</h2><ul>{group.courses.map((course) => <li key={course.title.fr}><strong>{localize(course.title, language)}</strong> / {localize(course.program, language)}</li>)}</ul></section>)}
    <h2>{localize(copy.pedagogyTitle, language)}</h2><p>{localize(copy.pedagogy, language)}</p>
    <GeneralTeachingResources language={language} />
  </AcademicPage>;
}
