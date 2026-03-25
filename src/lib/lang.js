"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/data/content";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("ro");
  const [detected, setDetected] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("nascora_lang");
    if (saved) {
      setLang(saved);
      setDetected(true);
      return;
    }
    // Auto-detect via timezone (no API call needed, works offline)
    // Romania timezone: Europe/Bucharest
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const roTimezones = ["Europe/Bucharest", "Europe/Chisinau"];
    const browserLang = (navigator.language || "").toLowerCase();
    
    if (roTimezones.includes(tz) || browserLang.startsWith("ro")) {
      setLang("ro");
    } else {
      setLang("en");
    }
    setDetected(true);
  }, []);

  const toggleLang = () => {
    const next = lang === "ro" ? "en" : "ro";
    setLang(next);
    localStorage.setItem("nascora_lang", next);
  };

  const t = translations[lang] || translations.en;

  return (
    <LangContext.Provider value={{ lang, t, toggleLang, detected }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

// Helper to get localized field from { en: "...", ro: "..." } objects
export function loc(obj, lang) {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[lang] || obj.en || "";
}
