import React from "react";
import Model15 from '../../images/Model15.jpg';
import Model14 from '../../images/Model14.jpg';
import Model13 from '../../images/Model13.jpg';

import './NewcollectionsTree.css';


const NewcollectionsTree = () => {
    return (
    <section className="section-d">
    <h1> Nick Lauren Collections</h1>
    <div className="cards">
        <div className="card">
            <h3 className="numb-title">001</h3>
            <div className="imgBox">
                <img src={Model13} alt="Model"/>
            </div>

            <div className="contentBox">
                <h3>Robe By <span>Nick Lauren</span></h3>
                <h2 className="price">$20.<span>99</span></h2>
            </div>
        </div>

        <div className="card">
        <h3 className="numb-title">002</h3>
            <div className="imgBox">
                <img src={Model15} alt="Model"/>
            </div>

            <div className="contentBox">
                 <h3>Robe By <span>Nick Lauren</span></h3>
                <h2 className="price">$20.<span>99</span></h2>
            </div>
        </div>

        <div className="card">
        <h3 className="numb-title">003</h3>
            <div className="imgBox">
                <img src={Model14} alt="Model"/>
            </div>

            <div className="contentBox">
                <h3>Robe By <span>Nick Lauren</span></h3>
                <h2 className="price">$20.<span>99</span></h2>
            </div>
        </div>
    </div>

    <div className="cards">
        
        <div className="card">
            <h3 className="numb-title">001</h3>
            <div className="imgBox">
                <img src={Model13} alt="Model"/>
            </div>

            <div className="contentBox">
                <h3>Robe By <span>Nick Lauren</span></h3>
                <h2 className="price">$20.<span>99</span></h2>
            </div>
        </div>

        <div className="card">
        <h3 className="numb-title">002</h3>
            <div className="imgBox">
                <img src={Model15} alt="Model"/>
            </div>

            <div className="contentBox">
                 <h3>Robe By <span>Nick Lauren</span></h3>
                <h2 className="price">$20.<span>99</span></h2>
            </div>
        </div>

        <div className="card">
        <h3 className="numb-title">003</h3>
            <div className="imgBox">
                <img src={Model14} alt="Model"/>
            </div>

            <div className="contentBox">
                <h3>Robe By <span>Nick Lauren</span></h3>
                <h2 className="price">$20.<span>99</span></h2>
            </div>
        </div>
    </div>
    </section>

    );

}


export default NewcollectionsTree;