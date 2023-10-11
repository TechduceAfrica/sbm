"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const analytics = [
  {
    title: "Tailored Solutions",
    image:
      "https://assets-social-brand-managers.netlify.app/community%20management%20new/tailored%20solutions.webp",
    text: "We customize community management strategies to match your brand's goals",
  },
  {
    title: "Platform Mastery",
    image:
      "https://assets-social-brand-managers.netlify.app/community%20management%20new/platform%20mastery.webp",
    text: "We excel in managing communities on various social media platforms.",
  },
  {
    title: "Data-Driven Insights",
    image:
      "https://assets-social-brand-managers.netlify.app/community%20management%20new/data%20driven%20insights.webp",
    text: "Our analytics experts optimize strategies for your community's impact.",
  },
  {
    title: "24/7 Monitoring",
    image:
      "https://assets-social-brand-managers.netlify.app/community%20management%20new/247%20monitoring.webp",
    text: "We're always here, to support your community and keep the conversation.",
  },
  {
    title: "Brand Advocacy",
    image:
      "https://assets-social-brand-managers.netlify.app/community%20management%20new/brand%20strategy.webp",
    text: "We turn your community into brand advocates, through effective campaigns.",
  },
  {
    title: "Collaborative Approach",
    image:
      "https://assets-social-brand-managers.netlify.app/community%20management%20new/collaborative%20approach.webp",
    text: "We're like an extension of your team, combining your vision with our expertise for results.",
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
        className="rounded-t-lg "
      />
      <div className="service-text flex flex-col justify-between p-6 gap-2 text-body-text-colour leading-7">
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
      <div className="m-auto text-center w-[80%] pb-[80px] custom-container-max-width">
        <h3 className=" inline-block">
          Why Choose SBM for {""}
          <span className="text-primary-blue">
            Community Management Service
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
