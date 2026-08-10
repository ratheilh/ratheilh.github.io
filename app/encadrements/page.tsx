import type { Metadata } from "next";
import { AcademicPage, PageIntro } from "../site-components";
import { type Language, type Localized, localize } from "../i18n";
import { createPageMetadata, routes } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Encadrements et thèses",
  description: "Découvrez les thèses en cours et une sélection de mémoires de master, d’ingénieur et de licence encadrés par Vinasétan Ratheil Houndji.",
  path: routes.supervision.fr,
  locale: "fr",
  languageAlternates: routes.supervision,
});

type ThesisGroup = { year: string; items: string[] };

type DoctoralThesis = {
  name: string;
  title: Localized;
  description: Localized;
};

type ContributedDoctoralThesis = {
  name: string;
  years: string;
  institution: Localized;
  title: Localized;
  status: "ongoing" | "defended";
};

const doctoralSchool: Localized = {
  fr: "École doctorale des sciences de l’ingénieur",
  en: "Doctoral School of Engineering Sciences",
};

const doctoralTheses: DoctoralThesis[] = [

  {
    name: "Linuse Tikpon",
    title: { fr: "Système multi-agents immersif en réalité virtuelle pour la formation pédagogique des enseignants universitaires", en: "An immersive multi-agent virtual reality system for the pedagogical training of university teachers" },
    description: { fr: "Conception d’une classe universitaire virtuelle peuplée d’agents étudiants autonomes et adaptatifs, afin de permettre aux enseignants de s’entraîner et d’être évalués sur leurs pratiques pédagogiques et leur gestion de classe dans des scénarios progressifs et sans risque.", en: "Design of a virtual university classroom populated by autonomous, adaptive student agents, enabling teachers to practice and receive feedback on their teaching methods and classroom management through progressive, risk-free scenarios." },
  },
  {
    name: "Marie Mélène Sèmèvo Tonou",
    title: { fr: "Détection automatique des types de crises d’épilepsie à partir d’électroencéphalogrammes", en: "Automatic detection of epileptic seizure types from electroencephalograms" },
    description: { fr: "Conception d’un système d’aide à la décision capable d’interpréter des EEG et de détecter différents types de crises d’épilepsie en combinant signaux, données cliniques et contexte socio-économique. Le modèle sera évalué avec des spécialistes en conditions médicales réelles.", en: "Design of a decision-support system that interprets EEGs and detects different seizure types by combining signals, clinical data, and socioeconomic context. The model will be evaluated with specialists under real-world medical conditions." },
  },
  {
    name: "Grace Kisambu Nsele",
    title: { fr: "Détection automatique de la trypanosomiase à partir d’images de frottis sanguins", en: "Automatic detection of trypanosomiasis from blood smear images" },
    description: { fr: "Développement de modèles d’apprentissage automatique pour détecter la trypanosomiase humaine africaine et pré-classer ses stades. Le travail comprend la constitution d’un jeu de données local, une validation multisite et un prototype explicable adapté aux environnements à ressources limitées.", en: "Development of machine learning models to detect human African trypanosomiasis and pre-classify its stages. The work includes building a local dataset, multisite validation, and an explainable prototype suited to resource-constrained environments." },
  },
  {
    name: "Maryse Fortune Doloresse Gahou",
    title: { fr: "Système d’aide au dépistage précoce de l’insuffisance rénale chronique au Bénin basé sur l’apprentissage automatique", en: "A machine learning-based decision-support system for early chronic kidney disease screening in Benin"},
    description: { fr: "Développement d’un outil fiable et interprétable exploitant des données cliniques et biologiques locales pour identifier précocement les personnes à risque, prédire le stade de la maladie et assister les professionnels de santé au moyen d’une plateforme numérique.", en: "Development of a reliable, interpretable tool using local clinical and biological data to identify at-risk individuals, predict disease stage, and support healthcare professionals through a digital platform." },
  },
];

