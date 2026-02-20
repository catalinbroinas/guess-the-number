
function GameControls({ onReset, onPlayAgain }) {
  return (
    <div className="game__controls">
      <button className="btn btn-primary-outline" onClick={onReset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={onPlayAgain}>
        Play Again
      </button>
    </div>
  );
}

export default GameControls;
