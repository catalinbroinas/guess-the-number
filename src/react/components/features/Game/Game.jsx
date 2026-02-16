import { useState } from "react";
import GameSettings from "./GameSettings/GameSettings";
import GuessInput from "./GuessInput";
import { randomInt } from "../../../../js/utils/numberUtils";
import Feedback from "./Feedback";
import GameControls from "./GameControls";

function Game() {
  // Date
  const GAME_STATUS = {
    idle: 'idle',
    playing: 'playing',
    end: 'end'
  };
  const FEEDBACK_MESSAGES = {
    start: (min, max) => `Enter a number between ${min} and ${max}.`,
    tooLow: (number) => `Number ${number} is too small. Try a larger number.`,
    tooHigh: (number) => `Number ${number} is too high. Try a smaller number.`,
    success: (number) => `Correct! The number was ${number}.`,
  };

  // State
  const [numberRange, setNumberRange] = useState({
    min: null,
    max: null
  });
  const [secretNumber, setSecretNumber] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.idle);

  const handleApplyRange = (range) => {
    setNumberRange(range);
    setSecretNumber(randomInt(range.min, range.max));
    setFeedbackMessage(FEEDBACK_MESSAGES.start(range.min, range.max));
    setGameStatus(GAME_STATUS.playing);
  };

  const handleGuess = (guess) => {
    if (guess === secretNumber) {
      setFeedbackMessage(FEEDBACK_MESSAGES.success(guess));
      setGameStatus(GAME_STATUS.end);
    } else {
      guess > secretNumber 
        ? setFeedbackMessage(FEEDBACK_MESSAGES.tooHigh(guess))
        : setFeedbackMessage(FEEDBACK_MESSAGES.tooLow(guess));
    }
  };

  const handleResetGame = () => {
    setGameStatus(GAME_STATUS.idle);
    setNumberRange({...numberRange, min: null, max: null});
    setSecretNumber(null);
    setFeedbackMessage('');
  };

  return (
    <div className="game">
      <h1 className="game__title">Guess the number</h1>

      <Feedback message={feedbackMessage} />

      {gameStatus === GAME_STATUS.idle && (
        <GameSettings onApply={handleApplyRange} />
      )}

      {gameStatus === GAME_STATUS.playing && (
        <GuessInput numberRange={numberRange} onGuess={handleGuess} />
      )}

      {gameStatus === GAME_STATUS.end && (
        <GameControls onReset={handleResetGame} />
      )}
    </div>
  );
}

export default Game;
