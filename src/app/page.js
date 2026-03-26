"use client";
import { useState, useRef, useMemo, useEffect } from "react";
import { LangProvider, useLang, loc } from "@/lib/lang";
import { TERATOGEN_DB, ARTICLES } from "@/data/content";
import CookieConsent from "@/components/CookieConsent";
import LangToggle from "@/components/LangToggle";

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
      <div style={{padding:"24px 28px",borderBottom:"1px solid #F3F4F6"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12}}>
          <div><h3 style={{margin:0,fontSize:22,fontWeight:700,color:C.midnight}}>{loc(s.name,lang)}</h3><p style={{margin:"4px 0 0",fontSize:13,color:C.gray}}>{s.generic} — {s.brand}</p></div>
          <RiskBadge risk={s.risk} size="lg"/>
        </div>
        <div style={{marginTop:12,display:"flex",gap:8,flexWrap:"wrap"}}>
          <span style={{fontSize:12,color:C.ocean,background:C.ocean+"10",padding:"3px 10px",borderRadius:6}}>{loc(s.category,lang)}</span>
          <span style={{fontSize:12,color:"#6B7280",background:"#F3F4F6",padding:"3px 10px",borderRadius:6}}>FDA: {s.fdaCategory}</span>
        </div>
      </div>
      <div style={{padding:"20px 28px"}}>
        <div style={{marginBottom:20}}><div style={{fontSize:12,fontWeight:600,color:C.ocean,textTransform:"uppercase",letterSpacing:".06em",marginBottom:10}}>{t.checker.trimesterProfile}</div><TrimesterBar t1={s.trimester1} t2={s.trimester2} t3={s.trimester3}/></div>
        <div style={{marginBottom:20}}><div style={{fontSize:12,fontWeight:600,color:C.ocean,textTransform:"uppercase",letterSpacing:".06em",marginBottom:8}}>{t.checker.evidenceSummary}</div><p style={{margin:0,fontSize:14,lineHeight:1.7,color:"#374151"}}>{loc(s.description,lang)}</p></div>
        <div style={{marginBottom:20,padding:16,background:C.sage+"12",borderRadius:10,borderLeft:`3px solid ${C.sage}`}}><div style={{fontSize:12,fontWeight:600,color:"#065F46",marginBottom:6}}>{t.checker.saferAlternatives}</div><p style={{margin:0,fontSize:13,lineHeight:1.6,color:"#047857"}}>{loc(s.alternatives,lang)}</p></div>
        <div><div style={{fontSize:12,fontWeight:600,color:C.ocean,textTransform:"uppercase",letterSpacing:".06em",marginBottom:8}}>{t.checker.sources}</div>{s.sources.map((src,i)=><p key={i} style={{margin:"0 0 4px",fontSize:12,color:C.gray,lineHeight:1.5}}>{src}</p>)}</div>
      </div>
      <div style={{padding:"16px 28px",borderTop:"1px solid #F3F4F6",background:"#FAFAFA"}}><p style={{margin:0,fontSize:11,color:C.gray,lineHeight:1.5,fontStyle:"italic"}}>{t.checker.disclaimer}</p></div>
    </div>
  );
}

