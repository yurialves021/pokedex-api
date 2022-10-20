import './Pokemon.css';
import React, { useContext } from 'react';
import Button from "../Button";
import FavoriteContext from '../../contexts/favoritesContext';


const Pokemon = (props) => {

    const { pokemon } = props;

    const { favoritePokemons, updateFavoritePokemon } = useContext(FavoriteContext);

    const onClickHeart = () => {
        updateFavoritePokemon(pokemon.name);

    };

    //verifica se o pokemon atual já está incluso na lista de pokemons favoritos
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";


    return (
        <div className='pokemon-card'>
            <div className='pokemon-image-container'>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className='pokemon-image' />
            </div>
            <div className='card-body'>
                <div className='card-top'>
                    <h3>{pokemon.name} </h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className='card-bottom'>
                    <div className='pokemon-type'>
                        {/* A API me retorna um array com as informaões do tipo, por isso foi necessário varrer essa lista */}
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index} className='pokemon-type-text'>{type.type.name}</div>
                            );
                        })}
                    </div>

                    <Button className='pokemon-heart-btn' onClick={onClickHeart}> {heart} </Button>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;