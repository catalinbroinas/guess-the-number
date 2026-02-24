import { GAME_MODE } from "../../../constants/game.constants";

function GameInfo({ settings, currentPlayer }) {
  const { min, max, mode, leftAttempts } = settings;

  return (
    <ul className="game__info">
      {currentPlayer && (
        <li className="game__info-item">
          {mode === GAME_MODE. single ? (
            <>
              <strong className="game__info-label">Player:</strong> {currentPlayer}
            </>
          ) : (
            <>
              <strong className="game__info-label">Player turn:</strong> {currentPlayer}
            </>
          )}
        </li>
      )}

      <li className="game__info-item">
        <strong className="game__info-label">Range:</strong> {min} - {max}
      </li>

      <li className="game__info-item">
        <strong className="game__info-label">Attempts left:</strong> {leftAttempts ?? 'Unlimited'}
      </li>
    </ul>
  );
}

export default GameInfo;
