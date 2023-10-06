"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const analytics = [
  {
    title: "Creative Content Creation",
    image:
      "https://assets-social-brand-managers.netlify.app/content-creation/images%20(25)%201.png",
    text: "From eye-catching graphics to compelling written content, we craft pieces that captivates.",
  },
  {
    title: "Content Curation",
    image:
      "https://assets-social-brand-managers.netlify.app/content-creation/images%20(25)%201-1.png",
    text: "We scour the internet for the most relevant and exciting content in your niche.",
  },
  {
    title: "Strategy and Planning",
    image:
      "https://assets-social-brand-managers.netlify.app/content-creation/images%20(25)%201-2.png",
    text: "We work closely with you to build a content calendar that aligns with your goals.",
  },
  {
    title: "Engagement Optimization",
    image:
      "https://assets-social-brand-managers.netlify.app/content-creation/images%20(25)%201-3.png",
    text: "We foster a sense of community by engaging with your audience",
  },
  {
    title: "Data-Driven Insights",
    image:
      "https://assets-social-brand-managers.netlify.app/content-creation/images%20(25)%201-4.png",
    text: "We don’t guess what works, we use data to make informed decisions.",
  },
  {
    title: "Customized Solutions",
    image:
      "https://assets-social-brand-managers.netlify.app/content-creation/images%20(25)%201-5.png",
    text: "We work closely with you to ensure that every content aligns with your vision.",
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
            Content Creation and Curation
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
