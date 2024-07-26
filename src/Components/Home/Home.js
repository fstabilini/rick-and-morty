import React from "react";
import "./Home.scss";

export default function Home({ data }) {
  return (
    <div className="home-container">
      {data.map((character) => (
        <div key={character.id} className="character-card">
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
        </div>
      ))}
    </div>
  );
}

// Reemplazar este codigo de arriba por un nuevo componente que se llame Card, y pasar todo por props. El Map dejarlo. Revisar las practicas anteriores que ahi esta de esa forma.
