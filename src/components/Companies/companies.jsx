import React from "react";
import "./companies.css";
import Terrafund from "../../assets/images/terrafund.png";
import Havenbridge from "../../assets/images/Havenbridge.png";
import Skyline from "../../assets/images/Skyline.png";
import Summithold from "../../assets/images/Summithold.png";
// import Prologis from "/prologis.png";
// import Realty from "/realty.png";
// import Tower from "/tower.png";
const Companies = () => {
  return (
    <div className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={Terrafund}></img>
        <img src={Havenbridge}></img>
        <img src={Skyline}></img>
        <img src={Summithold}></img>
      </div>
    </div>
  );
};

export default Companies;
