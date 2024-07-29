import React from "react";
import styles from "./Home.module.scss";
import Card from "../Card/Card";

export default function Home({ data }) {
  return (
    <div className={styles.homeContainer}>
      {data.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
    </div>
  );
}

// Reemplazar este codigo de arriba por un nuevo componente que se llame Card, y pasar todo por props. El Map dejarlo. Revisar las practicas anteriores que ahi esta de esa forma.
