import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
        <p>Julin Design</p>
        <p>[Your Name/Company Name]</p>
        <p>[Your Street and House Number]</p>
        <p>[Your ZIP Code and City]</p>
        <p>Germany</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
        <p>Telefon: [Your Phone Number]</p>
        <p>E-Mail: [Your Email Address]</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
        <p>[Your VAT ID if applicable]</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>Berufsbezeichnung: [Your Profession, e.g., Webdesigner]</p>
        <p>Zuständige Kammer: [If applicable]</p>
        <p>Verliehen in: Deutschland</p>
        <p>Folgende berufsrechtliche Regelungen finden Anwendung: [List relevant regulations]</p>
        <p>Diese Regelungen sind einsehbar unter: [Link to regulations if available]</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Streitschlichtung</h2>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
        <p><a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://ec.europa.eu/consumers/odr</a></p>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Haftung für Inhalte</h2>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
        <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
      </section>
    </div>
  );
};

export default Impressum;
