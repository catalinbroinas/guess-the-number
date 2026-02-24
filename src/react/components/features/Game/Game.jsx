import { useState } from "react";
import GameSettings from "./GameSettings/GameSettings";
import GuessInput from "./GuessInput";
import { randomInt } from "../../../../js/utils/numberUtils";
import Feedback from "./Feedback";
import GameControls from "./GameControls";
import GameInfo from "./GameInfo";
import GameResult from "./GameResult";
import {
  GAME_MODE,
  GAME_STATUS,
  GAME_RESULT,
  DEFAULT_SETTINGS,
  FEEDBACK_MESSAGES
}from "../../../constants/game.constants";

function Game() {
  // State
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [secretNumber, setSecretNumber] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.idle);
  const [gameResult, setGameResult] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const handleCurrentPlayer = () => {
    setCurrentPlayer(prev => (
      prev === settings.player1Name
        ? settings.player2Name
        : settings.player1Name
    ));
  };

  const handleApplySettings = (newSettings) => {
    const normalizeSettings = {
      ...newSettings,
      player1Name:
        newSettings.mode === GAME_MODE.multi
          ? newSettings.player1Name || 'Player 1'
          : newSettings.player1Name,
      player2Name:
        newSettings.mode === GAME_MODE.multi
          ? newSettings.player2Name || 'Player 2'
          : '',
      leftAttempts: newSettings.attempts || null
    };
    const { min, max, player1Name } = normalizeSettings;
    
    setSettings(normalizeSettings);
    setSecretNumber(randomInt(min, max));
    setGameStatus(GAME_STATUS.playing);
    setCurrentPlayer(player1Name);
  };

  const handleGuess = (guess) => {
    const nextAttempts = settings.leftAttempts !== null 
      ? settings.leftAttempts - 1
      : null;
    if (nextAttempts !== null) {
      setSettings({ ...settings, leftAttempts: nextAttempts })
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

    if (settings.mode === GAME_MODE.multi) {
      handleCurrentPlayer();
    }

    guess > secretNumber 
      ? setFeedbackMessage(FEEDBACK_MESSAGES.tooHigh(guess))
      : setFeedbackMessage(FEEDBACK_MESSAGES.tooLow(guess));
  };

  const handleResetGame = () => {
    setGameStatus(GAME_STATUS.idle);
    setSettings(DEFAULT_SETTINGS);
    setSecretNumber(null);
    setCurrentPlayer('');
    setFeedbackMessage('');
  };

  const handlePlayAgain = () => {
    const { min, max, player1Name } = settings;

    setSettings({ ...settings, leftAttempts: settings.attempts});
    setSecretNumber(randomInt(min, max));
    setCurrentPlayer(player1Name);
    setFeedbackMessage('');
    setGameStatus(GAME_STATUS.playing);
  };

  return (
    <div className="game">
      <h1 className="game__title">Guess the number</h1>

      {gameStatus === GAME_STATUS.idle && (
        <GameSettings onApply={handleApplySettings} />
      )}

      {gameStatus === GAME_STATUS.playing && (
        <>
          <GameInfo
            settings={settings}
            currentPlayer={settings.mode === GAME_MODE.multi ? currentPlayer : ''}
          />

          <Feedback message={feedbackMessage} />

          <GuessInput
            min={settings.min}
            max={settings.max}
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
          
          <GameControls
            onReset={handleResetGame}
            onPlayAgain={handlePlayAgain}
          />
        </>
      )}
    </div>
  );
}

export default Game;
