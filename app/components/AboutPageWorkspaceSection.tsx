import React, { useRef, useEffect } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion, useAnimation, AnimationControls, TargetAndTransition } from "framer-motion";
import { fadeIn } from "../utils/motion";

const AboutPageWorkspaceSection = () => {
  const controls = useAnimation();
  const h5Elements = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLHeadingElement | null;
            if (target) {
              const startValue = 0; // You can change this to the desired starting value
              const endValue = parseInt(target.innerText, 10); // Get the static number from the h5 element
              const duration = 2000; // Animation duration in milliseconds

              // Define a sequence of animations
              const sequence: TargetAndTransition[] = [
                {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
                {
                  scale: 1.1,
                  opacity: 1,
                  transition: { duration: 0.5 },
                },
                {
                  scale: 1,
                  opacity: 1,
                  transition: { duration: duration / 1000, delay: 0.1 },
                  value: endValue,
                },
              ];

              controls.start(sequence);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    h5Elements.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [controls]);

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
              <h5 ref={(element) => h5Elements.current.push(element)}>10+</h5>
              <p>Years of experience</p>
            </div>
            <div className="sbm-value-right-box">
              <h5 ref={(element) => h5Elements.current.push(element)}>113+</h5>
              <p>Satisfied clients</p>
            </div>
            <div>
              <h5 ref={(element) => h5Elements.current.push(element)}>99.9%</h5>
              <p>Customer support</p>
            </div>
            <div className="sbm-value-right-box">
              <h5 ref={(element) => h5Elements.current.push(element)}>115</h5>
              <p>Projects completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(AboutPageWorkspaceSection, "");
