import React from 'react';
import NotFoundImage from '../../../src/images/not-found-404.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='not-found-msg'>
            <h3>404! Sorry, this page not found.</h3>
            <img  src={NotFoundImage} height={500} width={500} />
        </div>
    );
};

export default NotFound;
