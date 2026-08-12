import { AcademicPage, ExternalLink, PageIntro } from "./site-components";
import { type Language, type Localized, localize } from "./i18n";

type ResearchItem = { title: Localized; description: Localized };
type Prototype = { name: string; href: string; description: Localized };
type PrototypeGroup = { title: Localized; items: Prototype[] };

const copy = {
  title: { fr: "Recherche", en: "Research" },
  intro: { fr: "Apprentissage automatique — programmation par contraintes — optimisation combinatoire.", en: "Machine learning — constraint programming — combinatorial optimization." },
  areasTitle: { fr: "Axes de recherche", en: "Research areas" },
  projectsTitle: { fr: "Quelques projets", en: "Selected projects" },
  prototypesTitle: { fr: "Prototypes et recherches appliquées", en: "Prototypes and applied research" },
  videos: { fr: "Démonstrations vidéo disponibles sur ma", en: "Video demonstrations are available on my" },
  channel: { fr: "chaîne YouTube", en: "YouTube channel" },
} satisfies Record<string, Localized>;

const areas: ResearchItem[] = [
  { title: { fr: "Intelligence artificielle et apprentissage automatique", en: "Artificial intelligence and machine learning" }, description: { fr: "conception, expérimentation et évaluation de systèmes intelligents.", en: "design, experimentation, and evaluation of intelligent systems." } },
  { title: { fr: "Programmation par contraintes", en: "Constraint programming" }, description: { fr: "algorithmes de filtrage, algorithmes de recherche et modélisation de problèmes combinatoires.", en: "filtering algorithms, tree search, and modeling of combinatorial problems." } },
  { title: { fr: "Optimisation combinatoire", en: "Combinatorial optimization" }, description: { fr: "planification, ordonnancement, recherche opérationnelle et aide à la décision.", en: "planning, scheduling, operations research, and decision support." } },
  { title: { fr: "IA responsable et efficiente", en: "Responsible and efficient AI" }, description: { fr: "équité, interprétabilité et adaptation des systèmes aux contextes africains.", en: "fairness, interpretability, and adaptation of systems to African contexts." } },
];

const projects: ResearchItem[] = [
  { title: { fr: "OpenCS4Dev — Open Computer Science for Development (depuis 2026)", en: "OpenCS4Dev — Open Computer Science for Development (since 2026)" }, description: { fr: "coordonnateur Sud ; mutualisation durable de ressources pédagogiques en informatique entre l’UCLouvain et l’Université d’Abomey-Calavi. Financement ARES, Belgique.", en: "Southern coordinator; sustainable pooling of computer science learning resources between UCLouvain and the University of Abomey-Calavi. Funded by ARES, Belgium." } },
  { title: { fr: "ForCES (depuis 2026)", en: "ForCES (since 2026)" }, description: { fr: "coordonnateur Sud pour le Bénin ; analyse des politiques et pratiques et co-construction d’une infrastructure de formation continue en pédagogie universitaire numérique au Bénin et au Sénégal. Financement ARES, Belgique.", en: "Southern coordinator for Benin; analysis of policies and practices and co-development of a continuing professional development infrastructure for digital university pedagogy in Benin and Senegal. Funded by ARES, Belgium." } },
  { title: { fr: "STOP-MNT (depuis 2025)", en: "STOP-MNT (since 2025)" }, description: { fr: "responsable du work package 2 — IA et IoT ; développement d’une stratégie intégrée pour la prévention des maladies non transmissibles au Bénin. Fonds compétitifs de l’UAC.", en: "leader of work package 2 — AI and IoT; development of an integrated strategy for preventing non-communicable diseases in Benin. Funded by the UAC Competitive Research Fund." } },
  { title: { fr: "AI4CKD — Artificial Intelligence for Chronic Kidney Disease (depuis 2024)", en: "AI4CKD — Artificial Intelligence for Chronic Kidney Disease (since 2024)" }, description: { fr: "chef de projet ; développement d’un système de prédiction des stades de la maladie rénale chronique adapté au contexte béninois. Financement Google.", en: "principal investigator; development of a system for predicting chronic kidney disease stages in the Beninese context. Funded by Google." } },
  { title: { fr: "Opti’Plan — Méthodes et outils de planification automatique des soutenances (2024–2025)", en: "Opti’Plan — Methods and tools for automatic thesis-defense scheduling (2024–2025)" }, description: { fr: "coordonnateur Sud ; modèles d’optimisation adaptés aux formations à grands effectifs des universités béninoises. Financement ARES, Belgique.", en: "Southern coordinator; optimization models for large university programs in Benin. Funded by ARES, Belgium." } },
  { title: { fr: "IoT4Pest (depuis 2024)", en: "IoT4Pest (since 2024)" }, description: { fr: "membre ; surveillance des ravageurs agricoles en Afrique subsaharienne au moyen de réseaux de capteurs IoT. Financement Inria, France.", en: "member; monitoring agricultural pests in sub-Saharan Africa using IoT sensor networks. Funded by Inria, France." } },
  { title: { fr: "PATH (depuis 2024)", en: "PATH (since 2024)" }, description: { fr: "membre ; mobilité académique et renforcement des compétences de jeunes scientifiques africains en agriculture de précision. Financement Union européenne.", en: "member; academic mobility and capacity building for young African scientists in precision agriculture. Funded by the European Union." } },
  { title: { fr: "AI4Cardio (depuis 2021)", en: "AI4Cardio (since 2021)" }, description: { fr: "membre ; prévention et surveillance des maladies cardiovasculaires par intelligence artificielle au Bénin et au Sénégal. Financement AFD, France.", en: "member; AI-based prevention and monitoring of cardiovascular disease in Benin and Senegal. Funded by AFD, France." } },
];

