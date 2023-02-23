import React from "react";
import { Pokemon } from "../Models/Pokemon";

function PokemonInfo({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <div>
        <h4>Types:</h4>
        <p>
          {pokemon.apiTypes.map((type) => (
            <span key={type.name}>
              <img
                height={'30px'}
                width={('30px')}
                src={type.image}
                alt={`${type.name} type`}
              />
              {type.name}{' '}
            </span>
          ))}
        </p>
      </div>
      <img
        height={'200px'}
        width={'200px'}
        src={pokemon.image}
        alt={`${pokemon.name} sprite`}
      />
    </div>
  );
}

export default PokemonInfo;