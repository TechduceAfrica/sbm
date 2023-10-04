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
      "https://assets-social-brand-managers.netlify.app/social%20brand%20img/images%20(25)%201.png",
    text: "We create custom social media strategies based on your brand, goals.",
  },
  {
    title: "Data-Driven Approach",
    image:
      "https://assets-social-brand-managers.netlify.app/social%20brand%20img/images%20(25)%201-2.png",
    text: "Our data-driven strategies guarantee purposeful actions and tangible results.",
  },
  {
    title: "Engaging Contents",
    image:
      "https://assets-social-brand-managers.netlify.app/social%20brand%20img/images%20(25)%201-4.png",
    text: "Content is king, We create engaging content: visuals, articles, videos.",
  },
  {
    title: "Consistent Posting",
    image:
      "https://assets-social-brand-managers.netlify.app/social%20brand%20img/images%20(25)%201-1.png",
    text: "Consistency is crucial. We'll help you stay on track for a loyal audience.",
  },
  {
    title: "Community Building",
    image:
      "https://assets-social-brand-managers.netlify.app/social%20brand%20img/images%20(25)%201-3.png",
    text: "Building a loyal online community is key. We'll help you foster loyalty.",
  },
  {
    title: "Measurable Results",
    image:
      "https://assets-social-brand-managers.netlify.app/social%20brand%20img/images%20(25)%201-5.png",
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
    <div className="flex justify-center gap-x-6 flex-wrap gap-y-10 ">
      {analytics.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  );
};

export default SectionWrapper(SocialMStrategyCards, "");
