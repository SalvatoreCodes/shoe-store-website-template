import React from "react";
import "../styles/navbar.css";
import logo from "../svg/logo.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="Navbar-container">
        <a href="#hero">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <a href="#about">About</a>
        <a href="#catalogue">Catalogue</a>
        <a href="#contact">Contact</a>
      </ul>
    </div>
  );
}

export default Navbar;
