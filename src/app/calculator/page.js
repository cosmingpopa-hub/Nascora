"use client";
import { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════════
// NASCORA — Calculator Interactiv de Sarcină / Pregnancy Calculator
// Bilingv RO/EN — Pagină completă Next.js
// ═══════════════════════════════════════════════════════════

const T = {
  ro: {
    title: "Calculator de sarcină",
    subtitle: "Introdu data ultimei menstruații pentru un ghid personalizat al sarcinii tale",
    dumLabel: "Data ultimei menstruații (DUM)",
    calculate: "Calculează",
    reset: "Resetează",
    currentWeek: "Săptămâna curentă",
    trimester: "Trimestrul",
    dueDate: "Data estimată a nașterii",
    daysLeft: "zile rămase",
    week: "Săptămâna",
    weeks: "săptămâni",
    trimesterNames: ["Trimestrul 1", "Trimestrul 2", "Trimestrul 3"],
    trimesterRanges: ["Săpt. 1–12", "Săpt. 13–27", "Săpt. 28–40"],
    tabs: {
      development: "Dezvoltare fetală",
      tips: "Sfaturi",
      consultations: "Consultații",
      ultrasound: "Ecografii",
      bloodTests: "Analize",
      vaccines: "Vaccinuri",
      screenings: "Screeninguri",
    },
    today: "Azi",
    timeline: "Timeline sarcină",
    consultTitle: "Calendar de consultații recomandate",
    consultGP: "Medic de familie",
    consultOBGYN: "Ginecolog",
    ultrasoundTitle: "Calendar ecografii",
    bloodTitle: "Analize recomandate",
    vaccineTitle: "Vaccinuri recomandate",
    screenTitle: "Screeninguri prenatale",
    disclaimer: "Aceste informații au scop educativ. Consultați întotdeauna medicul dumneavoastră pentru îngrijire prenatală personalizată.",
    nav: "← Înapoi la NASCORA",
    conceptDate: "Data estimată a concepției",
    gestAge: "Vârstă gestațională",
    progress: "Progres",
  },
  en: {
    title: "Pregnancy Calculator",
    subtitle: "Enter your last menstrual period date for a personalized pregnancy guide",
    dumLabel: "Last Menstrual Period (LMP)",
    calculate: "Calculate",
    reset: "Reset",
    currentWeek: "Current week",
    trimester: "Trimester",
    dueDate: "Estimated due date",
    daysLeft: "days remaining",
    week: "Week",
    weeks: "weeks",
    trimesterNames: ["Trimester 1", "Trimester 2", "Trimester 3"],
    trimesterRanges: ["Wk 1–12", "Wk 13–27", "Wk 28–40"],
    tabs: {
      development: "Fetal development",
      tips: "Tips",
      consultations: "Appointments",
      ultrasound: "Ultrasounds",
      bloodTests: "Blood tests",
      vaccines: "Vaccines",
      screenings: "Screenings",
    },
    today: "Today",
    timeline: "Pregnancy timeline",
    consultTitle: "Recommended consultation schedule",
    consultGP: "Family doctor",
    consultOBGYN: "OB-GYN",
    ultrasoundTitle: "Ultrasound schedule",
    bloodTitle: "Recommended blood tests",
    vaccineTitle: "Recommended vaccines",
    screenTitle: "Prenatal screenings",
    disclaimer: "This information is for educational purposes only. Always consult your healthcare provider for personalized prenatal care.",
    nav: "← Back to NASCORA",
    conceptDate: "Estimated conception date",
    gestAge: "Gestational age",
    progress: "Progress",
  },
};

// ── DEZVOLTARE FETALĂ PE SĂPTĂMÂNI ──
const FETAL_DEV = {
  4: { en: "Implantation complete. Neural tube begins forming. Embryo is poppy-seed sized (~2mm).", ro: "Implantarea completă. Tubul neural începe să se formeze. Embrionul are dimensiunea unui bob de mac (~2mm)." },
  5: { en: "Heart begins beating. Brain developing rapidly. Arm and leg buds appear. Size: sesame seed.", ro: "Inima începe să bată. Creierul se dezvoltă rapid. Apar muguri de brațe și picioare. Dimensiune: sămânță de susan." },
  6: { en: "Facial features forming (nose, mouth, ears). Neural tube closing. Heartbeat visible on ultrasound.", ro: "Trăsăturile faciale se formează (nas, gură, urechi). Tubul neural se închide. Bătaia inimii vizibilă la ecografie." },
  7: { en: "Hands and feet forming. Brain growing rapidly. Embryo ~1cm. Liver producing red blood cells.", ro: "Mâinile și picioarele se formează. Creierul crește rapid. Embrionul ~1cm. Ficatul produce globule roșii." },
  8: { en: "All major organs present. Fingers and toes forming. Eyes developing. Size: raspberry (~1.6cm).", ro: "Toate organele majore prezente. Degetele se formează. Ochii se dezvoltă. Dimensiune: zmeură (~1.6cm)." },
  9: { en: "Embryo becomes fetus. Muscles forming. Can make small movements. Size: grape (~2.3cm).", ro: "Embrionul devine făt. Mușchii se formează. Poate face mișcări mici. Dimensiune: bob de strugure (~2.3cm)." },
  10: { en: "Vital organs functioning. Fingernails forming. Bones hardening. Size: kumquat (~3.1cm).", ro: "Organele vitale funcționează. Unghiile se formează. Oasele se întăresc. Dimensiune: kumquat (~3.1cm)." },
  11: { en: "Tooth buds forming. Ears moving to final position. Size: fig (~4.1cm).", ro: "Mugurii dentari se formează. Urechile se mută la poziția finală. Dimensiune: smochină (~4.1cm)." },
  12: { en: "Reflexes developing. Can open/close fingers. Intestines moving inside abdomen. Size: lime (~5.4cm).", ro: "Reflexele se dezvoltă. Poate deschide/închide degetele. Intestinele se mută în abdomen. Dimensiune: limetă (~5.4cm)." },
  13: { en: "Fingerprints forming. Vocal cords developing. Size: peapod (~7.4cm). Second trimester begins!", ro: "Amprentele se formează. Corzile vocale se dezvoltă. Dimensiune: păstaie de mazăre (~7.4cm). Începe trimestrul 2!" },
  14: { en: "Facial expressions possible. Sucking reflex developing. Body hair (lanugo) appearing.", ro: "Expresii faciale posibile. Reflexul de supt se dezvoltă. Părul corporal (lanugo) apare." },
  15: { en: "Can sense light. Skeleton becoming visible on X-ray. Taste buds forming. Size: apple (~10cm).", ro: "Poate percepe lumina. Scheletul devine vizibil la radiografie. Mugurii gustativi se formează. Dimensiune: măr (~10cm)." },
  16: { en: "Facial muscles active. Eyes moving. First maternal feeling of movement possible (multiparous). Size: avocado.", ro: "Mușchii faciali activi. Ochii se mișcă. Prima percepție a mișcării posibilă (multipare). Dimensiune: avocado." },
  17: { en: "Skeleton changing from cartilage to bone. Sweat glands developing. Size: ~13cm.", ro: "Scheletul se transformă din cartilaj în os. Glandele sudoripare se dezvoltă. Dimensiune: ~13cm." },
  18: { en: "Ears fully formed — can hear sounds! Myelin coating nerves. May feel movement (quickening). Size: bell pepper.", ro: "Urechile complet formate — poate auzi sunete! Mielina acoperă nervii. Se pot simți mișcările (quickening). Dimensiune: ardei gras." },
  19: { en: "Vernix caseosa coating skin. Sensory development accelerating. Size: mango (~15cm).", ro: "Vernix caseosa acoperă pielea. Dezvoltarea senzorială se accelerează. Dimensiune: mango (~15cm)." },
  20: { en: "HALFWAY! Can swallow amniotic fluid. Practicing breathing movements. Size: banana (~25cm head-to-toe).", ro: "JUMĂTATE! Poate înghiți lichid amniotic. Practică mișcări de respirație. Dimensiune: banană (~25cm cap-talpă)." },
  21: { en: "Eyebrows and eyelids formed. Rapid weight gain begins. Movements more coordinated.", ro: "Sprâncenele și pleoapele formate. Începe creșterea rapidă în greutate. Mișcări mai coordonate." },
  22: { en: "Lips and eyelids more distinct. Developing sleep/wake cycles. Size: papaya (~27cm).", ro: "Buzele și pleoapele mai distincte. Cicluri somn/veghe în dezvoltare. Dimensiune: papaya (~27cm)." },
  23: { en: "Lungs producing surfactant. Skin still translucent. Can recognize mother's voice. Weight: ~500g.", ro: "Plămânii produc surfactant. Pielea încă translucidă. Poate recunoaște vocea mamei. Greutate: ~500g." },
  24: { en: "Viability milestone — survival outside womb possible with intensive care. Inner ear fully developed (sense of balance).", ro: "Prag de viabilitate — supraviețuirea în afara uterului posibilă cu terapie intensivă. Urechea internă complet dezvoltată (simțul echilibrului)." },
  25: { en: "Responding to touch and sound. Fat stores developing. Nostrils opening. Size: ~35cm.", ro: "Răspunde la atingere și sunet. Depozitele de grăsime se dezvoltă. Nările se deschid. Dimensiune: ~35cm." },
  26: { en: "Eyes opening for first time. Lungs developing airways. Immune system maturing. Weight: ~760g.", ro: "Ochii se deschid pentru prima dată. Plămânii dezvoltă căile aeriene. Sistemul imunitar se maturizează. Greutate: ~760g." },
  27: { en: "Brain very active. Can recognize voices. Regular sleep/wake cycles. Size: cauliflower.", ro: "Creierul foarte activ. Poate recunoaște voci. Cicluri regulate somn/veghe. Dimensiune: conopidă." },
  28: { en: "Third trimester begins! Eyes can blink. Can dream (REM sleep). Weight: ~1kg. Survival rate >90% if born now.", ro: "Trimestrul 3 începe! Ochii pot clipi. Poate visa (somn REM). Greutate: ~1kg. Rata de supraviețuire >90% dacă se naște acum." },
  29: { en: "Bones fully developed but still soft. Muscles and lungs maturing rapidly.", ro: "Oasele complet dezvoltate dar încă moi. Mușchii și plămânii se maturizează rapid." },
  30: { en: "Brain growing rapidly — surface becoming wrinkled. Red blood cell production moving from liver to bone marrow. Weight: ~1.3kg.", ro: "Creierul crește rapid — suprafața devine ondulată. Producția de globule roșii trece de la ficat la măduvă. Greutate: ~1.3kg." },
  31: { en: "All five senses functioning. Processing information. Can turn head. Weight: ~1.5kg.", ro: "Toate cele cinci simțuri funcționează. Procesează informații. Poate întoarce capul. Greutate: ~1.5kg." },
  32: { en: "Toenails and fingernails complete. Skin thickening and losing translucency. Weight: ~1.7kg.", ro: "Unghiile mâinilor și picioarelor complete. Pielea se îngroașă și pierde transparența. Greutate: ~1.7kg." },
  33: { en: "Bones hardening (except skull — stays flexible for birth). Pupils can dilate. Weight: ~2kg.", ro: "Oasele se întăresc (cu excepția craniului — rămâne flexibil pentru naștere). Pupilele se pot dilata. Greutate: ~2kg." },
  34: { en: "Lungs nearly mature. Vernix thickening. Immune system strengthening. Weight: ~2.2kg.", ro: "Plămânii aproape maturi. Vernix-ul se îngroașă. Sistemul imunitar se întărește. Greutate: ~2.2kg." },
  35: { en: "Brain weight increases by 1/3 in last weeks. Kidneys fully developed. Weight: ~2.4kg.", ro: "Greutatea creierului crește cu 1/3 în ultimele săptămâni. Rinichii complet dezvoltați. Greutate: ~2.4kg." },
  36: { en: "Baby dropping into pelvis (engagement). Lanugo shedding. Gaining ~28g/day. Weight: ~2.6kg.", ro: "Bebelușul coboară în pelvis (angajare). Lanugo-ul cade. Câștigă ~28g/zi. Greutate: ~2.6kg." },
  37: { en: "EARLY TERM — considered mature. Practicing breathing. Grasping reflex strong. Weight: ~2.9kg.", ro: "TERMEN PRECOCE — considerat matur. Practică respirația. Reflexul de apucare puternic. Greutate: ~2.9kg." },
  38: { en: "Full term! All organs ready. Meconium in intestines. Average weight: ~3.1kg.", ro: "Termen complet! Toate organele gata. Meconiu în intestine. Greutate medie: ~3.1kg." },
  39: { en: "Brain and lungs still maturing. Antibodies transferring from mother. Weight: ~3.3kg.", ro: "Creierul și plămânii se maturizează încă. Anticorpii se transferă de la mamă. Greutate: ~3.3kg." },
  40: { en: "DUE DATE! Average newborn: 50cm, 3.4kg. Only ~5% babies arrive exactly on due date.", ro: "DATA NAȘTERII! Nou-născutul mediu: 50cm, 3.4kg. Doar ~5% din bebeluși vin exact la termen." },
};

// ── SFATURI PE SĂPTĂMÂNI ──
const TIPS = {
  4: { en: "Start prenatal vitamins with folic acid (400-800mcg). Avoid alcohol, smoking, raw meat.", ro: "Începeți vitaminele prenatale cu acid folic (400-800mcg). Evitați alcoolul, fumatul, carnea crudă." },
  5: { en: "Schedule first prenatal visit. Morning sickness may start. Small, frequent meals help.", ro: "Programați prima vizită prenatală. Greața matinală poate începe. Mesele mici și frecvente ajută." },
  6: { en: "Stay hydrated. Ginger tea helps nausea. Avoid unpasteurized cheeses and deli meats.", ro: "Mențineți hidratarea. Ceaiul de ghimbir ajută cu greața. Evitați brânzeturile nepasteurizate și mezelurile." },
  7: { en: "Fatigue is normal. Rest when you can. Avoid cat litter (toxoplasmosis risk).", ro: "Oboseala e normală. Odihniți-vă când puteți. Evitați litiera pisicii (risc de toxoplasmoză)." },
  8: { en: "First prenatal visit usually this week. Blood tests, blood type, immunity check.", ro: "Prima vizită prenatală de obicei în această săptămână. Analize de sânge, grupa sanguină, verificare imunitate." },
  9: { en: "Mood swings normal due to hormones. Stay active — walking is excellent exercise.", ro: "Schimbările de dispoziție sunt normale din cauza hormonilor. Rămâneți active — plimbarea e exercițiu excelent." },
  10: { en: "Uterus is size of a grapefruit. Breast tenderness common. Consider maternity clothes soon.", ro: "Uterul are dimensiunea unui grapefruit. Sensibilitatea sânilor e frecventă. Luați în considerare hainele de maternitate." },
  11: { en: "Double test screening available (11-14 weeks). Discuss with your OB-GYN.", ro: "Testul dublu disponibil (11-14 săptămâni). Discutați cu ginecologul." },
  12: { en: "First trimester screening (nuchal translucency). End of highest-risk period for most exposures.", ro: "Screeningul de trimestrul 1 (translucență nucală). Sfârșitul perioadei de risc maxim pentru majoritatea expunerilor." },
  13: { en: "Energy may return! Second trimester often feels best. Good time for dental check-up.", ro: "Energia se poate întoarce! Trimestrul 2 e adesea cel mai bun. Moment bun pentru control dentar." },
  14: { en: "Nausea usually improves. Appetite increasing. Eat iron-rich foods.", ro: "Greața de obicei se ameliorează. Apetitul crește. Mâncați alimente bogate în fier." },
  15: { en: "Triple/quad screen available (15-20 weeks). Pregnancy glow may appear!", ro: "Testul triplu/quad disponibil (15-20 săptămâni). 'Strălucirea de sarcină' poate apărea!" },
  16: { en: "You may feel first movements (fluttering). Start sleeping on your side.", ro: "Puteți simți primele mișcări (fluturări). Începeți să dormiți pe o parte." },
  17: { en: "Baby can hear — talk and sing to your belly! Center of gravity shifting.", ro: "Bebelușul poate auzi — vorbiți și cântați burticii! Centrul de greutate se deplasează." },
  18: { en: "Second trimester ultrasound (morphology scan) usually weeks 18-22.", ro: "Ecografia de trimestrul 2 (ecografia morfologică) de obicei în săptămânile 18-22." },
  19: { en: "Hip and back pain may start. Pregnancy pillow can help sleep quality.", ro: "Durerea de șold și spate poate apărea. Perna de sarcină poate ajuta calitatea somnului." },
  20: { en: "Halfway! Morphology scan shows baby's anatomy in detail. Gender may be visible.", ro: "Jumătate! Ecografia morfologică arată anatomia bebelușului în detaliu. Sexul poate fi vizibil." },
  21: { en: "Stretch marks may appear. Keep skin moisturized. Stay active.", ro: "Vergeturile pot apărea. Mențineți pielea hidratată. Rămâneți active." },
  22: { en: "Braxton-Hicks contractions may start. Stay hydrated to reduce them.", ro: "Contracțiile Braxton-Hicks pot începe. Mențineți hidratarea pentru a le reduce." },
  23: { en: "Glucose screening test coming up (24-28 weeks). Watch for swelling in hands/feet.", ro: "Testul de toleranță la glucoză se apropie (24-28 săptămâni). Atenție la umflarea mâinilor/picioarelor." },
  24: { en: "Viability milestone. Register for birth preparation classes.", ro: "Prag de viabilitate. Înscrieți-vă la cursuri de pregătire pentru naștere." },
  25: { en: "Eyes may feel dry. Hemorrhoids possible. Kegel exercises help pelvic floor.", ro: "Ochii pot fi uscați. Hemoroizii posibili. Exercițiile Kegel ajută planșeul pelvian." },
  26: { en: "Start thinking about birth plan. Consider cord blood banking.", ro: "Începeți să vă gândiți la planul de naștere. Luați în considerare stocarea sângelui din cordon." },
  27: { en: "Glucose tolerance test (OGTT) this week. Third trimester starts next week!", ro: "Testul de toleranță la glucoză (TTGO) în această săptămână. Trimestrul 3 începe săptămâna viitoare!" },
  28: { en: "Third trimester! Tdap vaccine recommended (27-36 weeks). Count baby's movements.", ro: "Trimestrul 3! Vaccinul Tdap recomandat (27-36 săptămâni). Numărați mișcările bebelușului." },
  29: { en: "Heartburn may increase. Eat small meals, avoid lying down after eating.", ro: "Arsurile pot crește. Mâncați porții mici, evitați să vă întindeți după masă." },
  30: { en: "Fatigue returns. Rest when possible. Practice breathing techniques for labor.", ro: "Oboseala revine. Odihniți-vă când e posibil. Practicați tehnici de respirație pentru travaliu." },
  31: { en: "Pack your hospital bag! Frequent urination due to baby pressing on bladder.", ro: "Pregătiți-vă bagajul de maternitate! Urinare frecventă din cauza presiunii bebelușului pe vezică." },
  32: { en: "Third trimester ultrasound may be scheduled. Baby may turn head-down.", ro: "Ecografia de trimestrul 3 poate fi programată. Bebelușul se poate întoarce cu capul în jos." },
  33: { en: "Install car seat! Review hospital route. Signs of labor to watch for.", ro: "Montați scaunul auto! Revizuiți traseul către maternitate. Semnele travaliului de urmărit." },
  34: { en: "Increased vaginal discharge normal. Call doctor for bloody or watery discharge.", ro: "Creșterea secrețiilor vaginale e normală. Sunați medicul pentru secreții sanguinolente sau apoase." },
  35: { en: "Weekly prenatal visits start. GBS test (group B streptococcus) at 36 weeks.", ro: "Vizitele prenatale săptămânale încep. Testul GBS (streptococ de grup B) la 36 săptămâni." },
  36: { en: "Baby engaging in pelvis. GBS swab test. Breathing may ease as baby drops.", ro: "Bebelușul se angajează în pelvis. Test GBS prin tampon. Respirația se poate ușura când bebelușul coboară." },
  37: { en: "Early term! Baby is considered mature. Watch for signs of labor.", ro: "Termen precoce! Bebelușul e considerat matur. Atenție la semnele travaliului." },
  38: { en: "Nesting instinct may be strong. Rest between activities. Keep phone charged!", ro: "Instinctul de cuibărit poate fi puternic. Odihniți-vă între activități. Mențineți telefonul încărcat!" },
  39: { en: "Full term! Baby could come any day. Know when to go to hospital.", ro: "Termen complet! Bebelușul poate veni oricând. Știți când să mergeți la spital." },
  40: { en: "Due date! Only 5% of babies arrive exactly on time. Trust your body and your doctor.", ro: "Data nașterii! Doar 5% din bebeluși vin exact la termen. Aveți încredere în corpul dvs. și în medicul dvs." },
};

// ── CONSULTAȚII RECOMANDATE ──
const CONSULTATIONS = [
  { week: "6-8", type: "OBGYN", ro: "Prima consultație prenatală. Confirmare ecografică a sarcinii. Istoric medical.", en: "First prenatal visit. Ultrasound pregnancy confirmation. Medical history." },
  { week: "8-10", type: "GP", ro: "Analize de sânge inițiale (hemoleucogramă, grup sanguin, Rh, serologii TORCH, glicemie, urocultură).", en: "Initial blood tests (CBC, blood type, Rh, TORCH serology, glucose, urine culture)." },
  { week: "11-13", type: "OBGYN", ro: "Ecografia de trimestrul 1 + screening dublu test. Translucență nucală.", en: "First trimester ultrasound + double test screening. Nuchal translucency." },
  { week: "16", type: "OBGYN", ro: "Control de rutină. Verificare dezvoltare. Rezultate screening.", en: "Routine check. Growth assessment. Screening results." },
  { week: "18-22", type: "OBGYN", ro: "Ecografia morfologică detaliată. Verificare anatomie fetală completă.", en: "Detailed morphology ultrasound. Complete fetal anatomy check." },
  { week: "24", type: "GP", ro: "Hemoleucogramă de control. Analiză urină.", en: "Follow-up CBC. Urine analysis." },
  { week: "24-28", type: "OBGYN", ro: "Test toleranță la glucoză (TTGO 75g). Screening diabet gestațional.", en: "Glucose tolerance test (OGTT 75g). Gestational diabetes screening." },
  { week: "28", type: "OBGYN", ro: "Anti-D imunoglobulină dacă Rh negativ. Hemoleucogramă de control.", en: "Anti-D immunoglobulin if Rh negative. Follow-up CBC." },
  { week: "30-32", type: "OBGYN", ro: "Ecografia de trimestrul 3. Verificare creștere fetală și poziție.", en: "Third trimester ultrasound. Fetal growth and position check." },
  { week: "34", type: "OBGYN", ro: "Control. Planificare naștere. Discuție despre semne de travaliu.", en: "Check-up. Birth planning. Discussion about labor signs." },
  { week: "36", type: "OBGYN", ro: "Test GBS (streptococ grup B). Control săptămânal începe.", en: "GBS test (Group B strep). Weekly checks begin." },
  { week: "37", type: "OBGYN", ro: "Control săptămânal. Monitoring CTG dacă e indicat.", en: "Weekly check. CTG monitoring if indicated." },
  { week: "38", type: "OBGYN", ro: "Control săptămânal. Evaluare col uterin.", en: "Weekly check. Cervical assessment." },
  { week: "39", type: "OBGYN", ro: "Control săptămânal. Discuție despre inducere dacă e cazul.", en: "Weekly check. Discussion about induction if applicable." },
  { week: "40", type: "OBGYN", ro: "Control la termen. CTG monitoring. Plan post-termen.", en: "Term check. CTG monitoring. Post-term plan." },
];

// ── ECOGRAFII ──
const ULTRASOUNDS = [
  { week: "6-8", ro: "Ecografia de datare — confirmare sarcină intrauterină, embrion vizibil, bătăi cardiac, stabilire vârstă gestațională", en: "Dating scan — confirm intrauterine pregnancy, visible embryo, heartbeat, establish gestational age" },
  { week: "11-13+6", ro: "Ecografia de trimestrul 1 (morfologia precoce) — translucență nucală (NT), os nazal, ductus venosus, screening aneuploidii. Se face cu testul dublu (beta-hCG + PAPP-A).", en: "First trimester scan (early morphology) — nuchal translucency (NT), nasal bone, ductus venosus, aneuploidy screening. Combined with double test (beta-hCG + PAPP-A)." },
  { week: "18-22", ro: "Ecografia morfologică de trimestrul 2 — evaluare detaliată a anatomiei fetale: creier, inimă (4 camere + vase mari), coloană, rinichi, membre, placenta, lichid amniotic. Gold standard.", en: "Second trimester morphology scan — detailed fetal anatomy assessment: brain, heart (4 chambers + great vessels), spine, kidneys, limbs, placenta, amniotic fluid. Gold standard." },
  { week: "28-32", ro: "Ecografia de trimestrul 3 — creștere fetală, poziție (cefalic/pelvin), placenta (grad maturare, poziție), index lichid amniotic, Doppler artere uterine și ombilicale.", en: "Third trimester scan — fetal growth, position (cephalic/breech), placenta (grade, position), amniotic fluid index, uterine and umbilical artery Doppler." },
  { week: "36-37", ro: "Ecografia de verificare (dacă e necesară) — confirmare poziție fetală, estimare greutate, biometrie, lichid amniotic.", en: "Verification scan (if needed) — confirm fetal position, weight estimation, biometry, amniotic fluid." },
];

// ── ANALIZE DE SÂNGE ──
const BLOOD_TESTS = [
  { trimester: 1, week: "6-10", ro: "Hemoleucogramă completă (HLG), Grupa sanguină + Rh, Test Coombs indirect, Glicemie à jeun, Serologii TORCH (Toxoplasma IgG/IgM, Rubella IgG, CMV IgG/IgM, HSV), HIV, Hepatită B (AgHBs) și C, Sifilis (VDRL/RPR), Urocultură + sumar urină, TSH", en: "Complete blood count (CBC), Blood type + Rh, Indirect Coombs test, Fasting glucose, TORCH serology (Toxoplasma IgG/IgM, Rubella IgG, CMV IgG/IgM, HSV), HIV, Hepatitis B (HBsAg) & C, Syphilis (VDRL/RPR), Urine culture + urinalysis, TSH" },
  { trimester: 1, week: "11-13", ro: "Test dublu (screening combinat T1): beta-hCG liber + PAPP-A (se corelează cu ecografia NT)", en: "Double test (combined T1 screening): free beta-hCG + PAPP-A (correlated with NT ultrasound)" },
  { trimester: 2, week: "15-20", ro: "Test triplu/quad (opțional): AFP + beta-hCG + estriol (± inhibin A). Toxoplasma IgG/IgM (dacă era negativă)", en: "Triple/quad test (optional): AFP + beta-hCG + estriol (± inhibin A). Toxoplasma IgG/IgM (if previously negative)" },
  { trimester: 2, week: "24-28", ro: "Test toleranță la glucoză (TTGO 75g — 0h, 1h, 2h). Hemoleucogramă de control. Anti-D dacă Rh negativ.", en: "Glucose tolerance test (OGTT 75g — 0h, 1h, 2h). Follow-up CBC. Anti-D if Rh negative." },
  { trimester: 3, week: "28-32", ro: "Hemoleucogramă (verificare anemie). Feritină. Serologii TORCH repetate dacă e cazul. Urocultură.", en: "CBC (check anemia). Ferritin. Repeat TORCH serology if indicated. Urine culture." },
  { trimester: 3, week: "36", ro: "Test GBS (tampon vagino-rectal). HLG final. Sumar urină.", en: "GBS test (vaginal-rectal swab). Final CBC. Urinalysis." },
];

// ── VACCINURI ──
const VACCINES = [
  { week: "Oricând", ro: "Vaccin antigripal (inactivat) — recomandat în orice trimestru, ideal înainte de sezonul gripal", en: "Flu vaccine (inactivated) — recommended any trimester, ideally before flu season" },
  { week: "27-36", ro: "Vaccin Tdap (tetanos-difterie-pertussis) — recomandat la fiecare sarcină, ideal săptămâna 27-36, pentru protecția nou-născutului contra tusei convulsive", en: "Tdap vaccine (tetanus-diphtheria-pertussis) — recommended each pregnancy, ideally week 27-36, to protect newborn against whooping cough" },
  { week: "Oricând", ro: "Vaccin COVID-19 (mRNA) — recomandat, sigur în orice trimestru. Infecția COVID în sarcină are riscuri semnificative.", en: "COVID-19 vaccine (mRNA) — recommended, safe any trimester. COVID infection in pregnancy carries significant risks." },
  { week: "32-36", ro: "Vaccin RSV (Abrysvo) — nou, recomandat pentru protecția nou-născutului contra bronșiolitei RSV", en: "RSV vaccine (Abrysvo) — new, recommended to protect newborn against RSV bronchiolitis" },
  { week: "Pre-concepție", ro: "Vaccin ROR (rujeolă-oreion-rubeolă) — VIU, doar înainte de sarcină! Așteptați 1 lună după vaccinare", en: "MMR vaccine (measles-mumps-rubella) — LIVE, only before pregnancy! Wait 1 month after vaccination" },
  { week: "Pre-concepție", ro: "Vaccin varicelă — VIU, doar înainte de sarcină dacă nu aveți imunitate! Așteptați 1 lună.", en: "Varicella vaccine — LIVE, only before pregnancy if not immune! Wait 1 month." },
];

// ── SCREENINGURI PRENATALE ──
const SCREENINGS = [
  { week: "11-13+6", ro: "Screeningul combinat de trimestrul 1 (Dublu Test): Ecografie translucență nucală (NT) + beta-hCG liber + PAPP-A. Calculează riscul de trisomie 21 (Down), 18 (Edwards), 13 (Patau). Rata de detecție: ~90%.", en: "Combined first trimester screening (Double Test): Nuchal translucency (NT) ultrasound + free beta-hCG + PAPP-A. Calculates risk of trisomy 21 (Down), 18 (Edwards), 13 (Patau). Detection rate: ~90%." },
  { week: "10+", ro: "Test prenatal non-invaziv (NIPT/NIFTY/Harmony): Analiză ADN fetal liber din sângele matern. Cea mai precisă metodă non-invazivă (>99% pentru trisomia 21). Se poate face din săptămâna 10. Cost: nedecontat în România.", en: "Non-invasive prenatal testing (NIPT/NIFTY/Harmony): Cell-free fetal DNA analysis from maternal blood. Most accurate non-invasive method (>99% for trisomy 21). Available from week 10. Cost: not covered in Romania." },
  { week: "15-20", ro: "Test triplu/quad (screening trimestrul 2): AFP + beta-hCG + estriol neconjugat (± inhibin A). Rată de detecție: ~70-80%. Alternativă dacă s-a pierdut fereastra T1.", en: "Triple/quad test (second trimester screening): AFP + beta-hCG + unconjugated estriol (± inhibin A). Detection rate: ~70-80%. Alternative if T1 window was missed." },
  { week: "15-18", ro: "Amniocenteza (invazivă): Indicată doar la risc crescut (screening pozitiv, vârstă >35, anomalii ecografice, istoric). Analiză cromozomială definitivă. Risc de pierdere a sarcinii: ~0.1-0.3%.", en: "Amniocentesis (invasive): Indicated only at increased risk (positive screening, age >35, ultrasound anomalies, history). Definitive chromosomal analysis. Pregnancy loss risk: ~0.1-0.3%." },
  { week: "11-14", ro: "Biopsie de vilozități coriale (CVS) (invazivă): Alternativă precoce la amniocenteză. Aceleași indicații. Risc similar (~0.1-0.3%).", en: "Chorionic villus sampling (CVS) (invasive): Early alternative to amniocentesis. Same indications. Similar risk (~0.1-0.3%)." },
  { week: "24-28", ro: "Screening diabet gestațional (TTGO 75g): Test obligatoriu. Valori diagnostic: à jeun ≥92 mg/dL, 1h ≥180 mg/dL, 2h ≥153 mg/dL (o singură valoare pozitivă = diagnostic).", en: "Gestational diabetes screening (OGTT 75g): Mandatory test. Diagnostic values: fasting ≥92 mg/dL, 1h ≥180 mg/dL, 2h ≥153 mg/dL (one positive value = diagnosis)." },
];

// ── Helper functions ──
function addDays(date, days) { const d = new Date(date); d.setDate(d.getDate() + days); return d; }
function diffDays(a, b) { return Math.floor((b - a) / (1000 * 60 * 60 * 24)); }
function formatDate(d, lang) {
  const months = lang === 'ro'
    ? ['ian','feb','mar','apr','mai','iun','iul','aug','sep','oct','nov','dec']
    : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}
function getTrimester(week) { if (week <= 12) return 0; if (week <= 27) return 1; return 2; }
function getClosestWeekData(weekNum, data) {
  if (data[weekNum]) return data[weekNum];
  for (let i = weekNum; i >= 4; i--) { if (data[i]) return data[i]; }
  return data[Object.keys(data)[0]];
}

export default function PregnancyCalculator() {
  const [lang, setLang] = useState('ro');
  const [dum, setDum] = useState('');
  const [result, setResult] = useState(null);
  const [activeTab, setActiveTab] = useState('development');

  const t = T[lang];

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const navLang = navigator.language || navigator.userLanguage || '';
      if (!navLang.startsWith('ro')) setLang('en');
    }
  }, []);

  function calculate() {
    if (!dum) return;
    const dumDate = new Date(dum);
    const today = new Date();
    const dueDate = addDays(dumDate, 280);
    const conceptionDate = addDays(dumDate, 14);
    const daysSinceLMP = diffDays(dumDate, today);
    const currentWeek = Math.floor(daysSinceLMP / 7);
    const currentDay = daysSinceLMP % 7;
    const daysRemaining = diffDays(today, dueDate);
    const trimester = getTrimester(currentWeek);
    const progress = Math.min(100, Math.round((daysSinceLMP / 280) * 100));

    if (currentWeek < 1 || currentWeek > 45) {
      alert(lang === 'ro' ? 'Data pare incorectă. Verificați data ultimei menstruații.' : 'Date seems incorrect. Please check your LMP date.');
      return;
    }

    setResult({
      dumDate, dueDate, conceptionDate,
      currentWeek: Math.min(currentWeek, 42),
      currentDay,
      daysRemaining: Math.max(0, daysRemaining),
      trimester, progress
    });
  }

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF8', fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />

      {/* NAV */}
      <nav style={{ padding: '16px 24px', borderBottom: '1px solid #E8E5E0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ color: '#2D6A4F', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>{t.nav}</a>
        <button
          onClick={() => setLang(l => l === 'ro' ? 'en' : 'ro')}
          style={{ background: '#2D6A4F', color: '#fff', border: 'none', borderRadius: 20, padding: '6px 16px', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}
        >
          {lang === 'ro' ? 'EN' : 'RO'}
        </button>
      </nav>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 42px)', color: '#1B4332', margin: 0 }}>{t.title}</h1>
          <p style={{ color: '#6B7280', marginTop: 8, fontSize: 15 }}>{t.subtitle}</p>
        </div>

        {/* INPUT */}
        <div style={{
          background: '#fff', borderRadius: 16, padding: '32px 28px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-end', justifyContent: 'center', marginBottom: 40
        }}>
          <div style={{ flex: '1 1 220px' }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>{t.dumLabel}</label>
            <input
              type="date"
              value={dum}
              onChange={e => setDum(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              style={{ width: '100%', padding: '12px 16px', border: '2px solid #D1D5DB', borderRadius: 10, fontSize: 16, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
          <button onClick={calculate} style={{
            background: '#2D6A4F', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 32px',
            fontSize: 15, fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s'
          }}>{t.calculate}</button>
          {result && (
            <button onClick={() => { setResult(null); setDum(''); }} style={{
              background: '#F3F4F6', color: '#6B7280', border: 'none', borderRadius: 10, padding: '12px 20px',
              fontSize: 14, cursor: 'pointer'
            }}>{t.reset}</button>
          )}
        </div>

        {/* RESULTS */}
        {result && (
          <>
            {/* Stats cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
              {[
                { label: t.currentWeek, value: `${result.currentWeek}+${result.currentDay}`, sub: t.gestAge },
                { label: t.trimester, value: t.trimesterNames[result.trimester], sub: t.trimesterRanges[result.trimester] },
                { label: t.dueDate, value: formatDate(result.dueDate, lang), sub: `${result.daysRemaining} ${t.daysLeft}` },
                { label: t.progress, value: `${result.progress}%`, sub: `${result.currentWeek}/40 ${t.weeks}` },
              ].map((card, i) => (
                <div key={i} style={{
                  background: i === 0 ? '#2D6A4F' : '#fff', color: i === 0 ? '#fff' : '#1B4332',
                  borderRadius: 14, padding: '20px 18px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: 12, fontWeight: 500, opacity: 0.7, textTransform: 'uppercase', letterSpacing: 0.5 }}>{card.label}</div>
                  <div style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 700, fontFamily: "'Playfair Display', serif", margin: '6px 0 4px' }}>{card.value}</div>
                  <div style={{ fontSize: 12, opacity: 0.65 }}>{card.sub}</div>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '20px', marginBottom: 32, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10, color: '#374151' }}>{t.timeline}</div>
              <div style={{ display: 'flex', gap: 2, height: 18, borderRadius: 8, overflow: 'hidden' }}>
                {Array.from({ length: 40 }, (_, i) => (
                  <div key={i} style={{
                    flex: 1,
                    background: i < result.currentWeek
                      ? (i < 12 ? '#F59E0B' : i < 27 ? '#10B981' : '#3B82F6')
                      : '#E5E7EB',
                    position: 'relative',
                    transition: 'background 0.3s',
                    borderRadius: i === 0 ? '4px 0 0 4px' : i === 39 ? '0 4px 4px 0' : 0,
                  }}>
                    {i === result.currentWeek && (
                      <div style={{
                        position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50)',
                        fontSize: 9, fontWeight: 700, color: '#2D6A4F', whiteSpace: 'nowrap'
                      }}>{t.today}</div>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 10, color: '#9CA3AF' }}>
                <span>{t.trimesterNames[0]}</span>
                <span>{t.trimesterNames[1]}</span>
                <span>{t.trimesterNames[2]}</span>
              </div>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
              {Object.entries(t.tabs).map(([key, label]) => (
                <button key={key} onClick={() => setActiveTab(key)} style={{
                  padding: '8px 16px', borderRadius: 20, border: 'none', fontSize: 13, fontWeight: 500, cursor: 'pointer',
                  background: activeTab === key ? '#2D6A4F' : '#F3F4F6',
                  color: activeTab === key ? '#fff' : '#4B5563',
                  transition: 'all 0.2s'
                }}>{label}</button>
              ))}
            </div>

            {/* Tab content */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 20px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', minHeight: 200 }}>
              {activeTab === 'development' && (() => {
                const dev = getClosestWeekData(result.currentWeek, FETAL_DEV);
                return dev ? (
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#1B4332', margin: '0 0 12px' }}>
                      {t.week} {result.currentWeek}
                    </h3>
                    <p style={{ lineHeight: 1.7, color: '#374151', fontSize: 15 }}>{dev[lang]}</p>
                  </div>
                ) : <p style={{ color: '#9CA3AF' }}>—</p>;
              })()}

              {activeTab === 'tips' && (() => {
                const tip = getClosestWeekData(result.currentWeek, TIPS);
                return tip ? (
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#1B4332', margin: '0 0 12px' }}>
                      {t.week} {result.currentWeek}
                    </h3>
                    <p style={{ lineHeight: 1.7, color: '#374151', fontSize: 15 }}>{tip[lang]}</p>
                  </div>
                ) : <p style={{ color: '#9CA3AF' }}>—</p>;
              })()}

              {activeTab === 'consultations' && (
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#1B4332', margin: '0 0 16px' }}>{t.consultTitle}</h3>
                  {CONSULTATIONS.map((c, i) => {
                    const weekNum = parseInt(c.week);
                    const isPast = !isNaN(weekNum) && weekNum < result.currentWeek;
                    const isCurrent = !isNaN(weekNum) && Math.abs(weekNum - result.currentWeek) <= 2;
                    return (
                      <div key={i} style={{
                        display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid #F3F4F6',
                        opacity: isPast ? 0.5 : 1
                      }}>
                        <div style={{
                          minWidth: 50, fontSize: 12, fontWeight: 700, color: isCurrent ? '#2D6A4F' : '#6B7280',
                          background: isCurrent ? '#ECFDF5' : 'transparent', borderRadius: 6, padding: '4px 8px', textAlign: 'center'
                        }}>S{c.week}</div>
                        <div style={{
                          minWidth: 60, fontSize: 11, fontWeight: 600,
                          color: c.type === 'OBGYN' ? '#7C3AED' : '#0891B2', textTransform: 'uppercase'
                        }}>{c.type === 'OBGYN' ? t.consultOBGYN : t.consultGP}</div>
                        <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.5 }}>{c[lang]}</div>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeTab === 'ultrasound' && (
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#1B4332', margin: '0 0 16px' }}>{t.ultrasoundTitle}</h3>
                  {ULTRASOUNDS.map((u, i) => (
                    <div key={i} style={{ padding: '16px 0', borderBottom: '1px solid #F3F4F6' }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#2D6A4F', marginBottom: 6 }}>
                        {t.week} {u.week}
                      </div>
                      <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, margin: 0 }}>{u[lang]}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'bloodTests' && (
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#1B4332', margin: '0 0 16px' }}>{t.bloodTitle}</h3>
                  {BLOOD_TESTS.map((bt, i) => (
                    <div key={i} style={{ padding: '16px 0', borderBottom: '1px solid #F3F4F6' }}>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', background: ['#F59E0B','#10B981','#3B82F6'][bt.trimester-1], borderRadius: 4, padding: '2px 8px' }}>T{bt.trimester}</span>
                        <span style={{ fontSize: 12, fontWeight: 600, color: '#6B7280' }}>{t.week} {bt.week}</span>
                      </div>
                      <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, margin: 0 }}>{bt[lang]}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'vaccines' && (
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#1B4332', margin: '0 0 16px' }}>{t.vaccineTitle}</h3>
                  {VACCINES.map((v, i) => (
                    <div key={i} style={{ padding: '16px 0', borderBottom: '1px solid #F3F4F6' }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#2D6A4F', marginBottom: 6 }}>{v.week}</div>
                      <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, margin: 0 }}>{v[lang]}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'screenings' && (
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#1B4332', margin: '0 0 16px' }}>{t.screenTitle}</h3>
                  {SCREENINGS.map((s, i) => (
                    <div key={i} style={{ padding: '16px 0', borderBottom: '1px solid #F3F4F6' }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#2D6A4F', marginBottom: 6 }}>{t.week} {s.week}</div>
                      <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, margin: 0 }}>{s[lang]}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Disclaimer */}
            <p style={{ textAlign: 'center', fontSize: 12, color: '#9CA3AF', marginTop: 24, padding: '0 20px', lineHeight: 1.5 }}>
              ⚕️ {t.disclaimer}
            </p>
          </>
        )}
      </main>
    </div>
  );
}

