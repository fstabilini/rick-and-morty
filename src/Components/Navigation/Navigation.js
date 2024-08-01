import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
