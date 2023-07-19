import React from "react";
import "./getstarted.css";
const getstarted = () => {
  return (
    <section className="gs-wrapper" id="getstart">
      <div className="padding innerWidth  gs-container">
        <div className="flexColCenter innerContainer">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>

          <button className="gs-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default getstarted;
