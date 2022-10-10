import React from 'react';
import './Quiz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Quiz = ({ quiz }) => {
    const { id, name, logo, total, } = quiz
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='quiz-name'>
                <h3> {name}</h3>
                <button className='quiz-btn'>Start Quiz <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></button>

            </div>
        </div>
    );
};

export default Quiz; 