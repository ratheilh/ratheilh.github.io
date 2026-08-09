import { AcademicPage, PageIntro } from "../site-components";

export const metadata = { title: "Encadrements" };

export default function Encadrements() {
  return (
    <AcademicPage>
      <PageIntro title="Encadrements">
        Encadrement de travaux en intelligence artificielle, optimisation, génie logiciel et applications interdisciplinaires.
      </PageIntro>

      <h2>Doctorat</h2>
      <p>
        Les travaux doctoraux que j’accompagne portent notamment sur l’intelligence artificielle explicable pour la santé,
        l’analyse de signaux EEG, la qualité des données, l’apprentissage automatique appliqué à l’agriculture et les méthodes
        d’optimisation pour l’apprentissage.
      </p>

      <h2>Master</h2>
      <ul>
        <li>évaluation et comparaison de modèles d’apprentissage automatique ;</li>
        <li>détection de biais et amélioration de jeux de données ;</li>
        <li>outils d’aide à la décision fondés sur l’IA et l’optimisation ;</li>
        <li>applications de l’IA en santé, agriculture et éducation.</li>
      </ul>

      <h2>Licence</h2>
      <p>
        J’encadre régulièrement des projets de fin de formation à l’IFRI, depuis l’analyse du besoin jusqu’à la conception,
        l’expérimentation et la présentation du prototype. Les sujets associent génie logiciel, données, intelligence
        artificielle et résolution de problèmes concrets.
      </p>

      <p className="notice">
        Une liste détaillée des mémoires et thèses, classée par année et par niveau, sera ajoutée après vérification des données de l’ancien site.
      </p>
    </AcademicPage>
  );
}
