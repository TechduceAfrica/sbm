import Image from "next/image";
import React from "react";

const HomeBenefits = () => {
  return (
    <div className="t-b-padding custom-container-max-width">
      <div className="home-benefit-main-svg-top">
        <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 110 110" fill="none">
          <rect y="0.415039" width="44" height="44" fill="#A45A52"/>
          <rect y="65.415" width="44" height="44" fill="#0048A0"/>
          <rect x="66" y="0.415039" width="44" height="44" fill="#0048A0"/>
        </svg>
      </div>
      <div className="home-benefits-text gap-3 pt-[50px] text-center ">
        <h5 className="font-body-text-2 text-body-text-colour">Benefits</h5>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-body-text-colour lg:text-[54px] md:text-[32px] text-[24px]">
          Get your arms crossed{" "}
          <p>
            {" "}
            while we do the
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
            className="homeIcon"
          />
          <p className="font-primary benefit-card-text">
            Get identified relevant influencers and develop partnerships.
          </p>
        </div>
        <div className="rounded-[20px] bg-white z-10 shadow-[0px_4px_24px_rgba(0,_0,_0,_0.05)]">
          <img
            src="https://assets-social-brand-managers.netlify.app/benefit%20assests/icon2.svg"
            alt="homeIcon"
            className="homeIcon"
          />
          <p className="font-primary benefit-card-text">
            Develop crisis management plans to counter social media backlash.
          </p>
        </div>
        <div className="rounded-[20px] bg-white z-10 shadow-[0px_4px_24px_rgba(0,_0,_0,_0.05)]">
          <img
            src="https://assets-social-brand-managers.netlify.app/benefit%20assests/icon3.svg"
            alt="homeIcon"
            className="homeIcon"
          />
          <p className="font-primary benefit-card-text">
            Analyzed social media performance, identified improvement areas.
          </p>
        </div>
        <div className="rounded-[20px] bg-white z-10 shadow-[0px_4px_24px_rgba(0,_0,_0,_0.05)]">
          <img
            src="https://assets-social-brand-managers.netlify.app/benefit%20assests/icon4.svg"
            alt="homeIcon"
            className="homeIcon"
          />
          <p className="font-primary benefit-card-text">
            Frequent reports for improved social media performance.
          </p>
        </div>
      </div>
      <div className="home-benefit-main-svg-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" width="110" height="103" viewBox="0 0 110 103" fill="none">
          <rect x="66" y="58.415" width="44" height="44" fill="#1F84FF"/>
          <rect y="58.415" width="44" height="44" fill="#A45A52"/>
          <rect x="66" y="0.415039" width="44" height="44" fill="#E3CCC9"/>
        </svg>
      </div>

    </div>
  );
};

export default HomeBenefits;
