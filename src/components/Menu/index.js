import React from "react";
import Logo from "../../img/pokeapi.png";
import './Menu.css';

const Menu = () => {
    return (
        <nav className="Menu">
            <div>
                <img src={Logo} alt='logo' className="Logo"/>
            </div>

            <div>❤️</div>
        </nav>
    )
}

export default Menu;