const contributedDoctoralTheses: ContributedDoctoralThesis[] = [
  {
    name: "Marianne Balogoun",
    years: "2022–2026",
    institution: { fr: "École doctorale des sciences de l’ingénieur", en: "Doctoral School of Engineering Sciences" },
    title: { fr: "Prédiction de la couverture radio à l’aide de techniques d’apprentissage automatique : cas de la télévision numérique terrestre au Bénin", en: "Radio coverage prediction using machine learning techniques: the case of digital terrestrial television in Benin" },
    status: "ongoing",
  },
  {
    name: "Souleymane Bah",
    years: "2022–2026",
    institution: { fr: "Institut de mathématiques et de sciences physiques", en: "Institute of Mathematics and Physical Sciences" },
    title: { fr: "Détection des ravageurs de cultures à l’aide de l’apprentissage automatique et de données satellitaires ouvertes : application aux jassides des cultures de coton au nord du Bénin", en: "Crop pest detection using machine learning and open satellite data: application to cotton jassids in northern Benin" },
    status: "ongoing",
  },
  {
    name: "Ariane Houetohossou",
    years: "2021–2024",
    institution: { fr: "École doctorale des sciences agronomiques et de l’eau", en: "Doctoral School of Agricultural and Water Sciences" },
    title: { fr: "Optimisation des paramètres des techniques d’apprentissage automatique pour la prédiction du rendement du maïs sous des conditions météorologiques et de fertilisation contrôlées", en: "Optimization of machine learning technique parameters for maize yield prediction under controlled weather and fertilization patterns" },
    status: "defended",
  },
  {
    name: "Peace Tahi",
    years: "2021–2024",
    institution: { fr: "École doctorale des sciences agronomiques et de l’eau", en: "Doctoral School of Agricultural and Water Sciences" },
    title: { fr: "Évaluation empirique des techniques d’apprentissage automatique pour la détection des maladies et la prédiction du rendement de la tomate dans des conditions climatiques et infectieuses simulées", en: "Empirical evaluation of machine learning techniques for disease detection and yield prediction in tomatoes under simulated climate and infection conditions" },
    status: "defended",
  },
];

const masterTheses: ThesisGroup[] = [
  {
    year: "2025",
    items: [
      "Automatic detection of pulmonary tuberculosis from medical images: case of the Democratic Republic of the Congo — Grace Nsele Kisambu (Master GL, IFRI)",
      "Protection de la vie privée dans le data mining par approche cryptographique : application à la détection de données aberrantes — Esdras Ago (Master GL, IFRI)",
    ],
  },
  {
    year: "2024",
    items: [
      "Interpreting complex machine learning models using association rules — Linuse Tikpon (Master GL, IFRI)",
      "Fairness in machine learning using pattern mining and constraint programming — Bienvenu Massou (Master GL, IFRI)",
    ],
  },
  {
    year: "2023",
    items: [
      "Fairness in machine learning using constraint programming — Mahoutin Afis Kousse (Master GL, IFRI)",
      "Performance profile for machine learning — Djivèdé Chryzal Beaudelaire Zossou (Master GL, IFRI)",
      "Vers la mise en place d’un registre des porteurs africains de pacemaker dans le cadre du projet AI4Cardio — Servule O. F. Kouzonde (Master SIRI, IFRI)",
      "Prévision du rendement du soja au Bénin à l’aide de modèles d’apprentissage automatique — Pascaline Hounkponou (Master Statistique, CIPMA)",
    ],
  },
  {
    year: "2021",
    items: [
      "Application web de partage de données multimodales pour le suivi des altérations des châteaux par traitement d’images et deep learning — Narech Houessou (Master SIRI, IFRI)",
    ],
  },
  {
    year: "2019",
    items: [
      "Système d’identification de maladies des plantes de riz par réseaux de neurones convolutifs — K. Merveille Santi Zinsou (Master SIRI, IFRI)",
    ],
  },
  {
    year: "2018",
    items: [
      "Système d’information de gestion du parc automobile béninois fondé sur la lecture automatique des plaques minéralogiques — Chabi A. Rodolpho Babatounde (Master SIRI, IFRI)",
    ],
  },
  {
    year: "2017",
    items: [
      "Détermination par apprentissage automatique des paramètres d’une heuristique générique pour les jeux de type n-alignés — Hafiz Abdoulaye (Master, IFRI)",
      "La business intelligence au service de la microfinance au Bénin : application au PAPME — Gabin Anadjamè (Master, IFRI)",
      "Résolution du pigment sequencing problem avec les algorithmes génétiques — Tafsir Gna (Master, IFRI)",
    ],
  },
  {
    year: "2016",
    items: [
      "Heuristique générique pour les jeux de type n-alignés — Koubouratou Idjaton (Master, IFRI)",
      "Évaluation d’heuristiques de recherche informée : cas du n-puzzle — Gael Aglin (Master, IFRI)",
    ],
  },
];

