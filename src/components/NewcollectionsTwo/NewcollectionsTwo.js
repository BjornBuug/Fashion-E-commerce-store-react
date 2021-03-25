import React from 'react';
import model9 from '../../images/Model9.jpg';
import Button from '../Button/Button';

import './NewcollectionsTwo.css';


const NewcollectionsTwo = () => {
    return (
        <section className="section-c">
            <div className="row">
                <div className="col50">
                 <h4>FASHION</h4>
                 <h1>When you care enough to send the best</h1>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Omnis harum deserunt dolor obcaecati asperiores magnam molestias
                      perferendis laborum tenetur quisquam quas,
                      numquam voluptatum qui illum explicabo illo delectus. Quis, at?</p>
                <Button text="See More"/>
                </div>

                <div className="col50">
                    <div className="img-box">
                        <img src={model9} alt="Model"/>
                    </div> 
                </div>
            </div>
        </section>

    )
}

export default NewcollectionsTwo;