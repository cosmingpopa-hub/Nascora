import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata = {
  title: "NASCORA \u2014 Siguran\u021Ba \u00EEn sarcin\u0103 | Pregnancy Safety",
  description: "Verific\u0103 dac\u0103 medicamentele, suplimentele \u0219i expunerile sunt sigure \u00EEn sarcin\u0103. Evaluare a riscului bazat\u0103 pe dovezi clinice. N\u0103scut sigur. N\u0103scut informat.",
  keywords: "siguran\u021Ba \u00EEn sarcin\u0103, medicamente sarcin\u0103, verificator teratogeni, preven\u021Bie malforma\u021Bii, pregnancy safety, teratogen checker",
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
