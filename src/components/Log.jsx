import React from "react";

export default function Log({ turns }) {
  return (
    <div id="log-container">
      {/* <h3>Move Log</h3> */}
      <ol id="log">
        {turns.length === 0 ? (
          <li>No moves yet</li>
        ) : (
          turns.map((turn) => (
            <li key={`${turn.square.row}-${turn.square.col}`}>
              {turn.player} selected {turn.square.row},{turn.square.col}
            </li>
          ))
        )}
      </ol>
    </div>
  );
}
