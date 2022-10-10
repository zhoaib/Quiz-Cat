import React from 'react';
import './Header.css'
import image from '../../image/image.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={image} alt="" />
            <p>Quizzes on Programming Languages</p>
        </div>
    );
};

export default Header;