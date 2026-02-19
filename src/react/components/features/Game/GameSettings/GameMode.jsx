
function GameMode({ gameMode, onGameModeChange }) {
  return (
    <div className="form-select-group">
      <label htmlFor="game-mode" className="form-label-text">Game mode:</label>

      <select
        id="game-mode"
        className="form-select"
        value={gameMode}
        onChange={(e) => onGameModeChange(e.target.value)}
      >
        <option value="single">Single player</option>
        <option value="multi">Two players</option>
      </select>
    </div>
  );
}

export default GameMode;
