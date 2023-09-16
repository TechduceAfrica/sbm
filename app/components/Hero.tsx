import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" bg-secondary-blue relative">
      <Link
        href="/join-us"
        className="absolute cursor-pointer right-0 top-[100px] lg:max-h-[240px] max-h-[150px] px-1 py-2 lg:max-w-[100px] bg-primary-blue vertical-rl text-white text-[13px] lg:text-[24px]"
      >
        Join our Workforce
      </Link>
      <div className="container-width bg-secondary-blue">
        <div className="hero-section-wrapper px-[0px] py-[40px] lg:px-[40px] ">
          <div>
            <div className="ball-effect-container-wrapper">
              <div>
                <h1
                  className="text-body-text-colour text-[1.5em] md:text-[2em] lg:text-[3em] lg:max-w-[500px]
                 max-w-[284px] md:min-w-[365px] min-w-[278px] leading-[2.59rem] lg:leading-[5.18rem] md:leading-[3.18rem]"
                >
                  Your Social Media Partner For Success
                  <strong className="text-primary-blue">.</strong>
                </h1>
              </div>
              <div className="sbm-ball">
                <h1
                  className="text-[1.5em] md:text-[2em] lg:text-[3em] lg:max-w-[500px] 
                max-w-[284px] md:min-w-[365px] min-w-[278px] leading-[2.59rem] lg:leading-[5.18rem] md:leading-[3.18rem]"
                >
                  Your Social Media Partner For Success
                </h1>
              </div>
            </div>
            <div>
              <p className="lg:text-[30px]">
                We make it happen the{" "}
                <span className="text-primary-blue">SBM</span>
                <br /> way.
              </p>
            </div>
            <div className="lg:mt-[-19px] mt-10 max-w-[150px] lg:max-w-[200px] font-semibold">
              <Button
                title="Learn More"
                bgColor="transparent"
                textColor="text-primary-blue"
              />
            </div>
            <div className="flex shrink flex-row gap-4 lg:hidden md:hidden ml-0 mt-10  md:mt-0 xl:mt-0">
              <img
                src="/hero-images/mask-group@2x.png"
                alt="hero mask group 1"
                className=" h-[159px] w-[90%] mt-6"
              ></img>
              <img
                src="/hero-images/mask-group1@2x.png"
                alt="hero mask group 1"
                className="h-[159px] w-[100%]"
              ></img>
            </div>
          </div>
          <div>
            <img
              src="/hero-images/SBM - SOCIAL BRAND MANAGER.png"
              alt=""
              className="hidden lg:flex md:flex max-w-[300px] lg:max-w-[507px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