function Landing({ onNav }) {
  const { t, lang } = useLang();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const checklistLabel = lang === "en" ? "Pre-Conception Checklist" : "Ghid Pre-Concepție";
  return (
    <div>
      <section style={{minHeight:"90vh",display:"flex",flexDirection:"column",justifyContent:"center",padding:"60px 24px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 70% 20%,${C.teal}12 0%,transparent 60%),radial-gradient(ellipse at 20% 80%,${C.sage}10 0%,transparent 50%)`}}/>
        <div style={{maxWidth:720,margin:"0 auto",textAlign:"center",position:"relative",zIndex:1}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 16px",background:C.teal+"12",borderRadius:20,marginBottom:32}}><Shield size={16}/><span style={{fontSize:13,fontWeight:500,color:C.ocean}}>{t.hero.badge}</span></div>
          <h1 style={{margin:"0 0 20px",fontSize:"clamp(36px,6vw,64px)",fontWeight:800,color:C.midnight,lineHeight:1.1,letterSpacing:"-0.03em"}}>{t.hero.title1} <span style={{color:C.teal}}>{t.hero.titleAccent}</span></h1>
          <p style={{margin:"0 auto 40px",fontSize:"clamp(16px,2.5vw,20px)",lineHeight:1.7,color:"#6B7280",maxWidth:560}}>{t.hero.description}</p>
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={()=>onNav("checker")} style={{padding:"14px 32px",background:C.midnight,color:"#fff",border:"none",borderRadius:10,fontSize:16,fontWeight:600,cursor:"pointer"}}>{t.hero.ctaPrimary}</button>
            <button onClick={()=>onNav("content")} style={{padding:"14px 32px",background:"transparent",color:C.ocean,border:`1.5px solid ${C.ocean}30`,borderRadius:10,fontSize:16,fontWeight:500,cursor:"pointer"}}>{t.hero.ctaSecondary}</button>
          </div>

          {/* ===== PRE-CONCEPTION CHECKLIST BUTTON ===== */}
          <div style={{marginTop:32,paddingTop:28,borderTop:`1px solid ${C.teal}20`}}>
            <a href="/preconception-checklist" style={{
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
          {/* ===== END CHECKLIST BUTTON ===== */}

        </div>
      </section>

      {/* Stats - Mortalitate infantilă */}
      <section style={{padding:"60px 24px",background:C.midnight}}>
        <div style={{maxWidth:800,margin:"0 auto",textAlign:"center"}}>
          <h2 style={{fontSize:24,fontWeight:700,color:"#fff",margin:"0 0 8px"}}>{t.stats.title}</h2>
          <p style={{fontSize:14,color:C.gray,margin:"0 0 36px"}}>{t.stats.subtitle}</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:24}}>
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
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:20}}>
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

      {/* Waitlist */}
      <section style={{padding:"80px 24px",textAlign:"center"}}>
        <div style={{maxWidth:480,margin:"0 auto"}}>
          <h2 style={{fontSize:28,fontWeight:700,color:C.midnight,margin:"0 0 12px"}}>{t.waitlist.title}</h2>
          <p style={{fontSize:15,color:C.gray,margin:"0 0 28px",lineHeight:1.6}}>{t.waitlist.description}</p>
          {submitted?(<div style={{padding:20,background:C.sage+"15",borderRadius:12,border:`1px solid ${C.sage}30`}}><p style={{margin:0,color:"#065F46",fontWeight:500}}>{t.waitlist.success}</p></div>):(
          <div style={{display:"flex",gap:8}}>
            <input type="email" placeholder={t.waitlist.placeholder} value={email} onChange={e=>setEmail(e.target.value)} style={{flex:1,padding:"12px 16px",borderRadius:10,border:"1.5px solid #E5E7EB",fontSize:15,outline:"none",boxSizing:"border-box"}}/>
            <button onClick={()=>{if(email.includes("@"))setSubmitted(true);}} style={{padding:"12px 24px",background:C.teal,color:"#fff",border:"none",borderRadius:10,fontSize:15,fontWeight:600,cursor:"pointer",whiteSpace:"nowrap"}}>{t.waitlist.button}</button>
          </div>)}
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
    if(!query.trim()) return [];
    const q=query.toLowerCase();
    return TERATOGEN_DB.filter(s=>loc(s.name,lang).toLowerCase().includes(q)||s.generic.toLowerCase().includes(q)||s.brand.toLowerCase().includes(q)||loc(s.category,lang).toLowerCase().includes(q));
  },[query,lang]);
  useEffect(()=>{inputRef.current?.focus();},[]);
  const quickSearches = lang==="ro"?["Ibuprofen","Cafeină","Acid folic","Amoxicilină","Vitamina A","Paracetamol"]:["Ibuprofen","Caffeine","Folic Acid","Amoxicillin","Vitamin A","Metformin"];
  return (
    <div style={{maxWidth:720,margin:"0 auto",padding:"40px 24px"}}>
      <div style={{textAlign:"center",marginBottom:40}}><h1 style={{fontSize:32,fontWeight:700,color:C.midnight,margin:"0 0 8px"}}>{t.checker.title}</h1><p style={{fontSize:15,color:C.gray,margin:0}}>{t.checker.subtitle}</p></div>
      <div style={{position:"relative",marginBottom:32}}>
        <div style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",color:C.gray}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div>
        <input ref={inputRef} type="text" value={query} onChange={e=>{setQuery(e.target.value);setSelected(null);}} placeholder={t.checker.placeholder}
          style={{width:"100%",padding:"16px 16px 16px 48px",borderRadius:14,border:"2px solid #E5E7EB",fontSize:17,outline:"none",background:"#fff",boxSizing:"border-box"}}/>
      </div>
      {!query&&!selected&&(<div><p style={{fontSize:13,color:C.gray,fontWeight:500,textTransform:"uppercase",letterSpacing:".06em",marginBottom:12}}>{t.checker.commonSearches}</p><div style={{display:"flex",flexWrap:"wrap",gap:8}}>{quickSearches.map(s=><button key={s} onClick={()=>setQuery(s)} style={{padding:"8px 16px",borderRadius:8,border:"1px solid #E5E7EB",background:"#FAFAFA",fontSize:13,cursor:"pointer",color:C.ocean,fontWeight:500}}>{s}</button>)}</div></div>)}
      {query&&!selected&&results.length>0&&(<div style={{display:"flex",flexDirection:"column",gap:8}}>{results.map(s=><button key={s.id} onClick={()=>setSelected(s)} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",borderRadius:12,border:"1px solid #F3F4F6",background:"#fff",cursor:"pointer",textAlign:"left"}}><div><div style={{fontSize:15,fontWeight:600,color:C.midnight}}>{loc(s.name,lang)}</div><div style={{fontSize:12,color:C.gray,marginTop:2}}>{loc(s.category,lang)}</div></div><RiskBadge risk={s.risk}/></button>)}</div>)}
      {query&&results.length===0&&!selected&&(<div style={{textAlign:"center",padding:40}}><p style={{fontSize:15,color:C.gray}}>{t.checker.noResults} &quot;{query}&quot;</p></div>)}
      {selected&&<RiskCard s={selected}/>}
      {selected&&<button onClick={()=>{setSelected(null);setQuery("");}} style={{marginTop:16,padding:"10px 20px",borderRadius:8,border:`1px solid ${C.ocean}30`,background:"transparent",color:C.ocean,fontSize:14,fontWeight:500,cursor:"pointer"}}>{t.checker.searchAnother}</button>}
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
      <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:32,justifyContent:"center"}}>{cats.map(c=><button key={c.id} onClick={()=>setCat(c.id)} style={{padding:"8px 16px",borderRadius:8,border:"1px solid",fontSize:13,fontWeight:500,cursor:"pointer",borderColor:cat===c.id?C.teal:"#E5E7EB",background:cat===c.id?C.teal+"12":"transparent",color:cat===c.id?C.ocean:"#6B7280"}}>{c.label}</button>)}</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:16}}>
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
  const nav = (p) => { setPage(p); window.scrollTo({top:0,behavior:"smooth"}); };
  const checklistNavLabel = lang === "en" ? "Pre-Conception" : "Pre-Concepție";
  return (
    <div style={{minHeight:"100vh"}}>
      <style>{`@keyframes slideUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <nav style={{position:"sticky",top:0,zIndex:100,background:"rgba(250,251,252,0.92)",backdropFilter:"blur(12px)",borderBottom:"1px solid #F3F4F6"}}>
        <div style={{maxWidth:1080,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
          <button onClick={()=>nav("landing")} style={{display:"flex",alignItems:"center",gap:10,background:"none",border:"none",cursor:"pointer"}}><Shield size={28} color={C.teal}/><span style={{fontSize:20,fontWeight:800,color:C.midnight,letterSpacing:"-0.02em"}}>NASCORA</span></button>
          <div style={{display:"flex",alignItems:"center",gap:4}}>
            <button onClick={()=>nav("checker")} style={{padding:"8px 16px",borderRadius:8,border:"none",fontSize:14,fontWeight:500,cursor:"pointer",background:page==="checker"?C.teal+"15":"transparent",color:page==="checker"?C.ocean:"#6B7280"}}>{t.nav.riskChecker}</button>
            <button onClick={()=>nav("content")} style={{padding:"8px 16px",borderRadius:8,border:"none",fontSize:14,fontWeight:500,cursor:"pointer",background:page==="content"?C.teal+"15":"transparent",color:page==="content"?C.ocean:"#6B7280"}}>{t.nav.evidenceLibrary}</button>

            {/* ===== NAV LINK: PRE-CONCEPTION CHECKLIST ===== */}
            <a href="/preconception-checklist" style={{padding:"8px 16px",borderRadius:8,border:"none",fontSize:14,fontWeight:500,cursor:"pointer",background:"transparent",color:"#6B7280",textDecoration:"none",display:"flex",alignItems:"center",gap:5}}><span style={{fontSize:14}}>📋</span>{checklistNavLabel}</a>
            {/* ===== END NAV LINK ===== */}

            <LangToggle/>
            <button onClick={()=>nav("landing")} style={{marginLeft:4,padding:"8px 18px",background:C.midnight,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer"}}>{t.nav.joinWaitlist}</button>
          </div>
        </div>
      </nav>
      <main>{page==="landing"&&<Landing onNav={nav}/>}{page==="checker"&&<Checker/>}{page==="content"&&<Content/>}</main>
      <footer style={{padding:"48px 24px",borderTop:"1px solid #F3F4F6",marginTop:60}}>
        <div style={{maxWidth:960,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,marginBottom:20}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}><Shield size={20} color={C.teal}/><span style={{fontWeight:700,color:C.midnight}}>NASCORA</span><span style={{fontSize:12,color:"#D1D5DB",marginLeft:8}}>{t.footer.tagline}</span></div>
            <div style={{display:"flex",gap:16}}><a href="/privacy" style={{fontSize:13,color:C.gray,textDecoration:"none"}}>{t.footer.privacy}</a><a href="/terms" style={{fontSize:13,color:C.gray,textDecoration:"none"}}>{t.footer.terms}</a><a href="/cookies" style={{fontSize:13,color:C.gray,textDecoration:"none"}}>{t.footer.cookies}</a></div>
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
