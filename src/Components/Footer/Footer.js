import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        {/* aca deberian ir los social icons */}
      </div>
      <p>Rick & Morty, copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
