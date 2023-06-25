import { Fragment } from "react";
import "./ResetButton.css";

const ResetButton = ({ reset }) => {
  return (
    <Fragment>
      <button className="reset-btn" onClick={reset}>
        Reset
      </button>
    </Fragment>
  );
};

export default ResetButton;
