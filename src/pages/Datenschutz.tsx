import React from 'react';

const Datenschutz: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung (Privacy Policy)</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Überblick über den Datenschutz</h2>
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
        <p>Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Detaillierte Informationen finden Sie in dieser Datenschutzerklärung.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Verantwortliche Stelle für die Datenverarbeitung</h2>
        <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Website-Betreiber.</p>
        <p>Kontaktinformationen finden Sie im Impressum.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Erhebung Ihrer Daten</h2>
        <p>Direkt bereitgestellte Daten: z. B. durch Klicken auf externe Links zu Calendly.</p>
        <p>Automatisch erhobene Daten: z. B. Browsertyp, Betriebssystem, Zugriffszeitpunkt, IP-Adresse über Server-Logfiles.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Zweck der Datenerhebung</h2>
        <p>Wir verwenden Ihre Daten, um:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Eine funktionale und sichere Website bereitzustellen.</li>
          <li>Online-Terminbuchungen über Calendly zu ermöglichen.</li>
          <li>Videos über Google Drive einzubetten und anzuzeigen.</li>
          <li>Website-Schriften über Google Fonts (CDN) zu laden.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Ihre Rechte</h2>
        <p>Sie haben das Recht, jederzeit:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Auskunft über Ihre gespeicherten Daten zu erhalten.</li>
          <li>Berichtigung oder Löschung Ihrer Daten zu verlangen.</li>
          <li>Ihre Einwilligung für zukünftige Datenverarbeitungen zu widerrufen.</li>
          <li>Beschwerde bei der zuständigen Datenschutzbehörde einzureichen.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
        <p>Unsere Website verwendet Cookies:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Essenzielle Cookies: Für die Funktionalität der Website erforderlich (können nicht deaktiviert werden).</li>
          <li>Funktionale Cookies: Für Calendly-Buchungsformulare und eingebettete Google Drive-Videos (werden nur nach Einwilligung geladen).</li>
        </ul>
        <p>Sie können Ihren Browser so einstellen, dass Cookies blockiert oder nach jeder Sitzung gelöscht werden. Beachten Sie bitte, dass dadurch die Funktionalität eingeschränkt sein kann.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Calendly</h2>
        <p>Wir verwenden den Dienst Calendly (Calendly LLC, 271 17th St NW, Atlanta, GA 30363, USA) für die Online-Terminbuchung.</p>
        <p>Wenn Sie das eingebettete Buchungsformular verwenden oder auf einen Calendly-Link klicken, werden Ihre IP-Adresse, Browserdaten und eingegebene Informationen an die Server von Calendly in den USA übertragen.</p>
        <p>Die Datenübermittlung in die USA erfolgt auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</p>
        <p>Weitere Informationen: Calendly Datenschutzerklärung.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Google Drive-Einbettungen</h2>
        <p>Unsere Website kann Videos anzeigen, die auf Google Drive gespeichert sind.</p>
        <p>Wenn Sie diese Videos abspielen, werden Ihre IP-Adresse, Gerätedaten und weitere technische Informationen an Google-Server (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; Muttergesellschaft in den USA) übertragen.</p>
        <p>Die Übertragung erfolgt nur, wenn Sie über das Cookie-Banner eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO).</p>
        <p>Weitere Informationen: Google Datenschutzerklärung.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Google Fonts</h2>
        <p>Diese Website verwendet Google Fonts, die auf Google-Servern (fonts.googleapis.com / fonts.gstatic.com) gehostet werden.</p>
        <p>Beim Laden einer Seite verbindet sich Ihr Browser mit diesen Servern, und Ihre IP-Adresse wird übertragen.</p>
        <p>Wir verwenden Google Fonts für ein einheitliches Erscheinungsbild der Website (Art. 6 Abs. 1 lit. f DSGVO).</p>
        <p>Sie können dies verhindern, indem Sie nicht-essenzielle Ressourcen in den Cookie-Einstellungen deaktivieren.</p>
        <p>Weitere Informationen: Google Fonts FAQ und Google Datenschutzerklärung.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Server-Logfiles</h2>
        <p>Der Website-Anbieter erhebt automatisch:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Browsertyp und Version</li>
          <li>Betriebssystem</li>
          <li>Referrer-URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Zeitpunkt der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>Diese Logs werden temporär für Sicherheits- und Fehlerbehebungszwecke gespeichert (Art. 6 Abs. 1 lit. f DSGVO).</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Kontakt</h2>
        <p>Bei Fragen zu dieser Datenschutzerklärung oder zu Ihren Daten finden Sie die Kontaktdaten im Impressum.</p>
      </section>
    </div>
  );
};

export default Datenschutz;
