import { AcademicPage, ExternalLink, PageIntro } from "../site-components";

export const metadata = { title: "Publications", alternates: { canonical: "/publications/", languages: { fr: "/publications/", en: "/en/publications/" } } };

type Publication = { title: string; details: string; href?: string };

const publications: { year: string; items: Publication[] }[] = [
  {
    year: "2026",
    items: [
      {
        title: "Spatiotemporal modeling and uncertainty quantification of reference evapotranspiration using machine learning and Bayesian model averaging in Benin",
        details: "B. C. F. Mizele, M. Meliho, V. R. Houndji, S. A. R. M. Ahouandjinou, C. A. Orlando. Geomatics, vol. 6, no 4, article 73.",
        href: "https://doi.org/10.3390/geomatics6040073",
      },

    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Machine learning techniques for tomato yield prediction: a comprehensive analysis",
        details: "K. A. Odah, S. C. A. Houetohossou, V. R. Houndji, R. L. G. Kakaï. Smart Agricultural Technology, vol. 12, 101067.",
        href: "https://doi.org/10.1016/j.atech.2025.101067",
      },
      {
        title: "Machine learning-based path loss models: towards a unified methodology",
        details: "M. A. O. Balogoun, M. Dossou, V. R. Houndji, A.-C. Honfoga. IEEE ICETCI 2025, pp. 1–9.",
        href: "https://doi.org/10.1109/ICETCI67340.2025.11258025",
      },
      {
        title: "Towards a fully-fletched African register of implanted pacemakers",
        details: "S. O. F. Kouzonde, G. Kpadjouda, V. R. Houndji, S. A. R. M. Ahouandjinou, J. Degila, M. L. Ba. InterSol 2025, LNICST, pp. 204–216.",
        href: "https://doi.org/10.1007/978-3-032-15154-4_16",
      },
      {
        title: "Cotton jassid pests severity discrimination using single image super resolution, data fusion and machine learning based on SAR, multispectral and thermal infrared open satellite sensors data",
        details: "S. Bah, V. R. Houndji, E. W. G. Megnigbeto, E. C. Ezin, N. G. Gouwakinnou. IEEE AICSIP 2025, pp. 1–7.",
        href: "https://doi.org/10.1109/AICSIP65423.2025.11427311",
      },
      {
        title: "Effects of weather scenarios and fertilizer on maize growth and yield: insights from a greenhouse experiment",
        details: "S. P. G. Tahi, K. V. Salako, V. R. Houndji, R. Glèlè Kakaï. PLOS ONE, 20(3), e0318121.",
        href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0318121",
      },
      {
        title: "RiceSeg-5932: complete pixel-level segmentation masks for rice leaf disease images samples",
        details: "K. M. S. Zinsou, V. R. Houndji. Mendeley Data, version 1. Jeu de données de recherche.",
        href: "https://doi.org/10.17632/92jc6w6mcy.1",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Cotton jassid infestation monitoring using Sentinel-2 MSI, Landsat 9 TIRS, and PlanetScope imagery with machine learning and data fusion",
        details: "S. Bah, M. D. T. M. Houegbe, E. W. G. Megnigbeto, V. R. Houndji, B. N. Kouton, N. G. Gouwakinnou, E. C. Ezin. IEEE ICCA 2024, pp. 1–9.",
        href: "https://doi.org/10.1109/ICCA62237.2024.10927781",
      },
      {
        title: "An experimental analysis of traditional machine learning algorithms for maize yield prediction",
        details: "S. P. G. Tahi, C. G. Hounmenou, V. R. Houndji, R. G. Kakaï. Contemporary Mathematics, vol. 5, no 4, pp. 6208–6224.",
        href: "https://doi.org/10.37256/cm.5420244481",
      },
      {
        title: "Using pattern mining to determine fine climatic parameters for maize yield in Benin",
        details: "S. P. G. Tahi, V. R. Houndji, C. G. Hounmenou, R. G. Kakaï. IAES International Journal of Artificial Intelligence, vol. 13, no 4, pp. 3930–3941.",
        href: "https://doi.org/10.11591/ijai.v13.i4.pp3930-3941",
      },
      {
        title: "Genetic algorithms for solving the pigment sequencing problem",
        details: "V. R. Houndji, T. Gna. African Journal of Research in Computer Science and Applied Mathematics, vol. 40.",
        href: "https://doi.org/10.46298/arima.11382",
      },
      {
        title: "Empirical performance of deep learning models with class imbalance for crop disease classification",
        details: "S. C. A. Houetohossou, C. G. Hounmenou, V. R. Houndji, R. G. Kakaï. DeLTA 2024, CCIS, vol. 2172, pp. 118–135.",
        href: "https://link.springer.com/chapter/10.1007/978-3-031-66705-3_8",
      },
      {
        title: "NextVision, an intelligent video surveillance system based on computer vision and natural language processing",
        details: "V. R. Houndji, P. G. Guedje. ICICT 2024, Lecture Notes in Networks and Systems, vol. 1055, pp. 271–281.",
        href: "https://doi.org/10.1007/978-981-97-5441-0_24",
      },
      {
        title: "Finding optimum climatic parameters for high tomato yield in Benin (West Africa) using frequent pattern growth algorithm",
        details: "A. Houetohossou, V. R. Houndji, R. Sikirou, R. G. Glèlè Kakaï. PLOS ONE, 19(2), e0297983.",
        href: "https://doi.org/10.1371/journal.pone.0297983",
      },
      {
        title: "Machine learning techniques for cereal crops yield prediction: a comprehensive review",
        details: "S. P. G. Tahi, V. R. Houndji, K. V. Salako, C. G. Hounmenou, R. G. Kakaï. Applications of Modelling and Simulation, vol. 8, pp. 174–190.",
        href: "https://arqiipubl.com/ojs/index.php/AMS_Journal/article/view/622",
      },
      {
        title: "Radio coverage prediction in wireless networks: a bibliometric study",
        details: "M. A. O. Balogoun, V. R. Houndji, M. Dossou, A.-C. Honfoga. ICICT 2023, LNNS, vol. 696, pp. 341–361.",
        href: "https://doi.org/10.1007/978-981-99-3236-8_27",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Advancements in video-based insect tracking: a bibliometric analysis to a short survey",
        details: "E. A. Adjé, A. S. R. M. Ahouandjinou, G. Delmaire, G. Roussel, R. V. Houndji. ICAIP 2023, pp. 75–82.",
        href: "https://doi.org/10.1145/3635118.3635130",
      },
      {
        title: "Time-constrained DL8.5 using limited discrepancy search",
        details: "H. Kiossou, P. Schaus, S. Nijssen, V. R. Houndji. ECML PKDD 2022, LNCS, vol. 13717, pp. 443–459.",
        href: "https://link.springer.com/chapter/10.1007/978-3-031-26419-1_27",
      },
      {
        title: "C-Elect, an automatic candidate selection tool using constraint programming",
        details: "V. R. Houndji, K. B. Selegbe. IEEE ICECET 2023, Cape Town, pp. 1–4.",
        href: "https://ieeexplore.ieee.org/document/10389265",
      },
      {
        title: "UMLDesigner: an automatic UML diagram design tool",
        details: "V. R. Houndji, G. Akotenou. DeLTA 2023, CCIS, vol. 1875, pp. 340–350.",
        href: "https://link.springer.com/chapter/10.1007/978-3-031-39059-3_23",
      },
      {
        title: "GrailSolver, à la dernière itération de l’obtention du graal de la programmation",
        details: "V. R. Houndji, G. Akotenou, A. M. Kousse, K. Bonou Selegbe. Communication aux Journées Francophones de Programmation par Contraintes, Strasbourg.",
        href: "https://pfia23.icube.unistra.fr/conferences/jfpc/Actes_CH_PFIA2023__3_.pdf",
      },
      {
        title: "Deep learning methods for biotic and abiotic stresses detection and classification in fruits and vegetables: state of the art and perspectives",
        details: "S. C. A. Houetohossou, V. R. Houndji, C. G. Hounmenou, R. Sikirou, R. L. G. Kakaï. Artificial Intelligence in Agriculture, vol. 9, pp. 46–60.",
        href: "https://doi.org/10.1016/j.aiia.2023.05.002",
      },
      {
        title: "Use of artificial intelligence in cardiology: where are we in Africa?",
        details: "F. Lo Niang, V. R. Houndji, M. Lo, J. Degila, M. L. Ba. AFRICOMM 2022, LNICST, vol. 499, pp. 473–486.",
        href: "https://link.springer.com/chapter/10.1007/978-3-031-34896-9_29",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        title: "Performance profiles to refine analysis of machine learning models",
        details: "V. R. Houndji, B. Zossou. Communication à l’International Seminar on Machine Learning, Optimization, and Data Science.",
      },
      {
        title: "Features analysis of internet traffic classification using interpretable machine learning models",
        details: "E. A. Adjé, V. R. Houndji, M. Dossou. IAES International Journal of Artificial Intelligence, vol. 11, no 3, pp. 1175–1183.",
        href: "https://doi.org/10.11591/ijai.v11.i3.pp1175-1183",
      },
      {
        title: "Automatic UML defects detection based on image of diagram",
        details: "M. S. Lokonon, V. R. Houndji. DeLTA, pp. 193–198.",
        href: "https://doi.org/10.5220/0011270200003264",
      },
      {
        title: "A bibliometric analysis of the trends in the research on wearable technologies for cardiovascular diseases",
        details: "G. E. A. Kpadjouda Job, J. Degila, S. A. Ahouandjinou, V. R. Houndji, M. L. Ba. pHealth, Studies in Health Technology and Informatics.",
        href: "https://ebooks.iospress.nl/doi/10.3233/SHTI220994",
      },
    ],
  },
  {
    year: "2020",
    items: [
      {
        title: "Prediction of the purchase intention of users on e-commerce platforms using gradient boosting",
        details: "Y. Kiki, V. R. Houndji. International Journal of Engineering and Advanced Technology, vol. 10, no 1, pp. 446–450.",
        href: "https://doi.org/10.35940/ijeat.A1929.1010120",
      },
      {
        title: "Using an interpretable machine learning approach to study the drivers of international migration",
        details: "H. Kiossou, Y. Schenk, F. Docquier, V. R. Houndji, S. Nijssen, P. Schaus. Harvard CRCS Workshop on Artificial Intelligence for Social Good.",
        href: "https://crcs.seas.harvard.edu/publications/using-interpretable-machine-learning-approach-study-drivers-international",
      },
      {
        title: "AmonAI: a students academic performances prediction system",
        details: "I. Houndayi, V. R. Houndji, P.-J. Zohou, E. C. Ezin. AFRICOMM, LNICST, vol. 311, pp. 212–218.",
        href: "https://link.springer.com/chapter/10.1007/978-3-030-41593-8_16",
      },
    ],
  },
  {
    year: "2019",
    items: [
      {
        title: "The item-dependent StockingCost constraint",
        details: "V. R. Houndji, P. Schaus, L. Wolsey. Constraints, vol. 24, pp. 183–209.",
        href: "https://link.springer.com/article/10.1007/s10601-018-9300-y",
      },
      {
        title: "Sorghum yield prediction using machine learning",
        details: "G. Zannou, V. R. Houndji. IEEE BioSMART, pp. 152–155.",
        href: "https://ieeexplore.ieee.org/document/8734219",
      },
      {
        title: "Awale game: application programming interface and augmented reality interface",
        details: "P. Houessou, V. R. Houndji, E. C. Ezin, P. Kiki, H. Kiossou, J.-B. Sossou, F. Zoumarou Walis. LNICST, vol. 260, pp. 147–154.",
        href: "https://link.springer.com/chapter/10.1007/978-3-030-05198-3_13",
      },
    ],
  },
  {
    year: "2018",
    items: [
      {
        title: "Cost-based filtering algorithms for a capacitated lot sizing problem and the constrained arborescence problem",
        details: "V. R. Houndji. Constraints, vol. 23, no 4, pp. 481–482. Résumé de thèse.",
        href: "https://doi.org/10.1007/s10601-018-9292-7",
      },
      {
        title: "Generic heuristic for the mnk games",
        details: "A.-H. Abdoulaye, V. R. Houndji, E. C. Ezin, G. Aglin. CARI 2018, pp. 265–275.",
      },
    ],
  },
  {
    year: "2017",
    items: [
      {
        title: "The weighted arborescence constraint",
        details: "V. R. Houndji, P. Schaus, M. N. Hounkonnou, L. Wolsey. CPAIOR 2017, LNCS, vol. 10335, pp. 185–201.",
        href: "https://link.springer.com/chapter/10.1007/978-3-319-59776-8_15",
      },
    ],
  },
  {
    year: "2014",
    items: [
      {
        title: "The StockingCost constraint",
        details: "V. R. Houndji, P. Schaus, L. Wolsey, Y. Deville. CP 2014, LNCS, vol. 8656, pp. 382–397.",
        href: "https://link.springer.com/chapter/10.1007/978-3-319-10428-7_29",
      },
    ],
  },
];

