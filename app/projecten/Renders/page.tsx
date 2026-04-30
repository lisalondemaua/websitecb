import Navbar from "../../components/Navbar";
import PhotoCarousel from "../../components/PhotoCarousel";

export default function Renders() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: 32 }}>
        <h1 style={{ marginBottom: 28, fontSize: 32, fontWeight: 600 }}>
          Renders
        </h1>

        <PhotoCarousel
          images={[
            "/images/Renders/Bureau-Render.png",
            "/images/Renders/Schoonheidsinstituut-Render1.png",
            "/images/Renders/Schoonheidsinstituut-Render2.png",
            "/images/Renders/Woonkamer-Lounge-Render.png",
            "/images/Renders/Woonkamer-Render.png",
          ]}
        />
      </main>
    </>
  );
}