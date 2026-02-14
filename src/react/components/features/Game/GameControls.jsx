
function GameControls({ onReset }) {
  return (
    <div className="game__controls">
      <button className="btn btn-primary" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default GameControls;
