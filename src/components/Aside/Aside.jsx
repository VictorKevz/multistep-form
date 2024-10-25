import React, { useContext } from "react";
import { motion } from "framer-motion";

import logo from "../../assets/images/logo.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { DataContext, ThemeContext } from "../../App";
import "../../css/aside.css";
import { cardsVariants } from "../../variants";

function AsideSection() {
  const { isDark, setDark } = useContext(ThemeContext);
  const { state } = useContext(DataContext);

  const serviceCount = state.step2?.services?.length;

  return (
    <motion.aside
      className={`aside-wrapper ${serviceCount === 4 && "overflow"} ${
        isDark && "aside-dark"
      }`}
      variants={cardsVariants}
      initial="hidden"
      animate="visible"
      key={isDark}
      aria-labelledby="aside-title"
    >
      <figure>
        <img 
          src={logo} 
          alt="Company logo representing Company Name" 
          className="logo" 
        />
      </figure>
      <div className="aside-text-wrapper">
        <h1 id="aside-title" className={`title ${isDark && "text-dark"}`}>
          Let's Connect!
        </h1>
        <p className={`parag ${isDark && "medium-text-dark"}`}>
          Set up your account and choose packages in just a few steps.
        </p>
      </div>
      <div className="theme-wrapper">
        <button
          type="button"
          className={`theme-btn ${!isDark && "light"}`}
          onClick={() => setDark(false)}
          aria-label="Switch to light theme"
        >
          <LightModeIcon fontSize="large" /> Light
        </button>
        <button
          type="button"
          className={`theme-btn ${isDark && "dark"}`}
          onClick={() => setDark(true)}
          aria-label="Switch to dark theme"
        >
          <DarkModeIcon fontSize="large" /> Dark
        </button>
      </div>
      {isDark && <div className="overlay"></div>}
    </motion.aside>
  );
}

export default AsideSection;