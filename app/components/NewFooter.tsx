"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const NewFooter = () => {
  const [active, setActive] = useState("");
  return (
    <footer className="mt-[50px] bg-footer-blue flex flex-col justify-center gap-8 text-white text-[22px] lg:text-[32px]">
      <div className="footer-items custom-container-max-width">
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
        <div className="flex flex-col text-[18px]">
          <h5 className="font-primaryExtrabold">WHITE PAPER</h5>
          <p>We are a team of experienced and qualified professionals</p>
          <Link href="/" className="flex flex-row gap-2 mt-4">
            <img src="/whitepaper-icon.svg" alt="whitepaper icon" />
            <p className="underline">Download</p>
          </Link>
        </div>

        <div className="flex flex-col text-[18px]">
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
            title="call us now"
          >
            <img src="/call-icon.svg" alt="call icon" />
            <p className="">+2349060006734</p>
          </Link>
        </div>

        <div className="flex flex-col text-[18px]">
          <h5 className="font-primaryExtrabold">FIND US</h5>
          <p>91. Obafemi Awolowo Way, Ikeja, Lagos.</p>
          <div className="footer-social-media">
            <div>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src="/facebookLogo.svg" alt="social brand manager facebook page" title="social brand manager facebook page" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="ig-icon.svg" alt="social brand manager instagram page" title="social brand manager instagram page" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:text-[13px] text-[10px] font-primary text-center">
        <span>
          &copy; Copyright 2023 | A brain child of<a href="https://techduce.africa/?sbm" target="_blank" rel="noopener noreferrer" title="visit Techduce Africa"> Techduce Africa</a> | All Rights
          Reserved.
        </span>
      </div>

      {/* <div className="absolute bottom-[25px] md:bottom-[120px] right-[248px] lg:right:[300px] flex flex-wrap lg:w-[100px] md:w-[100px] w-[50px] gap-4">
        <img src="/facebookLogo.svg" alt="" />
        <img src="ig-icon.svg" alt="" />
      </div> */}
    </footer>
  );
};

export default NewFooter;