function englishDetails(details: string) {
  return details
    .replace("Jeu de données de recherche.", "Research dataset.")
    .replace("Communication aux Journées Francophones de Programmation par Contraintes, Strasbourg.", "Paper presented at the Journées Francophones de Programmation par Contraintes, Strasbourg.")
    .replace("Communication à l’International Seminar on Machine Learning, Optimization, and Data Science.", "Presentation at the International Seminar on Machine Learning, Optimization, and Data Science.")
    .replace("Résumé de thèse.", "PhD thesis abstract.");
}

function PublicationsContent({ language }: { language: "fr" | "en" }) {
  const isEnglish = language === "en";

  return (
    <AcademicPage language={language}>
      <PageIntro title="Publications">
        {isEnglish
          ? "Journal articles, conference proceedings, presentations, and datasets in optimization, machine learning, and artificial intelligence applications."
          : "Articles, actes de conférences, communications et jeux de données en optimisation, apprentissage automatique et applications de l’intelligence artificielle."}
        <br />
        {isEnglish ? "See also " : "Voir également "}<ExternalLink href={`https://scholar.google.com/citations?user=36wbP8kAAAAJ&hl=${isEnglish ? "en" : "fr"}`}>Google Scholar</ExternalLink>,{" "}
        <ExternalLink href="https://dblp.org/pid/150/4939">DBLP</ExternalLink> {isEnglish ? "and" : "et"} <ExternalLink href="https://orcid.org/0000-0002-5467-9448">ORCID</ExternalLink>.
      </PageIntro>
      {publications.map((group) => (
        <section className="publication-year" key={group.year}>
          <h2>{group.year}</h2>
          <ol className="publication-list">
            {group.items.map((publication) => (
              <li key={publication.title}>
                {publication.href ? (
                  <ExternalLink href={publication.href}><span className="title">{publication.title}</span></ExternalLink>
                ) : (
                  <span className="title">{publication.title}</span>
                )}
                <span className="details">{isEnglish ? englishDetails(publication.details) : publication.details}</span>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </AcademicPage>
  );
}

function Publications() {
  return <PublicationsContent language="fr" />;
}

Publications.English = function EnglishPublications() {
  return <PublicationsContent language="en" />;
};

export default Publications;
