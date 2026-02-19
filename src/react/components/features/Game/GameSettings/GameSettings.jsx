import { useState } from "react";
import NumberRange from "./NumberRange";
import PlayerName from "./PlayerName";
import AttemptsInput from "./AttemptsInput";
import GameMode from "./GameMode";

function GameSettings({ onApply }) {
  const [settings, setSettings] = useState({
    min: '',
    max: '',
    mode: 'single',
    playerName: '',
    attempts: ''
  });

  return (
    <form 
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        onApply({
          ...settings,
          min: Number(settings.min),
          max: Number(settings.max),
          playerName: settings.playerName.trim(),
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
          <PlayerName
            name ={settings.playerName}
            onNameChange={(value) => setSettings(prev => ({ ...prev, playerName: value }))}
          />

          {settings.mode === 'single' ? (
            <AttemptsInput
              attempts={settings.attempts}
              onAttemptsChange={(value) => setSettings(prev => ({ ...prev, attempts: value }))}
            />
          ) : (
            <PlayerName
              name ={settings.playerName}
              onNameChange={(value) => setSettings(prev => ({ ...prev, playerName: value }))}
            />
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
