import React from 'react';
import './Quiz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { id, name, logo, total, } = quiz
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='quiz-name'>
                <h3> {name}</h3>
                <Link to={`/quiz/${id}`}>
                    <button className='quiz-btn'>Start Quiz  <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></button>
                </Link>


            </div>
        </div>
    );
};

export default Quiz; 