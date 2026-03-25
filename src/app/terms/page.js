export const metadata = { title: "Terms & Conditions \u2014 NASCORA" };

export default function Terms() {
  const s = { maxWidth: 720, margin: "0 auto", padding: "60px 24px", fontSize: 15, lineHeight: 1.8, color: "#374151" };
  const h2 = { fontSize: 22, fontWeight: 700, color: "#0D1B2A", margin: "32px 0 12px" };
  return (
    <div style={s}>
      <a href="/" style={{ fontSize: 13, color: "#5FA8D3", textDecoration: "none" }}>&larr; Back to NASCORA</a>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: "#0D1B2A", margin: "24px 0 8px" }}>Terms & Conditions</h1>
      <p style={{ color: "#9CA3AF", fontSize: 13 }}>Last updated: March 2026</p>

      <h2 style={h2}>1. Acceptance of Terms</h2>
      <p>By accessing or using NASCORA (nascora.com), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the platform.</p>

      <h2 style={h2}>2. Medical Disclaimer</h2>
      <p><strong>NASCORA DOES NOT PROVIDE MEDICAL ADVICE.</strong> All information provided through the Risk Checker, Evidence Library, and any other feature is for educational and informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician, OB-GYN, or other qualified healthcare provider with any questions regarding medications, supplements, or exposures during pregnancy. Never disregard professional medical advice or delay seeking it because of something you read on NASCORA.</p>

      <h2 style={h2}>3. Nature of the service</h2>
      <p>NASCORA is a teratology education platform that provides evidence-based information about the potential risks of various substances during pregnancy. Risk assessments are based on published peer-reviewed literature and are presented as general educational summaries, not personalized medical recommendations. NASCORA is not a medical device under EU MDR 2017/745 or FDA classification.</p>

      <h2 style={h2}>4. Accuracy of information</h2>
      <p>While we strive to provide accurate, up-to-date information sourced from peer-reviewed literature, we cannot guarantee that all information is complete, current, or error-free. Medical knowledge evolves continuously, and information that was accurate at the time of publication may become outdated. Users should always verify information with their healthcare provider.</p>

      <h2 style={h2}>5. Limitation of liability</h2>
      <p>To the maximum extent permitted by law, Dev AI LTD and NASCORA shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of or reliance on information provided through the platform. This includes, but is not limited to, damages arising from medical decisions made based on information from NASCORA.</p>

      <h2 style={h2}>6. User responsibilities</h2>
      <p>You agree to: use NASCORA for informational purposes only, consult qualified healthcare professionals before making medical decisions, not rely solely on NASCORA for pregnancy-related medical decisions, and provide accurate information when registering for the waitlist.</p>

      <h2 style={h2}>7. Intellectual property</h2>
      <p>All content on NASCORA, including text, graphics, logos, and software, is the property of Dev AI LTD and is protected by copyright and trademark laws. The NASCORA name, logo, and tagline &quot;Born safe. Born aware.&quot; are trademarks of Dev AI LTD.</p>

      <h2 style={h2}>8. Governing law</h2>
      <p>These Terms shall be governed by and construed in accordance with the laws of Bulgaria and the European Union. Any disputes shall be subject to the exclusive jurisdiction of the courts of Sofia, Bulgaria.</p>

      <h2 style={h2}>9. Changes to terms</h2>
      <p>We reserve the right to modify these terms at any time. Material changes will be communicated to registered users via email. Continued use after changes constitutes acceptance.</p>

      <h2 style={h2}>10. Contact</h2>
      <p>For questions about these Terms, contact us at legal@nascora.com.</p>
    </div>
  );
}
