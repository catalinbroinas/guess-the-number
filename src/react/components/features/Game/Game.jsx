import { useState } from "react";
import GameSettings from "./GameSettings/GameSettings";
import GuessInput from "./GuessInput";
import { randomInt } from "../../../../js/utils/numberUtils";
import Feedback from "./Feedback";
import GameControls from "./GameControls";
import GameInfo from "./GameInfo";
import GameResult from "./GameResult";

function Game() {
  // Date
  const GAME_STATUS = {
    idle: 'idle',
    playing: 'playing',
    end: 'end'
  };
  const GAME_RESULT = {
    won: 'won',
    lost: 'lost'
  };
  const FEEDBACK_MESSAGES = {
    tooLow: (number) => `Number ${number} is too small.`,
    tooHigh: (number) => `Number ${number} is too high.`,
  };

  // State
  const [settings, setSettings] = useState({
    min: null,
    max: null,
    mode: 'single',
    player1Name: '',
    player2Name: '',
    attempts: null
  });
  const [secretNumber, setSecretNumber] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.idle);
  const [gameResult, setGameResult] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(settings.player1Name);

  const handleCurrentPlayer = () => {
    setCurrentPlayer(prev => (
      prev === settings.player1Name
        ? settings.player2Name
        : settings.player1Name
    ));
  };

  const handleApplyRange = (newSettings) => {
    const { min, max, mode, player1Name } = newSettings;
    
    setSettings(newSettings);
    setSecretNumber(randomInt(min, max));
    setGameStatus(GAME_STATUS.playing);

    if (mode === 'multi') {
      setCurrentPlayer(player1Name);
    }
  };

  const handleGuess = (guess) => {
    const nextAttempts = settings.attempts !== null 
      ? settings.attempts - 1
      : null;
    if (nextAttempts !== null) {
      setSettings({ ...settings, attempts: nextAttempts })
    }

    if (guess === secretNumber) {
      setGameResult(GAME_RESULT.won);
      setGameStatus(GAME_STATUS.end);
      return;
    }

    const hasAttemptsLeft = nextAttempts === null || nextAttempts > 0;
    if (!hasAttemptsLeft) {
      setGameResult(GAME_RESULT.lost);
      setGameStatus(GAME_STATUS.end);
      return;
    }

    if (settings.mode !== 'single') {
      handleCurrentPlayer();
    }

    guess > secretNumber 
      ? setFeedbackMessage(FEEDBACK_MESSAGES.tooHigh(guess))
      : setFeedbackMessage(FEEDBACK_MESSAGES.tooLow(guess));
  };

  const handleResetGame = () => {
    setGameStatus(GAME_STATUS.idle);
    setSettings({
      ...settings,
      min: null,
      max: null,
      mode: 'single',
      player1Name: '',
      player2Name: '',
      attempts: null});
    setSecretNumber(null);
    setCurrentPlayer('');
    setFeedbackMessage('');
  };

  return (
    <div className="game">
      <h1 className="game__title">Guess the number</h1>

      {gameStatus === GAME_STATUS.idle && (
        <GameSettings onApply={handleApplyRange} />
      )}

      {gameStatus === GAME_STATUS.playing && (
        <>
          <GameInfo
            settings={settings}
            currentPlayer={settings.mode !== 'single' ? currentPlayer : ''}
          />

          <Feedback message={feedbackMessage} />

          <GuessInput 
            numberRange={settings} 
            onGuess={handleGuess} 
          />
        </>
      )}

      {gameStatus === GAME_STATUS.end && (
        <>
          <GameResult
            playerName={currentPlayer}
            result={gameResult}
          />
          
          <GameControls onReset={handleResetGame} />
        </>
      )}
    </div>
  );
}

export default Game;
