# NASCORA — Teratology Prevention Platform

> Născut sigur. Născut informat. | Born safe. Born aware.

## 🌍 Bilingv RO/EN cu auto-detect

Platforma detectează automat limba utilizatorului:
- Vizitatori din România → interfață în **română**
- Vizitatori din alte țări → interfață în **engleză**
- Toggle manual RO/EN disponibil în navbar

## Cum pui site-ul online

### Pas 1: Cumpără domeniul
→ namecheap.com → caută **nascora.com** → cumpără (~$12/an)

### Pas 2: Cont GitHub
→ github.com → Sign up (gratuit)

### Pas 3: Creează repository
→ github.com/new → nume: **nascora** → Public → Create
→ Click "uploading an existing file"
→ Drag & drop CONȚINUTUL acestui folder (nu folderul!)
→ Commit changes

### Pas 4: Cont Vercel
→ vercel.com → Sign Up → Continue with GitHub

### Pas 5: Deploy
→ Vercel → Add New Project → selectează "nascora" → Deploy
→ Gata! Site live pe nascora.vercel.app

### Pas 6: Conectează domeniul
→ Vercel Settings → Domains → adaugă nascora.com
→ Namecheap → Advanced DNS:
  - A Record: @ → 76.76.21.21
  - CNAME: www → cname.vercel-dns.com
→ Așteaptă 5-30 min → nascora.com e LIVE!

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

## Cost total: $12/an domeniu + $0 hosting

© 2026 Dev AI LTD
