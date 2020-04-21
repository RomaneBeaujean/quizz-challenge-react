import React from 'react';

class Presentation extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            compteur: false,
            count: 3
        }
    }

    componentWillUnmount(){
        this.setState({
            compteur: false
        });
    }

    handleCompteur = () => {
        this.setState({
            compteur: true
        });
        this.startCompteur();
    };

    startCompteur = () => {
        let decompte = setInterval( () => {
            const count = this.state.count - 1;
            this.setState({
                count: count
            });
        }, 1000);
        setTimeout(() => {
            clearInterval(decompte)
            this.props.handleStart()
        }, 3000);
    }

    render () {

        const compteur = this.state.compteur;

        return (
            <div className="presentation">

                {compteur !== false && 
                    <div className="compteur">
                        <h2>{this.state.count}</h2>
                    </div>
                }

                {compteur !== true && 
                    <div>
                        <p>I have a challenge for you: could you answer all the {this.props.numberQuestion} questions?</p>
                        <button onClick={this.handleCompteur} id="start-Btn">Let's started !</button>
                    </div>
                }
                
            </div>
        )
    }
};

export default Presentation;

