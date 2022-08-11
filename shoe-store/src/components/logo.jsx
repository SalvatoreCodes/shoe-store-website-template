import logo from "../svg/logo.svg";
import React from "react";
import "../styles/logo.css";

function logoComponent(props) {
  return (
    <div className="Logo">
      <div className={props.className}>
        <img src={logo} alt="logo" />
        <h1>FOOT</h1>
      </div>
    </div>
  );
}

export default logoComponent;
