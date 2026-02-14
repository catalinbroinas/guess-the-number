import { useState } from "react";
import GameSettings from "./GameSettings";
import GuessInput from "./GuessInput";
import { randomInt } from "../../../../js/utils/numberUtils";
import Feedback from "./Feedback";
import GameControls from "./GameControls";

function Game() {
  // State
  const [numberRange, setNumberRange] = useState({
    min: null,
    max: null
  });
  const [secretNumber, setSecretNumber] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [gameStatus, setGameStatus] = useState("idle");

  const handleApplyRange = (range) => {
    setNumberRange(range);
    setSecretNumber(randomInt(range.min, range.max));
    setFeedbackMessage("");
    setGameStatus('playing');
  };

  const handleGuess = (guess) => {
    if (guess === secretNumber) {
      setFeedbackMessage('Success!');
      setGameStatus("won");
    } else {
      guess > secretNumber 
        ? setFeedbackMessage('Too high.')
        : setFeedbackMessage('Too low.');
    }
  };

  const handleResetGame = () => {
    setGameStatus('idle');
    setNumberRange({...numberRange, min: null, max: null});
    setSecretNumber(null);
    setFeedbackMessage('');
  };

  return (
    <div className="game">
      <h1 className="game__title">Guess the number</h1>

      <Feedback message={feedbackMessage} />

      {gameStatus === 'idle' && (
        <GameSettings onApply={handleApplyRange} />
      )}
      {gameStatus === 'playing' && (
        <GuessInput numberRange={numberRange} onGuess={handleGuess} />
      )}
      {gameStatus === 'won' && (
        <GameControls onReset={handleResetGame} />
      )}
    </div>
  );
}

export default Game;
