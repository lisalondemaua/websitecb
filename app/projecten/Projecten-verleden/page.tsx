import PhotoCarousel, { BlurredImageWithLabel } from "../../components/PhotoCarousel";
import Navbar from "../../components/Navbar";

export default function Projecten() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: 32 }}>


        {/* Aanbouw 
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 600 }}>Aanbouw</h2>
          <h2 style={{ fontSize: "1rem", fontWeight: 400, marginBottom: 16 }}>
            Aanbouw aan een woning, waarbij de bestaande structuur naadloos wordt geïntegreerd met de nieuwe toevoeging, met aandacht voor esthetiek, functionaliteit en harmonie tussen oud en nieuw.
          </h2>
          <PhotoCarousel
            images={[
              <BlurredImageWithLabel
                key="blur-aanbouw-voor"
                src="/images/Aanbouw/Aanbouw-voor.png"
                label="Voor"
              />,
              "/images/Aanbouw/Aanbouw-voor.png",
              <BlurredImageWithLabel
                key="blur-aanbouw-na"
                src="/images/Aanbouw/Aanbouw-na.png"
                label="Resultaat"
              />,
              "/images/Aanbouw/Aanbouw-na.png",
            ]}
          />
        </section>*/}

      
        {/* Tandartspraktijk */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 600 }}>Tandartspraktijk</h2>
          <h3 style={{ fontSize: "1rem", fontWeight: 400, marginBottom: 16 }}>
            Transformatie van een pand naar een moderne tandartspraktijk, met aandacht voor functionaliteit, esthetiek en patiëntcomfort.
          </h3>
          <PhotoCarousel
            images={[
              <BlurredImageWithLabel
                key="blur-tandarts-voor"
                src="/images/Tandartspraktijk/Tandartspraktijk-voor.png"
                label="Voor"
              />,
               "/images/Tandartspraktijk/Tandartspraktijk-voor.png",
              <BlurredImageWithLabel
                key="blur-tandarts-na"
                src="/images/Tandartspraktijk/Tandartspraktijk1.png"
                label="Resultaat"
              />,
              "/images/Tandartspraktijk/Tandartspraktijk1.png",
              "/images/Tandartspraktijk/Tandartspraktijk2.png",
              "/images/Tandartspraktijk/Tandartspraktijk-na1.jpeg",
              "/images/Tandartspraktijk/Tandartspraktijk-na2.jpeg",
            ]}
          />
        </section>

        {/* Badkamer */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 600 }}>Badkamer</h2>
          <h3 style={{ fontSize: "1rem", fontWeight: 400, marginBottom: 16 }}>
            Renovatie van een badkamer naar een modern design met Mortex en zwarte details.
          </h3>
          <PhotoCarousel
            images={[
              <BlurredImageWithLabel
                key="blur-badkamer-voor"
                src="/images/Badkamer/Badkamer-voor.png"
                label="Voor"
              />,
              "/images/Badkamer/Badkamer-voor.png",
              <BlurredImageWithLabel
                key="blur-badkamer-na"
                src="/images/Badkamer/Badkamer-na.png"
                label="Resultaat"
              />,
              "/images/Badkamer/Badkamer-na.png"
            ]}
          />
        </section>

        {/* Man Cave */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 600 }}>Man Cave</h2>
          <h3 style={{ fontSize: "1rem", fontWeight: 400, marginBottom: 16 }}>
            Transformatie van een terrasruimte naar een moderne en functionele man cave.
          </h3>
          <PhotoCarousel
            images={[
              <BlurredImageWithLabel
                key="blur-mancave-voor"
                src="/images/ManCave/Man-cave-voor.png"
                label="Voor"
              />,
              "/images/ManCave/Man-cave-voor.png",
              <BlurredImageWithLabel
                key="blur-mancave-na1"
                src="/images/ManCave/Man-cave-na1.png"
                label="Resultaat"
              />,
              "/images/ManCave/Man-cave-na1.png",
              "/images/ManCave/Man-cave-na2.png"
            ]}
          />
        </section>

        {/* Dak- en zolder renovaties */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 600 }}>Dak- en zolder renovaties</h2>
          <h3 style={{ fontSize: "1rem", fontWeight: 400, marginBottom: 16 }}>
            Transformatie van een dak en zolder naar een multi-functionele ruimte.
          </h3>
          
          <PhotoCarousel
            images={[
              <BlurredImageWithLabel
                key="blur-dak-voor"
                src="/images/DakZolder/Dak-voor.png"
                label="Voor"
              />,
              "/images/DakZolder/Dak-voor.png",
              <BlurredImageWithLabel
                key="blur-dak-tijdens"
                src="/images/DakZolder/Dak-tijdens.png"
                label="Tijdens"
              />,
              "/images/DakZolder/Dak-tijdens.png",
              <BlurredImageWithLabel
                key="blur-dak-na"
                src="/images/DakZolder/Dak-na.png"
                label="Resultaat"
              />,
              "/images/DakZolder/Dak-na.png",
              "/images/DakZolder/Zolder-tijdens.png"
            ]}
          />
        </section>

        {/* Garage-Studio */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 600 }}>Garage-Studio</h2>
          <h3 style={{ fontSize: "1rem", fontWeight: 400, marginBottom: 16 }}>
            Verbouwing van een garage naar een moderne en functionele studio met tuintje.
          </h3>
          <PhotoCarousel
            images={[
              <BlurredImageWithLabel
                key="blur-garage-voor"
                src="/images/GarageStudio/Garage-voor.png"
                label="Voor"
              />,
              "/images/GarageStudio/Garage-voor.png",
              <BlurredImageWithLabel
                key="blur-garage-na"
                src="/images/GarageStudio/Garage-na.png"
                label="Resultaat"
              />,
              "/images/GarageStudio/Garage-na.png",
              <BlurredImageWithLabel
                key="blur-gevel-voor"
                src="/images/GarageStudio/Gevel-voor.png"
                label="Voor"
              />,
              "/images/GarageStudio/Gevel-voor.png",
              <BlurredImageWithLabel
                key="blur-gevel-na"
                src="/images/GarageStudio/Gevel-na.png"
                label="Resultaat"
              />,
              "/images/GarageStudio/Gevel-na.png"
            ]}
          />
        </section>

        {/* Kantoorinrichting */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 600 }}>Kantoorinrichting</h2>
          <h3 style={{ fontSize: "1rem", fontWeight: 400, marginBottom: 16 }}>
            Inrichting van een tentoonstellingsruimte naar een kantoor met moderne en functionele ruimtes. 
          </h3>
          <PhotoCarousel
            images={[
              <BlurredImageWithLabel
                key="blur-kantoor-voor"
                src="/images/Kantoorinrichting/Kantoor-voor.png"
                label="Voor"
              />,
              "/images/Kantoorinrichting/Kantoor-voor.png",
              <BlurredImageWithLabel
                key="blur-kantoor-na1"
                src="/images/Kantoorinrichting/Kantoor-na1.png"
                label="Resultaat"
              />,
              "/images/Kantoorinrichting/Kantoor-na1.png",
              "/images/Kantoorinrichting/Kantoor-na2.png"
            ]}
          />
        </section>
      </main>
    </>
  );
}