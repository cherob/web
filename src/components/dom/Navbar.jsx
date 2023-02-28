import React, { useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    console.log("menu clicked");
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.navbarBrand} href="/">
        Drumni.com
      </a>
      <div className={`${styles.hamburger} ${menuOpen ? styles.show : null}`} onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        className={
          menuOpen ? `${styles.navbarNav} ${styles.show}` : styles.navbarNav
        }
      >
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/music">
            Music
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/code">
            Code
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/gallery">
            Gallery
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/about">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;