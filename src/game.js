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

    return board;
}

function isEmpty(x, y, board) {
    return board[x][y] === 0;
}

function checkIfGameIsOver(x, y, board) {
    if (x >= board.lenght || y >= board.length) {
        throw "Invalid coordinates.";
    }

    let sum = 0;
    for (let i = x; i < x + 5 && i < board.length; ++i) {
        sum += board[i][y];
    }
    if (sum >= 5 || sum <= -5) {
        return true;
    }

    sum = 0;
    for (let i = x; i > x - 5 && i > 0; --i) {
        sum += board[i][y];
    }
    if (sum >= 5 || sum <= -5) {
        return true;
    }

    sum = 0;
    for (let i = y; i < y + 5 && i < board[x].length; ++i) {
        sum += board[x][i];
    }
    if (sum >= 5 || sum <= -5) {
        return true;
    }

    sum = 0;
    for (let i = y; i > y - 5 && i > 0; --i) {
        sum += board[x][i];
    }
    if (sum >= 5 || sum <= -5) {
        return true;
    }

    sum = 0;
    for (let i = x, j = y; i > x - 5 && i > 0 && j > y - 5 && j > 0; --i, --j) {
        sum += board[i][j];
    }
    if (sum >= 5 || sum <= -5) {
        return true;
    }

    sum = 0;
    for (let i = x, j = y; i < x + 5 && i < board.length && j > y - 5 && j > 0; ++i, --j) {
        sum += board[i][j];
    }
    if (sum >= 5 || sum <= -5) {
        return true;
    }

    sum = 0;
    for (let i = x, j = y; i > x - 5 && i > 0 && j < y + 5 && j < board.length; --i, ++j) {
        sum += board[i][j];
    }
    if (sum >= 5 || sum <= -5) {
        return true;
    }

    sum = 0;
    for (let i = x, j = y; i < x + 5 && i < board.length && j < y + 5 && j < board.length; ++i, ++j) {
        sum += board[i][j];
    }
    if (sum >= 5 || sum <= -5) {
        return true;
    }


    return false;
}

export {createBoard, checkField, checkIfGameIsOver}
