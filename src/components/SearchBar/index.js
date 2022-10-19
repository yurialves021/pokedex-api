import React, { useState } from "react";
import Button from "../Button";
import './SearchBar.css';

const SearchBar = (props) => {

    const [search, setSearch] = useState('dito');

    const onChangeEvent = (e) => {
        setSearch(e.target.value);
    };

    const onClickEvent = () => {
        console.log("Pokemon:", search);
    };

    return (
        <div className="search-container">
            <div className="search-div">
                <input placeholder={props.placeholder} onChange={onChangeEvent}></input>
            </div>

            <Button onClick={onClickEvent}>Search</Button>
        </div>
    );

};

export default SearchBar;