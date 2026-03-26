import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata = {
  metadataBase: new URL('https://www.nascora.health'),
  title: "NASCORA — Siguranța în sarcină | Pregnancy Safety",
  description: "Verifică dacă medicamentele, suplimentele și expunerile sunt sigure în sarcină. Evaluare a riscului bazată pe dovezi clinice. Născut sigur. Născut informat.",
  keywords: "siguranța în sarcină, medicamente sarcină, verificator teratogeni, prevenție malformații, pregnancy safety, teratogen checker",
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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NASCORA — Platforma de prevenție teratologică',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NASCORA — Siguranța în sarcină',
    description: 'Verifică orice medicament sau supliment pentru siguranța în sarcină.',
    images: ['/og-image.png'],
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
      <body className={inter.className} style={{ margin: 0, padding: 0, background: "#FAFBFC" }}>
        {children}
      </body>
    </html>
  );
}
