import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin", "latin-ext"] });

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.nascora.health/#website',
      url: 'https://www.nascora.health',
      name: 'NASCORA',
      description: 'Platforma de preventie teratologica. Verifica siguranta medicamentelor in sarcina.',
      inLanguage: ['ro', 'en'],
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.nascora.health/#organization',
      name: 'NASCORA',
      url: 'https://www.nascora.health',
      description: 'Platforma de preventie teratologica construita de cercetatori in embriologie si specialisti OB-GYN.',
    },
    {
      '@type': 'MedicalWebPage',
      '@id': 'https://www.nascora.health/#webpage',
      url: 'https://www.nascora.health',
      name: 'NASCORA - Siguranta in sarcina | Pregnancy Safety',
      description: 'Verifica daca medicamentele, suplimentele si expunerile sunt sigure in sarcina. Evaluare a riscului bazata pe dovezi clinice.',
      inLanguage: 'ro',
      medicalAudience: [
        { '@type': 'MedicalAudience', audienceType: 'Patient' },
        { '@type': 'MedicalAudience', audienceType: 'Clinician' },
      ],
      about: {
        '@type': 'MedicalCondition',
        name: 'Teratologie - siguranta medicamentelor in sarcina',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Ce medicamente sunt sigure in sarcina?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NASCORA verifica siguranta oricarui medicament, supliment sau substanta in sarcina, bazat pe dovezi clinice si studii peer-reviewed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ce este un teratogen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un teratogen este orice substanta, agent sau factor care poate cauza malformatii congenitale la fat. NASCORA ajuta la identificarea riscurilor teratogene.',
          },
        },
        {
          '@type': 'Question',
          name: 'Cum pot preveni malformatiile congenitale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '70% din defectele de tub neural pot fi prevenite cu acid folic. NASCORA ofera ghiduri de preventie teratologica si verificare a substantelor.',
          },
        },
      ],
    },
  ],
};

export const metadata = {
  metadataBase: new URL('https://www.nascora.health'),
  title: 'NASCORA — Siguranța în sarcină | Pregnancy Safety',
  description: 'Verifică dacă medicamentele, suplimentele și expunerile sunt sigure în sarcină. Evaluare a riscului bazată pe dovezi clinice. Născut sigur. Născut informat.',
  keywords: 'siguranța în sarcină, medicamente sarcină, verificator teratogeni, prevenție malformații, pregnancy safety, teratogen checker',
  alternates: {
    canonical: 'https://www.nascora.health',
  },
  openGraph: {
    title: 'NASCORA — Siguranța în sarcină',
    description: 'Verifică orice medicament, supliment sau expunere pentru siguranța în sarcină. Bazat pe dovezi clinice.',
    url: 'https://www.nascora.health',
    siteName: 'NASCORA',
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NASCORA — Siguranța în sarcină',
    description: 'Verifică orice medicament sau supliment pentru siguranța în sarcină.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className} style={{ margin: 0, padding: 0, background: "#FAFBFC" }}>
        {children}
      </body>
    </html>
  );
}
