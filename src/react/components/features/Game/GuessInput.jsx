import { useState } from "react";

function GuessInput({ numberRange, onGuess }) {
  const [localNumber, setLocalNumber] = useState("");

  return (
    <form className="form-container" onSubmit={(e) => {
      e.preventDefault();
      onGuess(Number(localNumber));
    }}>
      <div className="form-row">
        <div className="form-outline game__guess-field">
          <input
            id="guess-input"
            type="number"
            className="form-control"
            placeholder={numberRange.min}
            min={numberRange.min}
            max={numberRange.max}
            value={localNumber}
            onChange={(e) => setLocalNumber(e.target.value)}
          />
          <label htmlFor="guess-input" className="form-label">
            Enter your guess
          </label>
        </div>
      </div>

      <button 
        className="btn btn-primary game__guess-btn"
        disabled={localNumber === ""}
      >Guess</button>
    </form>
  );
}

export default GuessInput;
