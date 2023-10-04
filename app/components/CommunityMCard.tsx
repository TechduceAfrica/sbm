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
      "https://assets-social-brand-managers.netlify.app/community%20management%20img/images%20(25)%201.png",
    text: "We customize community management strategies to match your brand's goals",
  },
  {
    title: "Platform Mastery",
    image:
      "https://assets-social-brand-managers.netlify.app/community%20management%20img/images%20(25)%201-2.png",
    text: "We excel in managing communities on various social media platforms.",
  },
  {
    title: "Data-Driven Insights",
    image:
      "https://assets-social-brand-managers.netlify.app/social%20brand%20img/images%20(25)%201-2.png",
    text: "Our analytics experts optimize strategies for your community's impact.",
  },
  {
    title: "24/7 Monitoring",
    image:
      "https://assets-social-brand-managers.netlify.app/community%20management%20img/images%20(25)%201-1.png",
    text: "We're always here, to support your community and keep the conversation.",
  },
  {
    title: "Brand Advocacy",
    image:
      "https://assets-social-brand-managers.netlify.app/community%20management%20img/images%20(25)%201-3.png",
    text: "We turn your community into brand advocates, through effective campaigns.",
  },
  {
    title: "Collaborative Approach",
    image:
      "https://assets-social-brand-managers.netlify.app/community%20management%20img/images%20(25)%201-5.png",
    text: "We're like an extension of your team, combining your vision with our expertise for results.",
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
