import React, { useEffect, useState } from "react";
import Logo from "../../../public/logo.png";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

const header = () => {
  // Set the initial state of the open based on screen width
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const headerWrapper = document.querySelector(".h-wrapper");
      if (window.scrollY > 0) {
        headerWrapper.classList.add("scrolled");
      } else {
        headerWrapper.classList.remove("scrolled");
      }
    };
    const handleResize = () => {
      // Always open the menu when screen width is greater than 768 pixels
      setOpen(window.innerWidth > 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function toggleNav() {
    setOpen((prevOpen) => !prevOpen);
  }
  console.log(open);
  return (
    <section className="h-wrapper">
      <div className=" flexCenter innerWidth paddings  h-container">
        <img src={Logo} alt="logo" width={100} />

        <div className={`flexCenter h-menu ${open ? "" : "closed"}`}>
          <Link
            to="residencies"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
          >
            Residencies
          </Link>

          {/* <a href="#residences"></a> */}
          <Link to="values" spy={true} smooth={true} offset={20} duration={500}>
            Our Value
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
          >
            Contact Us
          </Link>

          <Link
            to="getstart"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
          >
            Get Started
          </Link>
          <button className="button">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
            >
              Contact
            </Link>
          </button>
        </div>

        <div className="menu-icon">
          <button onClick={toggleNav}>
            {open ? <MdClose size={25} /> : <BiMenuAltRight size={25} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default header;
