"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/motion";
import Image from "next/image";
import { homeServicesTop } from "../constants";
import { homeServicesBottom } from "../constants";
import Link from "next/link";

const HomeServices = () => {
  return (
    <div className="bg-secondary-blue-2">
      <div className="mx-[40px]  custom-container-max-width services pb-[100px] ">
        <div className="home-service-text gap-3 pt-[50px] text-center">
          <h5 className="font-body-text-2 text-body-text-colour">Services</h5>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-body-text-colour lg:text-[54px] md:text-[32px] text-[30px]">
            We've got all your{" "}
            <span className="text-primary-blue">Business</span>{" "}
            <p>
              needs to <span className="text-primary-blue">Upscale</span> to the
            </p>{" "}
            <p>
              next level<strong className="text-primary-blue">.</strong>
            </p>
          </h3>
        </div>

        {/* HOME SERVICE CARD */}

        <div className="flex justify-center gap-x-6 flex-wrap gap-y-10 mt-10">
          {homeServicesTop.map((homeServiceTop, index) => (
            <div
              key={index}
              className="bg-white lg:w-[300px] w-[300px] min-h-[500px] rounded-[23.18px] flex-col text-center"
            >
              <Image
                src={homeServiceTop.image}
                width={400}
                height={254}
                alt={homeServiceTop.title}
                title={homeServiceTop.title}
                className="rounded-t-lg servicecard-image"
              ></Image>
              <div className="service-text flex flex-col justify-between p-6 gap-2 min-h-[300px] text-body-text-colour leading-7">
                <div>
                  <h4 className="font-semibold text-[27.81px]">
                    {homeServiceTop.title}
                  </h4>
                  <p className="text-[21.63px] mt-4 leading-7">
                    {homeServiceTop.text}
                  </p>
                </div>
                <Link
                  href={homeServiceTop.link}
                  className="underline text-primary-blue"
                >
                  Start here
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex flex-wrap gap-y-10 mt-10 justify-center gap-x-6">
          {homeServicesBottom.map((homeServiceBottom, index) => (
            <div
              key={index}
              className="bg-white lg:w-[300px] w-[300px] min-h-[500px] rounded-[23.18px] flex-col text-center relative gap-2"
            >
              <Image
                src={homeServiceBottom.image}
                width={400}
                height={254}
                alt="home service image"
                className="rounded-t-lg"
              ></Image>
              <div className="service-text flex flex-col px-6 gap-2 text-body-text-colour mt-[30px] leading-7">
                <h4 className="font-semibold text-[27.81px]">
                  {homeServiceBottom.title}
                </h4>

                <p className="text-[21.63px] leading-7">
                  {homeServiceBottom.text}
                </p>

                <Link
                  href="/"
                  className="underline text-primary-blue absolute bottom-5 left-[calc(50%_-_50px)]"
                >
                  Start here
                </Link>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default HomeServices;
