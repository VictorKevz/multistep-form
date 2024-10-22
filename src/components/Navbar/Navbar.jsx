import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "../../css/navbar.css";
function Navbar() {
    const[isOpen,setOpen] = useState(false)
  return (
    <header className="header-wrapper">
      <nav className="nav-container">
        <figure>
          <img src={logo} alt="Company logo" className="logo" />
        </figure>
        <ul className={`links-wrapper ${isOpen && "open"}`}>
          <li className="nav-item">Services</li>
          <li className="nav-item">Features</li>
          <li className="nav-item current">Contact</li>
        </ul>
        <a href="#" className="sign-up">
          <AccountCircleIcon className="contact-icon" fontSize="large" />
          Sign up
        </a>
        <button type="button" className="toggle-btn" onClick={()=>setOpen(!isOpen)}>
            {isOpen ? 
            (<CloseIcon className="menu-icon" fontSize="large"/>) : 
            (<MenuIcon className="menu-icon" fontSize="large"/>)}
        </button>
      </nav>
      <div className={`mask ${isOpen && "open"}`}></div>
    </header>
  );
}

export default Navbar;
