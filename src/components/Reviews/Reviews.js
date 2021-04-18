import React,{useState} from 'react';
import ReviewsData from '../Data/ReviewsData';
import './Reviews.css';


const Reviews = () => {
    const [reviewData, setReviewData] = useState(ReviewsData);
    return (
    <section className="reviews">
    <div className="title">
        <h2>Reviews</h2>
    </div>
    
    <div className="reviews-centered">
       {reviewData.map((reviewData) => {
          const  {id , image, name, title, quote } = reviewData;

          return (
            <article key ={id}>
            <img src={image} alt="Maria hugo" className="person"/>
             <h4>{name}</h4>
             <p className ="title">{title}</p>
             <p className="text">{quote}</p>
            </article>
          )
       })};
        

    </div>

    

        
    </section>
    )
}


export default Reviews;