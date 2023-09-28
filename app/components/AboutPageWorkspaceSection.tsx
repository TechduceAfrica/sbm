import React, { useRef, useEffect } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const AboutPageWorkspaceSection = () => {

  return (
    <div>
      <div>
        <div className="container-width t-b-padding sbm-value-container pb-10 custom-container-max-width">
          <div className="sbm-value-title-container">
            <motion.h3
              className="text-center lg:text-left"
              variants={fadeIn("", "", 0.7, 1)}
            >
              We approach the{" "}
              <span className="text-primary-blue">workspace </span>
              as something that{" "}
              <span className="text-primary-blue">adds value </span>
              to the <span className="text-primary-blue">world</span>
              <strong className="text-primary-blue">.</strong>
            </motion.h3>
          </div>
          <div className="abt-box-group pb-10">
          <div>
              <h5>10+</h5>
              <p>Years of experience</p>
            </div>
            <div className="sbm-value-right-box">
              <h5>113+</h5>
              <p>Satisfied clients</p>
            </div>
            <div>
              <h5>99.9%</h5>
              <p>Customer support</p>
            </div>
            <div className="sbm-value-right-box">
              <h5>115</h5>
              <p>Projects completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(AboutPageWorkspaceSection, "");
