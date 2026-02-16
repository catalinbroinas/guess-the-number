import { useState } from "react";
import NumberRange from "./NumberRange";
import PlayerName from "./PlayerName";

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

      <PlayerName />

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
