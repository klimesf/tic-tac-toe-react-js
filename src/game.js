function createBoard(xSize = 20, ySize = 20) {
    let board = [];
    for (let i = 0; i < xSize; ++i) {
        board[i] = [];
        for (let j = 0; j < ySize; ++j) {
            board[i][j] = 0;
        }
    }

    return board;
}

function checkField(x, y, board, currentPlayer) {
    if (x >= board.lenght || y >= board[x].length) {
        throw "Invalid coordinates.";
    }
    if (!isEmpty(x, y, board)) {
        throw "This place is not empty.";
    }

    board[x][y] = currentPlayer;

    checkIfGameIsOver(x, y, board);

    return board;
}

function isEmpty(x, y, board) {
    return board[x][y] === 0;
}

function checkIfGameIsOver(x, y, board) {
    if (x >= board.lenght || y >= board.length) {
        throw "Invalid coordinates.";
    }

    // let sum = 0;
    // for (let i = x; i < x + 6 && i < board.length; ++i) {
    //     sum += board[i][y];
    // }
    // if (sum === 5 || sum === -5) {
    //     return true;
    // }
    //
    // sum = 0;
    // for (let i = x; i > x - 6  && i > 0; ++i) {
    //     sum += board[i][y];
    // }
    // if (sum === 5 || sum === -5) {
    //     return true;
    // }
    //
    // sum = 0;
    // for (let i = y; i < y + 6 && i < board[x].length; ++i) {
    //     sum += board[x][i];
    // }
    // if (sum === 5 || sum === -5) {
    //     return true;
    // }
    //
    // sum = 0;
    // for (let i = y; i > y - 6  && i > 0; ++i) {
    //     sum += board[x][i];
    // }
    // if (sum === 5 || sum === -5) {
    //     return true;
    // }

}

export { createBoard, checkField }
