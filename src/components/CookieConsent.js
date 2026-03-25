"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/lang";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const c = localStorage.getItem("nascora_cookie_consent");
    if (!c) setTimeout(() => setVisible(true), 1500);
  }, []);

  const handle = (v) => {
    localStorage.setItem("nascora_cookie_consent", v);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999, background: "rgba(13,27,42,0.97)", backdropFilter: "blur(8px)", padding: "20px 24px", borderTop: "1px solid rgba(95,168,211,0.2)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <p style={{ margin: "0 0 4px", fontSize: 14, fontWeight: 600, color: "#fff" }}>{t.cookie.title}</p>
          <p style={{ margin: 0, fontSize: 13, color: "#9CA3AF", lineHeight: 1.5 }}>{t.cookie.description}</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => handle("declined")} style={{ padding: "10px 20px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#9CA3AF", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>{t.cookie.decline}</button>
          <button onClick={() => handle("accepted")} style={{ padding: "10px 20px", borderRadius: 8, border: "none", background: "#5FA8D3", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>{t.cookie.accept}</button>
        </div>
      </div>
    </div>
  );
}
