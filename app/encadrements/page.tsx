import type { Metadata } from "next";
import { AcademicPage, ExternalLink, PageIntro } from "../site-components";
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
  institution: Localized;
  title: Localized;
  university?: string;
};

type ContributedDoctoralThesis = {
  name: string;
  years: string;
  institution: Localized;
  title: Localized;
  status: "ongoing" | "defended";
  university?: string;
};

type ThesisKind = "master" | "engineer" | "bachelor";

const linkedinProfiles = new Map<string, string>([
  ["Linuse Tikpon", "https://www.linkedin.com/in/linuse-tikpon-80a1b81a5"],
  ["Marie Mélène Sèmèvo Tonou", "https://www.linkedin.com/in/marie-melene-tonou"],
  ["Maryse Fortune Doloresse Gahou", "https://www.linkedin.com/in/maryse-gahou"],
  ["Noël Christi Honzounnon", "https://www.linkedin.com/in/noel-christi-honzounnon-01ba85191/"],
  ["Marianne Balogoun", "https://www.linkedin.com/in/marianne-a-omonlola-balogoun-3bbb00175"],
  ["Marianne A. O. Balogoun", "https://www.linkedin.com/in/marianne-a-omonlola-balogoun-3bbb00175"],
  ["Souleymane Bah", "https://www.linkedin.com/in/souleymane-bah-584035212"],
  ["Fatou Lo Niang", "https://www.linkedin.com/in/fatou-lo-niang/"],
  ["Ariane Houetohossou", "https://www.linkedin.com/in/houetohossou-ariane-a84abb177"],
  ["Peace Tahi", "https://www.linkedin.com/in/souand-tahi-ba6ba6124"],
  ["Mahoutin Afis Kousse", "https://www.linkedin.com/in/mahoutin-afis-malick-kousse-4807a1199"],
  ["Djivèdé Chryzal Beaudelaire Zossou", "https://www.linkedin.com/in/chryzal"],
  ["Pascaline Hounkponou", "https://www.linkedin.com/in/pascaline-hounkponou-25b539195"],
  ["Bienvenu Massou", "https://www.linkedin.com/in/bienvenu-massou-982259269"],
  ["Narech Houessou", "https://www.linkedin.com/in/narech-houessou"],
  ["K. Merveille Santi Zinsou", "https://www.linkedin.com/in/kpêtchéhoué-merveille-santi-zinsou-33b95b152"],
  ["Chabi A. Rodolpho Babatounde", "https://www.linkedin.com/in/chabibabatounde"],
  ["Koubouratou Idjaton", "https://www.linkedin.com/in/idjaton"],
  ["Gael Aglin", "https://www.linkedin.com/in/aglingael"],
  ["Akouvi Marie-Christiane Emmanuella Tsipoaka", "https://www.linkedin.com/in/emmanuella-tsipoaka-a83012251"],
  ["Florian Dudereau Siaken Yabou", "https://www.linkedin.com/in/florian-siaken-6120a321b"],
  ["Sênan Emeric Chris Gbodo", "https://www.linkedin.com/in/s%C3%AAnan-emeric-chris-gbodo-3607691a1"],
  ["Sémiton Lémec Renaud Ahouandjinou", "https://www.linkedin.com/in/lémec-ahouandjinou-6a7803181"],
  ["Tchegnon Romaric Madegnan", "https://www.linkedin.com/in/romaric-madegnan"],
  ["Yannick Sèyivè Dona Kiki", "https://www.linkedin.com/in/yannick-kiki"],
  ["Nounagnon Moïse Combelles Savoedo", "https://www.linkedin.com/in/nounagnonsavoedo"],
  ["Bignon Murielle Souvenir Lokonon", "https://www.linkedin.com/in/murielle-souvenir-lokonon"],
  ["Yasminath Aïcha Sidi Ali", "https://www.linkedin.com/in/yasminath-sidi-ali-512bb6162"],
  ["Harry Gbaguidi", "https://www.linkedin.com/in/harry-gbaguidi"],
  ["Jean-Baptiste Maureen Sossou", "https://www.linkedin.com/in/jean-baptiste-sossou-aba768141"],
  ["Harold Silvère Kiossou", "https://www.linkedin.com/in/haroldks"],
  ["Alimanth Sadiyath Modukpè Adjibade", "https://www.linkedin.com/in/sadiyath-adjibade-878496276"],
  ["Samira Bandolo Anaïs Mvogo", "https://www.linkedin.com/in/samira-mvogo-072562243"],
  ["Jordy Gnanih", "https://www.linkedin.com/in/jordy-gnanih-071aa0249"],
  ["Karen Houeha", "https://www.linkedin.com/in/karen-houeha-a9b47b275"],
  ["Lyne Gbaguidi", "https://www.linkedin.com/in/lyne-gbaguidi-54a44221a"],
  ["Parfait Tolefo", "https://www.linkedin.com/in/tlf-parfait"],
  ["Marilyse Sèdé Ahouangonou", "https://www.linkedin.com/in/marilyse-s%C3%A8d%C3%A9-ahouangonou"],
  ["Esther Ahossi", "https://www.linkedin.com/in/esther-ahossi-3a1a50226"],
  ["Carmel Prosper Sagbo", "https://www.linkedin.com/in/carmel-prosper-sagbo"],
  ["Nicos Gbènato Hounvio", "https://www.linkedin.com/in/nicos-hounvio"],
  ["Elvis Eustache Patinvoh", "https://www.linkedin.com/in/elvis-eustache-patinvoh"],
  ["Damien Ulrich Doevi", "https://www.linkedin.com/in/damien-ulrich-doevi-396016239"],
  ["Prince Gédéon Yiségnon Guedje", "https://www.linkedin.com/in/prince-gedeon-guedje-ai-researcher"],
  ["O. Adéwoumi Lazare Jean-Deluxe Fagbohoun", "https://www.linkedin.com/in/jean-deluxe-fagbohoun-979617233"],
  ["Liwa Augustine Tawe", "https://www.linkedin.com/in/augustinetawe"],
  ["Gisèle Goubalan", "https://www.linkedin.com/in/gis%C3%A8le-goubalan-3113311b6"],
  ["Généreux Mahouzonssou Akotenou", "https://www.linkedin.com/in/genereux-akotenou"],
  ["Bignon Klaus Précieux Bonou Selegbe", "https://www.linkedin.com/in/klaus-bosel"],
  ["Mahussi Jeff Fidèle Datongnon", "https://www.linkedin.com/in/mahussi-datongnon"],
  ["Ogbinto Samir Tafel Boni", "https://www.linkedin.com/in/samir-boni-200456203"],
  ["Marcellin Zinsou", "https://www.linkedin.com/in/evangelistedesmaths"],
  ["Lizzy Adjagba", "https://www.linkedin.com/in/lizzy-adjagba"],
  ["Odile Lalou", "https://www.linkedin.com/in/odile-lalou"],
  ["Ahouefa Pascale Ninon Kpossou", "https://www.linkedin.com/in/kpossou-ahouefa-ninon"],
  ["Aîchatou Oroubade", "https://www.linkedin.com/in/aichatou-orou-bade"],
  ["Gabriel Julien Agbossou", "https://www.linkedin.com/in/agbossou-gabriel-9b32aa194"],
  ["Mélaine Kiossou", "https://www.linkedin.com/in/melaine-g-kiossou-977263182"],
  ["Iffanice Houndayi", "https://www.linkedin.com/in/iffanice"],
  ["Abdias Dagbekpo", "https://www.linkedin.com/in/abdias-dagbekpo-469b36116"],
  ["Luc Atakpa", "https://www.linkedin.com/in/lucgermannatakpa"],
  ["Yessir Gouton Noudohouénou", "https://www.linkedin.com/in/yessirnoudo"],
  ["Marie-Parisius Houessou", "https://www.linkedin.com/in/parisius"],
  ["Freud Lanha", "https://www.linkedin.com/in/freudlanha"],
  ["Mawulé Robert God’Right Adohounblessi", "https://www.linkedin.com/in/m-r-god-right-adohounblessi"],
  ["Nelxie Adisso", "https://www.linkedin.com/in/nelxie-adisso-♡-99b1a4258"],
  ["Mouyiwa Damilaré Godwin Akakpo", "https://www.linkedin.com/in/godwin-akakpo"],
  ["Pernel Djahou Tinmitonde", "https://www.linkedin.com/in/pernel-tinmitonde-7765452a6"],
  ["Mawenan Fernande Frédérique Togbe", "https://www.linkedin.com/in/fernande-togbe-ab1b622ba"],
]);

