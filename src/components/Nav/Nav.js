import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='right'>
                <Link to='/'>Quiz <span className='cat'>Cat</span></Link>
            </div>
            <div className='left'>
                <NavLink to='/'>Topics</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
        </nav>
    );
};

export default Nav;