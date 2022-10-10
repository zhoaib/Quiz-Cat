import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';
import './Home.css'


const Home = () => {
    const quizzes = useLoaderData();

    return (
        <div>
            <div >
                <Header></Header>
            </div>
            <div className='home-container'>

                {
                    quizzes.data.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }


            </div>
        </div>
    );
};

export default Home;