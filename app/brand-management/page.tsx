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
      title: "Brand strategy",
      image: "",
      text: "We help you define your brand’s identity for a compelling online presence.",
    },
    {
      title: "Visual Identity",
      image: "",
      text: "We craft a captivating visual identity that resonates with your audience.",
    },
    {
      title: "Content Alignment",
      image: "",
      text: "We ensure that every piece of content aligns with your brand’s voice & objectives.",
    },
    {
      title: "Reputation Management",
      image: "",
      text: "We protect your brand’s reputation by monitoring online conversation.",
    },
    {
      title: "Crisis Management",
      image: "",
      text: "We provide expert guidance to mitigate damage and maintain your brand’s identity.",
    },
    {
      title: "Competitor Analysis",
      image: "",
      text: "Stay ahead by understanding your competitor’s strategies and positioning.",
    },
  ];

  return (
    <div className="text-body-text-colour  ">
      <div className="relative flex flex-col lg:flex-row justify-between analytics-container m-auto t-b-padding px-[20px] lg:px-[80px]">
        <div className="analytics-hero-text flex-col gap-5 flex">
          <h3 className="flex flex-wrap  max-w-[500px]">
            Enhance Your Brand’s Online Presence With SBM’s{" "}
            <span className="text-[#1F84FF]">Brand Management Service</span>
          </h3>

          <p className="flex flex-wrap max-w-[500px]">
            Let us help you craft a consistent and compelling brand identity
            that resonates with your audience and drives success.
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
