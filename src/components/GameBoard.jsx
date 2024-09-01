import React from "react";

export default function GameBoard({ onSelectSquare, board }) {
  return (
    <div id="game-board-container">
      <div id="game-board">
        {board.map((row, rowIndex) => (
          <div className="board-row" key={rowIndex}>
            {row.map((playerSymbol, colIndex) => (
              <button
                key={colIndex}
                onClick={() => onSelectSquare(rowIndex, colIndex)}
                disabled={playerSymbol !== null}
                className="board-square"
              >
                {playerSymbol}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
