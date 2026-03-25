"use client";
import { useLang } from "@/lib/lang";

export default function LangToggle() {
  const { lang, toggleLang } = useLang();
  return (
    <button onClick={toggleLang} title={lang === "ro" ? "Switch to English" : "Schimbă în Română"}
      style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 6, border: "1px solid #E5E7EB", background: "transparent", fontSize: 12, fontWeight: 600, cursor: "pointer", color: "#6B7280", letterSpacing: "0.02em" }}>
      <span style={{ opacity: lang === "ro" ? 1 : 0.4 }}>RO</span>
      <span style={{ color: "#D1D5DB" }}>/</span>
      <span style={{ opacity: lang === "en" ? 1 : 0.4 }}>EN</span>
    </button>
  );
}
