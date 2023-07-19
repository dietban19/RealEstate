import React from "react";
import "./companies.css";
import Equinix from "../../../public/equinix.png";
import Prologis from "../../../public/prologis.png";
import Realty from "../../../public/realty.png";
import Tower from "../../../public/tower.png";
const Companies = () => {
  return (
    <div className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={Equinix}></img>
        <img src={Prologis}></img>
        <img src={Realty}></img>
        <img src={Tower}></img>
      </div>
    </div>
  );
};

export default Companies;
