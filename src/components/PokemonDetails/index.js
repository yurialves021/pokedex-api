import './PokemonDetails.css';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PokemonDetails() {

    const navigate = useNavigate();
    const { state } = useLocation();
    const { pokemon } = state;

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
        ghost: '#5269ac',
        steel: '#5a8ea1',
        dark: '#5a5366',
        fairy: '#ec8fe6'
    };

    const main_types = Object.keys(colors);
    const poke_types = pokemon.types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const color = colors[type];

    return (
        <>  <button className='back' onClick={() => navigate(-1)}> {'< Back'} </button>
            <div className="cards-1" style={{ background: color }}>
                <div
                    className="pokemons-1">
                    <div className="icon-1">
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                    <h3>{pokemon.name.toUpperCase()} #{pokemon.id}</h3>
                    <br />
                    <span>
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index}><p>Type {index}: {type.type.name} </p></div>
                            );
                        })}</span>

                </div>

            </div>
        </>
    );
}