import React from 'react';

const Results = ({score, numberQuestion, handlePlayAgain}) => {
    return (
        <div className="results">
            <p>You scored {score} / {numberQuestion}</p>
            <button className="playAgain-Btn" onClick={() => handlePlayAgain()}>Play again!</button>
        </div>
        
    )
};

export default Results;