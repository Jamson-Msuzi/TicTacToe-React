import React, { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "player active" : "player"}>
      <div className="player-info">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
            className="player-input"
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </div>
      <button onClick={handleEditClick} className="edit-button">
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
