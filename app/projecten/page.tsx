import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "./Projecten.module.css"; 

const recenteThumbnails = [
  "/images/mooiste-projecten/Instituut-af1.JPG",
  "/images/mooiste-projecten/Objectkast-resultaat.png",
  "/images/mooiste-projecten/Keuken-Dorien-na.png",
];

const verledenThumbnails = [
  "/images/mooiste-projecten/Kantoor-na1.png",
  "/images/mooiste-projecten/Man-cave-na1.png",
  "/images/mooiste-projecten/Badkamer-na.png",
];

const rendersThumbnails = [
  "/images/renders/Schoonheidsinstituut-Render1.png",
  "/images/renders/Schoonheidsinstituut-Render2.png",
  "/images/renders/Woonkamer-Render.png",
];

export default function Projecten() {
  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px",
        }}
      >

        <div className={styles.grid}>
          <Link href="/projecten/Recente-projecten" className={styles.card}>
            <div className={styles.thumbRow}>
              {recenteThumbnails.map((src, idx) => (
                <img key={idx} src={src} className={styles.thumb} alt="" />
              ))}
            </div>
            Recente projecten
          </Link>

          <Link href="/projecten/Projecten-verleden" className={styles.card}>
            <div className={styles.thumbRow}>
              {verledenThumbnails.map((src, idx) => (
                <img key={idx} src={src} className={styles.thumb} alt="" />
              ))}
            </div>
            Projecten uit het verleden
          </Link>

          <Link
            href="/projecten/Renders"
            className={styles.card + " " + styles.renders}
          >
            <div className={styles.thumbRow}>
              {rendersThumbnails.map((src, idx) => (
                <img key={idx} src={src} className={styles.thumb} alt="" />
              ))}
            </div>
            Renders
          </Link>
        </div>
      </main>
    </>
  );
}