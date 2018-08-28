import React, {Component} from 'react';
import Stars from "./Stars";
import Button from "./Button";
import Answer from "./Answer";
import Numbers from "./Numbers";
import DoneFrame from "./DoneFrame";
import _ from 'lodash';

class Game extends Component {
    static calculateRandomNumberOfStars = () => {
        return 1 + Math.floor(Math.random() * 9);
    };

    static initialState = () => ({
        selectedNumbers: [],
        usedNumbers: [],
        randomNumberOfStars: Game.calculateRandomNumberOfStars(),
        answerIsCorrect: null,
        redraws: 5,
        doneStatus: null
    });

    resetGame = () => {
        this.setState(Game.initialState())
    };

    state = Game.initialState();

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0 || this.state.usedNumbers.indexOf(clickedNumber) >= 0) {
            return;
        }
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber),
            answerIsCorrect: null
        }));
    };

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers
                .filter(number => number !== clickedNumber),
            answerIsCorrect: null
        }));
    };

    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.randomNumberOfStars === prevState.selectedNumbers
                .reduce((acc, n) => acc + n, 0)
        }));
    };

    acceptAnswer = () => {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            randomNumberOfStars: Game.calculateRandomNumberOfStars(),
            answerIsCorrect: null
        }), this.updateDoneStatus);
    };

    redraw = () => {
        if (this.state.redraws > 0) {
            this.setState(prevState => ({
                selectedNumbers: [],
                redraws: prevState.redraws - 1,
                randomNumberOfStars: Game.calculateRandomNumberOfStars(),
                answerIsCorrect: null
            }), this.updateDoneStatus);
        }
    };

    updateDoneStatus = () => {
        this.setState(prevState => {
            if (prevState.usedNumbers.length === 9) {
                return {
                    doneStatus: 'Done. Nice!'
                }
            }
            if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
                return {
                    doneStatus: 'Game Over!'
                }
            }
        });
    };

    possibleSolutions = ({randomNumberOfStars, usedNumbers}) => {
        const possibleNumbers = _.range(1, 10).filter(number =>
            usedNumbers.indexOf(number) === -1
        );

        return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
    };

    render() {
        const {selectedNumbers, usedNumbers, randomNumberOfStars, answerIsCorrect, redraws, doneStatus} = this.state;

        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr/>
                <div className="row">
                    <Stars numberOfStars={randomNumberOfStars}/>
                    <Button selectedNumbers={selectedNumbers}
                            answerIsCorrect={answerIsCorrect}
                            checkAnswer={this.checkAnswer}
                            acceptAnswer={this.acceptAnswer}
                            redraws={redraws}
                            redraw={this.redraw}/>
                    <Answer selectedNumbers={selectedNumbers}
                            unselectNumber={this.unselectNumber}/>
                </div>
                <br/>
                {doneStatus ?
                    <DoneFrame doneStatus={doneStatus}
                               resetGame={this.resetGame}/> :
                    <Numbers selectedNumbers={selectedNumbers}
                             selectNumber={this.selectNumber}
                             usedNumbers={usedNumbers}/>
                }
            </div>
        )
    }
}

let possibleCombinationSum = function (arr, n) {
    if (arr.indexOf(n) >= 0) {
        return true;
    }
    if (arr[0] > n) {
        return false;
    }
    if (arr[arr.length - 1] > n) {
        arr.pop();
        return possibleCombinationSum(arr, n);
    }
    let listSize = arr.length, combinationsCount = (1 << listSize)
    for (let i = 1; i < combinationsCount; i++) {
        let combinationSum = 0;
        for (let j = 0; j < listSize; j++) {
            if (i & (1 << j)) {
                combinationSum += arr[j];
            }
        }
        if (n === combinationSum) {
            return true;
        }
    }
    return false;
};

export default Game;