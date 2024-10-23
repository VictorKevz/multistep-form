import React, { useContext } from "react";
import logo from "../../assets/images/logo.png";
import asideIMG from "../../assets/images/side-image.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { DataContext, ThemeContext } from "../../App";
import "../../css/aside.css";

function AsideSection() {
  const { isDark, setDark } = useContext(ThemeContext);
  const { state } = useContext(DataContext);

  const serviceCount = state.step2?.services?.length;

  return (
    <aside className={`aside-wrapper ${serviceCount === 4 && "overflow"}`}>
      <figure>
        <img src={logo} alt="Company logo" className="logo" />
      </figure>
      <div className="aside-text-wrapper">
        <h1 className="title">Let's Connect!</h1>
        <p className="parag">
          Set up your account and choose packages in just a few steps.
        </p>
      </div>
      <figure>
        <img
          src={asideIMG}
          alt="Image of people answering a phone, illustrating customer service!"
          className="aside-img"
        />
      </figure>
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
