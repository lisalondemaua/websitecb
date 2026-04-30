import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />

      <main
        style={{
          maxWidth: 900,
          color: "#3d2007", 
          margin: "0 auto",
          padding: 32,
        }}
      >

        <h1 style={{ fontSize: "2.0rem", fontWeight: 520, marginBottom: 16 }}>
          Over mij
        </h1>

        {/* Beige box */}
        <div
          style={{
            background: "#f8f4f1",
            borderRadius: 16,
            padding: 24,
            marginBottom: 36,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 28,
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {/* Tekst + Contactgegevens – links */}
          <div
            style={{
              flex: 1,
              minWidth: 200,
              fontSize: "1.08rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <div>
              <strong>Ik maak van je huis je thuis, waarbij je persoonlijke smaak en levensstijl centraal staan!</strong>
              <br />
              Ik ben interieurarchitecte met een passie voor sfeervolle, warme én functionele ruimtes.
              <br />
              Door persoonlijke begeleiding, creatieve oplossingen en oog voor detail help ik u graag om van uw interieur een plek te maken waar u zich echt thuis voelt. 
              <br />
              <br />
              Heeft u vragen of wilt u een afspraak maken? Neem gerust contact met mij op!
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span>
                <strong>Telefoon:</strong>{" "}
                <a
                  href="tel:+32 496 52 22 52"
                  style={{ textDecoration: "none", color: "#2C1A0B" }} // zorgt dat link ook bruin blijft
                >
                  +32 496 52 22 52
                </a>
              </span>
              <span>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:corinne.bock@telenet.be"
                  style={{ textDecoration: "none", color: "#2C1A0B" }}
                >
                  corinne.bock@telenet.be
                </a>
              </span>
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
                width: "250px",
                height: "338px",
                objectFit: "cover",
                borderRadius: 12,
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                display: "block",
              }}
            />
          </div>
        </div>

        <h1 style={{ fontSize: "2.0rem", fontWeight: 520, marginBottom: 16 }}>
          Mijn diensten
        </h1>

        {/* --- Dienstenlijst  --- */}
        <ul style={{ fontSize: "1.1rem", lineHeight: 1.7, marginBottom: 36}}>
          <li>
            <strong>Ontwerp:</strong> Ontwerp en creatie van unieke ruimtes die zowel functioneel als esthetisch aantrekkelijk zijn
          </li>
          <li>
            <strong>Projectbegeleiding van A tot Z:</strong> Begeleiding van het project van ontwerp tot oplevering
          </li>
          <li>
            <strong>Opmeting en analyse:</strong> Opmeting en ruimteanalyse van de bestaande situatie
          </li>
          <li>
            <strong>Ontwerp:</strong> Presentatie van ontwerpvoorstellen, realistische renders, ruimteplanning en kleur- en materiaaladvies
          </li>
          <li>
            <strong>Technische tekeningen:</strong> Technische uitwerking met werktekeningen en elektriciteitsplannen
          </li>
          <li>
            <strong>Offertes:</strong> Aanvragen van offertes van aannemers en leveranciers
          </li>
          <li>
            <strong>Planning:</strong> Realistische planning, coördineren van verschillende leveranciers en installateurs en kwaliteitscontrole 
          </li>
        </ul>
        {/* --- Einde dienstenlijst --- */}
      </main>
    </div>
  );
}