"use client";
import { useState, useEffect } from "react";

const COLORS = {
  dark: "#0D1B2A",
  body: "#374151",
  accent: "#5FA8D3",
  muted: "#9CA3AF",
  heading2: "#1B4965",
  green: "#059669",
  greenLight: "#D1FAE5",
  greenBorder: "#A7F3D0",
  accentLight: "#E0F2FE",
  accentBorder: "#BAE6FD",
  border: "#E5E7EB",
  bgHover: "#F9FAFB",
  bgDone: "#F0FDF4",
  white: "#FFFFFF",
};

const DATA = [
  {
    id: "medical",
    emoji: "🩺",
    title_ro: "Consultații Medicale",
    title_en: "Medical Consultations",
    items: [
      { id: "m1", ro: "Programează consultație prenatală la ginecolog", en: "Schedule a preconception visit with your OB/GYN" },
      { id: "m2", ro: "Analize de sânge complete (hemoleucogramă, glicemie, TSH, feritină)", en: "Comprehensive blood work (CBC, glucose, TSH, ferritin)" },
      { id: "m3", ro: "Verifică grupul sanguin și factorul Rh", en: "Check blood type and Rh factor" },
      { id: "m4", ro: "Test Papanicolau actualizat", en: "Updated Pap smear" },
      { id: "m5", ro: "Screening infecții (hepatită B/C, HIV, sifilis, toxoplasmoză, rubeolă)", en: "Infection screening (hepatitis B/C, HIV, syphilis, toxoplasmosis, rubella)" },
      { id: "m6", ro: "Evaluare ginecologică completă + ecografie", en: "Complete gynecological exam + ultrasound" },
      { id: "m7", ro: "Consultație stomatologică și tratarea cariilor", en: "Dental checkup and cavity treatment" },
      { id: "m8", ro: "Verifică tensiunea arterială și greutatea corporală", en: "Check blood pressure and body weight" },
      { id: "m9", ro: "Consultație genetică (dacă există istoric familial)", en: "Genetic counseling (if family history of genetic conditions)" },
      { id: "m10", ro: "Verifică statusul tiroidian (TSH, FT4)", en: "Check thyroid status (TSH, FT4)" },
      { id: "m11", ro: "Screening pentru factori de risc diabet gestațional", en: "Screen for gestational diabetes risk factors" },
    ],
  },
  {
    id: "nutrition",
    emoji: "🥗",
    title_ro: "Nutriție și Alimentație",
    title_en: "Nutrition & Diet",
    items: [
      { id: "n1", ro: "Dietă echilibrată: fructe, legume, proteine, cereale integrale", en: "Balanced diet: fruits, vegetables, protein, whole grains" },
      { id: "n2", ro: "Crește aportul de acid folic (spanac, linte, avocado)", en: "Increase folate-rich foods (spinach, lentils, avocado)" },
      { id: "n3", ro: "Aport adecvat de fier (carne roșie, leguminoase, semințe)", en: "Adequate iron intake (red meat, legumes, seeds)" },
      { id: "n4", ro: "Surse de calciu (lactate, broccoli, migdale)", en: "Calcium sources (dairy, broccoli, almonds)" },
      { id: "n5", ro: "Alimente bogate în Omega-3 (pește gras, nuci, semințe de in)", en: "Omega-3 rich foods (fatty fish, walnuts, flaxseed)" },
      { id: "n6", ro: "Limitează cofeina la max. 200mg/zi", en: "Limit caffeine to max 200mg/day" },
      { id: "n7", ro: "Evită peștele cu mercur ridicat (ton, rechin, macrou regal)", en: "Avoid high-mercury fish (tuna, shark, king mackerel)" },
      { id: "n8", ro: "Hidratare: minimum 2 litri de apă pe zi", en: "Hydration: minimum 2 liters of water daily" },
      { id: "n9", ro: "Evită alimentele procesate și zahărul adăugat excesiv", en: "Avoid processed foods and excessive added sugar" },
    ],
  },
  {
    id: "lifestyle",
    emoji: "🧘",
    title_ro: "Stil de Viață",
    title_en: "Lifestyle",
    items: [
      { id: "l1", ro: "Oprește complet consumul de alcool", en: "Stop alcohol consumption completely" },
      { id: "l2", ro: "Oprește fumatul (inclusiv fumul pasiv)", en: "Stop smoking (including passive smoke)" },
      { id: "l3", ro: "Oprește substanțele recreaționale", en: "Stop recreational substance use" },
      { id: "l4", ro: "Activitate fizică moderată (30 min/zi)", en: "Moderate exercise (30 min/day)" },
      { id: "l5", ro: "Somn de calitate — 7-9 ore pe noapte", en: "Quality sleep — 7-9 hours per night" },
      { id: "l6", ro: "Gestionează stresul (meditație, yoga, terapie)", en: "Manage stress (meditation, yoga, therapy)" },
      { id: "l7", ro: "Greutate corporală sănătoasă (IMC 18.5–24.9)", en: "Healthy weight (BMI 18.5–24.9)" },
      { id: "l8", ro: "Evită substanțe toxice (pesticide, solvenți, plumb)", en: "Avoid toxic substances (pesticides, solvents, lead)" },
      { id: "l9", ro: "Limitează temperaturi extreme (saună, băi fierbinți)", en: "Limit extreme temperatures (sauna, hot baths)" },
      { id: "l10", ro: "Discută planul de sarcină cu partenerul", en: "Discuss pregnancy plan with your partner" },
    ],
  },
  {
    id: "supplements",
    emoji: "💊",
    title_ro: "Suplimente",
    title_en: "Supplements",
    items: [
      { id: "s1", ro: "Acid folic 400–800 mcg/zi (minim 1 lună înainte de concepție)", en: "Folic acid 400–800 mcg/day (at least 1 month before conception)" },
      { id: "s2", ro: "Vitamina D — verifică nivelul, suplimentează dacă < 30 ng/ml", en: "Vitamin D — check levels, supplement if < 30 ng/ml" },
      { id: "s3", ro: "Fier — suplimentează dacă feritina este scăzută", en: "Iron — supplement if ferritin is low" },
      { id: "s4", ro: "Omega-3 (DHA) — 200–300 mg/zi", en: "Omega-3 (DHA) — 200–300 mg/day" },
      { id: "s5", ro: "Iod — 150 mcg/zi (dacă nu e în prenatal)", en: "Iodine — 150 mcg/day (if not in prenatal)" },
      { id: "s6", ro: "Discută cu medicul despre un complex prenatal complet", en: "Discuss a comprehensive prenatal multivitamin with your doctor" },
    ],
  },
  {
    id: "vaccines",
    emoji: "💉",
    title_ro: "Vaccinuri",
    title_en: "Vaccines",
    items: [
      { id: "v1", ro: "Imunitate rubeolă (IgG) — vaccinare minim 1 lună înainte", en: "Rubella immunity (IgG) — vaccinate at least 1 month before" },
      { id: "v2", ro: "Imunitate varicelă — vaccinare dacă e necesar", en: "Varicella immunity — vaccinate if needed" },
      { id: "v3", ro: "Actualizează dTpa (difterie, tetanos, pertussis)", en: "Update dTpa (diphtheria, tetanus, pertussis)" },
      { id: "v4", ro: "Vaccin hepatită B (dacă nu ești imunizată)", en: "Hepatitis B vaccine (if not immunized)" },
      { id: "v5", ro: "Vaccin antigripal (sezonul gripal)", en: "Flu vaccine (flu season)" },
      { id: "v6", ro: "Verifică vaccinarea HPV", en: "Check HPV vaccination status" },
    ],
  },
  {
    id: "medications",
    emoji: "📋",
    title_ro: "Medicamente de Revizuit",
    title_en: "Medications to Review",
    items: [
      { id: "rx1", ro: "Lista completă a medicamentelor curente (inclusiv OTC)", en: "Complete list of current medications (including OTC)" },
      { id: "rx2", ro: "Discută siguranța medicamentelor în sarcină cu medicul", en: "Discuss medication safety in pregnancy with your doctor" },
      { id: "rx3", ro: "Evaluează alternative sigure pentru cele contraindicate", en: "Evaluate safe alternatives for contraindicated medications" },
      { id: "rx4", ro: "Revizuiește suplimentele herbal — unele sunt contraindicate", en: "Review herbal supplements — some are contraindicated" },
      { id: "rx5", ro: "Discută medicamentele psihiatrice cu medicul", en: "Discuss psychiatric medications with your doctor" },
      { id: "rx6", ro: "Verifică medicamentele dermatologice (retinoizii sunt contraindicate!)", en: "Check dermatological medications (retinoids are contraindicated!)" },
      { id: "rx7", ro: "Consultă medicul despre antiepileptice sau tratamente cronice", en: "Consult doctor about antiepileptics or chronic treatments" },
    ],
  },
];

