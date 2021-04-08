import React from 'react';
import './Button.css';

const Button = ({text, color, backgroundColor}) => {


    return (
        <a href="#" style={{color, backgroundColor}} className="buy">{text}</a>
    )
}

export default Button;