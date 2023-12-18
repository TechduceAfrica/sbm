import React, { useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const AboutPageWorkspaceSection = () => {
  const [counterOn, setCounterOn] = useState(false);
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
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="abt-box-group pb-10">
              <div>
                <h5>
                  {counterOn && (
                    <CountUp start={0} end={10} duration={2} delay={0} />
                  )}
                  +
                </h5>
                <p>Years of experience</p>
              </div>
              <div className="sbm-value-right-box">
                <h5>
                  {counterOn && (
                    <CountUp start={0} end={113} duration={3} delay={0.5} />
                  )}
                  +
                </h5>
                <p>Satisfied clients</p>
              </div>
              <div>
                <h5>
                  {counterOn && (
                    <CountUp start={0} end={99} duration={2} delay={1} />
                  )}
                  %
                </h5>
                <p>Customer support</p>
              </div>
              <div className="sbm-value-right-box">
                <h5>
                  {counterOn && (
                    <CountUp start={0} end={115} duration={3} delay={1.5} />
                  )}
                </h5>
                <p>Projects completed</p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(AboutPageWorkspaceSection, "");
