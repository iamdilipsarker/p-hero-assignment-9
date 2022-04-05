import React from 'react';
import Watch from '../../../src/images/watch.jpeg';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='home-info'>
                <div className='home-info-txt'>
                    <h3 className='text-center'>Consumers Report</h3>
                    <h6>Your feedback is very important to us. So give your crucial feedback and opinion. We will improve our service based on your feedback. Please, let us know your experience about our services. We will glad to you. Thank you!</h6>
                </div>
                <div className='watch-img'>
                    <img  src={Watch} height={300} width={300} />
                </div>
            </div>
            <div className='customer-review-on-home'>
                <div>
                    <h4 className='text-center pt-3'>Customers Review</h4>
                </div>
                <div>
                    <button className='show-more-btn'>Show More Review</button>
                </div>
            </div>
        </div>
    );
};

export default Home;