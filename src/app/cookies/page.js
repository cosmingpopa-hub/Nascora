export const metadata = {
  title: "Cookie Policy — NASCORA",
};

export default function Cookies() {
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
        Cookie Policy
      </h1>
      <p style={{ color: "#9CA3AF", fontSize: 13 }}>
        Last updated: March 2026
      </p>

      <h2 style={h2}>1. What are cookies?</h2>
      <p>
        Cookies are small text files that are stored on your device when you
        visit a website. They allow the site to recognise your browser, remember
        certain information and help us provide a more secure and reliable
        experience.
      </p>

      <h2 style={h2}>2. How NASCORA uses cookies</h2>
      <p>
        NASCORA uses cookies and similar technologies mainly to:
      </p>
      <ul>
        <li>Ensure the basic technical functioning of the site.</li>
        <li>Maintain security and prevent abuse.</li>
        <li>
          Understand aggregate usage patterns (for example, which pages are
          visited most) to improve the product.
        </li>
      </ul>

      <h2 style={h2}>3. Types of cookies</h2>
      <p>We may use the following categories:</p>
      <ul>
        <li>
          <strong>Strictly necessary cookies</strong> – required for the site to
          function (for example, load balancing, basic security).
        </li>
        <li>
          <strong>Performance / analytics cookies</strong> – help us understand
          how visitors use the site in aggregate, so we can improve content and
          usability.
        </li>
      </ul>
      <p>
        We do not use cookies to display third-party advertising or to sell your
        data to advertisers.
      </p>

      <h2 style={h2}>4. Third-party services</h2>
      <p>
        Some cookies may be set by third-party providers that help us deliver
        the service, such as analytics or infrastructure providers. These
        providers act as processors or independent controllers under applicable
        law, and we aim to work only with reputable services that offer adequate
        data protection safeguards.
      </p>

      <h2 style={h2}>5. Consent and browser settings</h2>
      <p>
        Where required by law, we will ask for your consent before setting
        non-essential cookies. You can withdraw or modify your consent at any
        time using your browser settings or, where available, through the
        cookie preferences banner.
      </p>
      <p>
        Most browsers allow you to block or delete cookies through their settings.
        However, blocking certain cookies may impact the functionality or
        performance of the site.
      </p>

      <h2 style={h2}>6. Risk Checker and cookies</h2>
      <p>
        The Risk Checker processes pregnancy-related inputs locally in your
        browser and, by design, does not send those inputs to our servers. Any
        cookies used for the Risk Checker are limited to ensuring technical
        functionality and security of the overall service, not to store your
        medical inputs.
      </p>

      <h2 style={h2}>7. Updates to this Cookie Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in
        our use of cookies or in applicable regulations. Material changes will
        be indicated by updating the “Last updated” date and, where
        appropriate, communicated more prominently.
      </p>

      <h2 style={h2}>8. Contact</h2>
      <p>
        If you have any questions about our use of cookies, you can contact us
        at contact@devaieood.com.
      </p>
    </div>
  );
}
