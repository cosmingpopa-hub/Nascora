// NASCORA Evidence Library - Teratology Articles
// Starter file - expand with full content from Claude

export const evidenceArticles = [
  {
    id: 'wilson-principles',
    category: 'Teratologie',
    icon: '🧬',
    readingTime: 15,
    title: { ro: 'Cele 6 principii ale teratologiei (Wilson, 1973)', en: 'The 6 Principles of Teratology (Wilson, 1973)' },
    subtitle: { ro: 'Fundamentul științific al evaluării riscului teratogen', en: 'Scientific foundation of teratogenic risk assessment' },
    summary: { ro: 'Principiile lui Wilson definesc modul în care agenții teratogeni afectează dezvoltarea fetală.', en: 'Wilson\'s principles define how teratogenic agents affect fetal development.' },
    content: { ro: '# Cele 6 principii\n\n1. Susceptibilitatea depinde de genotip\n2. Variază cu stadiul de dezvoltare\n3. Mecanisme specifice\n4. Manifestări: moarte, malformație, deficit\n5. Acces tisular\n6. Doză-dependent', en: '# 6 Principles\n\n1. Susceptibility depends on genotype\n2. Varies with developmental stage\n3. Specific mechanisms\n4. Manifestations\n5. Tissue access\n6. Dose-dependent' },
    references: ['Wilson JG. Environment and Birth Defects. 1973.']
  },
  {
    id: 'preconception-checklist',
    category: 'Prevenție',
    icon: '✅',
    readingTime: 12,
    title: { ro: 'Checklist preconcepție', en: 'Preconception Checklist' },
    subtitle: { ro: '10 pași esențiali', en: '10 essential steps' },
    summary: { ro: 'Ghid complet pentru optimizarea sănătății înainte de sarcină', en: 'Complete guide for health optimization before pregnancy' },
    content: { ro: '# Checklist\n\n1. Consultație medicală\n2. Acid folic\n3. Vaccinări\n4. Medicamente\n5. Stil de viață', en: '# Checklist\n\n1. Medical consultation\n2. Folic acid\n3. Vaccinations\n4. Medications\n5. Lifestyle' },
    references: ['CDC Preconception Care Guidelines 2023']
  },
  {
    id: 'nsaids-pregnancy',
    category: 'Medicamente',
    icon: '💊',
    readingTime: 10,
    title: { ro: 'AINS în sarcină', en: 'NSAIDs in Pregnancy' },
    subtitle: { ro: 'Riscuri pe trimestre', en: 'Risks by trimester' },
    summary: { ro: 'Siguranța antiinflamatoarelor nesteroidiene în sarcină', en: 'Safety of NSAIDs during pregnancy' },
    content: { ro: '# AINS\n\nTrimestrul 3: risc de închidere canal arterial', en: '# NSAIDs\n\nT3: risk of ductus arteriosus closure' },
    references: ['FDA Drug Safety Communication 2020']
  },
  {
    id: 'folic-acid-guide',
    category: 'Prevenție',
    icon: '🧪',
    readingTime: 18,
    title: { ro: 'Acid folic - ghid complet', en: 'Folic Acid - Complete Guide' },
    subtitle: { ro: 'De la biochimie la doze', en: 'From biochemistry to dosing' },
    summary: { ro: 'Tot ce trebuie să știți despre acid folic în sarcină', en: 'Everything you need to know about folic acid in pregnancy' },
    content: { ro: '# Acid Folic\n\nDoza standard: 400 μg/zi\nHigh-risk: 4-5 mg/zi', en: '# Folic Acid\n\nStandard dose: 400 μg/day\nHigh-risk: 4-5 mg/day' },
    references: ['MRC Vitamin Study 1991']
  },
  {
    id: 'alcohol-fasd',
    category: 'Teratogeni',
    icon: '🍺',
    readingTime: 14,
    title: { ro: 'Alcool și SAF', en: 'Alcohol and FAS' },
    subtitle: { ro: 'Spectrul complet FASD', en: 'Complete FASD spectrum' },
    summary: { ro: 'Efectele consumului de alcool asupra fatului', en: 'Effects of alcohol consumption on the fetus' },
    content: { ro: '# Alcool\n\nNicio doză sigură în sarcină', en: '# Alcohol\n\nNo safe dose in pregnancy' },
    references: ['AAP Policy Statement 2015']
  },
  {
    id: 'workplace-teratogens',
    category: 'Expuneri',
    icon: '🏭',
    readingTime: 16,
    title: { ro: 'Teratogeni la locul de muncă', en: 'Workplace Teratogens' },
    subtitle: { ro: 'Solvenți, metale, radiații', en: 'Solvents, metals, radiation' },
    summary: { ro: 'Expuneri ocupationale și riscul teratogen', en: 'Occupational exposures and teratogenic risk' },
    content: { ro: '# Expuneri\n\n- Solvenți organici\n- Metale grele\n- Radiații', en: '# Exposures\n\n- Organic solvents\n- Heavy metals\n- Radiation' },
    references: ['NIOSH Guidelines 2022']
  },
  {
    id: 'antiepileptics-pregnancy',
    category: 'Medicamente',
    icon: '⚡',
    readingTime: 20,
    title: { ro: 'Antiepileptice și sarcina', en: 'Antiepileptics and Pregnancy' },
    subtitle: { ro: 'Datele EURAP', en: 'EURAP data' },
    summary: { ro: 'Profilul de risc al medicamentelor antiepileptice', en: 'Risk profile of antiepileptic drugs' },
    content: { ro: '# Antiepileptice\n\nValproat: CONTRAINDICAT\nLamotrigina: relativ sigur', en: '# Antiepileptics\n\nValproate: CONTRAINDICATED\nLamotrigine: relatively safe' },
    references: ['EURAP Study 2018', 'EMA Restrictions 2018']
  },
  {
    id: 'first-trimester-exposures',
    category: 'Teratologie',
    icon: '📅',
    readingTime: 17,
    title: { ro: 'Expuneri în trimestrul 1', en: 'First Trimester Exposures' },
    subtitle: { ro: 'Cronologie organogeneză', en: 'Organogenesis timeline' },
    summary: { ro: 'Fereastra critică a dezvoltării fetale', en: 'Critical window of fetal development' },
    content: { ro: '# Trimestrul 1\n\nSăpt. 3-8: organogeneză majoră', en: '# Trimester 1\n\nWeeks 3-8: major organogenesis' },
    references: ['Moore KL. The Developing Human. 2020']
  }
];

// Helper functions
export const getArticleById = (id) => evidenceArticles.find(a => a.id === id);
export const getArticlesByCategory = (cat) => evidenceArticles.filter(a => a.category === cat);
export const getCategories = () => [
  { id: 'teratologie', emoji: '🧬', label: { ro: 'Teratologie', en: 'Teratology' } },
  { id: 'expuneri', emoji: '💊', label: { ro: 'Expuneri', en: 'Exposures' } },
  { id: 'sarcina', emoji: '🤰', label: { ro: 'Sarcină', en: 'Pregnancy' } },
  { id: 'alaptare', emoji: '🍼', label: { ro: 'Alăptare', en: 'Breastfeeding' } }
];

// Metadata
export const evidenceLibraryMeta = {
  totalArticles: evidenceArticles.length,
  categories: getCategories(),
  lastUpdated: '2026-03-26'
};