const engineerTheses: ThesisGroup[] = [
  {
    year: "2026",
    items: [
      "Déterminants et prédiction de l’espérance de vie par apprentissage automatique : application au Bénin et à ses pays limitrophes — Yham Steeve Mackéols Fadegnon (Ingénieur ISE, ENEAM)",
      "Valeur ajoutée agricole au Bénin : déterminants climatiques et économiques et prévision par apprentissage automatique — Comlanvi Florentin Brilland Baba (Ingénieur ISE, ENEAM)",
      "Leviers agricoles et bien-être économique des ménages ruraux au Bénin : une approche par machine learning explicable et causal — Akouvi Marie-Christiane Emmanuella Tsipoaka (Ingénieur ISE, ENEAM)",
    ],
  },
  {
    year: "2023",
    items: [
      "Prédiction des rendements des plantations d’anacardiers au Bénin par le machine learning — Florian Dudereau Siaken Yabou (Ingénieur ISE, ENEAM)",
      "Prédiction de la valeur client en assurance-vie par apprentissage automatique — Sênan Emeric Chris Gbodo (Ingénieur ISE, ENEAM)",
    ],
  },
  {
    year: "2021",
    items: [
      "Application de la réalité augmentée à la visite de site touristique : cas de la Route des Esclaves de Ouidah — Sémiton Lémec Renaud Ahouandjinou (Ingénieur GIT, EPAC)",
      "Système d’identification automatique de Spodoptera frugiperda — Tchegnon Romaric Madegnan (Ingénieur GIT, EPAC)",
      "Prédiction de l’intention d’achat sur les plateformes de commerce électronique — Yannick Sèyivè Dona Kiki (Ingénieur GIT, EPAC)",
      "Filtrage vidéo : détection et suppression de scènes à caractère pornographique — Nounagnon Moïse Combelles Savoedo (Ingénieur GIT, EPAC)",
      "Correcteur syntaxique des diagrammes UML : cas du diagramme de cas d’utilisation — Bignon Murielle Souvenir Lokonon (Ingénieur GIT, EPAC)",
      "Détection des zones de maïs infestées par Spodoptera frugiperda à l’aide d’algorithmes d’apprentissage automatique — Yasminath Aïcha Sidi Ali (Ingénieur GIT, EPAC)",
      "Algorithmes efficaces pour la planification des soutenances — Harry Gbaguidi (Ingénieur GIT, EPAC)",
    ],
  },
  {
    year: "2019",
    items: [
      "Classification automatique de documents fondée sur le bag of words et l’extraction de motifs séquentiels — Jean-Baptiste Maureen Sossou (Ingénieur GIT, EPAC)",
      "Prédiction des performances d’une architecture 2D SOME-Bus avec le deep learning — Harold Silvère Kiossou (Ingénieur GIT, EPAC)",
    ],
  },
];

