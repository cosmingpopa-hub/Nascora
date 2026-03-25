export const metadata = { title: "Cookie Policy \u2014 NASCORA" };

export default function Cookies() {
  const s = { maxWidth: 720, margin: "0 auto", padding: "60px 24px", fontSize: 15, lineHeight: 1.8, color: "#374151" };
  const h2 = { fontSize: 22, fontWeight: 700, color: "#0D1B2A", margin: "32px 0 12px" };
  return (
    <div style={s}>
      <a href="/" style={{ fontSize: 13, color: "#5FA8D3", textDecoration: "none" }}>&larr; Back to NASCORA</a>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: "#0D1B2A", margin: "24px 0 8px" }}>Cookie Policy</h1>
      <p style={{ color: "#9CA3AF", fontSize: 13 }}>Last updated: March 2026</p>

      <h2 style={h2}>1. What are cookies?</h2>
      <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your experience.</p>

      <h2 style={h2}>2. How NASCORA uses cookies</h2>
      <p>NASCORA uses a minimal cookie approach. We believe in privacy by design.</p>

      <h2 style={h2}>3. Types of cookies we use</h2>

      <div style={{ background: "#F9FAFB", borderRadius: 12, padding: 20, margin: "16px 0" }}>
        <p style={{ margin: "0 0 4px", fontWeight: 600, color: "#0D1B2A" }}>Essential cookies (always active)</p>
        <p style={{ margin: 0, fontSize: 13, color: "#6B7280" }}><strong>nascora_cookie_consent:</strong> Stores your cookie preference (accepted/declined). Expires: 1 year. This cookie is necessary for the website to function and cannot be switched off.</p>
      </div>

      <div style={{ background: "#F9FAFB", borderRadius: 12, padding: 20, margin: "16px 0" }}>
        <p style={{ margin: "0 0 4px", fontWeight: 600, color: "#0D1B2A" }}>Analytics cookies (only with your consent)</p>
        <p style={{ margin: 0, fontSize: 13, color: "#6B7280" }}>If you accept cookies, we use Plausible Analytics \u2014 a privacy-focused analytics tool that does not use cookies, does not collect personal data, and is fully GDPR-compliant. No individual tracking occurs.</p>
      </div>

      <h2 style={h2}>4. Cookies we do NOT use</h2>
      <p>NASCORA does not use: advertising or marketing cookies, social media tracking cookies, third-party cookies for profiling, or any cookies that track individual behavior across websites.</p>

      <h2 style={h2}>5. Managing cookies</h2>
      <p>You can change your cookie preferences at any time by clearing your browser cookies and revisiting the site. You can also configure your browser to block cookies entirely. Note that blocking essential cookies may affect site functionality.</p>

      <h2 style={h2}>6. Contact</h2>
      <p>For questions about our cookie practices, contact us at privacy@nascora.com.</p>
    </div>
  );
}
