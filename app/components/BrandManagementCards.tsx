"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const analytics = [
  {
    title: "Brand strategy",
    image:
      "https://assets-social-brand-managers.netlify.app/brand%20management%20strategy%20new/Brand%20strategy.webp",
    text: "We help you define your brand’s identity for a compelling online presence.",
  },
  {
    title: "Visual Identity",
    image:
      "https://assets-social-brand-managers.netlify.app/brand%20management%20strategy%20new/Visual%20Identity.webp",
    text: "We craft a captivating visual identity that resonates with your audience.",
  },
  {
    title: "Content Alignment",
    image:
      "https://assets-social-brand-managers.netlify.app/content%20creation%20new/content%20curation.webp",
    text: "We ensure that every piece of content aligns with your brand’s voice & objectives.",
  },
  {
    title: "Reputation Management",
    image:
      "https://assets-social-brand-managers.netlify.app/brand%20management%20strategy%20new/reputation%20management.webp",
    text: "We protect your brand’s reputation by monitoring online conversation.",
  },
  {
    title: "Crisis Management",
    image:
      "https://assets-social-brand-managers.netlify.app/brand%20management%20strategy%20new/crisis%20managemnet.webp",
    text: "We provide expert guidance to mitigate damage and maintain your brand’s identity.",
  },
  {
    title: "Competitor Analysis",
    image:
      "https://assets-social-brand-managers.netlify.app/brand%20management%20strategy%20new/customer%20analytics.webp",
    text: "Stay ahead by understanding your competitor’s strategies and positioning.",
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
          Why Choose SBM for{" "}
          <span className="text-primary-blue">
            Brand Management Services{" "}
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
