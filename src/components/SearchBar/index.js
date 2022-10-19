import React, { useState } from "react";
import Button from "../Button";
import './SearchBar.css';
import { searchPokemonApi } from '../../pokeapi';

const SearchBar = (props) => {

    const [search, setSearch] = useState();
    const [pokemon, setPokemon] = useState();

    const onChangeEvent = (e) => {
        setSearch(e.target.value);
    };

    const onClickEvent = () => {
        onSearchEvent(search);
    };

    const onSearchEvent = async (pokemon) => {
        const result = await searchPokemonApi(pokemon);
        setPokemon(result);

    };

    return (
        <div className="search-container">
            <div className="search-div">
                <input placeholder={props.placeholder} onChange={onChangeEvent}></input>
            </div>

            <Button onClick={onClickEvent}>Search</Button>

            {pokemon ? (
                <div>
                    <img src={pokemon.sprites.front_default} alt='pokemon' />
                </div>
            ) : null};
        </div>
    );

};

export default SearchBar;