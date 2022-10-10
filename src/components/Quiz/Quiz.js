import React from 'react';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { id, name, logo, total, } = quiz
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='quiz-name'>
                <h3> {name}</h3>
                <button className='quiz-btn'>Start Quiz</button>

            </div>
        </div>
    );
};

export default Quiz; 