import React from 'react';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { id, name, logo, total, } = quiz
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='quiz-name'>
                <h2>Name: {name}</h2>
                <h4>Total: {total}</h4>

            </div>
        </div>
    );
};

export default Quiz; 