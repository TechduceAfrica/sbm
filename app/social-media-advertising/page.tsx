"use client";
import React from "react";
import ServiceNextPageCTA from "../components/ServiceNextPageCTA";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const page = () => {
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

  return (
    <div className="text-body-text-colour  ">
      <div className="relative flex flex-col lg:flex-row justify-between analytics-container m-auto t-b-padding px-[20px] lg:px-[80px] pt-0 lg:pt-[150px]">
        <div className="analytics-hero-text flex-col gap-5 flex">
          <h3 className="flex flex-wrap  max-w-[500px]">
            Propel Your Brand Into the Spotlight With SBM’s{" "}
            <span className="text-[#1F84FF]">Social Media Advertising</span>
          </h3>

          <p className="flex flex-wrap max-w-[500px]">
            We specialize in elevating your online presence and engagement
            through tailored social media advertising solutions.
          </p>
        </div>
        <div className="anlytics-image">
          <Image
            alt="Analytics and Report Image"
            src="https://assets-social-brand-managers.netlify.app/social%20advertising/Rectangle%20631.png"
            width={450}
            height={300}
          />
        </div>
        <div className="absolute top-3 right-[52px] lg:block hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            height="103"
            viewBox="0 0 110 103"
            fill="none"
          >
            <rect x="66" y="58.415" width="44" height="44" fill="#1F84FF" />
            <rect y="58.415" width="44" height="44" fill="#A45A52" />
            <rect x="66" y="0.415039" width="44" height="44" fill="#E3CCC9" />
          </svg>
        </div>
      </div>

      {/* CARDS */}

      <div className="bg-white t-b-padding">
        <div className="m-auto text-center w-[50%] pb-[80px]">
          <h3 className=" inline-block">
            Why Choose SBM for{" "}
            <span className="text-[#1F84FF]">
              Social Media Advertising Service
              <strong className="text-primary-blue">.</strong>
            </span>
          </h3>
        </div>
        <div className="flex justify-center gap-x-6 flex-wrap gap-y-10 mt-10">
          {analytics.map((ServiceNextCard, index) => (
            <div
              key={index}
              className="bg-white lg:w-[300px] w-[300px] min-h-[500px] rounded-[23.18px] flex-col text-center box-shadow"
            >
              <Image
                src={ServiceNextCard.image}
                width={400}
                height={254}
                alt={ServiceNextCard.title}
                title={ServiceNextCard.title}
                className="rounded-t-lg"
              ></Image>
              <div className="service-text flex flex-col justify-between p-6 gap-2 min-h-[300px] text-body-text-colour leading-7">
                <div>
                  <h4 className="font-semibold text-[27.81px]">
                    {ServiceNextCard.title}
                  </h4>
                  <p className="text-[21.63px] mt-4 leading-7">
                    {ServiceNextCard.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ServiceNextPageCTA />
    </div>
  );
};

export default SectionWrapper(page, "");
