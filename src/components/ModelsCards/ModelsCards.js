import React from 'react';

import './ModelsCards.css';

const ModelsCards = ({Cards}) => {
    return (
        <div className="cards">
            {Cards.map((card)=> {
                const {id, numTitle, item, artist, price, image} = card;

                return (
                    <div className="card" key={id}>
                    <h3 className="numb-title">{numTitle}</h3>

                    <div className="imgBox">
                         <img src={image} alt="Model"/>
                    </div>

                    <div className="contentBox">
                    <h3>{item} <span>{artist}</span></h3>
                     <h2 className="price">${price}.<span>99</span></h2>
                    </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default ModelsCards