const prototypeGroups: PrototypeGroup[] = [
  { title: { fr: "Agriculture", en: "Agriculture" }, items: [
    { name: "Sorghum yield prediction", href: "https://www.youtube.com/watch?v=6roFwkx-GUg", description: { fr: "estimation du rendement agricole à partir d’images de drones et de modèles d’apprentissage automatique.", en: "estimating crop yields from drone imagery and machine learning models." } },
    { name: "Rice Diseases Detector", href: "https://www.youtube.com/shorts/TGlb7GBm3og", description: { fr: "application mobile capable d’identifier trois maladies des feuilles de riz.", en: "a mobile application that identifies three rice leaf diseases." } },
    { name: "Spodoptera frugiperda detection", href: "https://www.youtube.com/watch?v=dcN2ERoCzkk", description: { fr: "localisation par drones et apprentissage automatique des zones de maïs infestées.", en: "locating infested maize areas using drones and machine learning." } },
  ] },
  { title: { fr: "Éducation", en: "Education" }, items: [
    { name: "AmonAI", href: "https://www.youtube.com/watch?v=qHrOYwNPAZ4", description: { fr: "prédiction des performances académiques pour anticiper les difficultés et mieux accompagner les étudiants.", en: "predicting academic performance to anticipate difficulties and better support students." } },
    { name: "ARGeo", href: "https://www.youtube.com/watch?v=4vwOPGhHOJI", description: { fr: "expériences en réalité augmentée pour renforcer l’enseignement de la géologie au secondaire.", en: "augmented-reality experiences for secondary-school geology education." } },
  ] },
  { title: { fr: "Santé", en: "Health" }, items: [
    { name: "KINÉGAN", href: "https://www.youtube.com/watch?v=ChtD7t2dQhw", description: { fr: "environnement virtuel immersif permettant aux patients de réaliser des exercices de rééducation suivis par un kinésithérapeute.", en: "an immersive virtual environment for therapist-supervised rehabilitation exercises." } },
    { name: "Surgical VR", href: "https://www.youtube.com/watch?v=8hHFp724TyQ", description: { fr: "simulation en réalité virtuelle d’une appendicectomie laparoscopique pour la formation pratique.", en: "a virtual-reality laparoscopic appendectomy simulation for practical training." } },
  ] },
  { title: { fr: "Sécurité", en: "Security" }, items: [
    { name: "NextVision", href: "https://www.youtube.com/watch?v=5ld64RLgyiM", description: { fr: "vidéosurveillance intelligente associant vision par ordinateur, traitement du langage naturel et détection d’objets en temps réel.", en: "intelligent video surveillance combining computer vision, natural language processing, and real-time object detection." } },
    { name: "Automatic filtering of unwanted scenes", href: "https://www.youtube.com/watch?v=-HQjQtVpQtY", description: { fr: "détection et suppression automatiques de séquences vidéo sensibles.", en: "automatic detection and removal of sensitive video sequences." } },
  ] },
  { title: { fr: "Tourisme, patrimoine et modélisation 3D", en: "Tourism, heritage, and 3D modeling" }, items: [
    { name: "WASETAN", href: "https://www.youtube.com/watch?v=GOgN6uLB5kY", description: { fr: "visite géolocalisée et augmentée de la Route des Esclaves à Ouidah.", en: "a geolocated augmented tour of the Slave Route in Ouidah." } },
    { name: "ARGuide", href: "https://www.youtube.com/watch?v=JrpjaA9deHw", description: { fr: "guide touristique en réalité augmentée consacré au monument de l’Amazone à Cotonou.", en: "an augmented-reality tourist guide to the Amazon monument in Cotonou." } },
    { name: "PNROuidah", href: "https://www.youtube.com/watch?v=QRuqR7d6Zt4", description: { fr: "parcours web immersif pour découvrir la Porte du Non-Retour et préserver la mémoire du site.", en: "an immersive web experience exploring the Door of No Return and preserving the site's memory." } },
    { name: "Houenouho", href: "https://www.youtube.com/watch?v=HMuVL3p1X-U", description: { fr: "restitution en réalité augmentée de scènes liées à la traite négrière sur les sites touristiques béninois.", en: "augmented-reality reconstructions of scenes related to the slave trade at Beninese heritage sites." } },
    { name: "Kondo", href: "https://www.youtube.com/watch?v=s3ehb0Mvc8I", description: { fr: "plateforme web de reconstruction de modèles 3D à partir d’images 2D.", en: "a web platform for reconstructing 3D models from 2D images." } },
  ] },
  { title: { fr: "Commerce électronique", en: "E-commerce" }, items: [
    { name: "AI for e-commerce", href: "https://www.youtube.com/watch?v=dWsmbyjPTTs", description: { fr: "prédiction de l’intention d’achat à partir des données de navigation sur une plateforme marchande.", en: "predicting purchase intention from browsing data on an e-commerce platform." } },
  ] },
];

