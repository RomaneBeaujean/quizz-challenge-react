import React from 'react';
import Answers from './Answers';

const MainQuizz = ({question, options, handleTargetedAnswer, answerTargeted, animation}) => {

    return (
        <div>
            <div className="question">
                <h4>{question}</h4>
            </div>
            <div>
                {options.map(answer => <Answers key={answer} answer={answer} handleTargetedAnswer={handleTargetedAnswer}
                answerTargeted={answerTargeted} animation={animation}/>)}
            </div>
        </div>
    )
};

export default MainQuizz;