import React, { useContext } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import "../Buttons/styles/buttons.css";
import { DataContext, ThemeContext } from "../../App";

function NextButton({ handleValidation }) {
  const { dispatch, state } = useContext(DataContext);
  const { isDark } = useContext(ThemeContext);

  const handleSubmit = () => {
    if (handleValidation()) {
      dispatch({ type: "INCREMENT_STEP" });
    } else {
     dispatch({type:"SHOW_ERROR"})
     return;
    }
  };
  return (
    <button
    type="button"
    className={`next-btn btn ${isDark && "dark-btn"}`}
    onClick={handleSubmit}
    aria-label={state.stepCount === 4 ? "Confirm subscription" : "Go to the next step"}
  >
    {state.stepCount === 4 ? (
      "Confirm"
    ) : (
      <>
        Next <KeyboardDoubleArrowRightIcon fontSize="large" />
      </>
    )}
  </button>
  );
}

export default NextButton;
