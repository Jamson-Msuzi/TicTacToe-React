import React from "react";

export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner ? `${winner} won!` : "It's a draw!"}</p>
      <button onClick={onRestart} className="restart-button">
        Rematch!
      </button>
    </div>
  );
}
