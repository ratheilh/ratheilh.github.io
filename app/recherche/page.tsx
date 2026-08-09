import { AcademicPage, PageIntro } from "../site-components";

export const metadata = { title: "Recherche" };

export default function Recherche() {
  return (
    <AcademicPage>
      <PageIntro title="Recherche">
        Intelligence artificielle, optimisation et qualité des données, avec une attention portée aux besoins et aux contraintes des contextes africains.
      </PageIntro>

      <h2>Axes de recherche</h2>
      <ul>
        <li><strong>Évaluation des systèmes d’IA :</strong> métriques, protocoles de test, robustesse et analyse comparative des modèles.</li>
        <li><strong>Qualité des données :</strong> détection des biais, déséquilibre des classes, valeurs manquantes et représentativité des jeux de données.</li>
        <li><strong>IA responsable :</strong> équité, explicabilité, gouvernance et prise en compte des connaissances humaines.</li>
        <li><strong>Optimisation :</strong> programmation par contraintes, recherche locale, métaheuristiques et aide à la décision.</li>
      </ul>

      <h2>Domaines d’application</h2>
      <ul className="simple-list">
        <li><strong>Santé.</strong> Maladie rénale chronique, maladies cardiovasculaires et analyse de signaux EEG.</li>
        <li><strong>Agriculture.</strong> Prévision des rendements, suivi des ravageurs et analyse de données climatiques et agronomiques.</li>
        <li><strong>Éducation.</strong> Analyse des profils d’apprentissage, accompagnement pédagogique et usages responsables de l’IA générative.</li>
        <li><strong>Génie logiciel.</strong> Modélisation automatique, analyse de diagrammes UML et outils intelligents d’aide au développement.</li>
      </ul>

      <h2>Projets sélectionnés</h2>
      <ul>
        <li><strong>AI4CKD :</strong> intelligence artificielle pour la maladie rénale chronique à partir de données locales.</li>
        <li><strong>ACCESS Neuro – Bénin :</strong> modèles d’IA pour l’analyse d’EEG et évaluation de dispositifs à faible coût.</li>
        <li><strong>FairTestMaker-ML :</strong> génération de jeux de test plus représentatifs à l’aide de la programmation par contraintes.</li>
        <li><strong>IA pour l’agriculture :</strong> rendement du maïs et de la tomate, suivi des jassides du cotonnier et fusion de données satellitaires.</li>
      </ul>
    </AcademicPage>
  );
}
