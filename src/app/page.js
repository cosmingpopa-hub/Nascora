"use client";
import { useState, useRef, useMemo, useEffect } from "react";
import { LangProvider, useLang, loc } from "@/lib/lang";
import { TERATOGEN_DB, ARTICLES } from "@/data/content";
import CookieConsent from "@/components/CookieConsent";
import LangToggle from "@/components/LangToggle";
import Script from "next/script";

const C = { midnight: "#0D1B2A", ocean: "#1B4965", teal: "#5FA8D3", coral: "#E07A5F", sage: "#81B29A", cream: "#F4F1DE", safeGreen: "#22C55E", cautionAmber: "#F59E0B", riskRed: "#EF4444", gray: "#9CA3AF" };

function getRiskColor(r) { return r==="safe"||r==="low"?C.safeGreen:r==="moderate"?C.cautionAmber:r==="high"?C.riskRed:C.gray; }

function Shield({ size=20, color=C.teal }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v5c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" fill={color} opacity=".15" stroke={color} strokeWidth="1.5"/><ellipse cx="12" cy="11" rx="4" ry="5" fill={color} opacity=".3"/></svg>;
}

function RiskBadge({ risk, lang, size="md" }) {
  const { t } = useLang();
  const color = getRiskColor(risk);
  const s = size==="lg"?{fontSize:14,padding:"6px 16px"}:{fontSize:11,padding:"3px 10px"};
  return <span style={{...s,background:color+"18",color,fontWeight:600,borderRadius:20,display:"inline-block"}}>{t.risk[risk]||risk}</span>;
}

function TrimesterBar({ t1, t2, t3 }) {
  return <div style={{display:"flex",gap:6}}>{[{l:"T1",r:t1},{l:"T2",r:t2},{l:"T3",r:t3}].map(t=><div key={t.l} style={{flex:1,textAlign:"center"}}><div style={{fontSize:10,color:C.gray,marginBottom:4,fontWeight:500}}>{t.l}</div><div style={{height:6,borderRadius:3,background:getRiskColor(t.r),opacity:.8}}/></div>)}</div>;
}

function RiskCard({ s }) {
  const { t, lang } = useLang();
  return (
    <div style={{background:"#fff",borderRadius:16,border:"1px solid #E5E7EB",overflow:"hidden",animation:"slideUp .3s ease"}}>
      <div style={{padding:"24px 20px",borderBottom:"1px solid #F3F4F6"}}>
        <div className="nascora-risk-card-header">
          <div><h3 style={{margin:0,fontSize:22,fontWeight:700,color:C.midnight}}>{loc(s.name,lang)}</h3><p style={{margin:"4px 0 0",fontSize:13,color:C.gray}}>{s.generic} — {s.brand}</p></div>
          <RiskBadge risk={s.risk} size="lg"/>
        </div>
        <div style={{marginTop:12,display:"flex",gap:8,flexWrap:"wrap"}}>
          <span style={{fontSize:12,color:C.ocean,background:C.ocean+"10",padding:"3px 10px",borderRadius:6}}>{loc(s.category,lang)}</span>
          <span style={{fontSize:12,color:"#6B7280",background:"#F3F4F6",padding:"3px 10px",borderRadius:6}}>FDA: {s.fdaCategory}</span>
        </div>
      </div>
      <div style={{padding:"20px 20px"}}>
        <div style={{marginBottom:20}}><div style={{fontSize:12,fontWeight:600,color:C.ocean,textTransform:"uppercase",letterSpacing:".06em",marginBottom:10}}>{t.checker.trimesterProfile}</div><TrimesterBar t1={s.trimester1} t2={s.trimester2} t3={s.trimester3}/></div>
        <div style={{marginBottom:20}}><div style={{fontSize:12,fontWeight:600,color:C.ocean,textTransform:"uppercase",letterSpacing:".06em",marginBottom:8}}>{t.checker.evidenceSummary}</div><p style={{margin:0,fontSize:14,lineHeight:1.7,color:"#374151"}}>{loc(s.description,lang)}</p></div>
        <div style={{marginBottom:20,padding:16,background:C.sage+"12",borderRadius:10,borderLeft:`3px solid ${C.sage}`}}><div style={{fontSize:12,fontWeight:600,color:"#065F46",marginBottom:6}}>{t.checker.saferAlternatives}</div><p style={{margin:0,fontSize:13,lineHeight:1.6,color:"#047857"}}>{loc(s.alternatives,lang)}</p></div>
        <div><div style={{fontSize:12,fontWeight:600,color:C.ocean,textTransform:"uppercase",letterSpacing:".06em",marginBottom:8}}>{t.checker.sources}</div>{s.sources.map((src,i)=><p key={i} style={{margin:"0 0 4px",fontSize:12,color:C.gray,lineHeight:1.5}}>{src}</p>)}</div>
      </div>
      <div style={{padding:"16px 20px",borderTop:"1px solid #F3F4F6",background:"#FAFAFA"}}><p style={{margin:0,fontSize:11,color:C.gray,lineHeight:1.5,fontStyle:"italic"}}>{t.checker.disclaimer}</p></div>
    </div>
  );
}

