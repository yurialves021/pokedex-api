import React, { useState } from "react";
import Button from "../Button";
import './SearchBar.css';


const SearchBar = (props) => {

    const [search, setSearch] = useState();
    
    const {onSearch} = props;

    //função chamada no momento em que o pokemon é digitado no input
    const onChangeEvent = (e) => {
        //adicionando o resultado ao state criado para a busca
        setSearch(e.target.value);

        if(e.target.value.length === 0) {
            onSearch(undefined);
        }
    };


    //função chamada no momento em que o botão é clicado
    const onClickEvent = () => {
        onSearch(search);
    };


    return (
        <div className="search-container">
            <div className="search-div">
                <input placeholder={props.placeholder} onChange={onChangeEvent}></input>
            </div>

            <Button className='btn-div button' onClick={onClickEvent}>Search</Button>

        </div>
    );

};

export default SearchBar;