const thesisDocumentIds = new Map<string, string>([
  ["master:2026:Défodji Eden Freddy Houndonougbo", "1vN-uaeNVplDGSYwPR-UqdFsrbKQw4pjt"],
  ["master:2023:Mahoutin Afis Kousse", "1CHU3vbu2ZIL2S_7eqICynt_a_gWUl5z-"],
  ["master:2023:Djivèdé Chryzal Beaudelaire Zossou", "1_JeA2Cwm-GzFwSS2nWnxbKSxW4SBsMR1"],
  ["master:2023:Servule O. F. Kouzonde", "1PtncBrD6_A2gCuJHhRNR4n2wO94ejtG1"],
  ["master:2021:Erick Adje", "106bdGYIAXA0q_5OnPgx5AIVMGjl_sZ9O"],
  ["master:2021:Narech Houessou", "1Ke-9lTLgaON5C9tmZTSxKLEC_geIGf1P"],
  ["master:2019:K. Merveille Santi Zinsou", "1qwc11005mUpX8qre0i0sB6bxXCkxdk1b"],
  ["master:2018:Judiacel G. N. Zannou", "1rHzIWKxnONvvzPdUr5b773jGYALrRMaL"],
  ["master:2018:Chabi A. Rodolpho Babatounde", "1MlCbKiaJoZ_FzzKvjsap9W5_BeHgosX0"],
  ["master:2017:Hafiz Abdoulaye", "1tRkWQ0qVqdWNvxpC7W4WH3ZGUKgvfYDK"],
  ["master:2017:Gabin Anadjamè", "1-RzJM3go4blLLW5WE_8-BCB0YdN93ccU"],
  ["master:2017:Tafsir Gna", "1uHzBTEvmWWPInXFrtlguDICIObdMysNj"],
  ["master:2016:Koubouratou Idjaton", "1jGekeYX8-QTZCI7ACgfMRsWYsx2s4KW8"],
  ["master:2016:Gael Aglin", "1oWvC5ULcJHLF0L9h6w29X9KW4AJp-2Di"],
  ["engineer:2026:Comlanvi Florentin Brilland Baba", "1t6QxBfEQgvrB6YLFakGXpFPG-j11fSS1"],
  ["engineer:2026:Akouvi Marie-Christiane Emmanuella Tsipoaka", "1rFa-f9CtG2W2CcpKVviO1j0ZP6NY_jVl"],
  ["engineer:2023:Sênan Emeric Chris Gbodo", "138nW9SL0Jwwob59cs89Nw-JuD7MaPynr"],
  ["engineer:2021:Sémiton Lémec Renaud Ahouandjinou", "1_gwXr1T6pxs62-EWnAZEbwmskz6vzGe3"],
  ["engineer:2021:Bignon Murielle Souvenir Lokonon", "1Jfh9GLLkiz0rgPKG9xCWlW5h2Xito66p"],
  ["engineer:2021:Yasminath Aïcha Sidi Ali", "1FhbI3rEyXIo2TjO9i_EkVbl5ncSwPPSq"],
  ["engineer:2019:Marianne A. O. Balogoun", "1O7koIc37NDGRP8fx9OD88NACwW5wRbYP"],
  ["engineer:2019:Jean-Baptiste Maureen Sossou", "1iA-QYaUQOvNskDO_e9aFsJKoIWRmBx2f"],
  ["engineer:2019:Harold Silvère Kiossou", "1TDvHq_XgENS0aTkvvRlAK4bPrrRDO9Q-"],
  ["bachelor:2026:Mawulé Robert God’Right Adohounblessi", "1i2GZOqSn63q3U-tb3UYTYlpXAv4i2_yC"],
  ["bachelor:2026:Alimanth Sadiyath Modukpè Adjibade", "1YtyGewiqOa7-nk3QcdHVlqGyMhQWmy4D"],
  ["bachelor:2026:Mouyiwa Damilaré Godwin Akakpo", "1Hw0UnLSVeAoTxUFo49RFIF5PBgQ9mqIH"],
  ["bachelor:2026:Pernel Djahou Tinmitonde", "1C-nT9eiGVCvQ9twrL6swnx2Ps9IMZPTi"],
  ["bachelor:2024:Samira Bandolo Anaïs Mvogo", "1f9DDoUpqMX1DCIMIGYQJLNBHWTeqRm-9"],
  ["bachelor:2023:Karen Houeha", "1k8__IHlsKp8UwVrAtSk-_nfLi05Whemk"],
  ["bachelor:2023:Lyne Gbaguidi", "1uD53bThGIF9bxm3Vd9tAgji_YKWDTXBQ"],
  ["bachelor:2023:Parfait Tolefo", "1ZuzSb1NldC6JXxuz97mvXPLLR0_LUx5m"],
  ["bachelor:2023:Esther Ahossi", "1Zi1sPomIFIEQbfPy8_FYe7oDfDngfGVZ"],
  ["bachelor:2023:Carmel Prosper Sagbo", "1XDGVfl7QaXtU2DKGYrXbE0pOtdpP3-yx"],
  ["bachelor:2023:Elvis Eustache Patinvoh", "11gLOyy4SKU0j94dBJSh0LN7loDevZ-rQ"],
  ["bachelor:2023:Damien Ulrich Doevi", "1NX61EMS-TFFYdvnZPRqJ220UCtQBKLiS"],
  ["bachelor:2023:Prince Gédéon Yiségnon Guedje", "1m-IDqsX57PMBqhN4KoIA5pPed2E7-scB"],
  ["bachelor:2023:O. Adéwoumi Lazare Jean-Deluxe Fagbohoun", "1tjE0ESa3Wyd4shHuSONhguj8irGlt9bq"],
  ["bachelor:2022:Généreux Mahouzonssou Akotenou", "1ULnznhdw7uqMNqUWnkYhegEf6f3rFPK6"],
  ["bachelor:2022:Bignon Klaus Précieux Bonou Selegbe", "1SPlB-yGGeyQn8x4PlB1KdEjJ4ykfLYQw"],
  ["bachelor:2021:Ogbinto Samir Tafel Boni", "1LTfgbOvyeKwD3OWffg4TazrgNtmP5NVx"],
  ["bachelor:2021:Marcellin Zinsou", "1pqrCYUYHY13y9k5daXmJT1X-pJDLXtGw"],
  ["bachelor:2021:Lizzy Adjagba", "1opalflFZ0LWKL8Qb7gCuT-vllvwPUxxb"],
  ["bachelor:2021:Kelvine Natacha Mahussi Honon Dadjo", "1Dbe9AAJORDV6eIjAElSPTAnnDJUGzwO6"],
  ["bachelor:2020:Aîchatou Oroubade", "1dsdRl2kCIk9_j91JTM7EvEBJfvGzbcO-"],
  ["bachelor:2019:Mahoutin Afis Kousse", "1sIhsl8S_4W84xQ3mzK3SP_vNu83n0bAS"],
  ["bachelor:2019:Gabriel Julien Agbossou", "1-c_NIEuTmNoudkY1nvTjy9j0Hg81WJXb"],
  ["bachelor:2019:Mélaine Kiossou", "1sDWQKHUZdNPYMaW3GGEf4e9mL559Ky1-"],
  ["bachelor:2018:Iffanice Houndayi", "1XgUushuUR9onpnd5I-PiJU6gGDxwTdG9"],
  ["bachelor:2018:Abdias Dagbekpo", "1oAcHqQH8HvcPZoEVKOdF2rSIDaw7_QRC"],
  ["bachelor:2018:Luc Atakpa", "1upjl_WIcSyYIjkD4i4sWcVI3TF6nFq1s"],
  ["bachelor:2018:Yessir Gouton Noudohouénou", "1wD9YQD7ewsLbGpXPEj17YSWbpQUVYs5Q"],
  ["bachelor:2017:Marie-Parisius Houessou", "1HcBxLwlxNUMZqysVw_xENF3MaKP7XRuq"],
  ["bachelor:2017:Ahouefa Pascale Ninon Kpossou", "1Gp7kMuFOXkNOy8HxreicLDr-KefggOGh"],
]);

