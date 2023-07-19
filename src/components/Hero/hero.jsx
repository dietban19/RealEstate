import React from "react";
import HeroImage from "../../../public/hero-image.png";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
const hero = () => {
  return (
    <div className="hero-wrapper">
      <div className=" paddings innerWidth flexCenter hero-container">
        {/* HERO LEFT */}
        <div className=" flexColStart hero-left">
          <div className="hero-left__title">
            <div className="orange-circle"></div>
            <h1>
              Discover
              <br /> Most Suitable
              <br /> Property
            </h1>
          </div>
          <div className="flexColStart secondaryText hero-left__description">
            <span>Find a Variety of properties that suit you very easily</span>
            <span className="secondaryText">
              Forget all difficulties in finding your new home
            </span>
          </div>
          <div className="flexCenter hero-left__searchBar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="search" placeholder="search" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter hero-left__stats">
            <div className="flexColCenter stats__statContent">
              <span>
                <CountUp start={8800} end={9000} duration={2} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter stats__statContent">
              <span>
                <CountUp start={1970} end={2000} duration={2} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stats__statContent">
              <span>
                <CountUp end={28} duration={2} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        {/* HERO RIGHT */}
        <div className="flexCenter hero-right">
          <div className="hero-right__image-container">
            <img src={HeroImage} alt="house"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
