import { useState } from "react";
import NumberRange from "./NumberRange";

function GameSettings({ onApply }) {
  const [settings, setSettings] = useState({
    min: '',
    max: ''
  });

  return (
    <form 
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        onApply({
          ...settings,
          min: Number(settings.min),
          max: Number(settings.max)
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
          <span className="fs-lg">Set player name (optional)</span>
        </legend>

        <div className="form-row">
          <div className="form-outline">
            <input
              id="player-name"
              type="text"
              className="form-control"
              placeholder="John"
            />
            <label htmlFor="player-name" className="form-label">
              Name
            </label>
          </div>
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
