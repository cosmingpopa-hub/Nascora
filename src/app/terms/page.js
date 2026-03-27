"use client";

import React from "react";

export default function Terms() {
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
    background: "#FFF8E1",
    borderLeft: "4px solid #F59E0B",
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
        <h1
          style={{
            fontSize: 30,
            fontWeight: 800,
            color: "#0D1B2A",
            margin: 0,
          }}
        >
          {lang === "en" ? "Terms & Conditions" : "Termeni și Condiții"}
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

      {lang === "en" ? <TermsEN h2={h2} highlight={highlight} /> : <TermsRO h2={h2} highlight={highlight} />}

      <div style={{ marginTop: 48, padding: "16px 20px", background: "#F9FAFB", borderRadius: 10, fontSize: 13, color: "#6B7280" }}>
        {lang === "en"
          ? "Questions about these Terms? Contact us at "
          : "Întrebări despre acești Termeni? Contactați-ne la "}
        <a href="mailto:contact@devaieood.com" style={{ color: "#5FA8D3" }}>contact@devaieood.com</a>
      </div>
    </div>
  );
}

function TermsEN({ h2, highlight }) {
  return (
    <>
      <h2 style={h2}>1. Acceptance of Terms</h2>
      <p>
        By accessing or using NASCORA (www.nascora.health), you agree to be bound by these Terms &amp; Conditions
        and all applicable laws. If you do not agree with any part of these terms, you must not use the platform.
      </p>

      <h2 style={h2}>2. Operator Information</h2>
      <p>NASCORA is developed and operated by:</p>
      <ul>
        <li><strong>Company name:</strong> Dev AI LTD</li>
        <li><strong>UIC / VAT number:</strong> 208553841</li>
        <li><strong>Registered address:</strong> 1 Bogdan Voyvoda St., 7002 Ruse, Bulgaria</li>
        <li><strong>Website:</strong> https://www.devaieood.com</li>
        <li><strong>Contact:</strong> contact@devaieood.com</li>
      </ul>
      <p>All legal, GDPR, and general enquiries must be directed exclusively to <a href="mailto:contact@devaieood.com" style={{ color: "#5FA8D3" }}>contact@devaieood.com</a>.</p>

      <h2 style={h2}>3. Medical Disclaimer</h2>
      <div style={highlight}>
        ⚠️ NASCORA does not provide medical advice, diagnosis, or treatment.
      </div>
      <p>
        All information available through the Risk Checker, Evidence Library, blog, or any other feature
        is for educational and informational purposes only. It is not a substitute for professional medical advice.
      </p>
      <p>
        Always seek the advice of your physician, OB-GYN, or another qualified healthcare professional before
        making any decisions regarding medications, supplements, or exposures during pregnancy. Never disregard
        or delay seeking professional medical advice based on information you have read on NASCORA.
      </p>

      <h2 style={h2}>4. Nature of the Service</h2>
      <p>
        NASCORA is a teratology education platform that provides evidence-based summaries about the potential
        risks of various substances during pregnancy, compiled from published peer-reviewed scientific literature.
        Risk assessments are presented as general educational summaries and do not constitute personalised medical
        recommendations or clinical decisions.
      </p>
      <p>
        NASCORA is not classified as a medical device under EU MDR 2017/745 or applicable FDA regulations.
      </p>

      <h2 style={h2}>5. Client-Side Processing — Risk Checker</h2>
      <div style={highlight}>
        🔒 No pregnancy-related or medical data you enter into the Risk Checker is ever transmitted to our servers.
      </div>
      <p>
        The Risk Checker processes all inputs entirely within your browser (client-side). Your data is not stored,
        transmitted, or accessible by Dev AI LTD or any third party. You are solely responsible for using NASCORA
        in a private environment and for safeguarding the confidentiality of any information you enter on your device.
      </p>

      <h2 style={h2}>6. Special Category (Medical) Data</h2>
      <p>
        Because the Risk Checker operates client-side only, Dev AI LTD does not process any health or
        pregnancy-related data you enter into it. If you voluntarily provide health-related information when
        contacting us or joining the waitlist, such data will be treated with the highest level of protection
        under Article 9 GDPR and processed only with your explicit consent.
      </p>

      <h2 style={h2}>7. User Responsibilities</h2>
      <p>By using NASCORA, you agree to:</p>
      <ul>
        <li>Use NASCORA exclusively for informational and educational purposes.</li>
        <li>Consult a qualified healthcare professional before making any medical decision.</li>
        <li>Not rely solely on NASCORA for pregnancy-related medical decisions.</li>
        <li>Provide accurate and complete information when registering for the waitlist or contacting us.</li>
        <li>Use the platform in compliance with all applicable laws and regulations.</li>
        <li>Not attempt to reverse-engineer, copy, or misuse the platform or its content.</li>
      </ul>

      <h2 style={h2}>8. Intellectual Property</h2>
      <p>
        All content on NASCORA — including text, graphics, logos, data compilations, and software — is the
        property of Dev AI LTD or is used under licence, and is protected by applicable intellectual property laws.
        The NASCORA name and logo are trademarks of Dev AI LTD. Unauthorised reproduction or use is strictly prohibited.
      </p>

      <h2 style={h2}>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Dev AI LTD and NASCORA shall not be liable for any
        direct, indirect, incidental, consequential, special, or punitive damages arising from the use of or
        reliance on information provided through the platform, including medical or health-related decisions made
        based on information from NASCORA.
      </p>
      <p>
        Nothing in these Terms excludes or limits liability in cases where such exclusion is prohibited by
        applicable EU consumer protection or Bulgarian law.
      </p>

      <h2 style={h2}>10. Governing Law and Jurisdiction</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of Bulgaria and, where applicable,
        European Union law. Any dispute arising out of or in connection with these Terms shall be subject to
        the exclusive jurisdiction of the competent courts of Sofia, Bulgaria.
      </p>

      <h2 style={h2}>11. Changes to These Terms</h2>
      <p>
        Dev AI LTD reserves the right to update these Terms at any time. Material changes will be indicated by
        updating the &quot;Last updated&quot; date above. Continued use of NASCORA after changes are posted constitutes
        your acceptance of the revised Terms.
      </p>

      <h2 style={h2}>12. Contact</h2>
      <p>
        For any questions regarding these Terms, please contact us at{" "}
        <a href="mailto:contact@devaieood.com" style={{ color: "#5FA8D3" }}>contact@devaieood.com</a>.
      </p>
    </>
  );
}

