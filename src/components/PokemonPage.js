import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container, SearchResults } from "semantic-ui-react";

function PokemonPage({ pokemons, setPokemons }) {
  const [search, setSearch] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [hp, setHp] = useState("");
  const [frontImage, setFrontImage] = useState("");
  const [backImage, setBackImage] = useState("");

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  });

  const newPokemon = {
    name: pokemonName,
    hp: hp,
    sprites: {
      front: frontImage,
      back: backImage,
    },
  };

  const handleSubmit = () => {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((response) => response.json())
      .then((data) => {
        setPokemons([...pokemons, data]);
      });
  };

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
        hp={hp}
        setHp={setHp}
        frontImage={frontImage}
        setFrontImage={setFrontImage}
        backImage={backImage}
        setBackImage={setBackImage}
        handleSubmit={handleSubmit}
      />
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection
        pokemons={filteredPokemons}
        setPokemons={setPokemons}
      />
    </Container>
  );
}

export default PokemonPage;
