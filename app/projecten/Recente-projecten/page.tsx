import PhotoCarousel, { BlurredImageWithLabel } from "../../components/PhotoCarousel";
import Navbar from "../../components/Navbar";
import Link from "next/link";

const brown = "#2C1A0B";

export default function Projecten() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: 32 }}>

        {/* Keuken */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 600, marginTop: 30 }}>Keuken</h2>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 400, marginBottom: 30 }}>
            Totaalrenovatie van een keuken, gebaseerd op realistische 3D-renders. Elke beslissing, van indeling tot detaillering, is afgestemd op functionaliteit, esthetiek en harmonie met de rest van het interieur. De gekozen materialen, kwartsiet (Cristallo Patagonia) en walnootenhout, geven de ruimte een tijdloze en warme uitstraling, verfijnd afgewerkt met gouden details. 
          </h3>
          <PhotoCarousel
            images={[
              <BlurredImageWithLabel
                key="blurred-keuken-voor"
                src="/images/Keukens/Keuken-Dorien-voor.png"
                label="Voor"
              />,
              "/images/Keukens/Keuken-Dorien-voor.png",
              <BlurredImageWithLabel
                key="blurred-keuken-afbraak"
                src="/images/Keukens/Keuken-Dorien-tijdens.png"
                label="Afbraak"
              />,
              "/images/Keukens/Keuken-Dorien-tijdens.png",
              <BlurredImageWithLabel
                key="blurred-keuken-render"
                src="/images/Keukens/Keuken-render.png"
                label="Render"
              />,
              "/images/Keukens/Keuken-render.png",
              <BlurredImageWithLabel
                key="blurred-keuken-resultaat"
                src="/images/Keukens/Keuken-Dorien.png"
                label="Resultaat"
              />,
              "/images/Keukens/Keuken-Dorien.png",
              "/images/Keukens/Keuken-Dorien-Lavabo.png"
            ]}
          />
        </section>


        {/* Badkamer Dorien */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 600, marginTop: 30 }}>Badkamer</h2>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 400, marginBottom: 30 }}>
            Totaalrenovatie van een badkamer, gebaseerd op realistische 3D-renders. Elke beslissing, van indeling tot detaillering, is afgestemd op functionaliteit, esthetiek en harmonie met de rest van het interieur. De gekozen materialen, kwartsiet (Cristallo Patagonia) en walnootenhout, geven de ruimte een tijdloze en warme uitstraling, verfijnd afgewerkt met gouden details. 
          </h3>
          <PhotoCarousel
            images={[
              <BlurredImageWithLabel
                key="blurred-badkamer-voor"
                src="/images/BadkamerDorien/Badkamer-Dorien-voor.png"
                label="Voor"
              />,
              "/images/BadkamerDorien/Badkamer-Dorien-voor.png",
              <BlurredImageWithLabel
                key="blurred-badkamer-afbraak"
                src="/images/BadkamerDorien/Badkamer-Dorien-afbraak.png"
                label="Afbraak"
              />,
              "/images/BadkamerDorien/Badkamer-Dorien-afbraak.png",
              <BlurredImageWithLabel
                key="blurred-badkamer-tijdens"
                src="/images/BadkamerDorien/Badkamer-Dorien-tijdens1.HEIC"
                label="Tijdens"
              />,
              "/images/BadkamerDorien/Badkamer-Dorien-tijdens1.png",
              "/images/BadkamerDorien/Badkamer-Dorien-tijdens2.JPG",
              "/images/BadkamerDorien/Badkamer-Dorien-tijdens3.png",
              "/images/BadkamerDorien/Badkamer-Dorien-tijdens4.png",
            ]}
          />
        </section>



        {/* Aanbouw Kelly */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 600, marginTop: 30 }}>Aanbouw</h2>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 400, marginBottom: 30 }}>
            Uitbreiding van een woning met bouwaanvraag, waarbij het bestaande open terras werd uitgebroken en vervangen door een ecologische aanbouw in houtskeletbouw en Wadi. 
          </h3>
          <PhotoCarousel
            images={[
              <BlurredImageWithLabel
                key="blurred-aanbouw"
                src="/images/AanbouwKelly/Aanbouw-Kelly-voor.png"
                label="Voor"
              />,
              "/images/AanbouwKelly/Aanbouw-Kelly-voor.png",
              <BlurredImageWithLabel
                key="blurred-aanbouw"
                src="/images/AanbouwKelly/Aanbouw-Kelly-Houtskelet.png"
                label="Tijdens"
              />,            
              "/images/AanbouwKelly/Aanbouw-Kelly-Houtskelet.png",
              "/images/AanbouwKelly/Aanbouw-Kelly-Isolatie.png",
              "/images/AanbouwKelly/Aanbouw-Kelly-Na.png"
            ]}
          />
        </section> 
     
        {/* Objectkast */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 600, marginTop: 30 }}>Objectkast</h2>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 400, marginBottom: 30 }}>
            Ontwerp en realisatie van een op maat gemaakte objectkast in samenwerking met schrijnwerkerij Van De Weerd & Zoon (Lier). 
          </h3>
          <PhotoCarousel
            images={[
              <BlurredImageWithLabel
                key="blurred-objectkast-voor"
                src="/images/Objectkast/Objectkast-voor.png"
                label="Voor"
              />,
              "/images/Objectkast/Objectkast-voor.png",
              <BlurredImageWithLabel
                key="blurred-objectkast-schrijnwerken"
                src="/images/Objectkast/Objectkast-atelier.png"
                label="Schrijnwerken"
              />,
              "/images/Objectkast/Objectkast-atelier.png",
              "/images/Objectkast/Objectkast-ruw.png",
              "/images/Objectkast/Objectkast-en-kasten.png",
              <BlurredImageWithLabel
                key="blurred-objectkast-resultaat"
                src="/images/Objectkast/Objectkast-resultaat.png"
                label="Resultaat"
              />,
              "/images/Objectkast/Objectkast-resultaat.png"
            ]}
          />
        </section>

        {/*Instituut Kelly Rochtus*/}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 600, marginTop: 30 }}>Instituut Kelly Rochtus</h2>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 400, marginBottom: 30 }}>
            Renovatie van een schoonheidsinstituut om optimaal te voldoen aan de behoeften van klanten en medewerkers met oog voor de nodige technische aanpassingen, functionaliteit en privacy.
          </h3>
          <PhotoCarousel
            images={[
              <BlurredImageWithLabel
                key="blurred-schoonheidsinstituut-render"
                src="/images/Schoonheidsinstituut/Schoonheidsinstituut-render1.png"
                label="Render"
              />,
              "/images/Schoonheidsinstituut/Schoonheidsinstituut-Render1.png",
              "/images/Schoonheidsinstituut/Schoonheidsinstituut-Render2.png",
              <BlurredImageWithLabel
                key="blurred-schoonheidsinstituut-na"
                src="/images/Schoonheidsinstituut/Instituut-af1.JPG"
                label="Resultaat"
              />,
              "/images/Schoonheidsinstituut/Instituut-af1.JPG",
              "/images/Schoonheidsinstituut/Instituut-af2.JPG",
              "/images/Schoonheidsinstituut/Instituut-af3.JPG",
              "/images/Schoonheidsinstituut/Instituut-af4.JPG",
              "/images/Schoonheidsinstituut/Instituut-af5.JPG"
            ]}
          />
        </section>

        {/*Badkamer Brenda*/}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 600, marginTop: 30 }}>Badkamer</h2>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 400, marginBottom: 30 }}>
            Totaalrenovatie van een badkamer in AquaSensa, eiken look en details in Anodic Brown. 
          </h3>
          <PhotoCarousel
            images={[
              <BlurredImageWithLabel
                key="blurred-badkamer-voor"
                src="/images/BadkamerBrenda/BadkamerBrenda-voor1.png"
                label="Voor"
              />,
              "/images/BadkamerBrenda/BadkamerBrenda-voor1.png",
              "/images/BadkamerBrenda/BadkamerBrenda-voor2.png",
              <BlurredImageWithLabel
                key="blurred-badkamer-tijdens"
                src="/images/BadkamerBrenda/BadkamerBrenda-tijdens1.png"
                label="Tijdens"
              />,
              "/images/BadkamerBrenda/BadkamerBrenda-tijdens1.png",
              "/images/BadkamerBrenda/BadkamerBrenda-tijdens2.png",
              <BlurredImageWithLabel
                key="blurred-badkamer-na"
                src="/images/BadkamerBrenda/BadkamerBrenda-na1.png"
                label="Na"
              />,

              "/images/BadkamerBrenda/BadkamerBrenda-na1.png",
              "/images/BadkamerBrenda/BadkamerBrenda-na2.png"
            ]}
          />
        </section>



        {/* Over mij knop */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
          <Link
            href="/over-mij"
            style={{
              background: brown,
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.12rem",
              padding: "14px 34px",
              borderRadius: 28,
              textDecoration: "none",
              border: "none",
              boxShadow: "0 2px 14px #0003",
              cursor: "pointer",
              letterSpacing: "0.03em",
              marginTop: 10,
              display: "inline-block",
              transition: "background 0.2s, transform 0.2s",
            }}
          >
            Contact en diensten
          </Link>
        </div>
      </main>
    </>
  );
}