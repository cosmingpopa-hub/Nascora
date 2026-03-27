// pages/privacy.tsx
import { useState } from "react";

export default function PrivacyPage() {
  const [lang, setLang] = useState<"en" | "ro">("en");

  return (
    <main className="min-h-screen px-4 py-10 max-w-3xl mx-auto">
      {/* Language toggle */}
      <div className="flex justify-end mb-6 gap-2">
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

      {lang === "en" ? <PrivacyEN /> : <PrivacyRO />}
    </main>
  );
}

function PrivacyEN() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Who we are</h2>
        <p>
          NASCORA is operated by Dev AI LTD, a company registered in Bulgaria.
          We are committed to protecting your personal data in accordance with
          the EU General Data Protection Regulation (GDPR) and applicable data
          protection laws.
        </p>
        <ul className="list-disc pl-5">
          <li>Company name: Dev AI LTD</li>
          <li>Registration / UIC / VAT: 208553841</li>
          <li>Address: 1 Bogdan Voyvoda St., 7002 Ruse, Bulgaria</li>
          <li>Website: https://www.devaieood.com/</li>
          <li>Contact email: contact@devaieood.com</li>
        </ul>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">2. What data we collect</h2>

        <h3 className="text-lg font-semibold">2.1 Data you provide</h3>
        <ul className="list-disc pl-5">
          <li>
            Waitlist registration: email address (to notify you about NASCORA
            launch and updates).
          </li>
          <li>
            Contact or support: email address, your name (if you provide it),
            and the content of your message.
          </li>
        </ul>

        <h3 className="text-lg font-semibold">
          Risk Checker and medical / health data
        </h3>
        <p>
          When you use the NASCORA Risk Checker, all risk calculations and
          searches are processed client-side in your browser. We do not store
          your search queries, substances, medications, or pregnancy-related
          details, and no such data is transmitted to our servers.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">
          3. Automatically collected data
        </h2>
        <p>
          If you consent to analytics, we may use a privacy-friendly analytics
          tool to collect aggregated, anonymized usage data (for example page
          views, browser type, and approximate location at country level). This
          tool is configured to avoid using tracking cookies and to avoid
          storing personal identifiers.
        </p>
        <p>
          If you decline analytics, we do not collect analytics or tracking data
          about your visits.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">
          4. Purposes and legal bases (GDPR)
        </h2>
        <ul className="list-disc pl-5">
          <li>
            Waitlist and communication: based on your consent (Art. 6(1)(a)
            GDPR).
          </li>
          <li>
            Website operation and security (basic server logs): based on our
            legitimate interest in running a secure service (Art. 6(1)(f) GDPR).
          </li>
          <li>
            Analytics (if enabled): based on your consent and designed to avoid
            processing of personal data where possible.
          </li>
          <li>
            Risk Checker medical data: processed locally in your browser. Dev AI
            LTD does not receive or store this special category data on its
            servers.
          </li>
        </ul>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">5. Recipients and transfers</h2>
        <p>
          We may use third-party service providers (for example hosting and
          infrastructure providers) to operate the NASCORA website. Where such
          providers are located outside the EU/EEA, transfers are protected by
          appropriate safeguards under GDPR (such as Standard Contractual
          Clauses).
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">6. Retention</h2>
        <ul className="list-disc pl-5">
          <li>
            Waitlist emails: kept until you unsubscribe, withdraw consent, or we
            discontinue the waitlist.
          </li>
          <li>
            Contact emails: kept as long as needed to handle your request and
            comply with legal obligations.
          </li>
          <li>
            Risk Checker inputs: not stored by Dev AI LTD and remain only in
            your browser.
          </li>
        </ul>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">7. Your GDPR rights</h2>
        <p>
          You have the right to access, rectify, erase, restrict, or object to
          the processing of your personal data, as well as the right to data
          portability and the right to withdraw consent at any time.
        </p>
        <p>
          To exercise your rights or ask questions about this policy, please
          contact us at contact@devaieood.com.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">8. Children</h2>
        <p>
          NASCORA is not directed at individuals under 16 years of age, and we
          do not knowingly collect personal data from children. If you believe
          we have collected data from a child, please contact us so that we can
          delete it.
        </p>
      </section>

      <section className="space-y-4 mt-8 mb-12">
        <h2 className="text-xl font-semibold">
          9. Changes to this Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Material changes
          will be communicated on the website, and the “Last updated” date at
          the top will be adjusted accordingly.
        </p>
      </section>
    </>
  );
}

