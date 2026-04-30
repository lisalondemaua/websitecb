import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />

      <main
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: 32,
        }}
      >
        <h1 style={{ fontSize: "2.rem", fontWeight: 700, marginBottom: 16 }}>
          Contact gegevens
        </h1>

        {/* Beige box met persoonlijke tekst, contact links en foto rechts */}
        <div
          style={{
            background: "#F5E8DA",
            borderRadius: 16,
            padding: 24,
            margin: "0 0 36px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 28,
            maxWidth: 700,
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            flexWrap: "wrap",
          }}
        >
          {/* Tekst + Contactgegevens – links */}
          <div
            style={{
              flex: 1,
              minWidth: 200,
              fontSize: "1.08rem",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <div>
              <strong>Over mij</strong>
              <br />
              Ik ben interieurarchitecte met een passie voor sfeervolle, warme én functionele ruimtes.
              <br />
              Door persoonlijke begeleiding, creatieve oplossingen en oog voor detail help ik u graag om van uw interieur een plek te maken waar u zich echt thuis voelt.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span>
                <strong>Telefoon:</strong>{" "}
                <a
                  href="tel:+32 496 52 22 52"
                  style={{ color: "#2C1A0B", textDecoration: "none" }}
                >
                  +32 496 52 22 52
                </a>
              </span>
              <span>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:corinne.bock@telenet.be"
                  style={{ color: "#2C1A0B", textDecoration: "none" }}
                >
                  corinne.bock@telenet.be
                </a>
              </span>
              {/* Optioneel: adresregel */}
              {/* <span>
                <strong>Adres:</strong> Jouwstraat 10, 1000 Brussel
              </span> */}
            </div>
          </div>

          {/* Foto rechts */}
          <div
            style={{
              flex: "0 0 200px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              minWidth: 120,
            }}
          >
            <img
              src="/images/corinne.png"
              alt="Foto Corinne"
              style={{
                width: "170px",
                height: "230px",
                objectFit: "cover",
                borderRadius: 12,
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Vraag-en-contact oproep onder de box */}
        <p style={{ fontSize: "1.2rem", marginTop: 0 }}>
          Heeft u vragen of wilt u een afspraak maken? Neem gerust contact met mij op!
        </p>
      </main>
    </div>
  );
}