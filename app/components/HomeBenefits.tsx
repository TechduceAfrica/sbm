import Image from "next/image";
import React from "react";

const HomeBenefits = () => {
  return (
    <div className=" m-auto p-3 custom-container-max-width">
      <div className=" home-benefits-text gap-3 pt-[50px] text-center ">
        <h5 className="font-body-text-2 text-body-text-colour">Benefits</h5>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-body-text-colour lg:text-[54px] md:text-[32px] text-[24px]">
          Get your arms crossed{" "}
          <p>
            {" "}
            While we do the
            <span className="text-primary-blue"> magic</span>
            <strong className="text-primary-blue">.</strong>
          </p>{" "}
        </h3>
      </div>

      <div className="home-benefit-main-wrapper">
        {/* <div className="home-benefit-main"></div> */}
        <div className="rounded-[20px] bg-white z-10 shadow-[0px_4px_24px_rgba(0,_0,_0,_0.05)]">
            <img
              src="https://assets-social-brand-managers.netlify.app/benefit%20assests/icon1.svg"
              alt="homeIcon"
              className="homeIcon ml-[60px] xl:ml-[100px]"
            />
            <div className="font-primary benefit-card-text leading-5">
              Get identified relevant influencers and develop partnerships.
            </div>
        </div>
        <div className="rounded-[20px] bg-white z-10 shadow-[0px_4px_24px_rgba(0,_0,_0,_0.05)]">
          <div className="flex flex-col">
            <img
              src="https://assets-social-brand-managers.netlify.app/benefit%20assests/icon2.svg"
              alt="homeIcon"
              className="homeIcon ml-[60px] xl:ml-[100px]"
            />
            <div className="font-primary benefit-card-text leading-5">
              Develop crisis management plans to counter social media backlash.
            </div>
          </div>
        </div>
        <div className="rounded-[20px] bg-white z-10 shadow-[0px_4px_24px_rgba(0,_0,_0,_0.05)]">
          <div className="flex flex-col">
            <img
              src="https://assets-social-brand-managers.netlify.app/benefit%20assests/icon3.svg"
              alt="homeIcon"
              className="homeIcon ml-[60px] xl:ml-[100px]"
            />
            <div className="font-primary benefit-card-text leading-5">
              Analyzed social media performance, identified improvement areas.
            </div>
          </div>
        </div>
        <div className="rounded-[20px] bg-white z-10 shadow-[0px_4px_24px_rgba(0,_0,_0,_0.05)]">
          <div className="flex flex-col">
            <img
              src="https://assets-social-brand-managers.netlify.app/benefit%20assests/icon4.svg"
              alt="homeIcon"
              className="homeIcon ml-[60px] xl:ml-[100px]"
            />
            <div className="font-primary benefit-card-text leading-5">
              Frequent reports for improved social media performance.
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden min-w-[200px] h-[200px] home-benefit-main mt-[50px]"></div>
    </div>
  );
};

export default HomeBenefits;
