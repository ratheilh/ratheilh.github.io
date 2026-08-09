import { AcademicPage, ExternalLink, PageIntro } from "../site-components";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <AcademicPage>
      <PageIntro title="Contact">
        Pour une collaboration scientifique, un encadrement, une conférence ou une initiative liée à l’intelligence artificielle.
      </PageIntro>

      <ul className="contact-list">
        <li><span>Adresse</span> IFRI, Université d’Abomey-Calavi, BP 2374 Calavi, Bénin</li>
        <li><span>Courriel UAC</span> <a href="mailto:ratheil.houndji@uac.bj">ratheil.houndji@uac.bj</a></li>
        <li><span>Courriel</span> <a href="mailto:vratheilhoundji@gmail.com">vratheilhoundji@gmail.com</a></li>
        <li><span>LinkedIn</span> <ExternalLink href="https://www.linkedin.com/in/vinasetan/">linkedin.com/in/vinasetan</ExternalLink></li>
        <li><span>YouTube</span> <ExternalLink href="https://www.youtube.com/channel/UC24YKysMzmerMK2a1PSlYwA">Chaîne YouTube</ExternalLink></li>
      </ul>

      <h2>Institution</h2>
      <p>
        <ExternalLink href="https://ifri-uac.bj">Institut de Formation et de Recherche en Informatique</ExternalLink><br />
        <ExternalLink href="https://uac.bj">Université d’Abomey-Calavi</ExternalLink><br />
        Abomey-Calavi, République du Bénin
      </p>
    </AcademicPage>
  );
}
