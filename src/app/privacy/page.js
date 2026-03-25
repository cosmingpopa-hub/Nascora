export const metadata = { title: "Privacy Policy \u2014 NASCORA" };

export default function Privacy() {
  const s = { maxWidth: 720, margin: "0 auto", padding: "60px 24px", fontSize: 15, lineHeight: 1.8, color: "#374151" };
  const h2 = { fontSize: 22, fontWeight: 700, color: "#0D1B2A", margin: "32px 0 12px" };
  const h3 = { fontSize: 18, fontWeight: 600, color: "#1B4965", margin: "24px 0 8px" };
  return (
    <div style={s}>
      <a href="/" style={{ fontSize: 13, color: "#5FA8D3", textDecoration: "none" }}>&larr; Back to NASCORA</a>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: "#0D1B2A", margin: "24px 0 8px" }}>Privacy Policy</h1>
      <p style={{ color: "#9CA3AF", fontSize: 13 }}>Last updated: March 2026</p>

      <h2 style={h2}>1. Who we are</h2>
      <p>NASCORA is operated by Dev AI LTD, a company registered in Bulgaria. We are committed to protecting your personal data in accordance with the EU General Data Protection Regulation (GDPR), Romanian ANSPDCP guidelines, and applicable data protection laws.</p>
      <p><strong>Data Controller:</strong> Dev AI LTD<br/><strong>Contact:</strong> privacy@nascora.com</p>

      <h2 style={h2}>2. What data we collect</h2>
      <h3 style={h3}>2.1 Data you provide</h3>
      <p><strong>Waitlist registration:</strong> email address only. <strong>Risk Checker searches:</strong> we do NOT store your search queries. All risk assessments are performed client-side in your browser. No health data is transmitted to our servers.</p>
      <h3 style={h3}>2.2 Automatically collected data</h3>
      <p>If you accept analytics cookies: anonymized page views, browser type, country (via Plausible Analytics \u2014 no personal identifiers, no cookies, GDPR-compliant by design). If you decline cookies: zero tracking data is collected.</p>

      <h2 style={h2}>3. How we use your data</h2>
      <p>Email addresses collected via the waitlist are used exclusively to notify you about NASCORA launch updates. We never sell, share, or rent your email address to third parties. We never use your data for advertising purposes.</p>

      <h2 style={h2}>4. Legal basis for processing (GDPR Art. 6)</h2>
      <p><strong>Consent (Art. 6(1)(a)):</strong> Waitlist registration, analytics cookies. <strong>Legitimate interest (Art. 6(1)(f)):</strong> Website security, fraud prevention.</p>

      <h2 style={h2}>5. Data retention</h2>
      <p>Waitlist emails: retained until you unsubscribe or request deletion. Analytics data: automatically deleted after 24 months. We do not store any health-related data.</p>

      <h2 style={h2}>6. Your rights under GDPR</h2>
      <p>You have the right to: access your personal data, rectify inaccurate data, request erasure (&quot;right to be forgotten&quot;), restrict processing, data portability, object to processing, and withdraw consent at any time. To exercise these rights, email privacy@nascora.com. We will respond within 30 days.</p>

      <h2 style={h2}>7. Data transfers</h2>
      <p>Your data may be processed by service providers in the EU and US (Vercel, Plausible). All transfers are protected by Standard Contractual Clauses (SCCs) or adequacy decisions under GDPR.</p>

      <h2 style={h2}>8. Security</h2>
      <p>We implement appropriate technical and organizational measures including HTTPS encryption, access controls, and regular security reviews.</p>

      <h2 style={h2}>9. Children</h2>
      <p>NASCORA is not directed at individuals under 16 years of age. We do not knowingly collect data from children.</p>

      <h2 style={h2}>10. Supervisory authority</h2>
      <p>If you believe your data protection rights have been violated, you have the right to lodge a complaint with your national supervisory authority. In Romania: ANSPDCP (Autoritatea Na\u021bional\u0103 de Supraveghere a Prelucr\u0103rii Datelor cu Caracter Personal), anspdcp.ro.</p>

      <h2 style={h2}>11. Changes</h2>
      <p>We may update this policy from time to time. Material changes will be communicated via email to registered users.</p>
    </div>
  );
}
