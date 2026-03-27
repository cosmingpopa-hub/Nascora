export const metadata = {
  title: "Privacy Policy — NASCORA",
};

export default function Privacy() {
  const s = {
    maxWidth: 720,
    margin: "0 auto",
    padding: "60px 24px",
    fontSize: 15,
    lineHeight: 1.8,
    color: "#374151",
  };
  const h2 = {
    fontSize: 22,
    fontWeight: 700,
    color: "#0D1B2A",
    margin: "32px 0 12px",
  };

  return (
    <div style={s}>
      <a
        href="/"
        style={{
          fontSize: 13,
          color: "#5FA8D3",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: 16,
        }}
      >
        &larr; Back to NASCORA
      </a>

      <h1
        style={{
          fontSize: 32,
          fontWeight: 800,
          color: "#0D1B2A",
          margin: "24px 0 8px",
        }}
      >
        Privacy Policy
      </h1>
      <p style={{ color: "#9CA3AF", fontSize: 13 }}>
        Last updated: March 2026
      </p>

      <h2 style={h2}>1. Data controller</h2>
      <p>
        NASCORA is operated by Dev AI LTD, a company registered in Bulgaria
        (UIC/VAT 208553841), with registered address at 1 Bogdan Voyvoda St.,
        7002 Ruse, Bulgaria. For any privacy-related questions, you can contact
        us at contact@devaieood.com.
      </p>

      <h2 style={h2}>2. What data we process</h2>
      <p>
        When you use the public NASCORA website, we may process limited
        technical data such as IP address, browser type, device information and
        basic usage logs in order to maintain security and performance of the
        service.
      </p>
      <p>
        When you join the waitlist or contact us, we may process the information
        you provide (such as name, email address, role, organisation and
        message) in order to respond to your request and keep you informed about
        NASCORA.
      </p>

      <h2 style={h2}>3. Risk Checker and sensitive data</h2>
      <p>
        The Risk Checker is designed to process pregnancy-related and medical
        inputs entirely on your device (client-side). These inputs are not sent
        to our servers and are not stored by Dev AI LTD.
      </p>
      <p>
        You remain responsible for using the Risk Checker in a private
        environment and for protecting the confidentiality of information
        entered on your device.
      </p>

      <h2 style={h2}>4. Legal bases (GDPR)</h2>
      <p>Depending on the context, we rely on the following legal bases:</p>
      <ul>
        <li>
          Legitimate interests to operate, secure and improve the website.
        </li>
        <li>
          Your consent when you subscribe to the waitlist or marketing
          communications.
        </li>
        <li>
          Compliance with legal obligations where applicable (for example,
          record-keeping or responding to authorities).
        </li>
      </ul>

      <h2 style={h2}>5. Cookies and analytics</h2>
      <p>
        NASCORA may use strictly necessary cookies to ensure basic
        functionality, such as load balancing and security. We may also use
        privacy-friendly analytics tools to understand aggregate usage patterns
        and improve the product. Where required by law, we will request your
        consent before setting non-essential cookies.
      </p>

      <h2 style={h2}>6. Data retention</h2>
      <p>
        We keep contact and waitlist information only for as long as necessary
        to fulfil the purposes for which it was collected or as required by
        applicable law. Technical logs may be kept for a limited period to
        maintain security and debug issues.
      </p>

      <h2 style={h2}>7. Data sharing</h2>
      <p>
        We do not sell your personal data. We may share limited data with
        trusted service providers (for example, hosting, email delivery,
        analytics) strictly for the purpose of operating NASCORA, under
        appropriate data protection agreements.
      </p>
      <p>
        We may also disclose information if required by law, court order or
        competent authorities, or in the context of a merger, acquisition or
        similar corporate event involving Dev AI LTD.
      </p>

      <h2 style={h2}>8. International transfers</h2>
      <p>
        If personal data is transferred outside the European Economic Area, we
        will take appropriate safeguards such as Standard Contractual Clauses
        or equivalent mechanisms to ensure an adequate level of protection.
      </p>

      <h2 style={h2}>9. Your rights</h2>
      <p>
        Under the GDPR, you may have the right to access, rectify or erase your
        personal data, to restrict or object to processing, and to data
        portability, subject to conditions and limitations. You also have the
        right to lodge a complaint with a competent data protection authority.
      </p>
      <p>
        To exercise your rights, please contact us at
        contact@devaieood.com and we will respond in accordance with applicable
        law.
      </p>

      <h2 style={h2}>10. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices, technologies or legal requirements. Material changes
        will be indicated by updating the “Last updated” date and, where
        appropriate, communicated more prominently.
      </p>
    </div>
  );
}
