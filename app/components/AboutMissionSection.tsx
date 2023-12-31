import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const AboutMissionSection = () => {
  return (
    <div className="bg-secondary-blue t-b-padding">
      <div className="container-width custom-container-max-width">
        <section className="abt-mission-sec">
          <div>
            <div>
              <motion.h3
                className="text-center lg:text-left"
                variants={fadeIn("", "", 0.7, 1)}
              >
                Our Mission<strong className="text-primary-blue">.</strong>
              </motion.h3>
            </div>
            <div>
              <p className="text-center lg:text-left max-w-md">
                Our mission is to harness the power of technology to transform
                the way business operate. We ultimately aim to build a legacy of
                wealth and impact through our passion for technology and a
                commitment to helping others.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://assets-social-brand-managers.netlify.app/AboutPage%20Images/our%20mission%20images_SBM.png"
              alt="social brand manager mission - power of technology - digital marketing brand"
              title="social brand manager - power of technology"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SectionWrapper(AboutMissionSection, "");
