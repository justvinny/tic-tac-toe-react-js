const checkWinner = (board) => {
    if ((board[0][0] !== " " && board[0][0] === board[0][1] && board[0][1] === board[0][2]) ||
        (board[1][0] !== " " && board[1][0] === board[1][1] && board[1][1] === board[1][2]) ||
        (board[2][0] !== " " && board[2][0] === board[2][1] && board[2][1] === board[2][2]) ||
        (board[0][0] !== " " && board[0][0] === board[1][0] && board[1][0] === board[2][0]) ||
        (board[0][1] !== " " && board[0][1] === board[1][1] && board[1][1] === board[2][1]) ||
        (board[0][2] !== " " && board[0][2] === board[1][2] && board[1][2] === board[2][2]) ||
        (board[0][0] !== " " && board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
        (board[0][2] !== " " && board[0][2] === board[1][1] && board[1][1] === board[2][0])) {
        return true;
    }

    return false;
};

const displayWinner = (isTurn, score, setScore) => {
    let winner = ((isTurn) ? "X" : "O");
    let scoreCopy = {...score};
    let winnerScore = winner === scoreCopy.x.name ? scoreCopy.x : scoreCopy.o;
    winnerScore.score++;
    setScore({...score, scoreCopy});
    alert("Winner is " + winner);
    return true;
};

const resetGame = (setBoard) => {
    setBoard([
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ]);
};

export { checkWinner, displayWinner, resetGame };