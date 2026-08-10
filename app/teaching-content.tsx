import { AcademicPage, ExternalLink, PageIntro } from "./site-components";
import { type Language, type Localized, localize } from "./i18n";

type Course = { title: Localized; program: Localized };
type CourseGroup = { title: Localized; courses: Course[] };

const copy = {
  title: { fr: "Enseignements", en: "Teaching" },
  intro: { fr: "Enseignements en intelligence artificielle, optimisation, algorithmique et programmation, principalement à l’IFRI.", en: "Courses in artificial intelligence, optimization, algorithms, and programming, primarily at IFRI." },
  pedagogyTitle: { fr: "Formation en pédagogie universitaire", en: "Training in university pedagogy" },
  pedagogy: { fr: "Major de la cohorte 2025 de la Formation internationale en pédagogie universitaire numérique de l’Université libre de Bruxelles. En mai 2026, j’y suis intervenu comme titulaire de chaire du sud sur les outils numériques au service de la pédagogie universitaire auprès d’enseignants-chercheurs de neuf pays.", en: "I was the top-ranked participant in the 2025 International Training in Digital University Pedagogy at the Université libre de Bruxelles. In May 2026, I returned as a Chair of the South awardee, leading workshops on digital tools for university teaching for lecturers and researchers from nine countries." },
  resourceTitle: { fr: "Ressource pédagogique", en: "Teaching resource" },
  resourceName: { fr: "Modèle de cahier des charges de mémoire", en: "Thesis project specification template" },
  resourceDescription: { fr: "un document détaillé et structuré pour guider les étudiants dans la rédaction du cahier des charges de leur mémoire.", en: "a detailed, structured document guiding students through the preparation of their thesis project specifications." },
} satisfies Record<string, Localized>;

const groups: CourseGroup[] = [
  { title: { fr: "Intelligence artificielle", en: "Artificial intelligence" }, courses: [
    { title: { fr: "Intelligence artificielle et applications / Machine Learning", en: "Artificial Intelligence and Applications / Machine Learning" }, program: { fr: "Master IFRI, depuis 2014–2015", en: "IFRI Master's program, since 2014–2015" } },
    { title: { fr: "Concepts et applications de l’apprentissage automatique", en: "Machine Learning Concepts and Applications" }, program: { fr: "Licence IA, depuis 2022–2023", en: "AI Bachelor's program, since 2022–2023" } },
    { title: { fr: "Techniques de résolution de problèmes par la recherche", en: "Search-Based Problem-Solving Techniques" }, program: { fr: "Licence IA, depuis 2022–2023", en: "AI Bachelor's program, since 2022–2023" } },
  ] },
  { title: { fr: "Optimisation et algorithmique", en: "Optimization and algorithms" }, courses: [
    { title: { fr: "Outils de résolution de problèmes complexes", en: "Complex Problem-Solving Tools" }, program: { fr: "Master IFRI, depuis 2015–2016", en: "IFRI Master's program, since 2015–2016" } },
    { title: { fr: "Algorithmes avancés", en: "Advanced Algorithms" }, program: { fr: "Master IFRI, depuis 2019–2020", en: "IFRI Master's program, since 2019–2020" } },
    { title: { fr: "Outils de résolution de problèmes d’optimisation", en: "Optimization Problem-Solving Tools" }, program: { fr: "Licence IA, depuis 2022–2023", en: "AI Bachelor's program, since 2022–2023" } },
  ] },
  { title: { fr: "Génie logiciel", en: "Software engineering" }, courses: [
    { title: { fr: "Analyse et conception orientées objet", en: "Object-Oriented Analysis and Design" }, program: { fr: "Licence IFRI, depuis 2015–2016", en: "IFRI Bachelor's program, since 2015–2016" } },
  ] },
];

export function TeachingContent({ language }: { language: Language }) {
  return <AcademicPage language={language}>
    <PageIntro title={localize(copy.title, language)}>{localize(copy.intro, language)}</PageIntro>
    {groups.map((group) => <section key={group.title.fr}><h2>{localize(group.title, language)}</h2><ul>{group.courses.map((course) => <li key={course.title.fr}><strong>{localize(course.title, language)}</strong> — {localize(course.program, language)};</li>)}</ul></section>)}
    <h2>{localize(copy.pedagogyTitle, language)}</h2><p>{localize(copy.pedagogy, language)}</p>
    <h2>{localize(copy.resourceTitle, language)}</h2><p><ExternalLink href="https://ratheil.info/pedagogicalRessources/CahierDeCharges-rath.pdf">{localize(copy.resourceName, language)}</ExternalLink>: {localize(copy.resourceDescription, language)}</p>
  </AcademicPage>;
}
