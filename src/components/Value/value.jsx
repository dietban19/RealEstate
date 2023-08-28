import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./value.css";
import Value from "../../../public/value.png";
import data from "../../utils/accordion";
const value = () => {
  return (
    <section className=" v-wrapper" id="value">
      <div className="paddings innerWidth  flexCenter v-container">
        {/* LEFT SIDE */}
        <div className="v-left">
          <div className="v-left__imageContainer">
            {" "}
            <img src={Value} />
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            Our unwavering commitment to excellence ensures personalized,
            top-notch services.
            <br />
            We firmly believe in the transformative power of a conducive living
            environment.
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed ")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className=" primaryText accordionHeading">
                        {item.heading}
                      </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {" "}
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default value;
