
function GameInfo({ settings, currentPlayer }) {
  const { min, max, player1Name, leftAttempts } = settings;

  return (
    <div className="game__info">
      <p className="text">
        {currentPlayer ? (
          <>Player turn: {currentPlayer}<br /></>
        ) : (
          player1Name && <>Hello, {player1Name}!<br /></>
        )}
        Range: {min} - {max}. <br />
        Attempts left: {leftAttempts ?? 'Unlimited'}
      </p>
    </div>
  );
}

export default GameInfo;
