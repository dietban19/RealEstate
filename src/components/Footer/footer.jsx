import React from "react";
import "./footer.css";
import Logo from "/dwellr-logo.png";
const footer = () => {
  return (
    <span className="f-wrapper">
      <div className="padding innerWidth flexCenter f-container">
        {/* Left Side */}
        <div className="flexColStart f-left">
          <img src={Logo} alt="logo"></img>
          <div className="thirdText">
            Enhancing lives through <br />
            ideal living spaces
          </div>
        </div>

        {/* Right Side */}
        <div className="flexColEnd f-right">
          <span className="primaryText">Information</span>
          <span className="thirdText">145 New York, FL 5467, USA</span>
          <nav className="flexCenter navContainer">
            <a href="#">Properties</a>
            <a href="#">Services</a>
            <a href="#">Product</a>
            <a href="#">About us</a>
          </nav>
        </div>
      </div>
    </span>
  );
};

export default footer;
