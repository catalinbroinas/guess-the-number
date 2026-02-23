import { GAME_RESULT } from "../../../constants/game.constants";

function GameResult({ result, playerName }) {
  const alertResult = {
    type: result === GAME_RESULT.won ? 'success' : 'danger',
    message: result === GAME_RESULT.won ? 'Congratulation' : 'You lost'
  };

  return (
    <div className="game__result">
      <p className={`alert-${alertResult.type}`}>
        {alertResult.message}{playerName && `, ${playerName}`}!
      </p>
    </div>
  );
}

export default GameResult;
