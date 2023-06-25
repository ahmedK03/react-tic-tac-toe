import { Fragment } from "react";
import "./ScoreBoard.css";

const ScoreBoard = ({ score, xPlayer }) => {
  let { xScore, oScore } = score;

  return (
    <Fragment>
      <div className="score_board">
        {/* Underline on the one not inactive */}
        <span className={`score x-score ${!xPlayer && "inactive"}`}>
          X - {xScore}
        </span>
        <span className={`score o-score ${xPlayer && "inactive"}`}>
          O - {oScore}
        </span>
      </div>
    </Fragment>
  );
};

export default ScoreBoard;