const doctoralSchool: Localized = {
  fr: "École doctorale des sciences de l’ingénieur",
  en: "Doctoral School of Engineering Sciences",
};

const doctoralTheses: DoctoralThesis[] = [

  {
    name: "Linuse Tikpon",
    institution: doctoralSchool,
    title: { fr: "Système multi-agents immersif en réalité virtuelle pour la formation pédagogique des enseignants universitaires", en: "An immersive multi-agent virtual reality system for the pedagogical training of university teachers" },
    university: "UAC",
  },
  {
    name: "Marie Mélène Sèmèvo Tonou",
    institution: doctoralSchool,
    title: { fr: "Détection automatique des types de crises d’épilepsie à partir d’électroencéphalogrammes", en: "Automatic detection of epileptic seizure types from electroencephalograms" },
    university: "UAC",
  },
  {
    name: "Grace Kisambu Nsele",
    institution: doctoralSchool,
    title: { fr: "Détection automatique de la trypanosomiase à partir d’images de frottis sanguins", en: "Automatic detection of trypanosomiasis from blood smear images" },
    university: "UAC",
  },
  {
    name: "Maryse Fortune Doloresse Gahou",
    institution: doctoralSchool,
    title: { fr: "Système d’aide au dépistage précoce de l’insuffisance rénale chronique au Bénin basé sur l’apprentissage automatique", en: "A machine learning-based decision-support system for early chronic kidney disease screening in Benin"},
    university: "UAC",
  },
  {
    name: "Noël Christi Honzounnon",
    institution: { fr: "École doctorale des sciences de la vie et de la terre", en: "Doctoral School of Life and Earth Sciences" },
    title: { fr: "Identification de biomarqueurs pharmacogénomiques et développement d’algorithmes décisionnels pour un traitement personnalisé du diabète de type 2", en: "Identification of pharmacogenomic biomarkers and development of decision-making algorithms for personalized treatment of type 2 diabetes" },
    university: "UAC",
  },
];

