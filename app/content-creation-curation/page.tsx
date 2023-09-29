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

  return (
    <div className="text-body-text-colour  ">
      <div className="relative flex flex-col lg:flex-row justify-between analytics-container m-auto t-b-padding px-[20px] lg:px-[80px] pt-0 lg:pt-[150px]">
        <div className="analytics-hero-text flex-col gap-5 flex">
          <h3 className="flex flex-wrap  max-w-[500px]">
            Unlock Your Brand’s Potential With SBM’s{" "}
            <span className="text-[#1F84FF]">
              Content Creation and Curation Service
            </span>
          </h3>

          <p className="flex flex-wrap max-w-[500px]">
            Let us help you tell your Story, connect with your audience and
            drive the growth you’ve been dreaming of.
          </p>
        </div>
        <div className="anlytics-image">
          <Image
            alt="Analytics and Report Image"
            src="https://assets-social-brand-managers.netlify.app/content-creation/Rectangle%20631.png"
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
              Content Creation and Curation
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
