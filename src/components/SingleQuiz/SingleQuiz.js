import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './SingleQuiz.css'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const SingleQuiz = ({ singlequiz }) => {

    const { options, question, id, correctAnswer, } = singlequiz;


    const btnAnsClick = (correctAnswer) => {
        if (correctAnswer === correctAnswer) {

            toast(correctAnswer)

        }
    }

    const btnOptClick = (option) => {
        if (option === correctAnswer && correctAnswer === correctAnswer) {

            toast.success('Your Answer is Right!!!')

        }
        else {

            toast.error('Wrong Answer :(')

        }
    }

    return (
        <>
            <div>

                <div className='ques-ans'>
                    <button className='eye' onClick={() => btnAnsClick(correctAnswer)}><FontAwesomeIcon
                        icon={faEye}

                    ></FontAwesomeIcon></button>

                    <h3>{question.slice(3, -4)}</h3>


                    <div className='ans'>
                        {options.map(option => <button onClick={() => btnOptClick(option)} key={id} className='option-btn'>{option}</button>)}
                    </div>
                </div>



            </div>
            <ToastContainer />
        </>
    );
};

export default SingleQuiz;