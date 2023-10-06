"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const analytics = [
  {
    title: "Customized Solutions",
    image:
      "https://assets-social-brand-managers.netlify.app/socila%20media%20strategy%20new/customized%20solutions.webp",
    text: "We create custom social media strategies based on your brand, goals.",
  },
  {
    title: "Data-Driven Approach",
    image:
      "https://assets-social-brand-managers.netlify.app/socila%20media%20strategy%20new/data-driven%20approavh.webp",
    text: "Our data-driven strategies guarantee purposeful actions and tangible results.",
  },
  {
    title: "Engaging Contents",
    image:
      "https://assets-social-brand-managers.netlify.app/socila%20media%20strategy%20new/engaging%20content.webp",
    text: "Content is king, We create engaging content: visuals, articles, videos.",
  },
  {
    title: "Consistent Posting",
    image:
      "https://assets-social-brand-managers.netlify.app/socila%20media%20strategy%20new/consistent%20posting.webp",
    text: "Consistency is crucial. We'll help you stay on track for a loyal audience.",
  },
  {
    title: "Community Building",
    image:
      "https://assets-social-brand-managers.netlify.app/socila%20media%20strategy%20new/community%20building.webp",
    text: "Building a loyal online community is key. We'll help you foster loyalty.",
  },
  {
    title: "Measurable Results",
    image:
      "https://assets-social-brand-managers.netlify.app/socila%20media%20strategy%20new/measurable%20results.webp",
    text: "We deliver results, proving how your social media efforts drive real-world growth.",
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
    <div className="bg-white t-b-padding">
      <div className="m-auto text-center w-[80%] pb-[80px]">
        <h3 className=" inline-block">
          Why Choose SBM for{" "}
          <span className="text-primary-blue">
            Social Media Strategy Development
            <strong className="text-primary-blue">.</strong>
          </span>
        </h3>
      </div>
      <div className="flex justify-center gap-x-6 flex-wrap gap-y-10 ">
        {analytics.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(SocialMStrategyCards, "");
