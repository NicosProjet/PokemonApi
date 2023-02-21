import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DetailsPokemon } from './components/DetailsPokemon';
import { PokeSearch } from './components/PokeSearch';


function App() {
  return (
    <main className='main'>

      <div className='Pokedex'>
        <h1>POKEDEX</h1>
        <div className='Components'>
          <DetailsPokemon />
          <PokeSearch />

        </div>
      </div>
    </main>
  );
}

export default App;
