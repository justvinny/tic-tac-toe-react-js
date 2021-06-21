import { useState } from "react";
import { checkWinner, displayWinner, resetGame } from "./BoardLogic";

const Board = ({score, setScore}) => {
    const [isTurn, setTurn] = useState(false);
    const [getBoard, setBoard] = useState(
        [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
        ]
    );

    const cellClick = (outer, inner) => () => {
        const boardValues = [...getBoard];
        const isCellEmpty = boardValues[outer][inner] === " ";

        if (isCellEmpty) {
            boardValues[outer][inner] = (isTurn) ? "X" : "O";
            setBoard(boardValues);
            checkWinner(boardValues) && displayWinner(isTurn, score, setScore) && resetGame(setBoard);
            setTurn(!isTurn);
        }
    };

    const boardRender = getBoard.map((row, outer) =>
        <tr key={`row-${outer}`}>{row.map((cell, inner) =>
            <td key={`cell-${outer}-${inner}`}className="Cell" onClick={cellClick(outer, inner)}>{cell}</td>)}</tr>);

    return <table className="Board">
        <tbody>
            {boardRender}
        </tbody>
    </table>
}

export default Board;