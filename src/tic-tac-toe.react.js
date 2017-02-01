import React from 'react';
import Field from './field.react.js';
import {createBoard, checkField} from './game.js';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: props.board,
            currentPlayer: props.currentPlayer
        };
        this._handleReset = this._handleReset.bind(this);
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
        if (this.state.currentPlayer == -1) {
            playerTurn = "turn: O";
        } else {
            playerTurn = "turn: X";
        }

        return <div>
            <div className="game">{rows}</div>
            <div className="status-bar">
                <h1>Tic Tac Toe</h1>
                {playerTurn}<br/>
                <a onClick={this._handleReset} href="#">Reset</a>
            </div>
        </div>;
    }

    _handleReset() {
        localStorage.removeItem("board");
        localStorage.removeItem("currentPlayer");
        this.setState({
            board: createBoard(),
            currentPlayer: 1
        });
    }

    onPlayerInput(x, y) {
        this.setState({
            board: checkField(x, y, this.state.board, this.state.currentPlayer),
            currentPlayer: this.state.currentPlayer * -1
        });
        localStorage.setItem("board", JSON.stringify(this.state.board));
        localStorage.setItem("currentPlayer", JSON.stringify(this.state.currentPlayer));
    }
}