const bachelorTheses: ThesisGroup[] = [
  {
    year: "2026",
    items: [
      "Optimization of the blood product distribution chain in Benin: case of the Zou Department — Mawulé Robert God’Right Adohounblessi (Licence IA, IFRI)",
      "Système intelligent de conseil pédagogique pour l’enseignement supérieur : segmentation du public cible et objectifs d’apprentissage — Alimanth Sadiyath Modukpè Adjibade (Licence IA, IFRI)",
    ],
  },
  {
    year: "2024",
    items: [
      "KidneyDoc: a patient management platform for the nephrology department of CNHU — Samira Bandolo Anaïs Mvogo (Licence GL, IFRI)",
      "Application web de gestion des emplois du temps : cas de l’IFRI — Jordy Gnanih (Licence GL, IFRI)",
      "Documentaire sur l’impact de l’intelligence artificielle sur la vie privée — Odile Lalou (Licence IM, IFRI)",
    ],
  },
  {
    year: "2023",
    items: [
      "Application web d’aide à la planification des soutenances : cas de l’IFRI — Karen Houeha (Licence GL, IFRI)",
      "Sensibilisation à l’utilisation responsable de l’intelligence artificielle : vidéo et stratégie de communication — Lyne Gbaguidi (Licence IM, IFRI)",
      "Implementation of a DevOps architecture for IFRI applications — Parfait Tolefo (Licence SI, IFRI)",
      "Security audit of a web platform: the case of the IFRI website — Marilyse Sèdé Ahouangonou (Licence SI, IFRI)",
      "Application de gestion des finances personnelles — Rayanath Toleba (Licence GL, IFRI)",
      "Prototype d’une application d’achat de produits pharmaceutiques en ligne — Esther Ahossi (Licence IM, IFRI)",
      "API RESTful pour la digitalisation des services d’un réseau d’entreprise : cas de Coursier Express Africa — Carmel Prosper Sagbo (Licence GL, IFRI)",
      "Visite de la Route des Esclaves en réalité augmentée et basée sur la géolocalisation — Nicos Gbènato Hounvio (Licence IM, IFRI)",
      "Expérience immersive en réalité augmentée pour les visiteurs du monument de l’Amazone — Elvis Eustache Patinvoh (Licence IM, IFRI)",
      "Application de gestion de la location immobilière — Damien Ulrich Doevi (Licence GL, IFRI)",
      "NextVision, an AI-powered intelligent video surveillance platform for enhanced security — Prince Gédéon Yiségnon Guedje (Licence IM, IFRI)",
      "Application mobile de réalité virtuelle d’aide à la rééducation par simulation d’imagerie motrice — O. Adéwoumi Lazare Jean-Deluxe Fagbohoun (Licence IM, IFRI)",
      "Visite virtuelle 3D de la Porte du Non-Retour à Ouidah — O. A. Anne-Marie Chabi (Licence IM, IFRI)",
      "Application mobile de mise en relation des producteurs maraîchers, éleveurs et consommateurs — Liwa Augustine Tawe (Licence GL, IFRI)",
      "Géolocalisation assistée par réalité augmentée : cas du campus d’Abomey-Calavi — Gisèle Goubalan (Licence IM, IFRI)",
    ],
  },
  {
    year: "2022",
    items: [
      "UMLDesigner: an automatic UML diagram design tool — Généreux Mahouzonssou Akotenou (Licence GL, IFRI)",
      "Outil de sélection automatique de candidats par programmation par contraintes — Bignon Klaus Précieux Bonou Selegbe (Licence GL, IFRI)",
      "Application d’aide à la planification des soutenances des étudiants : cas de l’IFRI — Mahussi Jeff Fidèle Datongnon (Licence GL, IFRI)",
    ],
  },
  {
    year: "2021",
    items: [
      "Modélisation du risque de crédit par apprentissage automatique : cas de la Mutuelle pour le Développement à la Base — Ogbinto Samir Tafel Boni (IFRI)",
      "Application web de suivi technico-économique des fermes avicoles au Bénin — Marcellin Zinsou (IFRI)",
      "Outil d’identification automatique des éléments d’une facture — Lizzy Adjagba (IFRI)",
      "Application de simulation d’ameublement en réalité augmentée — Kelvine Natacha Mahussi Honon Dadjo (IFRI)",
    ],
  },
  {
    year: "2020",
    items: [
      "Application de gestion des heures supplémentaires dans les universités publiques du Bénin — Pascaline Hounkponou (Licence SIRI, IFRI)",
      "Application en réalité augmentée pour l’enseignement de la géologie au secondaire — Aîchatou Oroubade (Licence IM, IFRI)",
    ],
  },
  {
    year: "2019",
    items: [
      "Simulation médicale en réalité virtuelle : cas de l’appendicectomie — Mahoutin Afis Kousse (Licence GL, IFRI)",
      "Reconstruction 3D à partir de séquences d’images : application au tourisme — Gabriel Julien Agbossou (Licence GL, IFRI)",
      "Réalisation d’un agrégateur de paiement : KKiaPay — Mélaine Kiossou (ENEAM)",
    ],
  },
  {
    year: "2018",
    items: [
      "Système de prédiction des performances académiques des étudiants : cas de l’IFRI-UAC — Iffanice Houndayi (IFRI)",
      "Implémentation de TLS fondé sur la cryptographie à courbes elliptiques dans des prises intelligentes — Abdias Dagbekpo (IFRI)",
      "Système de traduction français-fongbé — Luc Atakpa (IFRI)",
      "Chatbot vocal de présentation des formations de l’Université d’Abomey-Calavi — Servule O. F. Kouzonde (IFRI)",
      "Système de commande domotique par SMS — Yessir Gouton Noudohouénou (IFRI)",
    ],
  },
  {
    year: "2017",
    items: [
      "Le jeu Awalé : interface de programmation applicative et interface en réalité augmentée — Marie-Parisius Houessou (IFRI)",
      "Plateforme de gestion des rendez-vous et dossiers médicaux dans les établissements de santé — Ahouefa Pascale Ninon Kpossou (IFRI)",
    ],
  },
  {
    year: "2015",
    items: [
      "Système de gestion de notes conforme au LMD dans une entité de l’UAC : cas de l’IFRI — Gael Aglin (IFRI)",
      "Réimplémentation de la librairie AIMA sous la forme d’un langage dédié — Freud Lanha (IFRI)",
    ],
  },
];

