import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons, setPokemons }) {
  const cards = pokemons.map((pokemon) => {
    return (
      <PokemonCard
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        sprites={pokemon.sprites}
        hp={pokemon.hp}
      />
    );
  });

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {cards}
    </Card.Group>
  );
}

export default PokemonCollection;
