import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='right'>
                <Link to='/'>Quiz <span className='cat'>Cat</span></Link>
            </div>
            <div className='left'>
                <Link to='/'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Nav;