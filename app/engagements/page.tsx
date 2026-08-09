import { AcademicPage, ExternalLink, PageIntro } from "../site-components";

export const metadata = { title: "Engagements" };

export default function Engagements() {
  return (
    <AcademicPage>
      <PageIntro title="Engagements">
        Initiatives scientifiques et associatives destinées à structurer les communautés et les usages responsables de l’intelligence artificielle.
      </PageIntro>

      <h2>Association FRIARE</h2>
      <p>
        Je préside l’<ExternalLink href="https://friare.org">Association FRIARE</ExternalLink>, qui œuvre à la promotion
        d’une intelligence artificielle responsable et efficiente en Afrique. Ses activités associent sensibilisation,
        recherche, dialogue public, formation et accompagnement de projets.
      </p>

      <h2>Benin Workshop on Artificial Intelligence</h2>
      <p>
        Je suis co-président général du BWAI, une rencontre qui réunit chercheurs, étudiants, professionnels et acteurs
        publics autour des avancées et des applications de l’intelligence artificielle au Bénin.
      </p>

      <h2>Mify Artificial Intelligence Contest</h2>
      <p>
        En tant que Competition Chair du MAIC depuis 2017, je contribue à l’organisation d’une compétition destinée à
        développer les compétences pratiques des jeunes en intelligence artificielle et en résolution de problèmes.
      </p>

      <h2>Écoles, ateliers et communautés</h2>
      <p>
        J’organise ou accompagne des écoles scientifiques, des conférences et des ateliers en intelligence artificielle,
        programmation par contraintes et pédagogie universitaire. Ces activités visent à favoriser la circulation des
        connaissances, les collaborations et l’émergence de jeunes chercheurs.
      </p>
    </AcademicPage>
  );
}
