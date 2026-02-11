
function GameSettings() {
  return (
    <form className="form-container">
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
              placeholder="1"
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
              placeholder="10"
            />
            <label htmlFor="max-range" className="form-label">
              Max
            </label>
          </div>

          <button className="btn btn-primary">Apply</button>
        </div>
      </fieldset>
    </form>
  );
}

export default GameSettings;
