import React from "react";
import Link from "next/link";

const Footer: React.FC = () => (
  <footer
    style={{
      fontSize: "0.85rem",
      color: "#888",
      textAlign: "center",
      padding: "16px 0",
      background: "#f7f7f7",
      borderTop: "1px solid #eee",
      marginTop: "40px",
    }}
  >
    <div>
      &copy; 2026 Interieurarchitecte Corinne Bock &mdash;{" "}
      <Link href="/privacy-policy" style={{ color: "#888", textDecoration: "underline" }}>
        Privacybeleid
      </Link>
    </div>
  </footer>
);

export default Footer;