import React, { useContext } from "react";
import { KeyboardDoubleArrowLeft } from "@mui/icons-material";
import { DataContext, ThemeContext } from "../../App";

function PrevButton() {
  const { dispatch } = useContext(DataContext);
  const { isDark } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className={`prev-btn btn ${isDark && "dark-btn"}`}
      onClick={() => dispatch({ type: "DECREMENT_STEP" })}
      aria-label="Go to the previous step"
    >
      <KeyboardDoubleArrowLeft fontSize="large" /> Prev
    </button>
  );
}

export default PrevButton;
