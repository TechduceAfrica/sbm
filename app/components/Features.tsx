"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/motion";
import Image from "next/image";

const Features = () => {
  return (
    <div className=" m-auto w-[80%] p-3 ">
      {" "}
      <div className=" home-features-text gap-3 pt-[50px] text-center">
        <h5 className="font-body-text-2 text-body-text-colour">Features</h5>
      </div>
      <motion.div variants={fadeIn("", "", 0.7, 1)} className="text-center">
        <h2 className="font-semibold text-body-text-colour lg:text-[54px] md:text-[32px] text-[24px]">
          Why our clients can't stop{" "}
          <p>
            <span className="text-primary-blue">Loving</span> us
            <strong className="text-primary-blue">.</strong>
          </p>{" "}
        </h2>
      </motion.div>
      <div className="features-grid-container text-white font-body-text-2 cursor-pointer hidden lg:grid md:grid">
        <div className="item1 features-image1 relative">
          <h5>
            We tailor social media strategies to fit your business, industry,
            and goals.
          </h5>
          <div className="child w-full h-full"></div>
        </div>

        <div className="item2 features-image2 relative">
          <h5>
            We provide performance analytics and reports for data-driven
            decisions.
          </h5>
          <div className="child w-full h-full"></div>
        </div>

        <div className="item3 features-image3 relative">
          <h5>
            We monitor brand mentions, feedback, and industry trends for
            insights.
          </h5>
          <div className="child w-full h-full"></div>
        </div>

        <div className="item4 features-image4 relative">
          <h5>
            We provide Initializing Data for social media, Collecting data and
            insights.
          </h5>
          <div className="child w-full h-full"></div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex flex-wrap gap-4 text-white font-body-text-2 cursor-pointer lg:hidden md:hidden">
        <div className="relative w-[564px] h-[300px] rounded-[20px] features-image1 ">
          <div className="child w-full h-full text-center">
            <h5 className="absolute top-[80px] max-w-[450px] shrink ">
              We tailor social media strategies to meet your business, industry
              and goals
            </h5>
          </div>
        </div>
        <div className="relative w-[336px] h-[300px] rounded-[20px] features-image2 ">
          <div className="child w-full h-full text-center">
            {" "}
            <h5 className="absolute top-[92px]  shrink ">
              We provide performance analytics and reports for data-driven
              decisions.
            </h5>
          </div>
        </div>

        <div className="relative w-[336px] h-[300px] rounded-[20px] features-image3">
          <div className="child w-full h-full text-center">
            {" "}
            <h5 className="absolute top-[92px]  shrink ">
              We monitor brand mentions, feedback, and industry trends for
              insights.
            </h5>
          </div>
        </div>

        <div className="relative w-[564px] h-[300px] rounded-[20px] features-image4 ">
          <div className="child w-full h-full text-center">
            <h5 className="absolute lg:top-[151px] top-[87px] max-w-[450px] shrink ">
              We provide Initializing Data for social media, Collecting data and
              insights.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
