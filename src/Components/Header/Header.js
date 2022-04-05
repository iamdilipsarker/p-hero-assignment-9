import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        
        <div className='nav-bar'>
                
                    <Link to='/home' className='navbar-link'>Home</Link>
                    <Link to='/reviews' className='navbar-link'>Reviews</Link>
                    <Link to='/dashboard' className='navbar-link'>Dashboard</Link>
                    <Link to='/blogs' className='navbar-link'>Blogs</Link>
                    <Link to='/about' className='navbar-link'>About</Link>
                
                
        </div>
                
        
    );
};

export default Header;