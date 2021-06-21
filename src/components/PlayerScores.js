const PlayerScores = ({score}) => {
    let xScore = score.x.score ?? 0;
    let oScore = score.o.score ?? 0;
    return (
        <div className="PlayerScores">
            <p>Player X: {xScore}</p>
            <p>Player O: {oScore}</p>
        </div>
    );
};

export default PlayerScores;