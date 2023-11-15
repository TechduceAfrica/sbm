import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" bg-secondary-blue relative py-10">
      <Link
        href="/join-us"
        title="Join social brand manager work force"
        className="absolute cursor-pointer right-0 top-[100px] lg:max-h-[240px] max-h-[250px] px-1 py-2 lg:max-w-[100px] bg-primary-blue vertical-rl text-white text-[18px] lg:text-[24px]"
      >
        Join our Workforce
      </Link>
      <div className="container-width bg-secondary-blue custom-container-max-width py-4">
        <div className="hero-section-wrapper flex  m-auto">
          <div>
            <div className="ball-effect-container-wrapper">
              <div>
                <h1>
                  Your Social Media Partner For Success
                  <strong className="text-primary-blue">.</strong>
                </h1>
              </div>
              <div className="sbm-ball">
                <h1>
                  Your Social Media Partner For Success
                  <strong className="text-primary-blue">.</strong>
                </h1>
              </div>
            </div>
            <div>
              <p className="lg:text-[30px] mt-5">
                We make it happen the{" "}
                <span className="text-primary-blue">SBM</span>
                {/* <br /> */} way.
              </p>
            </div>
            <div className="max-w-[150px] lg:max-w-[200px] font-semibold">
              <a href="https://socialbrandmanagers.com/about" title="About SBM">
                <Button
                  title="Learn More"
                  bgColor="transparent"
                  textColor="text-primary-blue"
                />
              </a>
            </div>
            <div className="sbm-hero-mobile-img lg:hidden md:hidden">
              <img
                src="/hero-images/mask-group@2x.png"
                alt="level up social media contents for your business"
                title="level up social media contents for your business"
              ></img>
              <img
                src="/hero-images/mask-group1@2x.png"
                alt="level up social media contents for your business"
                title="level up social media contents for your business"
              ></img>
            </div>
          </div>
          <div className="sbm-hero-desktop-img">
            <img
              src="/hero-images/SBM - SOCIAL BRAND MANAGER.png"
              alt="level up social media contents for your business"
              title="level up social media contents for your business"
              className="hidden lg:flex md:flex lg:max-w-[507px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
