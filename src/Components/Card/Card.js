import React from "react";
import styles from "./Card.module.scss";

export default function Card({ name, image }) {
  return (
    <div className={styles.characterCard}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}