const STORAGE_KEY = "nascora_preconception";
const LANG_KEY = "nascora_preconception_lang";

export default function PreconceptionChecklist() {
  const [checked, setChecked] = useState({});
  const [lang, setLang] = useState("ro"); // "ro" | "en" | "bi"
  const [openCats, setOpenCats] = useState({ medical: true });
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(JSON.parse(saved));
      const savedLang = localStorage.getItem(LANG_KEY);
      if (savedLang) setLang(savedLang);
    } catch (e) {}
    setMounted(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}
  }, [checked, lang, mounted]);

  const totalItems = DATA.reduce((s, c) => s + c.items.length, 0);
  const doneCount = Object.values(checked).filter(Boolean).length;
  const pct = totalItems ? Math.round((doneCount / totalItems) * 100) : 0;

  const toggle = (id) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleCat = (id) => setOpenCats((prev) => ({ ...prev, [id]: !prev[id] }));
  const resetAll = () => {
    const msg = lang === "en" ? "Reset all progress? This cannot be undone." : "Resetezi tot progresul? Această acțiune este ireversibilă.";
    if (confirm(msg)) setChecked({});
  };

  const t = (ro, en) => (lang === "en" ? en : ro);

  // Styles matching NASCORA terms/privacy pages exactly
  const wrap = { maxWidth: 720, margin: "0 auto", padding: "60px 24px 80px", fontSize: 15, lineHeight: 1.8, color: COLORS.body };
  const backLink = { fontSize: 13, color: COLORS.accent, textDecoration: "none" };
  const h1Style = { fontSize: 32, fontWeight: 800, color: COLORS.dark, margin: "24px 0 8px" };

  return (
    <div style={wrap}>
      <a href="/" style={backLink}>← {t("Înapoi la NASCORA", "Back to NASCORA")}</a>

      {/* Title + lang toggle */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <h1 style={h1Style}>{t("Ghid Pre-Concepție", "Pre-Conception Guide")}</h1>
        <div style={{ display: "flex", background: "#F3F4F6", borderRadius: 20, overflow: "hidden", marginTop: 28, flexShrink: 0 }}>
          {[
            { key: "ro", label: "RO" },
            { key: "bi", label: "RO+EN" },
            { key: "en", label: "EN" },
          ].map((l) => (
            <button
              key={l.key}
              onClick={() => setLang(l.key)}
              style={{
                padding: "5px 14px",
                border: "none",
                background: lang === l.key ? COLORS.accent : "transparent",
                color: lang === l.key ? "#fff" : COLORS.muted,
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
                borderRadius: lang === l.key ? 18 : 0,
                letterSpacing: 0.5,
                transition: "all 0.2s",
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <p style={{ color: COLORS.muted, fontSize: 14, margin: "4px 0 28px", lineHeight: 1.6 }}>
        {t(
          "Checklist interactiv pentru pregătirea optimă înainte de sarcină. Progresul se salvează automat în browser.",
          "Interactive checklist for optimal pregnancy preparation. Progress saves automatically in your browser."
        )}
      </p>

      {/* Progress bar */}
      <div
        style={{
          background: COLORS.white,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 10,
          padding: "14px 18px",
          marginBottom: 28,
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <span style={{ fontSize: 13, color: COLORS.muted, whiteSpace: "nowrap" }}>
          {t("Progres", "Progress")}
        </span>
        <div style={{ flex: 1, height: 8, background: "#F3F4F6", borderRadius: 4, overflow: "hidden" }}>
          <div
            style={{
              width: mounted ? `${pct}%` : "0%",
              height: "100%",
              background: pct === 100 ? COLORS.green : COLORS.accent,
              borderRadius: 4,
              transition: "width 0.5s ease, background 0.3s",
            }}
          />
        </div>
        <span style={{ fontSize: 14, fontWeight: 700, color: pct === 100 ? COLORS.green : COLORS.dark, minWidth: 36, textAlign: "right" }}>
          {mounted ? `${pct}%` : "—"}
        </span>
      </div>

      {/* Categories */}
      {DATA.map((cat) => {
        const catDone = cat.items.filter((it) => checked[it.id]).length;
        const catTotal = cat.items.length;
        const isOpen = !!openCats[cat.id];
        const isComplete = catDone === catTotal;

        return (
          <div key={cat.id} style={{ marginBottom: 16 }}>
            {/* Category header */}
            <div
              onClick={() => toggleCat(cat.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 16px",
                background: COLORS.white,
                border: `1px solid ${COLORS.border}`,
                borderRadius: isOpen ? "10px 10px 0 0" : 10,
                cursor: "pointer",
                userSelect: "none",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.bgHover)}
              onMouseLeave={(e) => (e.currentTarget.style.background = COLORS.white)}
            >
              <span style={{ fontSize: 22 }}>{cat.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: COLORS.dark }}>
                  {t(cat.title_ro, cat.title_en)}
                </div>
                <div style={{ fontSize: 12, color: isComplete ? COLORS.green : COLORS.muted, marginTop: 1 }}>
                  {isComplete
                    ? t("Complet ✓", "Complete ✓")
                    : `${catDone} / ${catTotal} ${t("completate", "completed")}`}
                </div>
              </div>
              <span
                style={{
                  padding: "3px 10px",
                  borderRadius: 10,
                  fontSize: 12,
                  fontWeight: 700,
                  background: isComplete ? COLORS.greenLight : catDone > 0 ? COLORS.accentLight : "#F3F4F6",
                  color: isComplete ? COLORS.green : catDone > 0 ? COLORS.accent : COLORS.muted,
                }}
              >
                {catDone}/{catTotal}
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: COLORS.muted,
                  transition: "transform 0.3s",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  display: "inline-block",
                }}
              >
                ▼
              </span>
            </div>

            {/* Items */}
            {isOpen && (
              <div
                style={{
                  border: `1px solid ${COLORS.border}`,
                  borderTop: "none",
                  borderRadius: "0 0 10px 10px",
                  overflow: "hidden",
                }}
              >
                {cat.items.map((item, i) => {
                  const isDone = !!checked[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggle(item.id)}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        padding: "12px 16px",
                        background: isDone ? COLORS.bgDone : COLORS.white,
                        borderBottom: i < cat.items.length - 1 ? `1px solid ${COLORS.border}` : "none",
                        cursor: "pointer",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        if (!isDone) e.currentTarget.style.background = COLORS.bgHover;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = isDone ? COLORS.bgDone : COLORS.white;
                      }}
                    >
                      {/* Checkbox */}
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 5,
                          border: isDone ? "none" : `2px solid ${COLORS.border}`,
                          background: isDone ? COLORS.green : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 2,
                          transition: "all 0.2s",
                        }}
                      >
                        {isDone && (
                          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7.5L5.5 11L12 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>

                      {/* Label(s) */}
                      <div style={{ flex: 1 }}>
                        {(lang === "ro" || lang === "bi") && (
                          <div
                            style={{
                              fontSize: 14,
                              fontWeight: 500,
                              color: isDone ? COLORS.green : COLORS.dark,
                              lineHeight: 1.5,
                              transition: "color 0.2s",
                            }}
                          >
                            {item.ro}
                          </div>
                        )}
                        {(lang === "en" || lang === "bi") && (
                          <div
                            style={{
                              fontSize: lang === "bi" ? 13 : 14,
                              fontWeight: lang === "bi" ? 400 : 500,
                              color: isDone ? COLORS.green : lang === "bi" ? COLORS.muted : COLORS.dark,
                              fontStyle: lang === "bi" ? "italic" : "normal",
                              lineHeight: 1.5,
                              marginTop: lang === "bi" ? 2 : 0,
                            }}
                          >
                            {item.en}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      {/* Action buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 32, flexWrap: "wrap" }}>
        <button
          onClick={() => {
            const allOpen = {};
            DATA.forEach((c) => (allOpen[c.id] = true));
            setOpenCats(allOpen);
          }}
          style={btnStyle}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.color = COLORS.accent; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.muted; }}
        >
          {t("Deschide tot", "Expand all")}
        </button>
        <button
          onClick={() => setOpenCats({})}
          style={btnStyle}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.color = COLORS.accent; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.muted; }}
        >
          {t("Închide tot", "Collapse all")}
        </button>
        <button
          onClick={resetAll}
          style={btnStyle}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#EF4444"; e.currentTarget.style.color = "#EF4444"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.muted; }}
        >
          {t("Resetează progresul", "Reset progress")}
        </button>
      </div>

      {/* Completion banner */}
      {pct === 100 && mounted && (
        <div
          style={{
            textAlign: "center",
            padding: "28px 20px",
            background: COLORS.greenLight,
            borderRadius: 12,
            marginTop: 28,
            border: `1px solid ${COLORS.greenBorder}`,
          }}
        >
          <div style={{ fontSize: 40, marginBottom: 8 }}>🎉</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.green, marginBottom: 6 }}>
            {t("Felicitări! Ai completat tot ghidul!", "Congratulations! You've completed the full guide!")}
          </div>
          <div style={{ fontSize: 14, color: COLORS.body, maxWidth: 400, margin: "0 auto" }}>
            {t(
              "Ești pregătită pentru următorul pas. Discută cu medicul tău pentru a confirma că totul este în ordine.",
              "You're ready for the next step. Talk to your doctor to confirm everything is on track."
            )}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div style={{ textAlign: "center", marginTop: 40, paddingTop: 20, borderTop: `1px solid ${COLORS.border}` }}>
        <p style={{ fontSize: 12, color: COLORS.muted }}>
          {t(
            "Acest ghid nu înlocuiește sfatul medical profesional.",
            "This guide does not replace professional medical advice."
          )}
        </p>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "8px 20px",
  borderRadius: 20,
  border: `1px solid ${COLORS.border}`,
  background: COLORS.white,
  color: COLORS.muted,
  fontSize: 13,
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s",
  fontFamily: "inherit",
};
