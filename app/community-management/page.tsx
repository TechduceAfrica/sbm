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

  return (
    <div className="text-body-text-colour  ">
      <div className="relative flex flex-col lg:flex-row justify-between analytics-container m-auto t-b-padding px-[20px] lg:px-[80px]  pt-0 lg:pt-[150px]">
        <div className="analytics-hero-text flex-col gap-5 flex">
          <h3 className="flex flex-wrap  max-w-[500px]">
            Cultivate Your Brand’s Community With SBM’s{" "}
            <span className="text-[#1F84FF]">Community Management Service</span>
          </h3>

          <p className="flex flex-wrap max-w-[500px]">
            Unlock your full potential of community management and watch your
            brand fluorish
          </p>
        </div>
        <div className="anlytics-image">
          <Image
            alt="Analytics and Report Image"
            src="https://assets-social-brand-managers.netlify.app/community%20management%20img/Rectangle%20631.png"
            width={450}
            height={300}
          />
        </div>
        <div className="absolute top-3 right-[52px] hidden lg:block">
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
              Community Management Service{" "}
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
