import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["About", "Work", "portfolio"];

  const mappedNavLinks = navLinks.map((link) => (
    <li key={link} className={styles.link}>
      <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
        {link}
      </a>
    </li>
  ));

  return (
    <>
      <nav className={styles.navBar}>
        <ul className={styles.navLinks}>
          <li className={styles.nameLogo}>
            <a href="#hero">ML.</a>
            <span className={styles.tooltip}>Home</span>
          </li>
          <div className={styles.rightLinks}>
            {mappedNavLinks}
            <li>
              <a href="#contact" className={styles.contactButton}>
                CONTACT ME
              </a>
            </li>
          </div>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? styles.barOpen1 : ""}></span>
            <span className={menuOpen ? styles.barOpen2 : ""}></span>
            <span className={menuOpen ? styles.barOpen3 : ""}></span>
          </button>
        </ul>
        {menuOpen && (
          <ul className={styles.mobileMenu}>
            {mappedNavLinks}
            <li>
              <a
                href="#contact"
                className={styles.contactButton}
                onClick={() => setMenuOpen(false)}
              >
                CONTACT ME
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}
