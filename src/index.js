import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './tic-tac-toe.react.js';
import { createBoard, tic, tac } from './game.js';

// TODO: move game init to separate function
// TODO: wrap local storage handling into separate functions
// TODO: evaluate win conditions
// TODO: add win counter for X and O

let board, currentPlayer = 1, xWinCounter = 0, oWinCounter = 0;
if (localStorage.getItem("board") === null) {
    console.log("Initializing new game...");
    board = createBoard();

} else {
    console.log("Loading game state from local storage...");
    board = JSON.parse(localStorage.getItem("board"));
    currentPlayer = JSON.parse(localStorage.getItem("currentPlayer"));
    xWinCounter = localStorage.getItem("xWinCounter");
    oWinCounter = localStorage.getItem("oWinCounter");
}

ReactDOM.render(
    <TicTacToe board={board} currentPlayer={currentPlayer} xWinCounter={xWinCounter} oWinCounter={oWinCounter} />,
    document.getElementById('game')
);

console.log("Ready to play!");
