import { useState } from "react";

function GameSettings({ onApply }) {
  const [localRange, setLocalRange] = useState({
    min: "",
    max: ""
  });

  return (
    <form 
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        onApply({
          ...localRange,
          min: Number(localRange.min),
          max: Number(localRange.max)
        });
      }}
    >
      <fieldset className="form-fieldset">
        <legend className="form-legend mb-4">
          <span className="fs-lg">Set range</span>
        </legend>

        <div className="form-row">
          <div className="form-outline">
            <input
              id="min-range"
              type="number"
              className="form-control"
              placeholder="0"
              min="0"
              max="99"
              value={localRange.min}
              onChange={(e) => setLocalRange(prev => ({
                ...prev,
                min: e.target.value
              }))}
            />
            <label htmlFor="min-range" className="form-label">
              Min
            </label>
          </div>
        
          <div className="form-outline">
            <input
              id="max-range"
              type="number"
              className="form-control"
              placeholder="100"
              min="1"
              max="100"
              value={localRange.max}
              onChange={(e) => setLocalRange(prev => ({
                ...prev,
                max: e.target.value
              }))}
            />
            <label htmlFor="max-range" className="form-label">
              Max
            </label>
          </div>
        </div>
      </fieldset>

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
          localRange.min === "" ||
          localRange.max === "" ||
          (Number(localRange.min) >= Number(localRange.max))
        }
      >Apply</button>
    </form>
  );
}

export default GameSettings;
