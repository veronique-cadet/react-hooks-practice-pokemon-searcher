import React from "react";
import PokemonPage from "./PokemonPage";
import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  }, []);
  return (
    <div className="App">
      <PokemonPage pokemons={pokemons} setPokemons={setPokemons} />
    </div>
  );
}

export default App;
