import { GAME_MODE } from "../../../../constants/game.constants";

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
        <option value={GAME_MODE.single}>Single player</option>
        <option value={GAME_MODE.multi}>Two players</option>
      </select>
    </div>
  );
}

export default GameMode;
