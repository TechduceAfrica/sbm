"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const analytics = [
  {
    title: "Targeted Campaigns",
    image:
      "https://assets-social-brand-managers.netlify.app/Social%20Media%20advertising%20new/Targeted%20campaigns.webp",
    text: "We design laser-focused ad campaigns tailored to your specific audience.",
  },
  {
    title: "Multi Platform Expertise",
    image:
      "https://assets-social-brand-managers.netlify.app/Social%20Media%20advertising%20new/multi%20platform%20expertise.webp",
    text: "We excel on all major social media platforms to boost your brand's visibility.",
  },
  {
    title: "Compelling ad Creatives",
    image:
      "https://assets-social-brand-managers.netlify.app/Social%20Media%20advertising%20new/compelling%20ad%20creative.webp",
    text: "We create visually stunning and compelling copy that grab attention and inspire action.",
  },
  {
    title: "Budget Optimization",
    image:
      "https://assets-social-brand-managers.netlify.app/Social%20Media%20advertising%20new/Budget%20optimization.webp",
    text: "We maximize your advertising budget’s efficiency, ensuring you get the best ROI possible.",
  },
  {
    title: "A/B Testing",
    image:
      "https://assets-social-brand-managers.netlify.app/Social%20Media%20advertising%20new/ab%20testing.webp",
    text: "Our Continuous testing help identify the most effective Ad strategy to achieve your goal.",
  },
  {
    title: "Performance Analytics",
    image:
      "https://assets-social-brand-managers.netlify.app/Social%20Media%20advertising%20new/performance%20analytics.webp",
    text: "We provide comprehensive reports that break down campaign performance",
  },
];
const ServiceCard = ({ index, title, image, text }: any) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      key={index}
      className="bg-white lg:w-[300px] w-[300px]  rounded-[23.18px] flex-col text-center  box-shadow"
    >
      <Image
        src={image}
        width={400}
        height={254}
        alt={title}
        title={title}
        className="rounded-t-lg"
      />
      <div className="service-text flex flex-col justify-between p-6 gap-2  text-body-text-colour leading-7">
        <div>
          <h4 className="font-semibold text-[27.81px]">{title}</h4>
          <p className="text-[21.63px] mt-4 leading-7">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

const SocialMStrategyCards = () => {
  return (
    <div className="bg-white t-b-padding">
      <div className="m-auto text-center w-[80%] pb-[80px]">
        <h3 className=" inline-block">
          Why Choose SBM for{" "}
          <span className="text-primary-blue">
            Social Media Advertising Service
            <strong className="text-primary-blue">.</strong>
          </span>
        </h3>
      </div>
      <div className="   service-next-p-cards custom-container-max-width  ">
        {analytics.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(SocialMStrategyCards, "");
