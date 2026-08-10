import { AcademicPage, ExternalLink, PageIntro } from "./site-components";
import type { Language } from "./i18n";

export function PrivacyContent({ language }: { language: Language }) {
  if (language === "en") {
    return (
      <AcademicPage language="en">
        <PageIntro title="Privacy policy">Information about how this website processes personal data and uses audience measurement.</PageIntro>
        <p className="policy-updated">Last updated: 10 August 2026</p>

        <h2>Data controller</h2>
        <p>Vinasétan Ratheil Esse Houndji, IFRI — University of Abomey-Calavi, BP 2374 Calavi, Benin. For any privacy-related question, write to <a href="mailto:ratheil.houndji@uac.bj">ratheil.houndji@uac.bj</a>.</p>

        <h2>Audience measurement with Google Analytics 4</h2>
        <p>This website uses Google Analytics 4 (measurement ID <strong>G-4MJSGB4RZT</strong>) only after you accept analytics. Where consent is required, it is the legal basis for this processing. The service helps understand which pages are viewed, how visitors arrive on the website, and how the website performs.</p>
        <p>Depending on your browser and Google Analytics configuration, processed data may include viewed pages, referrer, date and time, approximate location derived from the IP address, device and browser characteristics, interactions, and identifiers stored in first-party cookies. The website does not use Google Analytics for advertising or ad personalisation, and Google signals are disabled in the tag configuration.</p>

        <h2>Consent and storage</h2>
        <p>Analytics storage and all advertising-related Consent Mode parameters are denied by default. The Google Analytics tag is not downloaded and no analytics data is sent before you accept. If you refuse or withdraw consent, analytics remain disabled and this website attempts to remove its <code>_ga</code> cookies.</p>
        <p>Your choice is stored only in your browser’s local storage for up to six months, so that the website can remember it. This preference is strictly necessary to apply your choice and is not used for tracking. You can change it at any time through the <strong>Privacy</strong> button displayed on the website. Clearing your browser data will also reset the choice.</p>

        <h2>Recipients, transfers, and retention</h2>
        <p>When analytics are accepted, data is processed by Google as the analytics provider and may be processed outside your country. Google describes its safeguards and processing terms in its <ExternalLink href="https://business.safety.google/privacy/">Business Data Responsibility</ExternalLink> information and <ExternalLink href="https://policies.google.com/privacy">Privacy Policy</ExternalLink>.</p>
        <p>Google Analytics cookies may remain for up to two years unless they are deleted earlier or their lifetime is shortened by Google Analytics settings. Event-level data is retained according to the retention period configured for the GA4 property; aggregated reports may be kept for longer.</p>

        <h2>Your rights</h2>
        <p>You may withdraw your analytics consent at any time. Subject to the law applicable to you, you may also request access to, correction of, deletion of, restriction of, or objection to the processing of your personal data, and lodge a complaint with the competent data-protection authority. Contact the data controller using the address above to exercise these rights.</p>

        <h2>External websites</h2>
        <p>This website contains links to third-party services. Once you follow one of these links, the destination website’s own privacy policy applies.</p>
      </AcademicPage>
    );
  }

  return (
    <AcademicPage language="fr">
      <PageIntro title="Politique de confidentialité">Informations sur le traitement des données personnelles et la mesure d’audience de ce site.</PageIntro>
      <p className="policy-updated">Dernière mise à jour : 10 août 2026</p>

      <h2>Responsable du traitement</h2>
      <p>Vinasétan Ratheil Esse Houndji, IFRI — Université d’Abomey-Calavi, BP 2374 Calavi, Bénin. Pour toute question relative à la confidentialité, écrivez à <a href="mailto:ratheil.houndji@uac.bj">ratheil.houndji@uac.bj</a>.</p>

      <h2>Mesure d’audience avec Google Analytics 4</h2>
      <p>Ce site utilise Google Analytics 4 (identifiant de mesure <strong>G-4MJSGB4RZT</strong>) uniquement après votre acceptation des statistiques. Lorsque le consentement est requis, il constitue la base juridique de ce traitement. Ce service aide à comprendre les pages consultées, la manière dont les visiteurs arrivent sur le site et les performances du site.</p>
      <p>Selon votre navigateur et la configuration de Google Analytics, les données traitées peuvent comprendre les pages consultées, le site référent, la date et l’heure, une localisation approximative déduite de l’adresse IP, les caractéristiques de l’appareil et du navigateur, les interactions et des identifiants enregistrés dans des cookies internes. Le site n’utilise pas Google Analytics à des fins publicitaires ou de personnalisation des annonces, et les signaux Google sont désactivés dans la configuration de la balise.</p>

      <h2>Consentement et stockage</h2>
      <p>Le stockage analytique et tous les paramètres publicitaires du Mode Consentement sont refusés par défaut. La balise Google Analytics n’est pas téléchargée et aucune donnée analytique n’est envoyée avant votre acceptation. En cas de refus ou de retrait du consentement, les statistiques restent désactivées et le site tente de supprimer ses cookies <code>_ga</code>.</p>
      <p>Votre choix est conservé uniquement dans le stockage local de votre navigateur pendant six mois au maximum, afin que le site puisse le mémoriser. Cette préférence est strictement nécessaire à l’application de votre choix et n’est pas utilisée à des fins de suivi. Vous pouvez la modifier à tout moment au moyen du bouton <strong>Confidentialité</strong> affiché sur le site. La suppression des données de votre navigateur réinitialise également ce choix.</p>

      <h2>Destinataires, transferts et conservation</h2>
      <p>Lorsque les statistiques sont acceptées, les données sont traitées par Google, fournisseur du service de mesure d’audience, et peuvent être traitées hors de votre pays. Google décrit ses garanties et ses conditions de traitement dans ses informations sur la <ExternalLink href="https://business.safety.google/privacy/">protection des données professionnelles</ExternalLink> et dans sa <ExternalLink href="https://policies.google.com/privacy?hl=fr">politique de confidentialité</ExternalLink>.</p>
      <p>Les cookies Google Analytics peuvent être conservés jusqu’à deux ans, sauf suppression anticipée ou durée plus courte définie dans les paramètres de Google Analytics. Les données au niveau des événements sont conservées selon la durée configurée dans la propriété GA4 ; les rapports agrégés peuvent être conservés plus longtemps.</p>

      <h2>Vos droits</h2>
      <p>Vous pouvez retirer votre consentement aux statistiques à tout moment. Selon la réglementation qui vous est applicable, vous pouvez également demander l’accès, la rectification ou l’effacement de vos données personnelles, la limitation de leur traitement ou vous y opposer, et introduire une réclamation auprès de l’autorité de protection des données compétente. Contactez le responsable du traitement à l’adresse ci-dessus pour exercer ces droits.</p>

      <h2>Sites externes</h2>
      <p>Ce site contient des liens vers des services tiers. Lorsque vous suivez l’un de ces liens, la politique de confidentialité du site de destination s’applique.</p>
    </AcademicPage>
  );
}
