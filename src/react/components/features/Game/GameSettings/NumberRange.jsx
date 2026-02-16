
function NumberRange({ min, max, onRangeChange }) { 
  return (
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
            value={min}
            onChange={(e) => onRangeChange({min: e.target.value })}
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
            value={max}
            onChange={(e) => onRangeChange({ max: e.target.value })}
          />
          <label htmlFor="max-range" className="form-label">
            Max
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default NumberRange;
