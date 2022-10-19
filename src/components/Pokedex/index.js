import React from "react";
import Pokemon from "../Pokemon";
import './Pokedex.css';

const Pokedex = (props) => {

    const { pokemons, loading } = props;

    return (
        <div>
            <div className="pokedex-header">
                <h1>Pokedex</h1>
                <div>Paginação</div>
            </div>
            {/*  verificando se já foi carregado, caso tenha sido irá exibir os pokemons*/}
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <div className="pokedex-grid">
                    {/* primeiramente verifica se existe pokemons e logo em seguida varre a lista para retorna-los */}
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                           <Pokemon key={index} pokemon={pokemon} />
                        )
                    })}
                </div>
            )}
        </div>


    );
};

export default Pokedex;