import React from "react";
import "../styles/footer.css";
import facebookLogo from "../svg/facebook.svg";
import twitterLogo from "../svg/twitter.svg";
import instagramLogo from "../svg/instagram.svg";
import Logo from "./logo";

function Footer() {
  return (
    <div className="Footer" id="contact">
      <div className="Footer-container">
        <a href="#hero">
          <Logo className="Logo-content" />
        </a>
        <div className="Socials">
          <a href="https://www.facebook.com/putrabenedict" target="_blank">
            <img src={facebookLogo} alt="facebook" />
          </a>
          <a href="https://twitter.com/TotallyNotSalve" target="_blank">
            <img src={twitterLogo} alt="twitter" />
          </a>
          <a href="https://www.instagram.com/benedict_goni/" target="_blank">
            <img src={instagramLogo} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
