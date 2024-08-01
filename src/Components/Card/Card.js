import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

export default function Card({ id, name, image }) {
  return (
    <div className={styles.characterCard}>
      <Link to={`/character/${id}`}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
      </Link>
    </div>
  );
}
