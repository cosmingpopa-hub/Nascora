"use client";

import React from "react";

export default function Privacy() {
  const [lang, setLang] = React.useState("ro");

  const s = {
    maxWidth: 720,
    margin: "0 auto",
    padding: "60px 24px",
    fontSize: 15,
    lineHeight: 1.8,
    color: "#374151",
  };

  const h2 = {
    fontSize: 22,
    fontWeight: 700,
    color: "#0D1B2A",
    margin: "32px 0 12px",
  };

  const h3 = {
    fontSize: 17,
    fontWeight: 600,
    color: "#1E3A5F",
    margin: "20px 0 8px",
  };

  const highlight = {
    background: "#EFF6FF",
    borderLeft: "4px solid #3B82F6",
    padding: "12px 16px",
    borderRadius: "0 8px 8px 0",
    margin: "16px 0",
    fontSize: 14,
  };

  const langButton = (active) => ({
    padding: "4px 12px",
    fontSize: 13,
    borderRadius: 999,
    border: "1px solid #D1D5DB",
    cursor: "pointer",
    backgroundColor: active ? "#111827" : "#FFFFFF",
    color: active ? "#FFFFFF" : "#111827",
    fontWeight: active ? 600 : 400,
  });

  return (
    <div style={s}>
      <a
        href="/"
        style={{
          fontSize: 13,
          color: "#5FA8D3",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: 16,
        }}
      >
        &larr; Back to NASCORA
      </a>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <h1 style={{ fontSize: 30, fontWeight: 800, color: "#0D1B2A", margin: 0 }}>
          {lang === "en" ? "Privacy Policy" : "Politica de Confidențialitate"}
        </h1>

        <div style={{ display: "flex", gap: 6 }}>
          <button type="button" onClick={() => setLang("en")} style={langButton(lang === "en")}>EN</button>
          <button type="button" onClick={() => setLang("ro")} style={langButton(lang === "ro")}>RO</button>
        </div>
      </div>

      <p style={{ color: "#9CA3AF", fontSize: 13, marginBottom: 32 }}>
        {lang === "en"
          ? "Last updated: 27 March 2026 · GDPR (EU) 2016/679 compliant"
          : "Ultima actualizare: 27 martie 2026 · Conformă cu GDPR (UE) 2016/679"}
      </p>

      {lang === "en"
        ? <PrivacyEN h2={h2} h3={h3} highlight={highlight} />
        : <PrivacyRO h2={h2} h3={h3} highlight={highlight} />}

      <div style={{ marginTop: 48, padding: "16px 20px", background: "#F9FAFB", borderRadius: 10, fontSize: 13, color: "#6B7280" }}>
        {lang === "en"
          ? "Privacy or GDPR questions? Contact us at "
          : "Întrebări despre confidențialitate sau GDPR? Contactați-ne la "}
        <a href="mailto:contact@devaieood.com" style={{ color: "#5FA8D3" }}>
          contact@devaieood.com
        </a>
      </div>
    </div>
  );
}

