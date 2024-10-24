import React, { useContext } from "react";
import logo from "../../assets/images/logo.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { DataContext, ThemeContext } from "../../App";
import "../../css/aside.css";

function AsideSection() {
  const { isDark, setDark } = useContext(ThemeContext);
  const { state } = useContext(DataContext);

  const serviceCount = state.step2?.services?.length;

  return (
    <aside className={`aside-wrapper ${serviceCount === 4 && "overflow"} ${isDark && "aside-dark"}`}>
      <figure>
        <img src={logo} alt="Company logo" className="logo" />
      </figure>
      <div className="aside-text-wrapper">
        <h1 className={`title ${isDark && "text-dark"}`}>Let's Connect!</h1>
        <p className={`parag ${isDark && "medium-text-dark"}`}>
          Set up your account and choose packages in just a few steps.
        </p>
      </div>
      
      <div className={`theme-wrapper`}>
        <button
          type="button"
          className={`theme-btn ${!isDark && "light"}`}
          onClick={() => setDark(false)}
        >
          <LightModeIcon fontSize="large" /> Light
        </button>
        <button
          type="button"
          className={`theme-btn ${isDark && "dark"}`}
          onClick={() => setDark(true)}
        >
          <DarkModeIcon fontSize="large" /> Dark
        </button>
      </div>
      {isDark && <div className="overlay"></div>}{" "}
    </aside>
  );
}

export default AsideSection;
