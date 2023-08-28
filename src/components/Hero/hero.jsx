import React from "react";
import HeroImage from "/hero-image.png";
import "./hero.css";
import { HiLocationMarker, HiSearch } from "react-icons/hi";

import CountUp from "react-countup";

const hero = () => {
  return (
    <div className="hero-wrapper">
      <div className=" paddings innerWidth flexCenter hero-container">
        {/* HERO LEFT */}
        <div className=" flexColStart hero-left">
          <div className="hero-left__title">
            {/* <div className="orange-circle"></div> */}
            <h1>
              Rent
              <br />
              Your Space
              <br /> Explore
              <br /> the World
            </h1>
          </div>
          <div className="flexColStart secondaryText hero-left__description">
            <div className="descriptionHeader">
              Join Our Community of Hosts and Travelers:
            </div>
            <span>
              Whether you're sharing your space or seeking an adventure, we're
              here to connect you with a world of possibilities and
              unforgettable experiences.
            </span>
          </div>
          <div className="flexCenter hero-left__searchBar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="search" placeholder="search" />
            <div className="button">
              {" "}
              <HiSearch size={15} />
            </div>
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
