import React from "react";
import Pagination from "../Pagination";
import Pokemon from "../Pokemon";
import './Pokedex.css';

const Pokedex = (props) => {

    const { pokemons, loading, page,  setPage, totalPage} = props;
    

    const onLeftClickHandler = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }
    const onRightClickHandler = () => {
        //verifica se a pagina atual + 1 é igual ao total de paginas
        if (page + 1 !== totalPage) {
            setPage(page + 1)
        }
    }

    return (
        <div>
            <div className="pokedex-header">
                <h1>Pokedex</h1>

                <Pagination
                    page={page + 1}
                    totalPage={totalPage}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}
                />

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