function ThesisGroups({ groups }: { groups: ThesisGroup[] }) {
  return groups.map((group) => (
    <section key={group.year}>
      <h3>{group.year}</h3>
      <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  ));
}

function SupervisionContent({ language }: { language: Language }) {
  const isEnglish = language === "en";

  return (
    <AcademicPage language={language}>
      <PageIntro title={isEnglish ? "Supervision" : "Encadrements"}>
        {isEnglish
          ? "Ongoing PhD research, contributions to PhD supervision, and a selection of supervised master’s, engineering, and bachelor’s theses in artificial intelligence, optimization, and software engineering."
          : "Thèses en cours, contributions à l’encadrement doctoral et sélection de mémoires de master, d’ingénieur et de licence encadrés en intelligence artificielle, optimisation et génie logiciel."}
      </PageIntro>

      <h2>{isEnglish ? "Ongoing PhD theses" : "Thèses en cours"}</h2>
      <ol className="publication-list">
        {doctoralTheses.map((thesis) => (
          <li key={thesis.name}>
            <span className="title">{localize(thesis.title, language)}</span>
            <span className="details">
              <strong>{thesis.name}</strong> · {localize(doctoralSchool, language)}
              <br />
              {localize(thesis.description, language)}
            </span>
          </li>
        ))}
      </ol>

      <h2>{isEnglish ? "Contributions to PhD supervision" : "Contributions à l’encadrement de thèses"}</h2>
      <ol className="publication-list">
        {contributedDoctoralTheses.map((thesis) => (
          <li key={thesis.name}>
            <span className="title">{localize(thesis.title, language)}</span>
            <span className="details">
              <strong>{thesis.name}</strong> · {localize(thesis.institution, language)} · {thesis.years}
              <br />
              {thesis.status === "defended"
                ? (isEnglish ? "Defended" : "Soutenue")
                : (isEnglish ? "Ongoing" : "En cours")}
            </span>
          </li>
        ))}
      </ol>

      <h2>{isEnglish ? "Master’s theses" : "Mémoires de master"}</h2>
      <ThesisGroups groups={masterTheses} />

      <h2>{isEnglish ? "Engineering degree theses" : "Mémoires d’ingénieur"}</h2>
      <ThesisGroups groups={engineerTheses} />

      <h2>{isEnglish ? "Bachelor’s theses" : "Mémoires de licence"}</h2>
      <ThesisGroups groups={bachelorTheses} />

    </AcademicPage>
  );
}

function Encadrements() {
  return <SupervisionContent language="fr" />;
}

Encadrements.English = function EnglishSupervision() {
  return <SupervisionContent language="en" />;
};

export default Encadrements;
