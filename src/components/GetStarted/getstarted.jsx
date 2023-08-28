import React from "react";
import "./getstarted.css";
const getstarted = () => {
  return (
    <section className="gs-wrapper" id="getstart">
      <div className="padding innerWidth  gs-container">
        <div className="flexColCenter innerContainer">
          <span className="primaryText">Get Started with Dwellr</span>
          <span className="secondaryText">
            Get Exclusive Property Alerts.
            <br />
            Subscribe to Dwellr for the latest rentals, deals, and more
          </span>

          <button className="gs-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default getstarted;
