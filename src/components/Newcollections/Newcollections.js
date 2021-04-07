import React from 'react';
import model1 from '../../images/Model1.jpg';
import model2 from '../../images/Model2.jpg';
import model3 from '../../images/Model3.jpg';
import model4 from '../../images/Model4.jpg';
import model5 from '../../images/Model5.jpg';
import model6 from '../../images/Model6.jpg';
import model7 from '../../images/Model7.jpg';
import model8 from '../../images/Model8.jpg';
import Button from '../Button/Button';


import  './Newcollections.css';


const Newcollections = () => {
    return (
    <section className="section-b">
        <h1>New Collections</h1>
       <div className="cards">
        <div className="card">
            <div className="imgBox">
                <img src={model1} alt="model"/>
            </div>

            <div className="contentBox">
                <h3>Pants</h3>
                <h2 className="price">$20.<small>99</small></h2>
                <Button text="Buy Now"/>
            </div>
        </div>

        <div className="card">
            <div className="imgBox">
                <img src={model5} alt="model"/>
            </div>

            <div className="contentBox">
                <h3>Spring Dress</h3>
                <h2 className="price">$30.<small>99</small></h2>
                <Button text="Buy Now"/>
            </div>
        </div>

        <div class="collections-text">
                  <h1> Hello Spring</h1>
                  <p>Summer 21 offers an iconic wardrobe so varied that the Tara woman can explore all of its facets, experience them, and become them. Lace collars, scallop edges, eyelet embroidery flirt with each other.
                       The sparkle of a jewel and cascading lurex, rhinestones and lamés mix with bourgeois checks, in the continuity of winter on oversized jackets or blazers with a crest. High-waisted flared pants, pointed collars and midi dresses push a resolutely 70s style.
                       Prints are meant to be fresh on light backgrounds suggesting sunny day.
                       
                  </p>
        </div>

        <div className="card">
            <div className="imgBox">
                <img src={model2} alt="model"/>
            </div>

            <div className="contentBox">
                <h3>Dress Hats</h3>
                <h2 className="price">$50.<small>99</small></h2>
                <Button text="Buy Now"/>
            </div>
        </div>

        <div className="card">
            <div className="imgBox">
                <img src={model3} alt="model"/>
            </div>

            <div className="contentBox">
                <h3>Shirt</h3>
                <h2 className="price">$15.<small>99</small></h2>
                <Button text="Buy Now"/>
            </div>
        </div>

        <div className="card">
            <div className="imgBox">
                <img src={model4} alt="model"/>
            </div>
            <div className="contentBox">
                <h3>T-shirt</h3>
                <h2 className="price">$21.<small>99</small></h2>
                <Button text="Buy Now"/>
            </div>
        </div>

        <div className="card">
            <div className="imgBox">
                <img src={model8} alt="model"/>
            </div>

            <div className="contentBox">
                <h3>Jeans</h3>
                <h2 className="price">$50.<small>99</small></h2>
                <Button text="Buy Now"/>
            </div>
        </div>

        <div className="card">
            <div className="imgBox">
                <img src={model6} alt="model"/>
            </div>

            <div className="contentBox">
                <h3>Dresses</h3>
                <h2 className="price">$15.<small>99</small></h2>
                <Button text="Buy Now"/>
            </div>
        </div>

        <div className="card">
            <div className="imgBox">
                <img src={model7} alt="model"/>
            </div>
            <div className="contentBox">
                <h3>T-shirt & Jacket</h3>
                <h2 className="price">$21.<small>99</small></h2>
                <Button text="Buy Now"/>
            </div>
         </div>
        </div>
    </section>  
    );
};

export default Newcollections;
