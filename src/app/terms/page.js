"use client";

import { useState } from "react";

export const metadata = {
  title: "Terms & Conditions — NASCORA",
};

export default function TermsPage() {
  const [lang, setLang] = useState("en");

  return (
    <main className="min-h-screen px-4 py-10 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6 gap-2">
        <a
          href="/"
          className="text-sm text-sky-500 hover:text-sky-600 underline-offset-2 hover:underline"
        >
          ← Back to NASCORA
        </a>

        <div className="flex gap-2">
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 text-sm border rounded ${
              lang === "en" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("ro")}
            className={`px-3 py-1 text-sm border rounded ${
              lang === "ro" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            RO
          </button>
        </div>
      </div>

      {lang === "en" ? <TermsEN /> : <TermsRO />}
    </main>
  );
}

function TermsEN() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Terms &amp; Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By accessing or using NASCORA (www.nascora.health), you agree to be
          bound by these Terms &amp; Conditions. If you do not agree with these
          Terms, you must not use the platform.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">2. Operator</h2>
        <p>
          NASCORA is operated by Dev AI LTD, a company registered in Bulgaria
          (UIC/VAT 208553841), with registered address at 1 Bogdan Voyvoda St.,
          7002 Ruse, Bulgaria.
        </p>
        <p>
          Website:{" "}
          <a
            href="https://www.devaieood.com/"
            className="underline text-blue-600"
          >
            https://www.devaieood.com/
          </a>
          <br />
          Contact:{" "}
          <a
            href="mailto:contact@devaieood.com"
            className="underline text-blue-600"
          >
            contact@devaieood.com
          </a>
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">3. Medical Disclaimer</h2>
        <p>
          NASCORA does not provide medical advice, diagnosis, or treatment. All
          information available through the Risk Checker, Evidence Library,
          blog, or other features is provided for educational and informational
          purposes only.
        </p>
        <p>
          Always seek the advice of your physician, OB-GYN, or other qualified
          healthcare provider regarding any questions you may have about a
          medical condition or medications, and never disregard professional
          medical advice because of information on NASCORA.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">4. Nature of the Service</h2>
        <p>
          NASCORA is a teratology education platform that provides evidence-based
          information on potential risks of substances during pregnancy based on
          published scientific literature. Risk outputs are general educational
          summaries and do not constitute personalized medical recommendations or
          clinical decisions.
        </p>
        <p>
          NASCORA is not classified as a medical device under EU MDR 2017/745 or
          applicable FDA regulations.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">
          5. Client-side processing and privacy
        </h2>
        <p>
          The Risk Checker processes your inputs entirely client-side in your
          browser. Your pregnancy-related, medical, or substance data entered
          into the Risk Checker is not transmitted to our servers and is not
          stored by Dev AI LTD.
        </p>
        <p>
          You are responsible for ensuring that you use NASCORA in a private
          environment and for safeguarding the confidentiality of the
          information you enter on your device.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">6. User responsibilities</h2>
        <ul className="list-disc pl-5">
          <li>Use NASCORA only for informational and educational purposes.</li>
          <li>
            Consult a qualified healthcare professional before making any
            medical decisions.
          </li>
          <li>
            Not rely solely on NASCORA for pregnancy-related medical decisions.
          </li>
          <li>
            Provide accurate information when registering for the waitlist or
            contacting us.
          </li>
          <li>
            Use the platform only in compliance with applicable laws and
            regulations.
          </li>
        </ul>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">7. Intellectual property</h2>
        <p>
          All content on NASCORA, including text, graphics, logos, and software,
          is owned or licensed by Dev AI LTD and protected by applicable
          intellectual property laws. The NASCORA name and logo are trademarks
          of Dev AI LTD.
        </p>
        <p>
          You may not copy, modify, distribute, or create derivative works from
          our content without our prior written consent, except as expressly
          permitted by law.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">8. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Dev AI LTD and its directors,
          employees, and contractors shall not be liable for any direct,
          indirect, incidental, consequential, special, or punitive damages
          arising out of or in connection with your use of or reliance on
          NASCORA.
        </p>
        <p>
          Nothing in these Terms excludes or limits liability where such
          exclusion or limitation is prohibited by applicable law.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">9. Governing law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of Bulgaria and, where applicable, European Union law. Any disputes
          arising out of or in connection with these Terms shall be subject to
          the exclusive jurisdiction of the competent courts of Sofia, Bulgaria.
        </p>
      </section>

      <section className="space-y-4 mt-8 mb-12">
        <h2 className="text-xl font-semibold">10. Contact</h2>
        <p>
          For any questions about these Terms or about NASCORA, please contact
          us at:{" "}
          <a
            href="mailto:contact@devaieood.com"
            className="underline text-blue-600"
          >
            contact@devaieood.com
          </a>
          <br />
          Website:{" "}
          <a
            href="https://www.devaieood.com/"
            className="underline text-blue-600"
          >
            https://www.devaieood.com/
          </a>
        </p>
      </section>
    </>
  );
}

function TermsRO() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Termeni &amp; Condiții</h1>
      <p className="text-sm text-gray-500 mb-8">
        Ultima actualizare: martie 2026
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Acceptarea Termenilor</h2>
        <p>
          Prin accesarea sau utilizarea NASCORA (www.nascora.health), îți exprimi
          acordul de a respecta acești Termeni &amp; Condiții. Dacă nu ești de
          acord cu acești Termeni, te rugăm să nu folosești platforma.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">2. Operator</h2>
        <p>
          NASCORA este operată de Dev AI LTD, societate înregistrată în Bulgaria
          (UIC / TVA 208553841), cu sediul în Str. Bogdan Voyvoda nr. 1, 7002
          Ruse, Bulgaria.
        </p>
        <p>
          Website:{" "}
          <a
            href="https://www.devaieood.com/"
            className="underline text-blue-600"
          >
            https://www.devaieood.com/
          </a>
          <br />
          Email de contact:{" "}
          <a
            href="mailto:contact@devaieood.com"
            className="underline text-blue-600"
          >
            contact@devaieood.com
          </a>
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">3. Declarație medicală</h2>
        <p>
          NASCORA nu oferă servicii de diagnostic sau tratament medical. Toate
          informațiile disponibile prin Risk Checker, Evidence Library, blog sau
          alte funcționalități au scop exclusiv educațional și informativ.
        </p>
        <p>
          Solicită întotdeauna sfatul medicului tău, al medicului ginecolog sau
          al unui alt profesionist medical calificat și nu ignora sau amâna
          consultul medical pe baza informațiilor de pe NASCORA.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">4. Natura serviciului</h2>
        <p>
          NASCORA este o platformă de educație în teratologie care oferă
          informații bazate pe dovezi științifice despre riscurile potențiale
          ale substanțelor în sarcină, folosind literatură științifică
          publicată. Rezultatele de risc reprezintă rezumate educaționale
          generale și nu constituie recomandări medicale personalizate sau
          decizii clinice.
        </p>
        <p>
          NASCORA nu este clasificată ca dispozitiv medical în sensul
          Regulamentului (UE) 2017/745 (MDR) sau al reglementărilor FDA
          aplicabile.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">
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
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">
          6. Responsabilitățile utilizatorului
        </h2>
        <ul className="list-disc pl-5">
          <li>
            Să folosești NASCORA exclusiv în scop informativ și educațional.
          </li>
          <li>
            Să consulți un profesionist medical calificat înainte de a lua
            orice decizie medicală.
          </li>
          <li>
            Să nu te bazezi exclusiv pe NASCORA pentru decizii medicale legate
            de sarcină.
          </li>
          <li>
            Să furnizezi informații corecte când te înscrii pe lista de așteptare
            sau când ne contactezi.
          </li>
          <li>
            Să folosești platforma doar cu respectarea legislației aplicabile.
          </li>
        </ul>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">7. Proprietate intelectuală</h2>
        <p>
          Tot conținutul de pe NASCORA, inclusiv texte, grafice, logo-uri și
          software, este proprietatea Dev AI LTD sau este utilizat în baza unei
          licențe și este protejat de legislația privind proprietatea
          intelectuală. Denumirea și logo-ul NASCORA sunt mărci ale Dev AI LTD.
        </p>
        <p>
          Nu ai dreptul să copiezi, modifici, distribui sau să creezi opere
          derivate din conținutul nostru fără consimțământul nostru prealabil în
          scris, cu excepția cazurilor permise de lege.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">8. Limitarea răspunderii</h2>
        <p>
          În măsura maximă permisă de lege, Dev AI LTD și directorii, angajații
          și colaboratorii săi nu răspund pentru niciun fel de daune directe,
          indirecte, incidentale, consecutive, speciale sau punitive rezultate
          din sau în legătură cu utilizarea sau bazarea pe NASCORA.
        </p>
        <p>
          Nimic din acești Termeni nu exclude sau limitează răspunderea în
          cazurile în care o astfel de limitare este interzisă de legea
          aplicabilă.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">9. Legea aplicabilă</h2>
        <p>
          Acești Termeni sunt guvernați și interpretați în conformitate cu
          legislația Bulgariei și, acolo unde este aplicabil, cu dreptul Uniunii
          Europene. Orice litigiu derivând din sau în legătură cu acești Termeni
          este de competența exclusivă a instanțelor competente din Sofia,
          Bulgaria.
        </p>
      </section>

      <section className="space-y-4 mt-8 mb-12">
        <h2 className="text-xl font-semibold">10. Contact</h2>
        <p>
          Pentru întrebări legate de acești Termeni sau de NASCORA, ne poți
          contacta la:{" "}
          <a
            href="mailto:contact@devaieood.com"
            className="underline text-blue-600"
          >
            contact@devaieood.com
          </a>
          <br />
          Website:{" "}
          <a
            href="https://www.devaieood.com/"
            className="underline text-blue-600"
          >
            https://www.devaieood.com/
          </a>
        </p>
      </section>
    </>
  );
}
