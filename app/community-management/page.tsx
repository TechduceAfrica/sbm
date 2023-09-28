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
      title: "Comprehensive Data Analysis",
      image: "",
      text: "We dig deep to extract insights about your audience, content & campaign performance",
    },
    {
      title: "Customized Reporting",
      image: "",
      text: "Our reports are tailored to your Brand’s specific goals and vision",
    },
    {
      title: "Actionable Reccomendations",
      image: "",
      text: "We don’t stop at data analysis, we also provide insights with actionable steps.",
    },
    {
      title: "Performance Tracking",
      image: "",
      text: "Our analytics offer real-time tracking, keeping you updated on your brand’s performance",
    },
    {
      title: "Competitor Analysis",
      image: "",
      text: "Gain a competitive edge by understanding your competitors in the digital arena",
    },
    {
      title: "ROI Measurement",
      image: "",
      text: "Track the impact of your digital efforts on your bottom line",
    },
  ];

  return (
    <div className="text-body-text-colour  ">
      <div className="relative flex flex-col lg:flex-row justify-between analytics-container m-auto t-b-padding px-[20px] lg:px-[80px]">
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
          <Image alt="Analytics and Report Image" src="" />
        </div>
        <div className="absolute top-0 right-0">
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
        <div className="flex justify-center gap-x-6 flex-wrap gap-y-10 mt-10">
          {analytics.map((ServiceNextCard, index) => (
            <div
              key={index}
              className="bg-white lg:w-[300px] w-[300px] min-h-[500px] rounded-[23.18px] flex-col text-center"
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