const contributedDoctoralTheses: ContributedDoctoralThesis[] = [
  {
    name: "Marianne Balogoun",
    years: "2022–",
    institution: { fr: "École doctorale des sciences de l’ingénieur", en: "Doctoral School of Engineering Sciences" },
    title: { fr: "Prédiction de la couverture radio à l’aide de techniques d’apprentissage automatique : cas de la télévision numérique terrestre au Bénin", en: "Radio coverage prediction using machine learning techniques: the case of digital terrestrial television in Benin" },
    status: "ongoing",
    university: "UAC",
  },
  {
    name: "Souleymane Bah",
    years: "2022–",
    institution: { fr: "Institut de mathématiques et de sciences physiques", en: "Institute of Mathematics and Physical Sciences" },
    title: { fr: "Détection des ravageurs de cultures à l’aide de l’apprentissage automatique et de données satellitaires ouvertes : application aux jassides des cultures de coton au nord du Bénin", en: "Crop pest detection using machine learning and open satellite data: application to cotton jassids in northern Benin" },
    status: "ongoing",
    university: "UAC",
  },
  {
    name: "Fatou Lo Niang",
    years: "2022–",
    institution: { fr: "Université Cheick Anta Diop (UCAD), Sénégal", en: "Université Cheick Anta Diop (UCAD), Senegal" },
    title: { fr: "Conception d’un Système d’Information Médical Intelligent: modèles IA de détection et de prise en charge précoces des maladies cardio-vasculaires au Sénégal.", en: "Design of an intelligent medical information system: AI models for early detection and management of cardiovascular diseases in Senegal." },
    status: "ongoing",
  },
  {
    name: "Ariane Houetohossou",
    years: "2021–2024",
    institution: { fr: "École doctorale des sciences agronomiques et de l’eau", en: "Doctoral School of Agricultural and Water Sciences" },
    title: { fr: "Optimisation des paramètres des techniques d’apprentissage automatique pour la prédiction du rendement du maïs sous des conditions météorologiques et de fertilisation contrôlées", en: "Optimization of machine learning technique parameters for maize yield prediction under controlled weather and fertilization patterns" },
    status: "defended",
    university: "UAC",
  },
  {
    name: "Peace Tahi",
    years: "2021–2024",
    institution: { fr: "École doctorale des sciences agronomiques et de l’eau", en: "Doctoral School of Agricultural and Water Sciences" },
    title: { fr: "Évaluation empirique des techniques d’apprentissage automatique pour la détection des maladies et la prédiction du rendement de la tomate dans des conditions climatiques et infectieuses simulées", en: "Empirical evaluation of machine learning techniques for disease detection and yield prediction in tomatoes under simulated climate and infection conditions" },
    status: "defended",
    university: "UAC",
  },
];

