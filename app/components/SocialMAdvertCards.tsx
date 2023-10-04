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
      "https://assets-social-brand-managers.netlify.app/social%20advertising/images%20(25)%201.png",
    text: "We design laser-focused ad campaigns tailored to your specific audience.",
  },
  {
    title: "Multi Platform Expertise",
    image:
      "https://assets-social-brand-managers.netlify.app/social%20advertising/images%20(25)%201-2.png",
    text: "We excel on all major social media platforms to boost your brand's visibility.",
  },
  {
    title: "Compelling ad Creatives",
    image:
      "https://assets-social-brand-managers.netlify.app/social%20advertising/images%20(25)%201-4.png",
    text: "We create visually stunning and compelling copy that grab attention and inspire action.",
  },
  {
    title: "Budget Optimization",
    image:
      "https://assets-social-brand-managers.netlify.app/social%20advertising/images%20(25)%201-1.png",
    text: "We maximize your advertising budget’s efficiency, ensuring you get the best ROI possible.",
  },
  {
    title: "A/B Testing",
    image:
      "https://assets-social-brand-managers.netlify.app/social%20advertising/images%20(25)%201-3.png",
    text: "Our Continuous testing help identify the most effective Ad strategy to achieve your goal.",
  },
  {
    title: "Performance Analytics",
    image:
      "https://assets-social-brand-managers.netlify.app/social%20advertising/images%20(25)%201-5.png",
    text: "We provide comprehensive reports that break down campaign performance",
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

const SocialMStrategyCards = () => {
  return (
    <div className="flex justify-center gap-x-6 flex-wrap gap-y-10 ">
      {analytics.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  );
};

export default SectionWrapper(SocialMStrategyCards, "");
