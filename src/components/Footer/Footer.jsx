import React from "react";
import logo from "../../assets/images/logo.png";

import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <section className="footer-wrapper">
      <div className="footer-container">
        <figure>
          <img src={logo} alt="Company Logo" className="footer-logo" />
        </figure>
        <ul className="footer-links-wrapper">
          <li className="footer-item">
            <span className="footer-icon">
              <PhoneInTalkIcon fontSize="large" />
            </span>
            +345 981 0987
          </li>
          <li className="footer-item">
            <span className="footer-icon">
              <LocationOnIcon fontSize="large" />
            </span>
            Tutkijantie 2, Oulu, Finland
          </li>
          <li className="footer-item">
            <span className="footer-icon">
              <MailOutlineIcon fontSize="large" />
            </span>
            example@gmail.com
          </li>
        </ul>
        <div className="socials-copyright-wrapper">
          <ul className="socials-wrapper">
            <li className="social-item">
              <a href="https://github.com/VictorKevz" className="footer-link">
                <GitHubIcon />
              </a>
            </li>
            <li className="social-item">
              <a href="https://github.com/VictorKevz" className="footer-link">
                <LinkedInIcon />
              </a>
            </li>
            <li className="social-item">
              <a href="https://github.com/VictorKevz" className="footer-link">
                <InstagramIcon />
              </a>
            </li>
          </ul>
          <p className="copyright">
            Designed & Coded by
            <a href="https://github.com/VictorKevz">Victor.Kevz ©️ 2024</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