function PrivacyEN({ h2, h3, highlight }) {
  const link = { color: "#5FA8D3" };
  return (
    <>
      <h2 style={h2}>1. Data Controller</h2>
      <p>Your personal data is controlled by:</p>
      <ul>
        <li><strong>Company name:</strong> Dev AI LTD</li>
        <li><strong>UIC / VAT number:</strong> 208553841</li>
        <li><strong>Registered address:</strong> 1 Bogdan Voyvoda St., 7002 Ruse, Bulgaria</li>
        <li><strong>Website:</strong> https://www.devaieood.com</li>
        <li><strong>Contact:</strong> <a href="mailto:contact@devaieood.com" style={link}>contact@devaieood.com</a></li>
      </ul>
      <p>
        All privacy-related requests, including data subject rights requests, must be sent to{" "}
        <a href="mailto:contact@devaieood.com" style={link}>contact@devaieood.com</a>.
        This is our sole operational contact address.
      </p>

      <h2 style={h2}>2. Data Protection Officer (DPO)</h2>
      <p>
        Dev AI LTD has designated a Data Protection Officer responsible for overseeing GDPR compliance.
        You may contact the DPO at{" "}
        <a href="mailto:contact@devaieood.com" style={link}>contact@devaieood.com</a>{" "}
        with the subject line <strong>&quot;GDPR / DPO Request&quot;</strong>.
      </p>
      <p>
        We will acknowledge all DPO requests within 72 hours and respond substantively within
        30 days as required by GDPR Art. 12.
      </p>

      <h2 style={h2}>3. Information We Collect (GDPR Art. 13–14)</h2>

      <h3 style={h3}>3.1 Data you provide voluntarily</h3>
      <p>
        When you join the NASCORA waitlist or contact us directly, we may collect your name, e-mail
        address, professional role and organisation (optional), and the content of your message.
      </p>
      <p>
        <strong>Purpose:</strong> To respond to your request and keep you informed about NASCORA.
        <br />
        <strong>Legal basis:</strong> Consent (GDPR Art. 6(1)(a)) or legitimate interests (GDPR Art. 6(1)(f)).
      </p>

      <h3 style={h3}>3.2 Technical data collected automatically</h3>
      <p>
        When you visit the NASCORA website, we may automatically process limited technical data including
        IP address (anonymised where possible), browser type and version, device type and operating system,
        and aggregate page visit data.
      </p>
      <p>
        <strong>Purpose:</strong> Security, performance monitoring, and product improvement.
        <br />
        <strong>Legal basis:</strong> Legitimate interests (GDPR Art. 6(1)(f)).
      </p>

      <h3 style={h3}>3.3 Risk Checker — No server-side data collection</h3>
      <div style={highlight}>
        🔒 The Risk Checker does NOT transmit any data to our servers. All inputs are processed
        locally in your browser and are never stored or accessed by Dev AI LTD.
      </div>
      <p>
        The Risk Checker processes all inputs — including any pregnancy-related, medical, or
        substance-related data — exclusively within your browser using client-side JavaScript.
        Because no server-side processing occurs, GDPR obligations regarding special category
        health data (Art. 9) do not apply to Risk Checker inputs.
      </p>

      <h2 style={h2}>4. Special Category Data (Art. 9 GDPR)</h2>
      <p>
        NASCORA is designed to avoid processing health or pregnancy-related data on its servers.
        In the rare case that you voluntarily share health-related information when contacting us,
        such data constitutes special category data under GDPR Art. 9.
      </p>
      <p>We will process such data only:</p>
      <ul>
        <li>With your explicit consent (Art. 9(2)(a)), or</li>
        <li>Where strictly necessary to respond to your enquiry, minimising such data at all times.</li>
      </ul>
      <p>
        You may withdraw consent at any time by contacting{" "}
        <a href="mailto:contact@devaieood.com" style={link}>contact@devaieood.com</a>.
      </p>

      <h2 style={h2}>5. Legal Bases for Processing</h2>
      <ul>
        <li><strong>Art. 6(1)(a) — Consent:</strong> waitlist subscriptions and marketing communications.</li>
        <li><strong>Art. 6(1)(f) — Legitimate interests:</strong> website security, technical logs, service improvement.</li>
        <li><strong>Art. 6(1)(c) — Legal obligation:</strong> compliance with Bulgarian and EU law.</li>
        <li><strong>Art. 9(2)(a) — Explicit consent:</strong> for any special category (health) data you voluntarily provide.</li>
      </ul>

      <h2 style={h2}>6. Cookies and Analytics</h2>
      <p>
        NASCORA uses strictly necessary cookies for basic site functionality and security, and
        performance/analytics cookies (where consented) to understand aggregate usage patterns
        and improve the service. We do not use cookies to serve third-party advertising or sell
        your data to advertisers. Where required by law, we request your consent before setting
        non-essential cookies.
      </p>

      <h2 style={h2}>7. Data Retention</h2>
      <ul>
        <li><strong>Waitlist and contact data:</strong> retained until you withdraw consent or request deletion, and no longer than 3 years after last interaction.</li>
        <li><strong>Technical logs:</strong> retained for up to 90 days for security and debugging.</li>
        <li><strong>Accounting / legal records:</strong> retained as required by Bulgarian law (generally 5–10 years).</li>
      </ul>

      <h2 style={h2}>8. Data Sharing and International Transfers</h2>
      <p>
        We do not sell your personal data. We may share limited data with trusted service providers
        (hosting, e-mail delivery, analytics) acting as data processors under GDPR Art. 28, bound by
        appropriate Data Processing Agreements. We may disclose data if required by law or court order.
      </p>
      <p>
        For transfers outside the EEA, we ensure adequate protection through Standard Contractual
        Clauses (SCCs) approved by the European Commission or equivalent mechanisms.
      </p>

      <h2 style={h2}>9. Your Rights (GDPR Art. 15–22)</h2>
      <ul>
        <li><strong>Right of access (Art. 15):</strong> request a copy of your personal data.</li>
        <li><strong>Right to rectification (Art. 16):</strong> request correction of inaccurate data.</li>
        <li><strong>Right to erasure / &quot;right to be forgotten&quot; (Art. 17).</strong></li>
        <li><strong>Right to restriction of processing (Art. 18).</strong></li>
        <li><strong>Right to data portability (Art. 20).</strong></li>
        <li><strong>Right to object (Art. 21):</strong> object to processing based on legitimate interests.</li>
        <li><strong>Right to withdraw consent (Art. 7(3)),</strong> without affecting prior lawful processing.</li>
        <li>
          <strong>Right to lodge a complaint</strong> with the Bulgarian Commission for Personal Data
          Protection (<a href="https://www.cpdp.bg" style={link} target="_blank" rel="noopener noreferrer">www.cpdp.bg</a>)
          or the Romanian ANSPDCP (<a href="https://www.dataprotection.ro" style={link} target="_blank" rel="noopener noreferrer">www.dataprotection.ro</a>).
        </li>
      </ul>
      <p>
        To exercise any right, contact us at{" "}
        <a href="mailto:contact@devaieood.com" style={link}>contact@devaieood.com</a>.
        We will respond within 30 days.
      </p>

      <h2 style={h2}>10. Data Security</h2>
      <p>
        Dev AI LTD implements appropriate technical and organisational measures to protect personal
        data against unauthorised access, disclosure, alteration, or destruction — including HTTPS
        encryption, access controls, and regular security reviews.
      </p>

      <h2 style={h2}>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be indicated by
        updating the &quot;Last updated&quot; date above. Continued use of NASCORA constitutes
        acceptance of the updated Policy.
      </p>

      <h2 style={h2}>12. Contact</h2>
      <p>
        For all privacy and data protection enquiries, contact us at{" "}
        <a href="mailto:contact@devaieood.com" style={link}>contact@devaieood.com</a>{" "}
        with subject line <strong>&quot;Privacy / GDPR&quot;</strong>.
      </p>
    </>
  );
}

