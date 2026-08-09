import Image from "next/image";
import Link from "next/link";
import { AcademicPage, ExternalLink } from "./site-components";

export default function Home() {
  return (
    <AcademicPage home>
      <div className="home-grid">
        <aside className="profile-column" aria-label="Profil et coordonnées">
          <Image className="profile-photo" src="/ratheil-houndji.webp" alt="Portrait de Vinasetan Ratheil Houndji" width={600} height={697} priority />
          <div className="profile-details">
            <p><strong>IFRI — Université d’Abomey-Calavi</strong><br />Abomey-Calavi, Bénin</p>
            <p><a href="mailto:ratheil.houndji@uac.bj">ratheil.houndji@uac.bj</a></p>
            <p><a href="mailto:vratheilhoundji@gmail.com">vratheilhoundji@gmail.com</a></p>
            <nav className="profile-links" aria-label="Profils externes">
              <ExternalLink href="https://scholar.google.com/citations?user=36wbP8kAAAAJ&hl=fr">Google Scholar</ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/vinasetan/">LinkedIn</ExternalLink>
              <ExternalLink href="https://www.youtube.com/channel/UC24YKysMzmerMK2a1PSlYwA">YouTube</ExternalLink>
            </nav>
          </div>
        </aside>

        <div className="home-main">
          <header className="identity">
            <p className="eyebrow">Enseignant-chercheur en intelligence artificielle et en optimisation</p>
            <h1>Vinasetan Ratheil Houndji</h1>
            <p className="position">Maître de conférences des universités du CAMES<br />
              Chef du département Génie logiciel & Coordonnateur des formations de Licence et de Master / IFRI-UAC<br />
              Président de l'association FRIARE pour une intelligence artificielle responsable et efficiente</p>
          </header>

          <section className="biography" aria-labelledby="a-propos">
            <h2 id="a-propos">À propos</h2>
            <p>Je mène mes activités de recherche et d’enseignement à l’<ExternalLink href="https://ifri-uac.bj">Institut de Formation et de Recherche en Informatique</ExternalLink>{" "}de l’Université d’Abomey-Calavi. Mes travaux se situent à l’intersection de l’intelligence artificielle, de la qualité des données et de l’optimisation combinatoire.</p>
            <p>Je m’intéresse à la manière d’évaluer les systèmes d’IA, de mieux représenter les réalités locales dans les données et de concevoir des usages responsables de l’IA. Ces recherches trouvent principalement des applications en santé, en agriculture, en éducation et en génie logiciel.</p>
            <p>Docteur en sciences informatiques de l’UCLouvain et de l’Université d’Abomey-Calavi, je préside également l’<ExternalLink href="https://friare.org">Association FRIARE</ExternalLink>, consacrée à la promotion d’une intelligence artificielle responsable et efficiente en Afrique.</p>
          </section>

          <section className="home-section research-summary" aria-labelledby="interets">
            <div className="section-heading"><h2 id="interets">Intérêts scientifiques</h2><Link href="/recherche">Voir la recherche</Link></div>
            <ul className="compact-list">
              <li>Évaluation, robustesse et équité des systèmes d’intelligence artificielle</li>
              <li>Qualité des données, biais, déséquilibres et valeurs manquantes</li>
              <li>Programmation par contraintes et optimisation combinatoire</li>
              <li>IA responsable et applications en santé, agriculture et éducation</li>
            </ul>
          </section>

          <section className="home-section" aria-labelledby="actualites">
            <div className="section-heading"><h2 id="actualites">Actualités et activités</h2></div>
            <ol className="news-list">
              <li><time dateTime="2026">2026</time><p><strong>Gouvernance responsable de l’IA dans l’enseignement supérieur africain</strong><br />Travaux et interventions sur les dispositifs et les conditions d’opérationnalisation.</p></li>
              <li><time dateTime="2025">2025</time><p><strong>ACP Summer School — Constraint Programming for Sustainable Development</strong><br />Organisation de l’école internationale à Ouidah, au Bénin.</p></li>
              <li><time dateTime="2025">2025</time><p><strong>Recherche appliquée</strong><br />Poursuite des projets AI4CKD, ACCESS Neuro — Bénin et IA pour l’agriculture.</p></li>
            </ol>
          </section>
        </div>
      </div>
    </AcademicPage>
  );
}