function PrivacyRO() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">
        Politica de Confidențialitate
      </h1>
      <p className="text-sm text-gray-500 mb-8">Ultima actualizare: martie 2026</p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Cine suntem</h2>
        <p>
          NASCORA este operată de Dev AI LTD, o societate înregistrată în
          Bulgaria. Ne angajăm să îți protejăm datele cu caracter personal în
          conformitate cu Regulamentul (UE) 2016/679 (GDPR) și legislația
          aplicabilă privind protecția datelor.
        </p>
        <ul className="list-disc pl-5">
          <li>Denumire companie: Dev AI LTD</li>
          <li>Cod de înregistrare / UIC / TVA: 208553841</li>
          <li>Adresă: Str. Bogdan Voyvoda nr. 1, 7002 Ruse, Bulgaria</li>
          <li>Website: https://www.devaieood.com/</li>
          <li>Email de contact: contact@devaieood.com</li>
        </ul>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">2. Ce date colectăm</h2>

        <h3 className="text-lg font-semibold">2.1 Date furnizate de tine</h3>
        <ul className="list-disc pl-5">
          <li>
            Înscriere pe lista de așteptare: adresa de email (pentru a te
            informa despre lansarea și actualizările NASCORA).
          </li>
          <li>
            Contact / suport: adresa de email, numele (dacă îl furnizezi) și
            conținutul mesajului tău.
          </li>
        </ul>

        <h3 className="text-lg font-semibold">
          Risk Checker și date medicale / de sănătate
        </h3>
        <p>
          Atunci când folosești NASCORA Risk Checker, toate calculele și
          căutările sunt procesate local, în browserul tău (client-side). Nu
          stocăm interogările, substanțele, medicamentele sau detaliile legate
          de sarcină și nici nu transmitem aceste date către serverele noastre.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">
          3. Date colectate automat
        </h2>
        <p>
          Dacă îți exprimi consimțământul pentru analitice, putem utiliza un
          instrument de analiză orientat pe confidențialitate pentru a colecta
          date agregate și anonimizate despre utilizare (de exemplu afișări de
          pagină, tipul de browser, locație aproximativă la nivel de țară).
          Acesta este configurat astfel încât să nu folosească cookie‑uri de
          tracking și să evite stocarea de identificatori personali.
        </p>
        <p>
          Dacă refuzi analiticele, nu colectăm date de analiză sau tracking
          despre vizitele tale.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">
          4. Scopuri și temeiuri legale (GDPR)
        </h2>
        <ul className="list-disc pl-5">
          <li>
            Lista de așteptare și comunicare: bazată pe consimțământul tău (Art.
            6(1)(a) GDPR).
          </li>
          <li>
            Funcționarea și securitatea website‑ului (loguri de server de bază):
            bazate pe interesul nostru legitim de a opera un serviciu sigur
            (Art. 6(1)(f) GDPR).
          </li>
          <li>
            Analitice (dacă sunt activate): bazate pe consimțământul tău și
            concepute pentru a evita, pe cât posibil, prelucrarea de date
            personale.
          </li>
          <li>
            Date medicale din Risk Checker: prelucrate local în browserul tău.
            Dev AI LTD nu primește și nu stochează aceste date speciale pe
            serverele sale.
          </li>
        </ul>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">
          5. Destinatari și transferuri
        </h2>
        <p>
          Putem utiliza furnizori terți de servicii (de exemplu furnizori de
          hosting și infrastructură) pentru operarea website‑ului NASCORA.
          Atunci când acești furnizori sunt localizați în afara UE/SEE,
          transferurile sunt protejate prin garanții adecvate prevăzute de GDPR
          (cum ar fi Clauze Contractuale Standard).
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">6. Perioade de stocare</h2>
        <ul className="list-disc pl-5">
          <li>
            Emailuri pentru lista de așteptare: păstrate până când te
            dezabonezi, îți retragi consimțământul sau încetăm serviciul de
            waitlist.
          </li>
          <li>
            Emailuri de contact: păstrate atât timp cât este necesar pentru
            soluționarea cererii tale și respectarea obligațiilor legale.
          </li>
          <li>
            Datele introduse în Risk Checker: nu sunt stocate de Dev AI LTD și
            rămân doar în browserul tău.
          </li>
        </ul>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">
          7. Drepturile tale GDPR
        </h2>
        <p>
          Ai dreptul de acces, rectificare, ștergere, restricționare sau
          opoziție la prelucrarea datelor tale personale, precum și dreptul la
          portabilitatea datelor și dreptul de a‑ți retrage consimțământul în
          orice moment.
        </p>
        <p>
          Pentru a‑ți exercita drepturile sau pentru întrebări legate de această
          politică, ne poți contacta la adresa: contact@devaieood.com.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">8. Copii</h2>
        <p>
          NASCORA nu se adresează persoanelor cu vârsta sub 16 ani și nu
          colectăm în mod intenționat date personale de la copii. Dacă consideri
          că am colectat date de la un copil, te rugăm să ne contactezi pentru a
          le șterge.
        </p>
      </section>

      <section className="space-y-4 mt-8 mb-12">
        <h2 className="text-xl font-semibold">
          9. Modificări ale acestei Politici
        </h2>
        <p>
          Putem actualiza periodic această Politică de Confidențialitate.
          Modificările semnificative vor fi comunicate pe website, iar data
          “Ultima actualizare” de la început va fi modificată în consecință.
        </p>
      </section>
    </>
  );
}
