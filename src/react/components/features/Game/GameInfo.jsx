
function GameInfo({ settings, currentPlayer }) {
  const { min, max, player1Name, leftAttempts } = settings;

  return (
    <ul className="game__info shadow-1">
      <li className="game__info-item">
        {currentPlayer && (
          <>
            <strong className="game__info-label">Player turn:</strong> {currentPlayer}
          </>
        )}

        {!currentPlayer && player1Name && (
          <>
            <strong className="game__info-label">Player:</strong> {player1Name}
          </>
        )}
      </li>

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
