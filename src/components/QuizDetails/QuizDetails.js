import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const QuizDetails = () => {
    const quiz = useLoaderData();

    console.log(quiz)
    return (
        <div>
            <div >

                {
                    quiz.data.questions.map(singlequiz => <SingleQuiz
                        key={singlequiz.id}
                        singlequiz={singlequiz}
                    >    </SingleQuiz>)
                }


            </div>
        </div>
    );
};

export default QuizDetails;