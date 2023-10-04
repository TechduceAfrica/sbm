"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const analytics = [
  {
    title: "Comprehensive Data Analysis",
    image:
      "https://assets-social-brand-managers.netlify.app/social%20brand%20img/images%20(25)%201-1.png",
    text: "We dig deep to extract insights about your audience, content & campaign performance",
  },
  {
    title: "Customized Reporting",
    image:
      "https://assets-social-brand-managers.netlify.app/analytics-img/customized%20reporting.png",
    text: "Our reports are tailored to your Brand’s specific goals and vision",
  },
  {
    title: "Actionable Reccomendations",
    image:
      "https://assets-social-brand-managers.netlify.app/analytics-img/actionable%20reccomendation.png",
    text: "We don’t stop at data analysis, we also provide insights with actionable steps.",
  },
  {
    title: "Performance Tracking",
    image:
      "https://assets-social-brand-managers.netlify.app/analytics-img/performance%20tracking.png",
    text: "Our analytics offer real-time tracking, keeping you updated on your brand’s performance",
  },
  {
    title: "Competitor Analysis",
    image:
      "https://assets-social-brand-managers.netlify.app/brand-management/competitor%20analysis.png",
    text: "Gain a competitive edge by understanding your competitors in the digital arena",
  },
  {
    title: "ROI Measurement",
    image:
      "https://assets-social-brand-managers.netlify.app/analytics-img/roi%20measurement.png",
    text: "Track the impact of your digital efforts on your bottom line",
  },
];

const ServiceCard = ({ index, title, image, text }: any) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      key={index}
      className="bg-white lg:w-[300px] w-[300px] min-h-[500px] rounded-[23.18px] flex-col text-center  box-shadow"
    >
      <Image
        src={image}
        width={400}
        height={254}
        alt={title}
        title={title}
        className="rounded-t-lg"
      ></Image>
      <div className="service-text flex flex-col justify-between p-6 gap-2 min-h-[300px] text-body-text-colour leading-7">
        <div>
          <h4 className="font-semibold text-[27.81px]">{title}</h4>
          <p className="text-[21.63px] mt-4 leading-7">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

const AnalyticsCards = () => {
  return (
    <div className="flex justify-center gap-x-6 flex-wrap gap-y-10 ">
      {analytics.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  );
};

export default SectionWrapper(AnalyticsCards, "");
