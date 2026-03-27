"use client";

import React from "react";

export default function Cookies() {
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

  const highlight = {
    background: "#EFF6FF",
    borderLeft: "4px solid #3B82F6",
    padding: "12px 16px",
    borderRadius: "0 8px 8px 0",
    margin: "16px 0",
    fontSize: 14,
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 14,
    margin: "16px 0",
  };

  const thStyle = {
    background: "#F3F4F6",
    padding: "10px 14px",
    textAlign: "left",
    fontWeight: 600,
    color: "#0D1B2A",
    borderBottom: "2px solid #E5E7EB",
  };

  const tdStyle = {
    padding: "10px 14px",
    borderBottom: "1px solid #E5E7EB",
    verticalAlign: "top",
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
          {lang === "en" ? "Cookie Policy" : "Politica de Cookie-uri"}
        </h1>

        <div style={{ display: "flex", gap: 6 }}>
          <button type="button" onClick={() => setLang("en")} style={langButton(lang === "en")}>EN</button>
          <button type="button" onClick={() => setLang("ro")} style={langButton(lang === "ro")}>RO</button>
        </div>
      </div>

      <p style={{ color: "#9CA3AF", fontSize: 13, marginBottom: 32 }}>
        {lang === "en"
          ? "Last updated: 27 March 2026 · Operator: Dev AI LTD (Bulgaria)"
          : "Ultima actualizare: 27 martie 2026 · Operator: Dev AI LTD (Bulgaria)"}
      </p>

      {lang === "en"
        ? <CookiesEN h2={h2} highlight={highlight} tableStyle={tableStyle} thStyle={thStyle} tdStyle={tdStyle} />
        : <CookiesRO h2={h2} highlight={highlight} tableStyle={tableStyle} thStyle={thStyle} tdStyle={tdStyle} />}

      <div style={{ marginTop: 48, padding: "16px 20px", background: "#F9FAFB", borderRadius: 10, fontSize: 13, color: "#6B7280" }}>
        {lang === "en"
          ? "Questions about cookies? Contact us at "
          : "Întrebări despre cookie-uri? Contactați-ne la "}
        <a href="mailto:contact@devaieood.com" style={{ color: "#5FA8D3" }}>
          contact@devaieood.com
        </a>
      </div>
    </div>
  );
}

function CookiesEN({ h2, highlight, tableStyle, thStyle, tdStyle }) {
  const link = { color: "#5FA8D3" };
  return (
    <>
      <h2 style={h2}>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They allow the
        site to recognise your browser, retain certain preferences, and help us deliver a more secure
        and reliable experience.
      </p>

      <h2 style={h2}>2. How NASCORA Uses Cookies</h2>
      <p>NASCORA uses cookies and similar technologies to:</p>
      <ul>
        <li>Ensure the basic technical functioning of the site.</li>
        <li>Maintain security and prevent abuse.</li>
        <li>Understand aggregate usage patterns to improve the product.</li>
      </ul>
      <p>
        We do <strong>not</strong> use cookies to display third-party advertising or to sell your
        data to advertisers.
      </p>

      <h2 style={h2}>3. Types of Cookies We Use</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Type</th>
            <th style={thStyle}>Purpose</th>
            <th style={thStyle}>Consent required?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}><strong>Strictly necessary</strong></td>
            <td style={tdStyle}>Load balancing, CSRF protection, basic security, session management.</td>
            <td style={tdStyle}>No</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Performance / analytics</strong></td>
            <td style={tdStyle}>Aggregate usage patterns (e.g. most-visited pages) to improve content and usability.</td>
            <td style={tdStyle}>Yes</td>
          </tr>
        </tbody>
      </table>
      <p>We do not place tracking cookies for advertising or profiling purposes.</p>

      <h2 style={h2}>4. Risk Checker and Cookies</h2>
      <div style={highlight}>
        🔒 The Risk Checker processes pregnancy-related inputs locally in your browser and does not
        send those inputs to our servers. Cookies used in this context are limited to ensuring technical
        functionality and security — never to store or transmit your medical inputs.
      </div>

      <h2 style={h2}>5. Third-Party Services</h2>
      <p>
        Some cookies may be set by third-party providers that help us deliver the service, such as
        infrastructure or analytics providers. These providers act as data processors under GDPR Art. 28
        and are selected for their adequate data protection safeguards. We do not work with advertising
        networks or data brokers.
      </p>

      <h2 style={h2}>6. Your Choices — Consent and Browser Settings</h2>
      <p>
        Where required by law (ePrivacy Directive / GDPR), we request your consent before setting
        non-essential cookies. You may withdraw or modify your consent at any time using:
      </p>
      <ul>
        <li>Your <strong>browser settings</strong> — most browsers allow you to block or delete cookies.</li>
        <li>Our <strong>cookie preferences banner</strong> — available when you first visit the site.</li>
      </ul>
      <p>
        Note: blocking certain cookies may affect the functionality or performance of the site.
      </p>

      <h2 style={h2}>7. Updates to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in our use of cookies
        or applicable regulations. Material changes will be indicated by updating the &quot;Last
        updated&quot; date above.
      </p>

      <h2 style={h2}>8. Contact</h2>
      <p>
        For questions about our use of cookies, contact us at{" "}
        <a href="mailto:contact@devaieood.com" style={link}>contact@devaieood.com</a>.
      </p>
    </>
  );
}

