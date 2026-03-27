# NASCORA — Teratology Prevention Platform

> Născut sigur. Născut informat. | Born safe. Born aware.

## 🌍 Bilingv RO/EN cu auto-detect

Platforma detectează automat limba utilizatorului:
- Vizitatori din România → interfață în **română**
- Vizitatori din alte țări → interfață în **engleză**




## Structura

```
src/
├── app/
│   ├── layout.js          ← Layout + font
│   ├── page.js            ← Aplicația principală (Landing+Checker+Library)
│   ├── privacy/page.js    ← Privacy Policy (GDPR)
│   ├── terms/page.js      ← Terms & Conditions
│   └── cookies/page.js    ← Cookie Policy
├── components/
│   ├── CookieConsent.js   ← Banner GDPR
│   └── LangToggle.js      ← Toggle RO/EN
├── data/
│   └── content.js         ← Traduceri + DB substanțe + Articole
└── lib/
    └── lang.js            ← Sistem de traduceri + auto-detect
```



© 2026 Dev AI LTD
