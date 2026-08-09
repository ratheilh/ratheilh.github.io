import { AcademicPage, PageIntro } from "../site-components";

export const metadata = { title: "Enseignement" };

export default function Enseignement() {
  return (
    <AcademicPage>
      <PageIntro title="Enseignement">
        Enseignements en intelligence artificielle, optimisation, algorithmique et génie logiciel à l’IFRI.
      </PageIntro>

      <h2>Intelligence artificielle</h2>
      <ul>
        <li>Concepts et applications de l’apprentissage automatique ;</li>
        <li>Introduction à l’intelligence artificielle ;</li>
        <li>Techniques de résolution de problèmes par la recherche ;</li>
        <li>Évaluation des modèles, explicabilité et IA responsable.</li>
      </ul>

      <h2>Optimisation et algorithmique</h2>
      <ul>
        <li>Recherche opérationnelle ;</li>
        <li>Algorithmes avancés ;</li>
        <li>Programmation par contraintes et optimisation combinatoire ;</li>
        <li>Graphes, programmation dynamique et méthodes gloutonnes.</li>
      </ul>

      <h2>Génie logiciel</h2>
      <ul>
        <li>Méthodes d’analyse et de spécification ;</li>
        <li>UML et SysML ;</li>
        <li>Conception de systèmes logiciels et prototypage.</li>
      </ul>

      <h2>Formation des enseignants</h2>
      <p>
        J’anime également des formations consacrées à la pédagogie universitaire numérique, aux usages responsables de
        l’intelligence artificielle dans l’enseignement supérieur et à la conception d’activités d’apprentissage actives.
      </p>
    </AcademicPage>
  );
}