function CookiesRO({ h2, highlight, tableStyle, thStyle, tdStyle }) {
  const link = { color: "#5FA8D3" };
  return (
    <>
      <h2 style={h2}>1. Ce Sunt Cookie-urile?</h2>
      <p>
        Cookie-urile sunt fișiere text de mici dimensiuni stocate pe dispozitivul tău când vizitezi
        un site web. Permit site-ului să îți recunoască browserul, să rețină anumite preferințe și
        ne ajută să oferim o experiență mai sigură și fiabilă.
      </p>

      <h2 style={h2}>2. Cum Utilizează NASCORA Cookie-urile</h2>
      <p>NASCORA utilizează cookie-uri și tehnologii similare pentru:</p>
      <ul>
        <li>Asigurarea funcționării tehnice de bază a site-ului.</li>
        <li>Menținerea securității și prevenirea abuzurilor.</li>
        <li>Înțelegerea tiparelor de utilizare agregate pentru îmbunătățirea produsului.</li>
      </ul>
      <p>
        <strong>Nu</strong> utilizăm cookie-uri pentru publicitate de la terți și nu vindem datele
        tale terților.
      </p>

      <h2 style={h2}>3. Tipurile de Cookie-uri pe Care le Folosim</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Tip</th>
            <th style={thStyle}>Scop</th>
            <th style={thStyle}>Necesită consimțământ?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}><strong>Strict necesare</strong></td>
            <td style={tdStyle}>Echilibrare încărcare, protecție CSRF, securitate de bază, gestionarea sesiunii.</td>
            <td style={tdStyle}>Nu</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Performanță / analiză</strong></td>
            <td style={tdStyle}>Tipare de utilizare agregate (ex.: paginile cel mai frecvent vizitate) pentru îmbunătățirea conținutului și utilizabilității.</td>
            <td style={tdStyle}>Da</td>
          </tr>
        </tbody>
      </table>
      <p>Nu plasăm cookie-uri de urmărire în scop publicitar sau de profilare.</p>

      <h2 style={h2}>4. Risk Checker și Cookie-uri</h2>
      <div style={highlight}>
        🔒 Risk Checker prelucrează datele legate de sarcină exclusiv local în browserul tău și nu
        le transmite serverelor noastre. Cookie-urile utilizate în acest context sunt limitate la
        asigurarea funcționalității tehnice și a securității — niciodată pentru stocarea sau
        transmiterea datelor tale medicale.
      </div>

      <h2 style={h2}>5. Servicii Terțe</h2>
      <p>
        Unele cookie-uri pot fi setate de furnizori terți care ne ajută să livrăm serviciul, cum ar
        fi furnizori de infrastructură sau analiză. Acești furnizori acționează ca operatori asociați
        conform Art. 28 GDPR și sunt selectați pentru garanțiile adecvate de protecție a datelor.
        Nu colaborăm cu rețele de publicitate sau brokeri de date.
      </p>

      <h2 style={h2}>6. Alegerile Tale — Consimțământ și Setările Browserului</h2>
      <p>
        Acolo unde este cerut de lege (Directiva ePrivacy / GDPR), solicităm consimțământul tău
        înainte de a seta cookie-uri neesențiale. Poți retrage sau modifica consimțământul oricând prin:
      </p>
      <ul>
        <li><strong>Setările browserului</strong> — majoritatea browserelor permit blocarea sau ștergerea cookie-urilor.</li>
        <li><strong>Bannerul nostru de preferințe cookie</strong> — disponibil la prima vizită pe site.</li>
      </ul>
      <p>
        Atenție: blocarea anumitor cookie-uri poate afecta funcționalitatea sau performanța site-ului.
      </p>

      <h2 style={h2}>7. Actualizări ale Politicii de Cookie-uri</h2>
      <p>
        Putem actualiza această Politică de Cookie-uri periodic pentru a reflecta modificări în
        utilizarea cookie-urilor sau în reglementările aplicabile. Modificările importante vor fi
        semnalate prin actualizarea datei de mai sus.
      </p>

      <h2 style={h2}>8. Contact</h2>
      <p>
        Pentru întrebări despre utilizarea cookie-urilor, contactați-ne la{" "}
        <a href="mailto:contact@devaieood.com" style={link}>contact@devaieood.com</a>.
      </p>
    </>
  );
}