const masterTheses: ThesisGroup[] = [
  {
    year: "2026",
    items: [
      "Mitigating biases in datasets using constraint programming-based undersampling — Défodji Eden Freddy Houndonougbo (Master SIRI, IFRI)",
    ],
  },
  {
    year: "2025",
    items: [
      "Contributions à l’analyse multimodale dans la détection de la tuberculose : en République démocratique du Congo — Grace Kisambu Nsele (Master GL, IFRI)",
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
      "Classification du trafic internet grâce aux méthodes d’apprentissage automatique — Erick Adje (Master Télécommunications et réseaux informatiques, ED-SDI)",
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
      "Estimation des rendements agricoles avec le machine learning : cas du sorgho — Judiacel G. N. Zannou (Master, IFRI)",
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
      "Évaluation d’heuristiques de recherche informée : cas du n-puzzle — Koubouratou Idjaton (Master, IFRI)",
      "Heuristique générique pour les jeux de type n-alignés — Gael Aglin (Master, IFRI)",
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
      "Résolution du problème d’affectation de fréquences avec la programmation par contraintes — Marianne A. O. Balogoun (Ingénieur GIT, EPAC)",
    ],
  },
];

const bachelorTheses: ThesisGroup[] = [
  {
    year: "2026",
    items: [
      "Optimization of the blood product distribution chain in Benin: case of the Zou Department — Mawulé Robert God’Right Adohounblessi (Licence IA, IFRI)",
      "Système intelligent de conseil pédagogique pour l’enseignement supérieur : segmentation du public cible et objectifs d’apprentissage — Alimanth Sadiyath Modukpè Adjibade (Licence IA, IFRI)",
      "Réalisation d’un système intelligent d’accompagnement des travaux pédagogiques de groupe par l’analyse des réunions — Nelxie Adisso (Licence IA, IFRI)",
      "Réalisation d’un système d’évaluation des compétences pédagogiques basé sur la simulation des situations de classe universitaire — Mouyiwa Damilaré Godwin Akakpo (Licence GL, IFRI)",
      "Étude comparative des techniques de séparation des sources dans les signaux électroencéphalogrammes (EEG) — Pernel Djahou Tinmitonde (Licence IA, IFRI)",
      "Réalisation d’un prototype de simulation 3D des comportements des étudiants en situation de classe — Mawenan Fernande Frédérique Togbe (Licence IM, IFRI)",
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

function PersonName({ name }: { name: string }) {
  const linkedinProfile = linkedinProfiles.get(name);

  return linkedinProfile ? (
    <ExternalLink href={linkedinProfile}>{name}</ExternalLink>
  ) : (
    name
  );
}

function ThesisItem({ item, kind, year, language }: { item: string; kind: ThesisKind; year: string; language: Language }) {
  const separator = " — ";
  const separatorIndex = item.lastIndexOf(separator);
  const nameStart = separatorIndex + separator.length;
  const detailsIndex = item.indexOf(" (", nameStart);

  if (separatorIndex === -1 || detailsIndex === -1) {
    return item;
  }

  const name = item.slice(nameStart, detailsIndex);
  const documentId = thesisDocumentIds.get(`${kind}:${year}:${name}`);

  return (
    <>
      {item.slice(0, nameStart)}
      <PersonName name={name} />
      {item.slice(detailsIndex)}
      {documentId ? (
        <>
          {" · "}
          <ExternalLink href={`https://drive.google.com/uc?export=download&id=${documentId}`}>
            {language === "en" ? "Download thesis (PDF)" : "Télécharger le mémoire (PDF)"}
          </ExternalLink>
        </>
      ) : null}
    </>
  );
}

function ThesisGroups({ groups, kind, language }: { groups: ThesisGroup[]; kind: ThesisKind; language: Language }) {
  return groups.map((group) => (
    <section key={group.year}>
      <h3>{group.year}</h3>
      <ul className="supervision-thesis-list">
        {group.items.map((item) => (
          <li key={item}><ThesisItem item={item} kind={kind} year={group.year} language={language} /></li>
        ))}
      </ul>
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
      <ol className="publication-list compact-record-list">
        {doctoralTheses.map((thesis) => (
          <li key={thesis.name}>
            <span className="title">{localize(thesis.title, language)}</span>
            <span className="details">
              <strong>
                <PersonName name={thesis.name} />
              </strong> · {localize(thesis.institution, language)}{thesis.university ? ` · ${thesis.university}` : null}
            </span>
          </li>
        ))}
      </ol>

      <h2>{isEnglish ? "Contributions to PhD supervision" : "Contributions à l’encadrement de thèses"}</h2>
      <ol className="publication-list compact-record-list">
        {contributedDoctoralTheses.map((thesis) => (
          <li key={thesis.name}>
            <span className="title">{localize(thesis.title, language)}</span>
            <span className="details">
              <strong>
                <PersonName name={thesis.name} />
              </strong> · {localize(thesis.institution, language)}{thesis.university ? ` · ${thesis.university}` : null} · {thesis.years} · {thesis.status === "defended"
                ? (isEnglish ? "Defended" : "Soutenue")
                : (isEnglish ? "Ongoing" : "En cours")}
            </span>
          </li>
        ))}
      </ol>

      <h2>{isEnglish ? "Master’s theses" : "Mémoires de master"}</h2>
      <ThesisGroups groups={masterTheses} kind="master" language={language} />

      <h2>{isEnglish ? "Engineering degree theses" : "Mémoires d’ingénieur"}</h2>
      <ThesisGroups groups={engineerTheses} kind="engineer" language={language} />

      <h2>{isEnglish ? "Bachelor’s theses" : "Mémoires de licence"}</h2>
      <ThesisGroups groups={bachelorTheses} kind="bachelor" language={language} />

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