function TermsRO({ h2, highlight }) {
  return (
    <>
      <h2 style={h2}>1. Acceptarea Termenilor</h2>
      <p>
        Prin accesarea sau utilizarea NASCORA (www.nascora.health), îți exprimi acordul față de acești
        Termeni și Condiții și față de legislația aplicabilă. Dacă nu ești de acord cu oricare dintre
        prevederile acestora, te rugăm să nu utilizezi platforma.
      </p>

      <h2 style={h2}>2. Informații despre Operator</h2>
      <p>NASCORA este dezvoltată și operată de:</p>
      <ul>
        <li><strong>Denumire:</strong> Dev AI LTD</li>
        <li><strong>CUI / TVA:</strong> 208553841</li>
        <li><strong>Sediu înregistrat:</strong> Str. Bogdan Voyvoda nr. 1, 7002 Ruse, Bulgaria</li>
        <li><strong>Website:</strong> https://www.devaieood.com</li>
        <li><strong>Contact:</strong> contact@devaieood.com</li>
      </ul>
      <p>
        Toate solicitările legale, GDPR și generale trebuie adresate exclusiv la{" "}
        <a href="mailto:contact@devaieood.com" style={{ color: "#5FA8D3" }}>contact@devaieood.com</a>.
      </p>

      <h2 style={h2}>3. Declarație Medicală</h2>
      <div style={highlight}>
        ⚠️ NASCORA nu oferă consultanță medicală, diagnostic sau tratament.
      </div>
      <p>
        Toate informațiile disponibile prin Risk Checker, Evidence Library, blog sau oricare altă
        funcționalitate a NASCORA sunt destinate exclusiv scopurilor educaționale și informative.
        Acestea nu înlocuiesc sfatul medical profesionist.
      </p>
      <p>
        Consultați întotdeauna medicul de familie, ginecologul sau un alt profesionist medical calificat
        înainte de a lua orice decizie privind medicamentele, suplimentele sau expunerile în sarcină.
        Nu ignorați și nu amânați consultul medical pe baza informațiilor citite pe NASCORA.
      </p>

      <h2 style={h2}>4. Natura Serviciului</h2>
      <p>
        NASCORA este o platformă de educație în teratologie care oferă rezumate bazate pe dovezi despre
        riscurile potențiale ale substanțelor în sarcină, compilate din literatura științifică publicată
        în jurnale cu recenzie inter pares. Evaluările de risc sunt prezentate ca rezumate educaționale
        generale și nu constituie recomandări medicale personalizate sau decizii clinice.
      </p>
      <p>
        NASCORA nu este clasificată ca dispozitiv medical conform Regulamentului (UE) 2017/745 (MDR)
        sau reglementărilor FDA aplicabile.
      </p>

      <h2 style={h2}>5. Procesare Locală (Client-Side) — Risk Checker</h2>
      <div style={highlight}>
        🔒 Niciun datum medical sau legat de sarcină introdus în Risk Checker nu este transmis vreodată
        către serverele noastre.
      </div>
      <p>
        Risk Checker procesează toate datele exclusiv local, în browserul tău (client-side). Datele tale
        nu sunt stocate, transmise sau accesibile de Dev AI LTD sau de terți. Ești singurul responsabil
        pentru utilizarea NASCORA într-un mediu privat și pentru protejarea confidențialității
        informațiilor introduse pe dispozitivul tău.
      </p>

      <h2 style={h2}>6. Date cu Caracter Special (Date Medicale)</h2>
      <p>
        Deoarece Risk Checker operează exclusiv client-side, Dev AI LTD nu prelucrează date de sănătate
        sau legate de sarcină pe care le introduci în acesta. Dacă furnizezi voluntar informații medicale
        atunci când ne contactezi sau te înscrii pe lista de așteptare, acestea vor fi tratate cu cel
        mai înalt nivel de protecție conform Art. 9 GDPR și prelucrate doar cu consimțământul tău explicit.
      </p>

      <h2 style={h2}>7. Responsabilitățile Utilizatorului</h2>
      <p>Prin utilizarea NASCORA, ești de acord să:</p>
      <ul>
        <li>Folosești NASCORA exclusiv în scop informativ și educațional.</li>
        <li>Consulți un profesionist medical calificat înainte de orice decizie medicală.</li>
        <li>Nu te bazezi exclusiv pe NASCORA pentru decizii medicale legate de sarcină.</li>
        <li>Furnizezi informații corecte și complete la înscrierea pe lista de așteptare sau la contactarea noastră.</li>
        <li>Folosești platforma cu respectarea legislației aplicabile.</li>
        <li>Nu încerci să copiezi, să inversezi sau să folosești abuziv platforma sau conținutul acesteia.</li>
      </ul>

      <h2 style={h2}>8. Proprietate Intelectuală</h2>
      <p>
        Tot conținutul NASCORA — inclusiv texte, grafice, logo-uri, compilații de date și software —
        este proprietatea Dev AI LTD sau este utilizat sub licență, și este protejat de legislația privind
        proprietatea intelectuală. Denumirea și logo-ul NASCORA sunt mărci ale Dev AI LTD.
        Reproducerea sau utilizarea neautorizată este strict interzisă.
      </p>

      <h2 style={h2}>9. Limitarea Răspunderii</h2>
      <p>
        În măsura maximă permisă de lege, Dev AI LTD și NASCORA nu răspund pentru niciun prejudiciu
        direct, indirect, incidental, consecutiv, special sau punitiv rezultat din utilizarea sau bazarea
        pe informațiile furnizate prin platformă, inclusiv decizii medicale luate pe baza informațiilor
        de pe NASCORA.
      </p>
      <p>
        Nimic din acești Termeni nu exclude sau limitează răspunderea în cazurile interzise de legislația
        aplicabilă UE sau bulgară.
      </p>

      <h2 style={h2}>10. Legea Aplicabilă și Jurisdicție</h2>
      <p>
        Acești Termeni sunt guvernați de legislația Bulgariei și, unde este aplicabil, de dreptul Uniunii
        Europene. Orice litigiu va fi de competența exclusivă a instanțelor competente din Sofia, Bulgaria.
      </p>

      <h2 style={h2}>11. Modificări ale Termenilor</h2>
      <p>
        Dev AI LTD își rezervă dreptul de a actualiza acești Termeni oricând. Modificările importante vor
        fi semnalate prin actualizarea datei de mai sus. Utilizarea continuă a NASCORA după publicarea
        modificărilor constituie acceptarea noilor Termeni.
      </p>

      <h2 style={h2}>12. Contact</h2>
      <p>
        Pentru orice întrebări legate de acești Termeni, contactați-ne la{" "}
        <a href="mailto:contact@devaieood.com" style={{ color: "#5FA8D3" }}>contact@devaieood.com</a>.
      </p>
    </>
  );
}
