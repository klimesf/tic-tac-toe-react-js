import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './tic-tac-toe.react.js';
import { createBoard, tic, tac } from './game.js';

// TODO: move game init to separate function
// TODO: wrap local storage handling into separate functions
// TODO: evaluate win conditions
// TODO: add win counter for X and O

let board, currentPlayer;
if (localStorage.getItem("board") === null) {
    console.log("Initializing new game...");
    board = createBoard();
    currentPlayer = 1;
} else {
    console.log("Loading game state from local storage...");
    board = JSON.parse(localStorage.getItem("board"));
    currentPlayer = JSON.parse(localStorage.getItem("currentPlayer"));
}

ReactDOM.render(
    <TicTacToe board={board} currentPlayer={currentPlayer} />,
    document.getElementById('game')
);

console.log("Ready to play!");
