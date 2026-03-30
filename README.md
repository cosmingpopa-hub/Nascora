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
│   ├── layout.js                    ← Layout + font + SEO (fără OG static, acum dinamic)
│   ├── page.js                      ← Aplicația principală (Landing + Checker + Library + Search + Mobile fix)
│   ├── opengraph-image.js           ← 🆕 OG image dinamic (1200x630, brand colors)
│   ├── robots.js                    ← 🆕 SEO: robots config
│   ├── sitemap.js                   ← 🆕 SEO: sitemap automat
│   │
│   ├── calculator/
│   │   └── page.js                  ← 🆕 Calculator (pagină dedicată)
│   │
│   ├── evidence/
│   │   ├── page.js                  ← 🆕 Listă articole / Evidence Library
│   │   └── [id]/
│   │       └── page.js              ← 🆕 Pagină dinamică articol individual (routing [id])
│   │
│   ├── preconception-checklist/
│   │   └── page.js                  ← 🆕 Checklist preconceptional (pagină dedicată)
│   │
│   ├── privacy/
│   │   └── page.js                  ← Privacy Policy (GDPR) — actualizat
│   ├── terms/
│   │   └── page.js                  ← Terms & Conditions — actualizat
│   └── cookies/
│       └── page.js                  ← Cookie Policy — actualizat
│
├── components/
│   ├── CookieConsent.js             ← Banner GDPR (neschimbat)
│   └── LangToggle.js                ← Toggle RO/EN (neschimbat)
│
├── data/
│   ├── content.js                   ← Traduceri + DB substanțe — actualizat
│   └── evidence-articles.js         ← 🆕 Conținut medical bilingv (8 articole complete)
│
└── lib/
    └── lang.js                      ← Sistem traduceri + auto-detect (neschimbat)



© 2026 Dev AI LTD
