import { useState } from "react";
import PlayerScores from "./PlayerScores";
import Board from "./Board";

const Game = () => {
    const [score, setScore] = useState({x: ["X", 0], o: ["O",0]});

    return <div className="Game">
        <PlayerScores score={score}/>
        <Board score={score} setScore={setScore}/>
    </div>
};

export default Game;