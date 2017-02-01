import React from 'react';
import Field from './field.react.js';
import {createBoard, checkField, checkIfGameIsOver} from './game.js';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: props.board,
            currentPlayer: props.currentPlayer,
            gameOver: false,
            xWinCounter: props.xWinCounter,
            oWinCounter: props.oWinCounter,
        };
        this._handleResetGame = this._handleResetGame.bind(this);
        this._handleResetAll = this._handleResetAll.bind(this);
    }

    render() {
        let rows = [];
        let x = 0;
        this.state.board.forEach((boardRow) => {
            let row = [];
            let y = 0;
            boardRow.forEach((boardColumn) => {
                row.push(<Field x={x} y={y} value={boardColumn} key={x + y} game={this}/>);
                ++y;
            });
            rows.push(<div className="row" key={x}>{row}</div>);
            ++x;
        });

        let playerTurn = "";
        if (this.state.gameOver !== false) {
            playerTurn = (this.state.gameOver > 0 ? "X" : "O") + " won!";
        } else if (this.state.currentPlayer == -1) {
            playerTurn = "turn: O";
        } else {
            playerTurn = "turn: X";
        }

        let gameWonWrapper = this.state.gameOver ?
            <div className="game-won-wrapper" onClick={this._handleResetGame}><span>{playerTurn}</span></div> : "";

        return <div>
            <div className="game">{rows}{gameWonWrapper}</div>
            <div className="status-bar">
                <h1>Tic Tac Toe</h1>
                {playerTurn}<br/>
                X wins: {this.state.xWinCounter}<br/>
                O wins: {this.state.oWinCounter}<br/>
                <a onClick={this._handleResetGame} href="#">Reset game</a><br/>
                <a onClick={this._handleResetAll} href="#">Reset all</a>
            </div>
        </div>;
    }

    _handleResetGame() {
        localStorage.removeItem("board");
        localStorage.removeItem("currentPlayer");
        this.setState({
            board: createBoard(),
            currentPlayer: 1,
            gameOver: false,
            xWinCounter: this.state.xWinCounter,
            oWinCounter: this.state.oWinCounter
        });
    }

    _handleResetAll() {
        localStorage.removeItem("board");
        localStorage.removeItem("currentPlayer");
        localStorage.removeItem("xWinCounter");
        localStorage.removeItem("oWinCounter");
        this.setState({
            board: createBoard(),
            currentPlayer: 1,
            gameOver: false,
            xWinCounter: 0,
            oWinCounter: 0
        });
    }

    onPlayerInput(x, y) {
        let board = checkField(x, y, this.state.board, this.state.currentPlayer), gameOver = false,
            xWinCounter = this.state.xWinCounter, oWinCounter = this.state.oWinCounter;
        if (checkIfGameIsOver(x, y, board)) {
            gameOver = this.state.currentPlayer;
            console.log((gameOver > 0 ? "X" : "O") + " won!");
            if (gameOver > 0) {
                ++xWinCounter;
            } else {
                ++oWinCounter;
            }
        }
        this.setState({
            board: board,
            currentPlayer: this.state.currentPlayer * -1,
            gameOver: gameOver,
            xWinCounter: xWinCounter,
            oWinCounter: oWinCounter
        });
        localStorage.setItem("board", JSON.stringify(this.state.board));
        localStorage.setItem("currentPlayer", JSON.stringify(this.state.currentPlayer));
        localStorage.setItem("xWinCounter", xWinCounter);
        localStorage.setItem("oWinCounter", oWinCounter);
    }
}
