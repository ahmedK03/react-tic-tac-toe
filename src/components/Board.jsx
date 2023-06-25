import { Fragment } from "react";
import Box from "./Box";
import "./Board.css";

const Board = ({ board, onClick }) => {
  return (
    <Fragment>
      <div className="board">
        {board.map((value, idx) => {
          return (
            <Box
              value={value}
              key={idx}
              onClick={() => value === null && onClick(idx)}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default Board;
