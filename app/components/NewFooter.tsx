"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const NewFooter = () => {
  const [active, setActive] = useState("");
  return (
    <div className="mt-[50px] relative w-full h-full bg-footer-blue flex flex-col justify-center gap-8 text-white text-[22px] lg:text-[32px] px-[40px] py-[80px]">
      <div className="justify-between flex flex-col lg:flex-row gap-10 mb-12 custom-container-max-width">
        {/* Logo */}
        <div className="logo">
          <Link
            href="/"
            onClick={() => {
              setActive("Home");
              window.scrollTo(0, 0);
            }}
          >
            <Image src="/footer-logo.png" width={80} height={43} alt="SBM" />
          </Link>
        </div>
        <div className="content flex flex-col lg:flex-row gap-6 text-[18px]">
          <div className="flex flex-col max-w-[256px] ">
            <h5 className="font-primaryExtrabold">WHITE PAPER</h5>
            <p>We are a team of experienced and qualified professionals</p>
            <Link href="/" className="flex flex-row gap-2 mt-4">
              <img src="/whitepaper-icon.svg" alt="whitepaper icon" />
              <p className="underline">Download</p>
            </Link>
          </div>

          <div className="flex flex-col max-w-[256px]">
            <h5 className="font-primaryExtrabold">GET SUPPORT</h5>
            <a
              href="mailto:info@socialbrandmanagers.com"
              className="[text-decoration:none]"
            >
              info@socialbrandmanagers.com
            </a>
            <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
            <Link
              href="tel:+2349060006734"
              className="flex flex-row gap-2 mt-4"
            >
              <img src="/call-icon.svg" alt="call icon" />
              <p className="">+2349060006734</p>
            </Link>
          </div>

          <div className="flex flex-col max-w-[256px]">
            <h5 className="font-primaryExtrabold">FIND US</h5>
            <p>91. Obafemi Awolowo Way, Ikeja, Lagos.</p>
            <Link href="/" className="flex flex-row gap-2 mt-4">
              <img src="check-map-icon.svg" alt="chech map icon" />
              <p>Check Map</p>
            </Link>
          </div>
          <div className="flex flex-col gap-2  w-[30px]  h-[30px]">
            <img src="/facebookLogo.svg" alt="" />
            <img src="ig-icon.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="lg:text-[13px] text-[10px] font-primary text-center">
        &copy; Copyright 2023 | A brain child of Techduce Africa | All Rights
        Reserved.
      </div>

      {/* <div className="absolute bottom-[25px] md:bottom-[120px] right-[248px] lg:right:[300px] flex flex-wrap lg:w-[100px] md:w-[100px] w-[50px] gap-4">
        <img src="/facebookLogo.svg" alt="" />
        <img src="ig-icon.svg" alt="" />
      </div> */}
    </div>
  );
};

export default NewFooter;
