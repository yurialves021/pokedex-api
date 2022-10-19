import React from "react";
import './Button.css';


const Button = (props)=>{
    const {className,onClick, children} = props;
   
return (
    <div className={className}>
        <button onClick={onClick}>{children}</button>
    </div>
);
};

export default Button;
