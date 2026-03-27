export const metadata = {
  title: "Terms & Conditions — NASCORA",
};

export default function Terms() {
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

  const langButton = (active) => ({
    padding: "4px 10px",
    fontSize: 13,
    borderRadius: 999,
    border: "1px solid #D1D5DB",
    cursor: "pointer",
    backgroundColor: active ? "#111827" : "#FFFFFF",
    color: active ? "#FFFFFF" : "#111827",
  });

  const [lang, setLang] = React.useState("en");

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
          marginBottom: 12,
          gap: 8,
        }}
      >
        <h1
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: "#0D1B2A",
            margin: 0,
          }}
        >
          {lang === "en" ? "Terms & Conditions" : "Termeni & Condiții"}
        </h1>

        <div style={{ display: "flex", gap: 6 }}>
          <button
            type="button"
            onClick={() => setLang("en")}
            style={langButton(lang === "en")}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang("ro")}
            style={langButton(lang === "ro")}
          >
            RO
          </button>
        </div>
      </div>

      <p style={{ color: "#9CA3AF", fontSize: 13, marginTop: 4 }}>
        {lang === "en"
          ? "Last updated: March 2026"
          : "Ultima actualizare: martie 2026"}
      </p>

      {lang === "en" ? <TermsEN h2={h2} /> : <TermsRO h2={h2} />}
    </div>
  );
}

function TermsEN({ h2 }) {
  return (
    <>
      <h2 style={h2}>1. Acceptance of Terms</h2>
      <p>
        By accessing or using NASCORA (www.nascora.health), you agree to be
        bound by these Terms &amp; Conditions. If you do not agree, please do
        not use the platform.
      </p>

      <h2 style={h2}>2. Operator</h2>
      <p>
        NASCORA is operated by Dev AI LTD, a company registered in Bulgaria
        (UIC/VAT 208553841), with registered address at 1 Bogdan Voyvoda St.,
        7002 Ruse, Bulgaria.
      </p>
      <p>
        Website: https://www.devaieood.com/ — Contact:
        contact@devaieood.com
      </p>

      <h2 style={h2}>3. Medical Disclaimer</h2>
      <p>
        NASCORA does not provide medical advice, diagnosis, or treatment. All
        information available through the Risk Checker, Evidence Library, blog,
        or any other feature is for educational and informational purposes only.
      </p>
      <p>
        Always seek the advice of your physician, OB-GYN, or other qualified
        healthcare provider with any questions regarding medications, supplements,
        or exposures during pregnancy, and never disregard professional medical
        advice because of something you read on NASCORA.
      </p>

      <h2 style={h2}>4. Nature of the service</h2>
      <p>
        NASCORA is a teratology education platform that provides evidence-based
        information about the potential risks of various substances during
        pregnancy, based on published peer-reviewed literature. Risk assessments
        are presented as general educational summaries and do not constitute
        personalized medical recommendations or clinical decisions.
      </p>
      <p>
        NASCORA is not classified as a medical device under EU MDR 2017/745 or
        applicable FDA regulations.
      </p>

      <h2 style={h2}>5. Client-side processing and privacy</h2>
      <p>
        The Risk Checker processes your inputs entirely client-side in your
        browser. Pregnancy-related, medical, or substance data you enter into
        the Risk Checker is not transmitted to our servers and is not stored by
        Dev AI LTD.
      </p>
      <p>
        You are responsible for using NASCORA in a private environment and for
        safeguarding the confidentiality of the information you enter on your
        device.
      </p>

      <h2 style={h2}>6. User responsibilities</h2>
      <p>
        You agree to use NASCORA for informational and educational purposes
        only, consult qualified healthcare professionals before making medical
        decisions, not rely solely on NASCORA for pregnancy-related medical
        decisions, provide accurate information when registering for the
        waitlist or contacting us, and use the platform in compliance with
        applicable laws and regulations.
      </p>

      <h2 style={h2}>7. Intellectual property</h2>
      <p>
        All content on NASCORA, including text, graphics, logos, and software,
        is the property of Dev AI LTD or used under license and is protected by
        intellectual property laws. The NASCORA name and logo are trademarks of
        Dev AI LTD.
      </p>

      <h2 style={h2}>8. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Dev AI LTD and NASCORA shall not
        be liable for any direct, indirect, incidental, consequential, special,
        or punitive damages arising from the use of or reliance on information
        provided through the platform, including medical decisions made based on
        information from NASCORA.
      </p>

      <h2 style={h2}>9. Governing law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of Bulgaria and, where applicable, European Union law. Any disputes
        shall be subject to the exclusive jurisdiction of the courts of Sofia,
        Bulgaria.
      </p>

      <h2 style={h2}>10. Contact</h2>
      <p>
        For questions about these Terms or about NASCORA, contact us at
        contact@devaieood.com.
      </p>
    </>
  );
}

