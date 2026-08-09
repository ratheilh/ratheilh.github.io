import { AcademicPage, ExternalLink, PageIntro } from "../site-components";

export const metadata = { title: "Publications" };

const publications = [
  {
    year: "2025",
    items: [
      {
        title: "Machine Learning Techniques for Tomato Yield Prediction: A Comprehensive Analysis",
        details: "K. A. Odah, S. C. A. Houetohossou, V. R. Houndji, R. L. G. Kakaï. Smart Agricultural Technology.",
        href: "https://www.sciencedirect.com/science/article/pii/S2772375525003004",
      },
      {
        title: "Effects of weather scenarios and fertilizer on maize growth and yield: Insights from a greenhouse experiment",
        details: "S. P. G. Tahi, K. V. Salako, V. R. Houndji, R. Glèlè Kakaï. PLOS ONE.",
        href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0318121",
      },
      {
        title: "Cotton Jassid Infestation Monitoring Using Sentinel-2 MSI, Landsat 9 TIRS, and PlanetScope Imagery with Machine Learning and Data Fusion",
        details: "S. Bah et al. International Conference on Computer and Applications, IEEE.",
        href: "https://ieeexplore.ieee.org/document/10927781",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Finding optimum climatic parameters for high tomato yield in Benin using frequent pattern growth algorithm",
        details: "A. Houetohossou, V. R. Houndji, R. Sikirou, R. G. Glèlè Kakaï. PLOS ONE.",
        href: "https://doi.org/10.1371/journal.pone.0297983",
      },
      {
        title: "Empirical Performance of Deep Learning Models with Class Imbalance for Crop Disease Classification",
        details: "S. C. A. Houetohossou, C. G. Hounmenou, V. R. Houndji, R. G. Kakaï. DeLTA.",
        href: "https://link.springer.com/chapter/10.1007/978-3-031-66705-3_8",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Time constrained DL8.5 using Limited Discrepancy Search",
        details: "H. Kiossou, P. Schaus, S. Nijssen, V. R. Houndji. ECML PKDD.",
        href: "https://link.springer.com/chapter/10.1007/978-3-031-26419-1_27",
      },
      {
        title: "UMLDesigner: An Automatic UML Diagram Design Tool",
        details: "V. R. Houndji, G. Akotenou. DeLTA.",
        href: "https://link.springer.com/chapter/10.1007/978-3-031-39059-3_23",
      },
    ],
  },
  {
    year: "Travaux antérieurs sélectionnés",
    items: [
      {
        title: "The Item Dependent StockingCost Constraint",
        details: "V. R. Houndji, P. Schaus, L. Wolsey. Constraints, 2019.",
        href: "https://link.springer.com/article/10.1007/s10601-018-9300-y",
      },
      {
        title: "The Weighted Arborescence Constraint",
        details: "V. R. Houndji, P. Schaus, M. N. Hounkonnou, L. Wolsey. CPAIOR, 2017.",
        href: "https://link.springer.com/chapter/10.1007/978-3-319-59776-8_15",
      },
      {
        title: "The StockingCost Constraint",
        details: "V. R. Houndji, P. Schaus, L. Wolsey, Y. Deville. CP, 2014.",
        href: "https://link.springer.com/chapter/10.1007/978-3-319-10428-7_29",
      },
    ],
  },
];

export default function Publications() {
  return (
    <AcademicPage>
      <PageIntro title="Publications">
        Sélection de travaux en optimisation, apprentissage automatique et applications de l’intelligence artificielle.
      </PageIntro>
      {publications.map((group) => (
        <section className="publication-year" key={group.year}>
          <h2>{group.year}</h2>
          <ol className="publication-list">
            {group.items.map((publication) => (
              <li key={publication.title}>
                <ExternalLink href={publication.href}><span className="title">{publication.title}</span></ExternalLink>
                <span className="details">{publication.details}</span>
              </li>
            ))}
          </ol>
        </section>
      ))}
      <p className="notice">Cette sélection sera complétée après vérification de la bibliographie intégrale et des liens vers les profils scientifiques.</p>
    </AcademicPage>
  );
}
