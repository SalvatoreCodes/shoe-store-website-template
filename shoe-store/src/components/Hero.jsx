import React from "react";
import "../styles/hero.css";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="Hero" id="hero">
      <div className="Hero-container">
        <div className="left-container">
          <Navbar />
          <div className="Hero-text">
            <h1>lorem ipsum</h1>
            <p className="Hero-paragraph">Lorem ipsum dolor sit amet.</p>
            <button>lorem ipsum</button>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1618677831708-0e7fda3148b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Hero"
          className="Hero-img"
        />
      </div>
    </div>
  );
}

export default Hero;