function TermsRO({ h2 }) {
  return (
    <>
      <h2 style={h2}>1. Acceptarea Termenilor</h2>
      <p>
        Prin accesarea sau utilizarea NASCORA (www.nascora.health), îți exprimi
        acordul de a respecta acești Termeni &amp; Condiții. Dacă nu ești de
        acord, te rugăm să nu folosești platforma.
      </p>

      <h2 style={h2}>2. Operator</h2>
      <p>
        NASCORA este operată de Dev AI LTD, societate înregistrată în Bulgaria
        (UIC / TVA 208553841), cu sediul în Str. Bogdan Voyvoda nr. 1, 7002
        Ruse, Bulgaria.
      </p>
      <p>
        Website: https://www.devaieood.com/ — Email:
        contact@devaieood.com
      </p>

      <h2 style={h2}>3. Declarație medicală</h2>
      <p>
        NASCORA nu oferă servicii de diagnostic sau tratament medical. Toate
        informațiile disponibile prin Risk Checker, Evidence Library, blog sau
        alte funcționalități au scop exclusiv educațional și informativ.
      </p>
      <p>
        Solicită întotdeauna sfatul medicului tău, al medicului ginecolog sau al
        unui alt profesionist medical calificat și nu ignora sau amâna consultul
        medical pe baza informațiilor de pe NASCORA.
      </p>

      <h2 style={h2}>4. Natura serviciului</h2>
      <p>
        NASCORA este o platformă de educație în teratologie care oferă informații
        bazate pe dovezi științifice despre riscurile potențiale ale
        substanțelor în sarcină, folosind literatură științifică publicată.
        Rezultatele de risc reprezintă rezumate educaționale generale și nu
        constituie recomandări medicale personalizate sau decizii clinice.
      </p>
      <p>
        NASCORA nu este clasificată ca dispozitiv medical în sensul
        Regulamentului (UE) 2017/745 (MDR) sau al reglementărilor FDA
        aplicabile.
      </p>

      <h2 style={h2}>
        5. Procesare locală (client-side) și confidențialitate
      </h2>
      <p>
        Risk Checker îți procesează datele exclusiv local, în browserul tău
        (client-side). Datele introduse privind sarcina, sănătatea sau
        substanțele nu sunt transmise către serverele noastre și nu sunt
        stocate de Dev AI LTD.
      </p>
      <p>
        Ești responsabil pentru utilizarea NASCORA într-un mediu privat și
        pentru protejarea confidențialității informațiilor introduse pe
        dispozitivul tău.
      </p>

      <h2 style={h2}>6. Responsabilitățile utilizatorului</h2>
      <p>
        Ești de acord să folosești NASCORA exclusiv în scop informativ și
        educațional, să consulți un profesionist medical calificat înainte de a
        lua orice decizie medicală, să nu te bazezi exclusiv pe NASCORA pentru
        decizii medicale legate de sarcină, să furnizezi informații corecte
        când te înscrii pe lista de așteptare sau când ne contactezi și să
        folosești platforma cu respectarea legislației aplicabile.
      </p>

      <h2 style={h2}>7. Proprietate intelectuală</h2>
      <p>
        Tot conținutul de pe NASCORA, inclusiv texte, grafice, logo-uri și
        software, este proprietatea Dev AI LTD sau este utilizat în baza unei
        licențe și este protejat de legislația privind proprietatea
        intelectuală. Denumirea și logo-ul NASCORA sunt mărci ale Dev AI LTD.
      </p>

      <h2 style={h2}>8. Limitarea răspunderii</h2>
      <p>
        În măsura maximă permisă de lege, Dev AI LTD și NASCORA nu răspund
        pentru niciun fel de daune directe, indirecte, incidentale, consecutive,
        speciale sau punitive rezultate din sau în legătură cu utilizarea sau
        bazarea pe informațiile furnizate prin platformă, inclusiv decizii
        medicale luate pe baza informațiilor de pe NASCORA.
      </p>

      <h2 style={h2}>9. Legea aplicabilă</h2>
      <p>
        Acești Termeni sunt guvernați și interpretați în conformitate cu
        legislația Bulgariei și, acolo unde este aplicabil, cu dreptul Uniunii
        Europene. Orice litigiu este de competența exclusivă a instanțelor din
        Sofia, Bulgaria.
      </p>

      <h2 style={h2}>10. Contact</h2>
      <p>
        Pentru întrebări legate de acești Termeni sau de NASCORA, ne poți
        contacta la: contact@devaieood.com.
      </p>
    </>
  );
}
