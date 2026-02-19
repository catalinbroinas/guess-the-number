import { useId } from "react";

function PlayerName({
  name,
  onNameChange,
  label = 'Name',
  placeholder = 'John',
  id
}) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="form-outline">
      <input
        id={inputId}
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />
      <label htmlFor={inputId} className="form-label">
        {label}
      </label>
    </div>
  );
}

export default PlayerName;
