import React from 'react';

const Quiz = ({ quiz }) => {
    const { id, name, logo, total, } = quiz
    return (
        <div>
            <img src={logo} alt="" />
            <h2>{name}</h2>

        </div>
    );
};

export default Quiz; 