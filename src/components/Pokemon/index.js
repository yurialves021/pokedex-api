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

    const pokemonAnimated = pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

    
    const colors = {
        fire: '#ff9c54',
        grass: '#63bb5b',
        electric: '#f3d23b',
        water: '#4d90d5',
        ground: '#d97746',
        rock: '#c7b78b',
        poison: '#ab6ac8',
        bug: '#90c12c',
        dragon: '#096dc4',
        psychic: '#f97176',
        flying: '#92aade',
        fighting: '#cf406a',
        normal: '#9099a1',
        ice: '#74cec0',
        ghost:'#5269ac',
        steel:'#5a8ea1',
        dark:'#5a5366',
        fairy:'#ec8fe6'
    };
  
    const main_types = Object.keys(colors);

    const poke_types =  pokemon.types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const color = colors[type];
    
    return (
        <main className="cards">
        <section className="pokemons" style={{boxShadow: `40px 20px 50px -30px ${color}`}}>
            <div className="icon">
            <img src={pokemonAnimated} alt={pokemon.name} />
            </div>
            <h3>{pokemon.name} #{pokemon.id}</h3>
            <span>  {/* A API me retorna um array com as informaões do tipo, por isso foi necessário varrer essa lista */}
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index}>{type.type.name}</div>
                            );
                        })}</span>
            <Button onClick={onClickHeart}> {heart} </Button>
        </section>
        </main>
       
    );
};

export default Pokemon;