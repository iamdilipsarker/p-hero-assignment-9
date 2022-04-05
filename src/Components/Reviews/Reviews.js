import React from 'react';
import usersReview from '../../hooks/UsersReview';
import './Review.css'

const Reviews = () => {
    const [usersReviews, setUsersReviews] = usersReview();
    
    return (
        <div>
            <div className='review-items'>
                {
                    usersReviews.map(consumer => (
                        <div className='consumer-info'  key={consumer.id}>
                            <img src={consumer.img} alt="" />
                            <p>{consumer.text}</p>
                            <p>Name: {consumer.name}</p>
                            <p>Ratings:{consumer.ratings}</p>
                            
                        </div>
                    ))
                }
            </div>
        </div>
        
    );
};

export default Reviews;