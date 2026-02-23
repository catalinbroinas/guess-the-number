import { useState } from "react";
import NumberRange from "./NumberRange";
import PlayerName from "./PlayerName";
import AttemptsInput from "./AttemptsInput";
import GameMode from "./GameMode";
import {
  GAME_MODE,
  DEFAULT_GAME_SETTINGS_FORM
} from "../../../../constants/game.constants";

function GameSettings({ onApply }) {
  const [settings, setSettings] = useState(DEFAULT_GAME_SETTINGS_FORM);

  return (
    <form 
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        onApply({
          ...settings,
          min: Number(settings.min),
          max: Number(settings.max),
          mode: settings.mode,
          player1Name: settings.player1Name.trim(),
          player2Name: settings.player2Name.trim(),
          attempts: settings.attempts === ''
            ? null
            : Number(settings.attempts)
        });
      }}
    >
      <NumberRange
        min={settings.min}
        max={settings.max}
        onRangeChange={(range) => setSettings(prev => ({...prev, ...range}))}
      />

      <fieldset className="form-fieldset">
        <legend className="form-legend mb-4">
          <span className="fs-lg">Other options (optional)</span>
        </legend>

        <div className="form-row mb-4">
          <GameMode 
            gameMode={settings.mode}
            onGameModeChange={(value) => setSettings(prev => ({ ...prev, mode: value }))}
          />
        </div>

        <div className="form-row">
          {settings.mode === GAME_MODE.single ? (
            <>
              <PlayerName
                name ={settings.player1Name}
                onNameChange={(value) => setSettings(prev => ({ ...prev, player1Name: value }))}
              />
              
              <AttemptsInput
                attempts={settings.attempts}
                onAttemptsChange={(value) => setSettings(prev => ({ ...prev, attempts: value }))}
              />
            </>
          ) : (
            <>
              <PlayerName
                name ={settings.player1Name}
                onNameChange={(value) => setSettings(prev => ({ ...prev, player1Name: value }))}
                label="Player 1 name"
                placeholder="John"
              />

              <PlayerName
                name ={settings.player2Name}
                onNameChange={(value) => setSettings(prev => ({ ...prev, player2Name: value }))}
                label="Player 2 name"
                placeholder="Allan"
              />
            </>
          )}
        </div>
      </fieldset>

      <button
        className="btn btn-primary"
        disabled={
          settings.min === "" ||
          settings.max === "" ||
          (Number(settings.min) >= Number(settings.max))
        }
      >Apply</button>
    </form>
  );
}

export default GameSettings;
