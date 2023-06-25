import { useState } from "react";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";
import "./App.css";

const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlayer, setXPlayer] = useState(true);
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  // taking the current state of the board
  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      // a,b,c are the 3 indexs for the player in order to win
      const [a, b, c] = WIN_CONDITIONS[i];

      // check if the value presented are all the same
      if (board[a] && (board[a] === board[b]) & (board[b] === board[c])) {
        // means the player has met one of the win conditions
        console.log(board[a]);
        setGameOver(true);
        return board[a];
      }
    }
  };

  const handleBoxClick = (boxId) => {
    // step 1: update the board
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxId) {
        return xPlayer === true ? "x".toUpperCase() : "o".toUpperCase();
      } else {
        return value;
      }
    });

    setBoard(updatedBoard);

    // step 2: check if a player has won
    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "X") {
        let { xScore } = score;
        xScore += 1;
        setScore({ ...score, xScore });
      } else {
        let { oScore } = score;
        oScore += 1;
        setScore({ ...score, oScore });
      }
    }

    console.log(score);
    // step 3 : change active player
    setXPlayer(!xPlayer);
  };

  // Gameover reset state

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setScore({ xScore: 0, oScore: 0 });
    setXPlayer(true);
  };

  return (
    <div className="App">
      <ScoreBoard score={score} xPlayer={xPlayer} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton reset={resetBoard} />
    </div>
  );
}

export default App;
