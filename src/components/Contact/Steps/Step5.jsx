import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { DataContext, ThemeContext } from "../../../App";
import "../../../css/step5.css";
import successIcon from "../../../assets/images/success.png";
import { cardsVariants } from "../../../variants";
function Step5() {
  const { dispatch } = useContext(DataContext);
  const { isDark } = useContext(ThemeContext);
  return (
    <AnimatePresence mode="wait">
  <motion.div
    className={`step5-wrapper ${isDark && "cards-bg-dark"}`}
    variants={cardsVariants}
    initial="hidden"
    animate="visible"
    // key={isDark}
    role="document" 
  >
    <img
      src={successIcon}
      alt="A success icon indicating successful subscription"
      className="step5-icon"
      aria-hidden="true" 
    />
    <h2 className={`step5-title ${isDark && "text-dark"}`}>
      Thank You for Subscribing!
    </h2>
    <p className={`step5-parag ${isDark && "medium-text-dark"}`}>
      Your subscription has been successfully confirmed. We’re thrilled to have you on board! You will receive updates and access to all the services you’ve selected.
    </p>
    <button
      type="button"
      className={`reset-btn btn ${isDark && "dark-btn"}`}
      onClick={() => dispatch({ type: "RESET_STATE" })}
      aria-label="Return to the first step" 
    >
      Continue
    </button>
  </motion.div>
</AnimatePresence>
  );
}

export default Step5;
