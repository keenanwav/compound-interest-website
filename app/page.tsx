export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f6f3",
        fontFamily: "Inter, -apple-system, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        color: "#1a1a1a",
      }}
    >
      <div
        style={{
          background: "#fff",
          border: "1px solid #e3e2de",
          borderRadius: "12px",
          padding: "32px 40px",
          textAlign: "center",
          maxWidth: "440px",
          boxShadow: "0 1px 3px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.06)",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            background: "#2f3437",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
            <polyline points="2,11 6,6 9,9 14,3" />
          </svg>
        </div>
        <h1
          style={{
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: "8px",
          }}
        >
          Compound Interest
        </h1>
        <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.6, marginBottom: "24px" }}>
          Your landing page is ready at{" "}
          <code
            style={{
              background: "#ededec",
              borderRadius: "4px",
              padding: "2px 6px",
              fontSize: "13px",
            }}
          >
            /index.html
          </code>
        </p>
        <a
          href="/index.html"
          style={{
            display: "inline-block",
            background: "#2f3437",
            color: "#fff",
            padding: "10px 24px",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "14px",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          View Landing Page →
        </a>
      </div>
    </main>
  );
}
