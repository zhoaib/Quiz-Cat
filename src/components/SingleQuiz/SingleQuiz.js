import React from 'react';

const SingleQuiz = ({ singlequiz }) => {
    const { options, question, } = singlequiz
    return (
        <div>

            <p>{question.slice(3, -4)}</p>

            {options.map(option => <button className='option-btn'><input type="radio" />{option}</button>)}



        </div>
    );
};

export default SingleQuiz;