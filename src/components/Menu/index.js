import React, {useContext} from "react";
import FavoriteContext from "../../contexts/favoritesContext";
import Logo from "../../img/pokeapi.png";
import './Menu.css';

const Menu = () => {
    const {favoritePokemons} = useContext(FavoriteContext); 

    return (
        <nav className="Menu">
            <div>
                <img src={Logo} alt='logo' className="Logo"/>
            </div>

            <div>{favoritePokemons.length} ❤️</div>
        </nav>
    )
}

export default Menu;