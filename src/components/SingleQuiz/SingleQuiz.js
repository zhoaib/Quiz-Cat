import React from 'react';
import './SingleQuiz.css'

const SingleQuiz = ({ singlequiz }) => {

    const { options, question, id, correctAnswer, } = singlequiz
    return (
        <div>

            <div className='ques-ans'>
                <h3>{question.slice(3, -4)}</h3>

                <div className='ans'>
                    {options.map(option => <button key={id} className='option-btn'><input type="radio" />{option}</button>)}
                </div>
            </div>



        </div>
    );
};

export default SingleQuiz;