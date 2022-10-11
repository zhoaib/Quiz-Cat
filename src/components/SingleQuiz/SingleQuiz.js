import React from 'react';

const SingleQuiz = ({ singlequiz }) => {
    const { id, options, question, } = singlequiz
    return (
        <div>


            <p>{question}</p>
            <p>1.{options[0]}</p>
            <p>2.{options[1]}</p>
            <p>3.{options[2]}</p>
            <p>4.{options[3]}</p>
        </div>
    );
};

export default SingleQuiz;