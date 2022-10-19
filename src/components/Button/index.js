import React from "react";
import './Button.css';


const Button = (props)=>{
return (
    <div className="btn-div">
        <button onClick={props.onClick}>{props.children}</button>
    </div>
);
};

export default Button;
