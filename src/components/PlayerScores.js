const PlayerScores = ({score}) => {
    return (
        <div className="PlayerScores">
            <p>Player X: {score.x[1]}</p>
            <p>Player O: {score.o[1]}</p>
        </div>
    );
};

export default PlayerScores;