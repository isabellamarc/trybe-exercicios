import './App.css';
import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div>
      <h1 className='title'>Pokedex</h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
