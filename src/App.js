
import React, { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Menu from './components/Menu';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons } from './pokeapi';


function App() {

  //cria um estado para o carregamento
  const [loading, setLoading] = useState(false);

  //cria um estado para os pokemons
  const [pokemons, setPokemons] = useState([]);

  //cria um estado para as paginas
  const [page, setPage] = useState(0);

  //cria um estado para o total de paginas
  const [totalPage, setTotalPage] = useState(0);

  const itensPerPage = 26;

  //função para carregar os pokemons
  const fetchPokemons = async () => {

    try {

      setLoading(true);
      //chama a função assincrona para pegar todos os pokemons
      const data = await getPokemons(itensPerPage, itensPerPage * page);

      //pega os pokemons retornados e traz as informações especificas de cada um
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      //adiciona o resultado do retorno das promises a uma variavel
      const result = await Promise.all(promises);

      setPokemons(result);
      setLoading(false);

      setTotalPage(Math.ceil(data.count / itensPerPage));

   

    } catch (error) {
      console.log("Fetch Pokemon Error:", error);
    }

  };

  //Está renderizando a pagina caso aconteça ...
  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <Menu />
      <SearchBar placeholder='Search Pokémon'></SearchBar>
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
        setPage={setPage}
        totalPage={totalPage} />
    </div>
  );
}

export default App;