function Landing({ onNav }) {
  const { t, lang } = useLang();
  const checklistLabel = lang === "en" ? "Pre-Conception Checklist" : "Ghid Pre-Concepție";
  return (
    <div>
      {/* Hero */}
      <section className="nascora-hero">
        <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 70% 20%,${C.teal}12 0%,transparent 60%),radial-gradient(ellipse at 20% 80%,${C.sage}10 0%,transparent 50%)`}}/>
        <div className="nascora-hero-inner">
          <div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 16px",background:C.teal+"12",borderRadius:20,marginBottom:32}}><Shield size={16}/><span style={{fontSize:13,fontWeight:500,color:C.ocean}}>{t.hero.badge}</span></div>
          <h1>{t.hero.title1} <span style={{color:C.teal}}>{t.hero.titleAccent}</span></h1>
          <p className="nascora-hero-desc">{t.hero.description}</p>
          <div className="nascora-hero-buttons">
            <button onClick={()=>onNav("checker")} style={{padding:"14px 32px",background:C.coral,color:"#fff",border:"none",borderRadius:10,fontSize:16,fontWeight:600,cursor:"pointer"}}>{t.hero.ctaPrimary}</button>
            <button onClick={()=>{document.getElementById("nascora-newsletter")?.scrollIntoView({behavior:"smooth"});}} style={{padding:"14px 32px",background:"transparent",color:C.ocean,border:`1.5px solid ${C.ocean}30`,borderRadius:10,fontSize:16,fontWeight:500,cursor:"pointer"}}>{t.hero.ctaSecondary}</button>
          </div>

          {/* Pre-Conception Checklist Button */}
          <div style={{marginTop:32,paddingTop:28,borderTop:`1px solid ${C.teal}20`}}>
            <a href="/preconception-checklist" className="nascora-checklist-btn" style={{
              display:"inline-flex",alignItems:"center",gap:10,
              padding:"14px 28px",
              background:`linear-gradient(135deg, ${C.sage}18, ${C.teal}12)`,
              border:`1.5px solid ${C.sage}40`,
              borderRadius:12,
              textDecoration:"none",
              cursor:"pointer",
              transition:"all 0.2s"
            }}
            onMouseOver={e=>{e.currentTarget.style.boxShadow=`0 4px 20px ${C.sage}30`;e.currentTarget.style.borderColor=C.sage;}}
            onMouseOut={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor=`${C.sage}40`;}}
            >
              <span style={{fontSize:20}}>📋</span>
              <span style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                <span style={{fontSize:15,fontWeight:700,color:C.midnight}}>{checklistLabel}</span>
                <span style={{fontSize:12,color:C.gray}}>{lang==="en"?"49-step interactive preparation guide":"Ghid interactiv de pregătire în 49 de pași"}</span>
              </span>
              <span style={{fontSize:18,color:C.sage,marginLeft:4}}>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{padding:"60px 24px",background:C.midnight}}>
        <div style={{maxWidth:800,margin:"0 auto",textAlign:"center"}}>
          <h2 style={{fontSize:24,fontWeight:700,color:"#fff",margin:"0 0 8px"}}>{t.stats.title}</h2>
          <p style={{fontSize:14,color:C.gray,margin:"0 0 36px"}}>{t.stats.subtitle}</p>
          <div className="nascora-stats-grid">
            {t.stats.items.map((s,i)=>(
              <div key={i} style={{padding:"20px 12px",borderRadius:12,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.08)"}}>
                <div style={{fontSize:32,fontWeight:800,color:i===0?C.coral:i===2?C.sage:C.teal,marginBottom:6}}>{s.num}</div>
                <div style={{fontSize:13,color:"#fff",fontWeight:500,marginBottom:4,lineHeight:1.3}}>{s.label}</div>
                <div style={{fontSize:11,color:C.gray,lineHeight:1.4}}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{padding:"80px 24px",maxWidth:960,margin:"0 auto"}}>
        <h2 style={{textAlign:"center",fontSize:28,fontWeight:700,color:C.midnight,margin:"0 0 12px"}}>{t.features.title}</h2>
        <p style={{textAlign:"center",fontSize:16,color:C.gray,margin:"0 0 48px"}}>{t.features.subtitle}</p>
        <div className="nascora-features-grid">
          {t.features.items.map((f,i)=>{
            const colors=[C.teal,C.ocean,C.sage];
            return(<div key={i} style={{padding:28,borderRadius:14,border:"1px solid #F3F4F6",background:"#fff",transition:"box-shadow .2s"}} onMouseOver={e=>e.currentTarget.style.boxShadow="0 4px 24px rgba(0,0,0,.06)"} onMouseOut={e=>e.currentTarget.style.boxShadow="none"}>
              <div style={{width:44,height:44,borderRadius:12,background:colors[i]+"15",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}><Shield size={22} color={colors[i]}/></div>
              <h3 style={{margin:"0 0 8px",fontSize:18,fontWeight:600,color:C.midnight}}>{f.title}</h3>
              <p style={{margin:0,fontSize:14,lineHeight:1.7,color:"#6B7280"}}>{f.desc}</p>
            </div>);
          })}
        </div>
      </section>

      {/* Newsletter — Beehiiv */}
      <section id="nascora-newsletter" style={{padding:"80px 24px",textAlign:"center"}}>
        <div style={{maxWidth:520,margin:"0 auto"}}>
          <h2 style={{fontSize:28,fontWeight:700,color:C.midnight,margin:"0 0 12px"}}>{t.waitlist.title}</h2>
          <p style={{fontSize:15,color:C.gray,margin:"0 0 28px",lineHeight:1.6}}>{t.waitlist.description}</p>
          
          <div style={{maxWidth:480,margin:"0 auto",display:"flex",justifyContent:"center"}}>
            <iframe 
              src="https://subscribe-forms.beehiiv.com/eacdbe3b-a8fb-4fe2-90d1-6876004048ed" 
              className="beehiiv-embed"
              data-test-id="beehiiv-embed" 
              frameBorder="0" 
              scrolling="no" 
              style={{width:"100%",maxWidth:480,height:320,margin:0,borderRadius:12,backgroundColor:"transparent",border:"none"}}
            />
          </div>
          <Script src="https://subscribe-forms.beehiiv.com/embed.js" strategy="lazyOnload"/>
          <Script src="https://subscribe-forms.beehiiv.com/attribution.js" strategy="lazyOnload"/>
          <p style={{fontSize:12,color:"#D1D5DB",marginTop:16}}>{lang==="en"?"No spam. Unsubscribe anytime.":"Fără spam. Te poți dezabona oricând."}</p>
        </div>
      </section>
    </div>
  );
}

function Checker() {
  const { t, lang } = useLang();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const inputRef = useRef(null);
  const results = useMemo(()=>{
    if(!query.trim()||query.trim().length<2) return [];
    const q=query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();
    return TERATOGEN_DB.map(s=>{
      let score=0;
      const ne=s.name.en.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
      const nr=s.name.ro.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
      if(ne===q||nr===q)score+=100;else if(ne.startsWith(q)||nr.startsWith(q))score+=80;else if(ne.includes(q)||nr.includes(q))score+=60;
      if(s.generic){const g=s.generic.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');if(g===q)score+=90;else if(g.startsWith(q))score+=70;else if(g.includes(q))score+=50;s.generic.split(',').forEach(p=>{const t=p.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');if(t===q)score=Math.max(score,90);else if(t.startsWith(q))score=Math.max(score,70);else if(t.includes(q))score=Math.max(score,50);});}
      if(s.brand){s.brand.split(',').forEach(b=>{const t=b.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');if(t===q)score=Math.max(score,85);else if(t.startsWith(q))score=Math.max(score,65);else if(t.includes(q))score=Math.max(score,45);});}
      const ce=s.category.en.toLowerCase();const cr=s.category.ro.toLowerCase();if(ce.includes(q)||cr.includes(q))score+=20;
      return{s,score};
    }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).map(x=>x.s);
  },[query,lang]);
  useEffect(()=>{inputRef.current?.focus();},[]);
  const quickSearches = lang==="ro"?["Ibuprofen","Cafeină","Acid folic","Amoxicilină","Vitamina A","Paracetamol"]:["Ibuprofen","Caffeine","Folic Acid","Amoxicillin","Vitamin A","Metformin"];
  return (
    <div className="nascora-checker-section" style={{maxWidth:720,margin:"0 auto",padding:"40px 24px"}}>
      <div style={{textAlign:"center",marginBottom:40}}><h1 style={{fontSize:32,fontWeight:700,color:C.midnight,margin:"0 0 8px"}}>{t.checker.title}</h1><p style={{fontSize:15,color:C.gray,margin:0}}>{t.checker.subtitle}</p></div>
      <div style={{position:"relative",marginBottom:32}}>
        <div style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",color:C.gray}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div>
        <input ref={inputRef} type="text" value={query} onChange={e=>{setQuery(e.target.value);setSelected(null);}} placeholder={t.checker.placeholder}
          style={{width:"100%",padding:"16px 16px 16px 48px",borderRadius:14,border:"2px solid #E5E7EB",fontSize:17,outline:"none",background:"#fff",boxSizing:"border-box"}}/>
      </div>
      {!query&&!selected&&(<div><p style={{fontSize:13,color:C.gray,fontWeight:500,textTransform:"uppercase",letterSpacing:".06em",marginBottom:12}}>{t.checker.commonSearches}</p><div className="nascora-quick-searches">{quickSearches.map(s=><button key={s} onClick={()=>setQuery(s)} style={{padding:"8px 16px",borderRadius:8,border:"1px solid #E5E7EB",background:"#FAFAFA",fontSize:13,cursor:"pointer",color:C.ocean,fontWeight:500}}>{s}</button>)}</div></div>)}
      {query&&!selected&&results.length>0&&(<div style={{display:"flex",flexDirection:"column",gap:8}}>{results.map(s=><button key={s.id} onClick={()=>setSelected(s)} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",borderRadius:12,border:"1px solid #F3F4F6",background:"#fff",cursor:"pointer",textAlign:"left",width:"100%"}}><div><div style={{fontSize:15,fontWeight:600,color:C.midnight}}>{loc(s.name,lang)}</div><div style={{fontSize:12,color:C.gray,marginTop:2}}>{loc(s.category,lang)}</div></div><RiskBadge risk={s.risk}/></button>)}</div>)}
      {query&&results.length===0&&!selected&&(<div style={{textAlign:"center",padding:40}}><p style={{fontSize:15,color:C.gray}}>{t.checker.noResults} &quot;{query}&quot;</p></div>)}
      {selected&&<RiskCard s={selected}/>}
      {selected&&<button onClick={()=>{setSelected(null);setQuery("");}} style={{marginTop:16,padding:"10px 20px",borderRadius:8,border:`1px solid ${C.ocean}30`,background:"transparent",color:C.ocean,fontSize:14,fontWeight:500,cursor:"pointer",width:"100%",maxWidth:280}}>{t.checker.searchAnother}</button>}
    </div>
  );
}

function Content() {
  const { t, lang } = useLang();
  const [cat, setCat] = useState("all");
  const cats = Object.entries(t.categories).map(([id,label])=>({id,label}));
  const filtered = cat==="all"?ARTICLES:ARTICLES.filter(a=>a.category===cat);
  return (
    <div style={{maxWidth:860,margin:"0 auto",padding:"40px 24px"}}>
      <div style={{textAlign:"center",marginBottom:40}}><h1 style={{fontSize:32,fontWeight:700,color:C.midnight,margin:"0 0 8px"}}>{t.content.title}</h1><p style={{fontSize:15,color:C.gray,margin:0}}>{t.content.subtitle}</p></div>
      <div className="nascora-category-filters">{cats.map(c=><button key={c.id} onClick={()=>setCat(c.id)} style={{padding:"8px 16px",borderRadius:8,border:"1px solid",fontSize:13,fontWeight:500,cursor:"pointer",borderColor:cat===c.id?C.teal:"#E5E7EB",background:cat===c.id?C.teal+"12":"transparent",color:cat===c.id?C.ocean:"#6B7280"}}>{c.label}</button>)}</div>
      <div className="nascora-articles-grid">
        {filtered.map(a=><article key={a.id} style={{padding:24,borderRadius:14,border:"1px solid #F3F4F6",background:"#fff",cursor:"pointer",transition:"box-shadow .2s,transform .15s"}} onMouseOver={e=>{e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,.06)";e.currentTarget.style.transform="translateY(-2px)";}} onMouseOut={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="translateY(0)";}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <span style={{fontSize:11,fontWeight:600,padding:"3px 10px",borderRadius:6,background:C.ocean+"10",color:C.ocean,textTransform:"uppercase",letterSpacing:".04em"}}>{loc(a.tag,lang)}</span>
            <span style={{fontSize:12,color:"#D1D5DB"}}>{a.readTime} {t.content.min}</span>
          </div>
          <h3 style={{margin:"0 0 8px",fontSize:16,fontWeight:600,color:C.midnight,lineHeight:1.4}}>{loc(a.title,lang)}</h3>
          <p style={{margin:0,fontSize:13,lineHeight:1.6,color:C.gray}}>{loc(a.excerpt,lang)}</p>
        </article>)}
      </div>
      <div style={{textAlign:"center",marginTop:40,padding:32,borderRadius:14,background:C.cream+"60"}}><p style={{fontSize:15,color:C.ocean,fontWeight:500,margin:"0 0 4px"}}>{t.content.comingSoon}</p><p style={{fontSize:13,color:C.gray,margin:0}}>{t.content.comingSoonSub}</p></div>
    </div>
  );
}

function AppContent() {
  const { t, lang } = useLang();
  const [page, setPage] = useState("landing");
  const [menuOpen, setMenuOpen] = useState(false);
  
  const nav = (p) => { setPage(p); setMenuOpen(false); window.scrollTo({top:0,behavior:"smooth"}); };
  const checklistNavLabel = lang === "en" ? "Pre-Conception" : "Pre-Concepție";

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{minHeight:"100vh"}}>
      {/* ===== NAVBAR ===== */}
      <nav className="nascora-nav">
        <div className="nascora-nav-inner">
          <button onClick={()=>nav("landing")} className="nascora-nav-logo">
            <Shield size={28} color={C.teal}/>
            <span className="nascora-nav-logo-text">NASCORA</span>
          </button>

          {/* Hamburger Button */}
          <button 
            className={`nascora-hamburger ${menuOpen ? "open" : ""}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={menuOpen}
          >
            <span className="nascora-hamburger-line"/>
            <span className="nascora-hamburger-line"/>
            <span className="nascora-hamburger-line"/>
          </button>

          {/* Desktop Nav Links — hidden on mobile via CSS */}
          <div className="nascora-nav-desktop">
            <button onClick={()=>nav("checker")} className={`nascora-nav-link ${page==="checker"?"active":""}`}>{t.nav.riskChecker}</button>
            <button onClick={()=>nav("content")} className={`nascora-nav-link ${page==="content"?"active":""}`}>{t.nav.evidenceLibrary}</button>
            <a href="/evidence" className="nascora-nav-link">
              <span style={{fontSize:14}}>📚</span>{lang==="ro"?"Evidență":"Evidence"}
            </a>
            <a href="/preconception-checklist" className="nascora-nav-link">
              <span style={{fontSize:14}}>📋</span>{checklistNavLabel}
            </a>
            <a href="/calculator" className="nascora-nav-link">
              <span style={{fontSize:14}}>🤰</span>{lang==="ro"?"Calculator":"Calculator"}
            </a>
            <LangToggle/>
            <button onClick={()=>nav("checker")} className="nascora-nav-cta">{t.nav.joinWaitlist}</button>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE MENU — outside nav to avoid backdrop-filter containing block ===== */}
      {menuOpen && (
        <div className="nascora-mobile-menu-overlay" onClick={()=>setMenuOpen(false)}>
          <div className="nascora-mobile-menu" onClick={e=>e.stopPropagation()}>
            <button onClick={()=>nav("checker")} className={`nascora-mobile-link ${page==="checker"?"active":""}`}>{t.nav.riskChecker}</button>
            <button onClick={()=>nav("content")} className={`nascora-mobile-link ${page==="content"?"active":""}`}>{t.nav.evidenceLibrary}</button>
            <a href="/evidence" className="nascora-mobile-link" onClick={()=>setMenuOpen(false)}>
              <span style={{fontSize:16}}>📚</span>{lang==="ro"?"Evidență":"Evidence"}
            </a>
            <a href="/preconception-checklist" className="nascora-mobile-link" onClick={()=>setMenuOpen(false)}>
              <span style={{fontSize:16}}>📋</span>{checklistNavLabel}
            </a>
            <a href="/calculator" className="nascora-mobile-link" onClick={()=>setMenuOpen(false)}>
              <span style={{fontSize:16}}>🤰</span>{lang==="ro"?"Calculator":"Calculator"}
            </a>
            <div style={{marginTop:8}}><LangToggle/></div>
            <button onClick={()=>nav("checker")} className="nascora-mobile-cta">{t.nav.joinWaitlist}</button>
          </div>
        </div>
      )}

      {/* ===== MAIN CONTENT ===== */}
      <main>
        {page==="landing"&&<Landing onNav={nav}/>}
        {page==="checker"&&<Checker/>}
        {page==="content"&&<Content/>}
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="nascora-footer">
        <div className="nascora-footer-inner">
          <div className="nascora-footer-top">
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <Shield size={20} color={C.teal}/>
              <span style={{fontWeight:700,color:C.midnight}}>NASCORA</span>
              <span style={{fontSize:12,color:"#D1D5DB",marginLeft:8}}>{t.footer.tagline}</span>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:16}}>
              {/* Social Media */}
              <div className="nascora-footer-social">
                <a href="https://www.instagram.com/nascora.health" target="_blank" rel="noopener noreferrer" className="nascora-social-link" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                </a>
                <a href="https://www.facebook.com/share/18bqk1xw47/" target="_blank" rel="noopener noreferrer" className="nascora-social-link" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
              {/* Legal Links */}
              <div className="nascora-footer-links">
                <a href="/privacy" className="nascora-footer-link">{t.footer.privacy}</a>
                <a href="/terms" className="nascora-footer-link">{t.footer.terms}</a>
                <a href="/cookies" className="nascora-footer-link">{t.footer.cookies}</a>
              </div>
            </div>
          </div>
          <div style={{fontSize:12,color:"#D1D5DB"}}>{"\u00A9"} 2026 Dev AI LTD. {t.footer.disclaimer}</div>
        </div>
      </footer>

      <CookieConsent/>
    </div>
  );
}

export default function Home() {
  return <LangProvider><AppContent/></LangProvider>;
}
