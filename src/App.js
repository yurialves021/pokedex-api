
import React, { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Menu from './components/Menu';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons } from './pokeapi';


function App() {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {

    try {

      setLoading(true);
      const data = await getPokemons();

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const result = await Promise.all(promises);
    
      setPokemons(result);
      setLoading(false);

    } catch (error) {
      console.log("Fetch Pokemon Error:", error);
    }

  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <Menu />
      <SearchBar placeholder='Search Pokémon'></SearchBar>
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
}

export default App;
