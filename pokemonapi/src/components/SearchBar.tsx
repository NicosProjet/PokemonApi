import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (pokemonName: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [pokemonName, setPokemonName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(pokemonName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Pokemon name"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;