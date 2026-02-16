
function PlayerName({ name, onNameChange }) {
  return (
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
            value={name}
            onChange={(e) => onNameChange({ name: e.target.value })}
          />
          <label htmlFor="player-name" className="form-label">
            Name
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default PlayerName;
