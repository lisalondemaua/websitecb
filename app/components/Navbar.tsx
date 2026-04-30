"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* Spacer */}
      <div className={styles.mobileSpacer} />

      <nav className={styles.navbar}>
        <div className={styles.brand}>
          <Image
            src="/images/logo.jpeg"
            alt="logo"
            width={120}
            height={120}
            className={styles.logo}
            priority
          />
          <span className={styles.siteTitle}>
            Interieurarchitecte Corinne Bock
          </span>
        </div>

        {/* Desktop links */}
        <div className={styles.navLinksDesktop}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/projecten" className={styles.navLink}>
            Projecten
          </Link>
          <Link href="/over-mij" className={styles.navLink}>
            Over mij
          </Link>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          className={styles.hamburger}
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${open ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.sidebarHeader}>
          <span className={styles.sidebarTitle}>Menu</span>

          <button
            className={styles.closeBtn}
            onClick={() => setOpen(false)}
            aria-label="Sluit menu"
          >
            ✕
          </button>
        </div>

        <nav className={styles.sidebarNav}>
          <Link href="/" onClick={() => setOpen(false)} className={styles.sidebarLink}>
            Home
          </Link>
          <Link href="/projecten" onClick={() => setOpen(false)} className={styles.sidebarLink}>
            Projecten
          </Link>
          <Link href="/over-mij" onClick={() => setOpen(false)} className={styles.sidebarLink}>
            Over mij
          </Link>
        </nav>
      </aside>
    </>
  );
}