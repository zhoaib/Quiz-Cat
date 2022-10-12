import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

import './Topics.css'

const Topics = () => {
    const quizzes = useLoaderData();

    return (
        <div>

            <div >
                <Header></Header>
            </div>

            <div>
                <div className='topic-container'>
                    {
                        quizzes.data.map(quiz => <Quiz
                            key={quiz.id}
                            quiz={quiz}
                        ></Quiz>
                        )
                    }
                </div>
            </div>



        </div>
    );
};

export default Topics;