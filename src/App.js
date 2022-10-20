
import React, { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Menu from './components/Menu';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons } from './pokeapi';
import { FavoriteProvider } from './contexts/favoritesContext';

const favoritesKey = "f"
function App() {

  //cria um estado para o carregamento
  const [loading, setLoading] = useState(false);
  //cria um estado para os pokemons
  const [pokemons, setPokemons] = useState([]);
  //cria um estado para as paginas
  const [page, setPage] = useState(0);
  //cria um estado para o total de paginas
  const [totalPage, setTotalPage] = useState(0);
  //cria um estado para os pokemons favoritos
  const [favorites, setFavorites] = useState([]);
  //definindo a quantidade de pokemons por pagina
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

      //Calculo para informar o total de paginas, onde pega o total de pokemons e divide pelo total de pokemons por pagina
      setTotalPage(Math.ceil(data.count / itensPerPage));



    } catch (error) {
      console.log("Fetch Pokemon Error:", error);
    }

  };

  const loadFavoritePokemons = () => {
    //converte a string retornada do localstorage para JSON, utilizei uma variavel como chave.
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
    setFavorites(pokemons)
  }

  useEffect(() => {
    loadFavoritePokemons()
  }, []);
  

  //Está renderizando a pagina caso mude de pagina
  useEffect(() => {
    fetchPokemons();
  }, [page]);

  //função para alterar os pokemons
  const updateFavoritePokemon = (name) => {

    //coletei a array com todos os favoritos ja existentes
    const updatedFavorites = [...favorites];

    //busquei eles pelo nome
    const favoriteIndex = favorites.indexOf(name);

    //verifica se retornou algo, caso nao tenha retornado então o pokemon sera adicionado na array. caso retorne, entao ele será removido
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites);
  };

  return (
    <FavoriteProvider value={{ favoritePokemons: favorites, updateFavoritePokemon: updateFavoritePokemon }}>
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
    </FavoriteProvider>
  );
}

export default App;
