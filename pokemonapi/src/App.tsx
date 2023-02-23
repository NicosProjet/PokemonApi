import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import PokemonInfo from "./components/PokemonInfo";
import './App.css';
import { Pokemon } from "./Models/Pokemon";


function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const searchPokemon = async (pokemonName: string) => {
    const response = await axios.get(
      `https://pokebuildapi.fr/api/v1/pokemon/${pokemonName}`
    );
    setPokemon(response.data);
    console.log(pokemon)
  };

  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      <SearchBar onSearch={searchPokemon} />
      {pokemon && (
        <PokemonInfo pokemon={pokemon}/>
      )}
    </div>
  );
}

export default App;