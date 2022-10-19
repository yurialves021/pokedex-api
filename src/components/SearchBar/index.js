import React, { useState } from "react";
import Button from "../Button";
import './SearchBar.css';
import { searchPokemonApi } from '../../pokeapi';

const SearchBar = (props) => {

    const [search, setSearch] = useState();
    const [pokemon, setPokemon] = useState();

    //função chamada no momento em que o pokemon é digitado no input
    const onChangeEvent = (e) => {

        //adicionando o resultado ao state criado para a busca
        setSearch(e.target.value);
    };


    //função chamada no momento em que o botão é clicado
    const onClickEvent = () => {

        //função para buscar o pokemon na API enviando como parametro o que foi digitado
        onSearchEvent(search);
    };

    //função para chamar a API e retornar o resultado da busca
    const onSearchEvent = async (pokemon) => {

        //resultado da função onde chamamos a API enviando um pokemon
        const result = await searchPokemonApi(pokemon);

        //adicionando o resultado ao state criado para o pokemon
        setPokemon(result);

    };

    return (
        <div className="search-container">
            <div className="search-div">
                <input placeholder={props.placeholder} onChange={onChangeEvent}></input>
            </div>

            <Button className='btn-div button' onClick={onClickEvent}>Search</Button>

            {pokemon ? (
                <div>
                    <img src={pokemon.sprites.front_default} alt='pokemon' />
                </div>
            ) : null}
        </div>
    );

};

export default SearchBar;