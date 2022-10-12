import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './SingleQuiz.css'

const SingleQuiz = ({ singlequiz }) => {

    const { options, question, id, correctAnswer, } = singlequiz;


    const btnAnsClick = (correctAnswer) => {
        if (correctAnswer === correctAnswer) {
            alert(correctAnswer)
        }
    }

    const btnOptClick = (option) => {
        if (option === correctAnswer && correctAnswer === correctAnswer) {
            alert('Your Answer is Right!!!')
        }
        else {
            alert('Wrong Answer :(')
        }
    }

    return (
        <div>

            <div className='ques-ans'>
                <button className='eye' onClick={() => btnAnsClick(correctAnswer)}><FontAwesomeIcon
                    icon={faEye}

                ></FontAwesomeIcon></button>

                <h3>{question.slice(3, -4)}</h3>


                <div className='ans'>
                    {options.map(option => <button onClick={() => btnOptClick(option)} key={id} className='option-btn'><input type="radio" />{option}</button>)}
                </div>
            </div>



        </div>
    );
};

export default SingleQuiz;