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
      image:
        "https://assets-social-brand-managers.netlify.app/social%20brand%20img/images%20(25)%201-1.png",
      text: "We dig deep to extract insights about your audience, content & campaign performance",
    },
    {
      title: "Customized Reporting",
      image:
        "https://assets-social-brand-managers.netlify.app/analytics-img/customized%20reporting.png",
      text: "Our reports are tailored to your Brand’s specific goals and vision",
    },
    {
      title: "Actionable Reccomendations",
      image:
        "https://assets-social-brand-managers.netlify.app/analytics-img/actionable%20reccomendation.png",
      text: "We don’t stop at data analysis, we also provide insights with actionable steps.",
    },
    {
      title: "Performance Tracking",
      image:
        "https://assets-social-brand-managers.netlify.app/analytics-img/performance%20tracking.png",
      text: "Our analytics offer real-time tracking, keeping you updated on your brand’s performance",
    },
    {
      title: "Competitor Analysis",
      image:
        "https://assets-social-brand-managers.netlify.app/brand-management/competitor%20analysis.png",
      text: "Gain a competitive edge by understanding your competitors in the digital arena",
    },
    {
      title: "ROI Measurement",
      image:
        "https://assets-social-brand-managers.netlify.app/analytics-img/roi%20measurement.png",
      text: "Track the impact of your digital efforts on your bottom line",
    },
  ];

  return (
    <div className="text-body-text-colour  ">
      <div className="relative flex flex-col lg:flex-row justify-between analytics-container m-auto t-b-padding px-[20px] lg:px-[80px]  pt-0 lg:pt-[150px] ">
        <div className="analytics-hero-text flex-col gap-5 flex">
          <h3 className="flex flex-wrap  max-w-[500px]">
            Empower Your Brand With Actionable Insights with SBM’s{" "}
            <span className="text-[#1F84FF]">
              Analytics and Reports Service
            </span>
          </h3>

          <p className="flex flex-wrap max-w-[500px]">
            Don’t navigate the digital space blindly, let us illuminate your
            path to success.
          </p>
        </div>
        <div className="anlytics-image">
          <Image
            alt="Analytics and Report Image"
            src="https://assets-social-brand-managers.netlify.app/analytics-img/analytics%20hero%20img.png"
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
              Analytics and Reports Service{" "}
              <strong className="text-primary-blue">.</strong>
            </span>
          </h3>
        </div>
        <div className="flex justify-center gap-x-6 flex-wrap gap-y-10 mt-10">
          {analytics.map((ServiceNextCard, index) => (
            <div
              key={index}
              className="bg-white lg:w-[300px] w-[300px] min-h-[500px] rounded-[23.18px] flex-col text-center  box-shadow"
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
