import React from 'react';
import ReactDOM from 'react-dom';
import quizzData from './components/QuizzData';
import './styles.scss';
import MainQuizz from './components/MainQuizz';
import Results from './components/Results';
import Presentation from './components/Presentation';

class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            questionsBank: quizzData,
            started: false,
            currentIndex : 0,
            answerTargeted: null,
            answers:0,
            score: 0,
            animation: null,
        };
    };

    handleStart = () => {
        this.setState({
            started: true
        });
    };

    handleNext = () => {
        this.handleScore();
        setTimeout( () => {
            this.loadNextData()
          }, 2500);
    };

    handleScore = () => {
        const correctAnswer = this.state.questionsBank[this.state.currentIndex].answer;
        const answer = this.state.answerTargeted;
        if (answer === correctAnswer) {
            const score = this.state.score + 1;
            this.setState({
                score: score,
                animation: "good"
            });
        } else {
            this.setState({
                animation: "false"
            });
        };
    };

    loadNextData = () => {
        const answers = this.state.answers + 1;
        const nextIndex = this.state.currentIndex + 1;
        this.setState({
            currentIndex : nextIndex,
            answerTargeted: null,
            answers: answers,
            animation: null,
        });
    };

    handleTargetedAnswer = (e) => {
        const answer = e;
        this.setState({
            answerTargeted: answer
        });
    };

    handlePlayAgain = () => {
        this.setState({
            currentIndex: 0, 
            score: 0, 
            answers: 0, 
            answerTargeted: null,
            animation: null,
            started: false
        });
    };

    render() {

        const answers = this.state.answers;
        const numberQuestion = this.state.questionsBank.length;
        const started = this.state.started;

        return (
        <div className="container">
            <div className="title">
                Quizz Challenge
            </div>

            {started === false &&
                <Presentation 
                    numberQuestion={numberQuestion}
                    handleStart={this.handleStart}
                />
            }

            {started === true && answers === numberQuestion &&
                <Results 
                    score={this.state.score} 
                    numberQuestion={this.state.questionsBank.length} 
                    handlePlayAgain={this.handlePlayAgain}
                />
            }

            {started === true && numberQuestion > 0 && answers < numberQuestion &&
                <div>
                    <MainQuizz 
                        question={this.state.questionsBank[this.state.currentIndex].question} 
                        options={this.state.questionsBank[this.state.currentIndex].options} 
                        handleTargetedAnswer={this.handleTargetedAnswer}
                        answerTargeted={this.state.answerTargeted}
                        handleNext={this.handleNext}
                        animation={this.state.animation}
                    />

                    {this.state.answerTargeted != null && this.state.animation === null && 
                        <button className="next-Btn" onClick={this.handleNext}>
                            Validate
                        </button>
                    }
                </div>
            }
            
        </div>
        )
    };
};

ReactDOM.render(<App/>, document.getElementById('root'));