function PrivacyRO({ h2, h3, highlight }) {
  const link = { color: "#5FA8D3" };
  return (
    <>
      <h2 style={h2}>1. Operatorul de Date</h2>
      <p>Datele tale cu caracter personal sunt controlate de:</p>
      <ul>
        <li><strong>Denumire:</strong> Dev AI LTD</li>
        <li><strong>CUI / TVA:</strong> 208553841</li>
        <li><strong>Sediu înregistrat:</strong> Str. Bogdan Voyvoda nr. 1, 7002 Ruse, Bulgaria</li>
        <li><strong>Website:</strong> https://www.devaieood.com</li>
        <li><strong>Contact:</strong> <a href="mailto:contact@devaieood.com" style={link}>contact@devaieood.com</a></li>
      </ul>
      <p>
        Toate solicitările legate de confidențialitate trebuie transmise exclusiv la{" "}
        <a href="mailto:contact@devaieood.com" style={link}>contact@devaieood.com</a>.
        Acesta este singurul nostru e-mail operațional.
      </p>

      <h2 style={h2}>2. Responsabilul cu Protecția Datelor (DPO)</h2>
      <p>
        Dev AI LTD a desemnat un Responsabil cu Protecția Datelor (DPO) care supraveghează conformitatea
        cu GDPR. Poți contacta DPO la{" "}
        <a href="mailto:contact@devaieood.com" style={link}>contact@devaieood.com</a>{" "}
        cu subiectul <strong>&quot;GDPR / Solicitare DPO&quot;</strong>.
      </p>
      <p>
        Vom confirma primirea oricărei solicitări DPO în 72 de ore și vom răspunde în mod
        substanțial în 30 de zile conform Art. 12 GDPR.
      </p>

      <h2 style={h2}>3. Datele pe Care le Colectăm (GDPR Art. 13–14)</h2>

      <h3 style={h3}>3.1 Date furnizate voluntar</h3>
      <p>
        Când te înscrii pe lista de așteptare NASCORA sau ne contactezi, putem colecta: nume și prenume,
        adresă de e-mail, rol profesional și organizație (opțional) și conținutul mesajului tău.
      </p>
      <p>
        <strong>Scop:</strong> Răspunderea la solicitarea ta și informarea cu privire la evoluția NASCORA.
        <br />
        <strong>Temei legal:</strong> Consimțământul tău (Art. 6(1)(a) GDPR) sau interese legitime (Art. 6(1)(f) GDPR).
      </p>

      <h3 style={h3}>3.2 Date tehnice colectate automat</h3>
      <p>
        Când vizitezi site-ul NASCORA, putem prelucra automat date tehnice limitate: adresă IP
        (anonimizată unde este posibil), tip și versiune browser, tip dispozitiv și sistem de operare,
        și date agregate de vizitare a paginilor.
      </p>
      <p>
        <strong>Scop:</strong> Securitate, monitorizarea performanței și îmbunătățirea produsului.
        <br />
        <strong>Temei legal:</strong> Interese legitime (Art. 6(1)(f) GDPR).
      </p>

      <h3 style={h3}>3.3 Risk Checker — Fără colectare de date pe server</h3>
      <div style={highlight}>
        🔒 Risk Checker NU transmite niciun datum către serverele noastre. Toate datele introduse
        sunt procesate exclusiv local în browserul tău și nu sunt niciodată stocate sau accesate
        de Dev AI LTD.
      </div>
      <p>
        Risk Checker prelucrează toate datele introduse — inclusiv informații legate de sarcină,
        sănătate sau substanțe — exclusiv local, în browserul tău, prin JavaScript client-side.
        Deoarece nu are loc nicio prelucrare pe server, obligațiile GDPR privind datele cu caracter
        special (Art. 9) nu se aplică datelor introduse în Risk Checker.
      </p>

      <h2 style={h2}>4. Date cu Caracter Special (Art. 9 GDPR)</h2>
      <p>
        NASCORA este concepută să evite prelucrarea datelor de sănătate sau legate de sarcină pe
        serverele sale. În cazul rar în care partajezi voluntar informații medicale când ne contactezi,
        acestea constituie date cu caracter special conform Art. 9 GDPR.
      </p>
      <p>Le vom prelucra exclusiv:</p>
      <ul>
        <li>Cu consimțământul tău explicit (Art. 9(2)(a)), sau</li>
        <li>Strict necesar pentru a răspunde solicitării tale, minimizând astfel de date în orice moment.</li>
      </ul>
      <p>
        Poți retrage consimțământul oricând contactând{" "}
        <a href="mailto:contact@devaieood.com" style={link}>contact@devaieood.com</a>.
      </p>

      <h2 style={h2}>5. Temeiul Legal al Prelucrării</h2>
      <ul>
        <li><strong>Art. 6(1)(a) — Consimțământ:</strong> abonamentele la lista de așteptare și comunicări de marketing.</li>
        <li><strong>Art. 6(1)(f) — Interese legitime:</strong> securitatea site-ului, jurnale tehnice, îmbunătățirea serviciului.</li>
        <li><strong>Art. 6(1)(c) — Obligație legală:</strong> conformitate cu legea bulgară și UE.</li>
        <li><strong>Art. 9(2)(a) — Consimțământ explicit:</strong> pentru date cu caracter special furnizate voluntar.</li>
      </ul>

      <h2 style={h2}>6. Cookie-uri și Analize</h2>
      <p>
        NASCORA utilizează cookie-uri strict necesare pentru funcționalitatea de bază și securitate,
        și cookie-uri de performanță/analiză (cu consimțământ) pentru înțelegerea tiparelor de
        utilizare agregate. Nu utilizăm cookie-uri pentru publicitate de la terți și nu vindem datele
        tale. Unde este cerut de lege, solicităm consimțământul înainte de a seta cookie-uri neesențiale.
      </p>

      <h2 style={h2}>7. Durata Stocării</h2>
      <ul>
        <li><strong>Date de contact și lista de așteptare:</strong> păstrate până la retragerea consimțământului sau solicitarea ștergerii, și cel mult 3 ani de la ultima interacțiune.</li>
        <li><strong>Jurnale tehnice:</strong> păstrate maximum 90 de zile în scopuri de securitate și depanare.</li>
        <li><strong>Documente contabile / legale:</strong> păstrate conform legii bulgare (în general 5–10 ani).</li>
      </ul>

      <h2 style={h2}>8. Partajarea și Transferul Datelor</h2>
      <p>
        Nu vindem datele tale cu caracter personal. Putem partaja date limitate cu furnizori de servicii
        de încredere (hosting, e-mail, analize) legați prin Acorduri de Prelucrare a Datelor conform
        Art. 28 GDPR. Putem divulga date dacă este impus de lege sau hotărâre judecătorească.
      </p>
      <p>
        Pentru transferuri în afara SEE, asigurăm protecție prin Clauze Contractuale Standard aprobate
        de Comisia Europeană sau mecanisme echivalente.
      </p>

      <h2 style={h2}>9. Drepturile Tale (GDPR Art. 15–22)</h2>
      <ul>
        <li><strong>Dreptul de acces (Art. 15):</strong> solicitarea unei copii a datelor cu caracter personal.</li>
        <li><strong>Dreptul la rectificare (Art. 16):</strong> solicitarea corectării datelor inexacte.</li>
        <li><strong>Dreptul la ștergere / &quot;dreptul de a fi uitat&quot; (Art. 17).</strong></li>
        <li><strong>Dreptul la restricționarea prelucrării (Art. 18).</strong></li>
        <li><strong>Dreptul la portabilitatea datelor (Art. 20).</strong></li>
        <li><strong>Dreptul la opoziție (Art. 21):</strong> față de prelucrarea bazată pe interese legitime.</li>
        <li><strong>Dreptul de a retrage consimțământul (Art. 7(3)),</strong> fără a afecta prelucrarea anterioară.</li>
        <li>
          <strong>Dreptul de a depune o plângere</strong> la Autoritatea Națională de Supraveghere
          a Prelucrării Datelor cu Caracter Personal —{" "}
          <a href="https://www.dataprotection.ro" style={link} target="_blank" rel="noopener noreferrer">ANSPDCP</a>{" "}
          sau la Comisia bulgară pentru Protecția Datelor —{" "}
          <a href="https://www.cpdp.bg" style={link} target="_blank" rel="noopener noreferrer">CPDP</a>.
        </li>
      </ul>
      <p>
        Pentru exercitarea oricărui drept, contactați-ne la{" "}
        <a href="mailto:contact@devaieood.com" style={link}>contact@devaieood.com</a>.
        Vom răspunde în 30 de zile.
      </p>

      <h2 style={h2}>10. Securitatea Datelor</h2>
      <p>
        Dev AI LTD implementează măsuri tehnice și organizatorice adecvate pentru protejarea datelor
        cu caracter personal împotriva accesului neautorizat, divulgării, modificării sau distrugerii —
        inclusiv criptare HTTPS, controale de acces și revizuiri periodice de securitate.
      </p>

      <h2 style={h2}>11. Modificări ale Politicii</h2>
      <p>
        Putem actualiza această Politică de Confidențialitate periodic. Modificările importante vor fi
        semnalate prin actualizarea datei de mai sus. Utilizarea continuă a NASCORA constituie
        acceptarea Politicii actualizate.
      </p>

      <h2 style={h2}>12. Contact</h2>
      <p>
        Pentru toate solicitările privind confidențialitatea și protecția datelor, contactați-ne la{" "}
        <a href="mailto:contact@devaieood.com" style={link}>contact@devaieood.com</a>{" "}
        cu subiectul <strong>&quot;Privacy / GDPR&quot;</strong>.
      </p>
    </>
  );
}
