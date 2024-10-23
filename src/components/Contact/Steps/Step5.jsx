import React, { useContext } from "react";
import { DataContext, ThemeContext } from "../../../App";
import "../../../css/step5.css";
import successIcon from "../../../assets/images/success.png"
function Step5() {
  const { state, dispatch } = useContext(DataContext);
  const { isDark } = useContext(ThemeContext);
  return (
      <div className="step5-wrapper">
        <img src={successIcon} alt="A success Icon" className="step5-icon" />
        <h2 className="step5-title">Thank You for Subscribing!</h2>
        <p className="step5-parag">
          Your subscription has been successfully confirmed. We’re thrilled to
          have you on board! You will receive updates and access to all the
          services you’ve selected.
        </p>
        <button type="button" className="reset-btn btn" onClick={() => dispatch({type:"RESET_STATE"})}>
          Continue
        </button>
      </div>
  );
}

export default Step5;
