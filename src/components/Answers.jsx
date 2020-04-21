import React from "react";

const Answers = ({answer, handleTargetedAnswer, answerTargeted, animation}) => {
    
    let classChoice = ''
    animation === "good" && answer === answerTargeted ? (
        classChoice = "goodAnimation"
        ) : animation === "false" && answer === answerTargeted? (
            classChoice = "falseAnimation"
            ) : answer === answerTargeted ? (
                classChoice = 'answerTargeted'
                ) : classChoice = "answer"

    return (
        <h4 
            key={answer}
            className={classChoice}
            onClick={() => handleTargetedAnswer(answer)}
        >
            {answer}
        </h4>
    )
};

export default Answers;