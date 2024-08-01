import React from "react";
import styles from "./About.module.scss";
import Dobby from "../../assets/images/Dobby.jpeg";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Me</h1>
      <p>
        I am Florencia Stabilini, a web developer with experience in React and
        other modern technologies. This Rick & Morty project was created to
        learn and practice web application development with external APIs.
      </p>
      <h1>About the Project</h1>
      <p>
        This project uses the Rick & Morty API to display information about the
        characters from the series. It includes features like page navigation, a
        contact form, and a detailed page for each character.
      </p>
      <img src={Dobby} alt="Dobby" style={{ width: "500px", height: "auto" }} />
    </div>
  );
}
