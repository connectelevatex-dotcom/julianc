import React from 'react';

const Datenschutz: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white relative z-10">
      <div className="container mx-auto p-8 pt-32 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung (Privacy Policy)</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Überblick über den Datenschutz</h2>
        <div className="space-y-3">
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          <p>Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Detaillierte Informationen finden Sie in dieser Datenschutzerklärung.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Verantwortliche Stelle für die Datenverarbeitung</h2>
        <div className="space-y-3">
          <p><strong>Verantwortlicher:</strong></p>
          <p>Julian Müller<br />
          Julin Design<br />
          Musterstraße 123<br />
          12345 Berlin<br />
          Deutschland</p>
          <p>E-Mail: datenschutz@julindesign.de<br />
          Telefon: +49 (0) 30 12345678</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Ihre Rechte</h2>
        <div className="space-y-3">
          <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
            <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, unverzüglich die Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten zu verlangen.</li>
            <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer personenbezogenen Daten verlangen.</li>
            <li><strong>Recht auf Einschränkung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung verlangen.</li>
            <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können verlangen, dass wir Ihnen Ihre Daten in einem strukturierten Format übermitteln.</li>
            <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der Verarbeitung Ihrer Daten widersprechen.</li>
            <li><strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Erhebung und Verarbeitung von Daten</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">4.1 Automatisch erhobene Daten</h3>
            <p>Beim Besuch unserer Website werden automatisch folgende Daten erhoben:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Browsertyp und -version</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
            </ul>
            <p className="mt-2"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung einer funktionsfähigen Website)</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">4.2 Kontaktaufnahme</h3>
            <p>Bei der Kontaktaufnahme über E-Mail oder Telefon werden die von Ihnen mitgeteilten Daten zur Bearbeitung Ihrer Anfrage gespeichert.</p>
            <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Cookies und Tracking</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">5.1 Cookies</h3>
            <p>Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.</p>
            
            <div className="mt-3">
              <h4 className="font-semibold">Technisch notwendige Cookies:</h4>
              <p>Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.</p>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO</p>
            </div>
            
            <div className="mt-3">
              <h4 className="font-semibold">Funktionale Cookies:</h4>
              <p>Diese Cookies ermöglichen erweiterte Funktionen wie Calendly-Buchungen und eingebettete Videos.</p>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Externe Dienste</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">6.1 Calendly</h3>
            <p>Für Online-Terminbuchungen nutzen wir Calendly (Calendly LLC, 271 17th St NW, Atlanta, GA 30363, USA).</p>
            <p><strong>Verarbeitete Daten:</strong> IP-Adresse, Browserdaten, eingegebene Termindetails</p>
            <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
            <p><strong>Datenschutzerklärung:</strong> <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">https://calendly.com/privacy</a></p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">6.2 Google Drive (Video-Einbettungen)</h3>
            <p>Wir betten Videos von Google Drive ein (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland).</p>
            <p><strong>Verarbeitete Daten:</strong> IP-Adresse, Gerätedaten, Nutzungsstatistiken</p>
            <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
            <p><strong>Datenschutzerklärung:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">https://policies.google.com/privacy</a></p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">6.3 Google Fonts</h3>
            <p>Wir verwenden Google Fonts zur einheitlichen Darstellung von Schriftarten.</p>
            <p><strong>Verarbeitete Daten:</strong> IP-Adresse</p>
            <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einheitlicher Darstellung)</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Datenspeicherung und -löschung</h2>
        <div className="space-y-3">
          <p><strong>Server-Logfiles:</strong> Werden nach 7 Tagen automatisch gelöscht</p>
          <p><strong>Kontaktdaten:</strong> Werden nach Abschluss der Bearbeitung Ihrer Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen</p>
          <p><strong>Cookie-Einstellungen:</strong> Werden 12 Monate gespeichert</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Datensicherheit</h2>
        <div className="space-y-3">
          <p>Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.</p>
          <p>Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Datenübermittlung in Drittländer</h2>
        <div className="space-y-3">
          <p>Einige der von uns verwendeten Dienste (Calendly, Google Drive) haben ihren Sitz in den USA. Die Datenübermittlung erfolgt auf Basis von:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</li>
            <li>Angemessenheitsbeschlüssen der EU-Kommission</li>
            <li>Standardvertragsklauseln der EU-Kommission</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Änderungen der Datenschutzerklärung</h2>
        <div className="space-y-3">
          <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.</p>
          <p>Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">11. Kontakt zum Datenschutz</h2>
        <div className="space-y-3">
          <p>Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an:</p>
          <p>Julian Müller<br />
          E-Mail: datenschutz@julindesign.de<br />
          Telefon: +49 (0) 30 12345678</p>
          <p className="text-sm text-gray-400">Stand dieser Datenschutzerklärung: {new Date().toLocaleDateString('de-DE')}</p>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Datenschutz;
