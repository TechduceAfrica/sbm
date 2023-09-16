"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Footer = () => {
  const [active, setActive] = useState("");
  return (
    <div className=" relative w-full h-full bg-footer-blue flex  text-white text-[22px] lg:text-[32px] lg:px-28 lg:py-32 px-0 py-20">
      <div className="justify-around flex flex-col lg:flex-row">
        <div className="justify-between flex flex-col lg:flex-row ml-[40px] lg:ml-[30px] lg:text-lg gap-12 ">
          {/* Logo */}
          <div className="logo">
            <Link
              href="/"
              onClick={() => {
                setActive("Home");
                window.scrollTo(0, 0);
              }}
            >
              <Image src="/footer-logo.png" width={115} height={43} alt="SBM" />
            </Link>
          </div>
          {/* Contact */}
          <div className="contact flex flex-col gap-5 font-primaryBold">
            {/* Phone */}
            <div className="phone flex flex-row gap-2">
              <Link
                className="[text-decoration:none] relative w-[50px] h-[50px] flex flex-row gap-1"
                href="tel:+2349060006734"
              >
                <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] border-[1px] border-solid border-white" />
                <img
                  className="absolute top-[13px] left-[13px] lg:w-6 lg:h-6 w-4 h-4"
                  alt=""
                  src="/footer-images/vector1.svg"
                />
              </Link>
              <b className="relative tracking-[0.04em]">+234 906 000 6734</b>
            </div>

            {/* Email */}
            <div className="email flex flex-row gap-2">
              <Link
                className="[text-decoration:none] relative w-[50px] h-[50px]  flex flex-row gap-1"
                href="mailto:info@techduce.africa"
              >
                <img
                  className="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px]"
                  alt="email icon"
                  src="/footer-images/group-246.svg"
                />
              </Link>
              <b className="relative tracking-[-0.04em]">
                info@techduce.africa
              </b>
            </div>
          </div>

          {/* Socials  */}
          <div className="social-1 flex flex-col gap-5 font-primary">
            {/* FACEBOOK LINK */}
            <Link
              href="https://facebook.com"
              className="[text-decoration:none] flex flex-row items-center justify-start gap-[8px] text-[inherit]"
            >
              <img
                className="relative w-8 h-8"
                alt=""
                src="/footer-images/component-1.svg"
              />
              <div className="relative tracking-[-0.04em]">Facebook</div>
            </Link>

            {/* TWITTER LINK */}

            <Link
              href="https://twitter.com"
              className="[text-decoration:none] flex flex-row items-center justify-start gap-[8px] text-[inherit]"
            >
              <img
                className="relative w-8 h-8"
                alt=""
                src="/footer-images/component-3.svg"
              />
              <div className="relative tracking-[-0.04em]">Twitter</div>
            </Link>
          </div>
          <div className="social-2 flex flex-col gap-5 font-primary">
            {/* INSTAGRAM LINK */}
            <Link
              href="https://instagram.com"
              className="[text-decoration:none] flex flex-row items-center justify-start gap-[8px] text-[inherit]"
            >
              <img
                className="relative w-8 h-8"
                alt=""
                src="/footer-images/component-2.svg"
              />
              <div className="relative tracking-[-0.04em]">Instagram</div>
            </Link>

            {/* YOUTUBE LINK */}

            <Link
              href="https://youtube.com"
              className="[text-decoration:none] flex flex-row items-center justify-start gap-[8px] text-[inherit]"
            >
              <img
                className="relative w-8 h-8"
                alt=""
                src="/footer-images/component-4.svg"
              />
              <div className="relative tracking-[-0.04em]">Youtube</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[1px] right-[50px] text-[16px] lg:text-sm font-primary">
        &copy; 2023 SBM, All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