export function ResearchContent({ language }: { language: Language }) {
  return <AcademicPage language={language}>
    <PageIntro title={localize(copy.title, language)}>{localize(copy.intro, language)}</PageIntro>
    <h2>{localize(copy.areasTitle, language)}</h2>
    <ul>{areas.map((item) => <li key={item.title.fr}><strong>{localize(item.title, language)}:</strong> {localize(item.description, language)}</li>)}</ul>
    <h2>{localize(copy.projectsTitle, language)}</h2>
    <ul>{projects.map((item) => <li key={item.title.fr}><strong>{localize(item.title, language)}:</strong> {localize(item.description, language)}</li>)}</ul>
    <h2>{localize(copy.prototypesTitle, language)}</h2>
    <p>{localize(copy.videos, language)} <ExternalLink href="https://www.youtube.com/channel/UC24YKysMzmerMK2a1PSlYwA">{localize(copy.channel, language)}</ExternalLink>.</p>
    {prototypeGroups.map((group) => <section key={group.title.fr}><h3>{localize(group.title, language)}</h3><ul>{group.items.map((item) => <li key={item.name}><ExternalLink href={item.href}><strong>{item.name}</strong></ExternalLink>: {localize(item.description, language)}</li>)}</ul></section>)}
  </AcademicPage>;
}
