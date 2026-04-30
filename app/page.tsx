// pages/index.tsx
import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import PhotoCarousel from "./components/PhotoCarousel";
import Footer from "./components/Footer"; 
import styles from "./components/Home.module.css"; 

const diensten = [
  "Renovatie",
  "Totaalrenovatie",
  "Verbouwing", 
  "Inrichting",
  "Renders",
];

const images = [
  "/images/mooiste-projecten/Keuken-Dorien-na.png",
  "/images/mooiste-projecten/Badkamer-na.png",
  "/images/mooiste-projecten/Man-cave-na2.png",
  "/images/mooiste-projecten/Instituut-af1.JPG",
  "/images/mooiste-projecten/Objectkast-resultaat.png",
];

const Home: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <main className={styles.main}>
        {/* Diensten blokjes */}
        <div className={styles.dienstenBlokjes}>
          {diensten.map((dienst) => (
            <div key={dienst} className={styles.dienst}>
              {dienst}
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className={styles.carouselWrapper}>
          <PhotoCarousel images={images} />
        </div>

        {/* Over mij knop */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
          <Link href="/over-mij" className={styles.overMijKnop}>
            Contact en diensten
          </Link>
        </div>
      </main>
      <Footer /> {/* Footer onderaan */}
    </div>
  );
};

export default Home;
