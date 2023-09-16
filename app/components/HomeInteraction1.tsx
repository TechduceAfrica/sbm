"use client";
import { useEffect, useState } from "react";
import React from "react";
import backgroundImage from "../../public/vector.svg";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";

const HomeInteraction1 = () => {
  const [toggle, setToggle] = useState(false);
  // States for TYPED
  const [text, setText] = useState("");
  const [nextText, setNextText] = useState(false);
  const fullText = [`better`, `louder`];
  const [index, setIndex] = useState(0);
  const [indexOfTexts, setIndexOfTexts] = useState(0);
  // States for TYPED ENDS

  const currentText = fullText[indexOfTexts].toString();

  const type = () => {
    useEffect(() => {
      const arrLength = fullText.length;

      if (index < currentText.length && !nextText) {
        setTimeout(
          () => {
            setText(text + currentText[index]);
            setIndex(index + 1);
          },
          index === currentText.length ? 1000 : 300
        );
      } else {
        if (index !== 0) {
          setTimeout(() => {
            const newText = text.slice(0, index);
            setText(newText);
            setIndex(index - 1);
          }, 300);
          setNextText(true);
        } else {
          setText("");
          setNextText(false);
          if (indexOfTexts === arrLength - 1) {
            setIndexOfTexts(0);
          } else {
            setIndexOfTexts(indexOfTexts + 1);
          }
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index, nextText]);
    return text;
  };

  return (
    <section
      className=" bg-ghostwhite w-full h-[499px] md:h-full relative shrink items-center text-center  text-[24px] md:text-[32px] xl:text-[54px] text-body-text-colour font-primary "
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "110%",
        backgroundPosition: "left bottom",
      }}
    >
      <div className="relative h-[664px] lg:h-[850px] lg:mx-[152px] mx-[20px]">
        <div className="absolute items-center top-[50px] lg:top-[100px] xl:left-[calc(50%_-_270px)] lg:left-[calc(50%_-_290px)] md:left-[calc(50%_-_205px)] left-[calc(50%_-_250px)] font-semibold inline-block lg:max-w-[501px] md:max-w-[401px] max-w-[301px]">
          {/* <h3>
            Nothing speaks{" "}
            <span className="text-primary-blue typing-txt-width">
              <span className="text-typing"></span>
            </span>
            <br /> than results
          </h3> */}
          <h1 className="font-semibold inline-block lg:text-[32px] text-[24px] min-w-[201px] lg:min-w-[301px] absolute lg:left-[calc(50%_+_80px)] left-[calc(50%_+_120px)] mb-[50px]">
            Nothing speakes{" "}
          </h1>
          <p className="lg:text-[32px] text-[24px] min-w-[201px] lg:min-w-[301px] absolute lg:left-[calc(50%_+_115px)] left-[calc(50%_+_155px)] top-7 ">
            than results
            <strong
              className={`${
                currentText === fullText[1].toString()
                  ? "text-wine-red"
                  : "text-primary-blue"
              }`}
            >
              .
            </strong>
          </p>
          <span
            className={`${
              currentText === fullText[1].toString()
                ? "text-wine-red"
                : "text-primary-blue"
            } lg:text-[32px] text-[24px] max-w-[200px] caret absolute lg:top-[1px] md:top-[-1px] top-[-5.5px] lg:left-[calc(50%_+_360px)] left-[calc(50%_+_320px)]`}
          >
            {type()}
          </span>
        </div>

        {/* {!toggle ? (
          <div className="flex  w-full  overflow-hidden">
            <div className="relative w-full h-[599px] overflow-hidden">
              <img
                className="absolute lg:top-[219px] top-[50px] lg:left-[0px] left-[15px]   w-[326px] h-[223px] object-cover block  md:hidden lg:block"
                alt=""
                src="/designer-1@2x.png"
              />

              <img
                className="absolute top-[50px] lg:top-[50px] left-[calc(50%_-_150px)] xl:left-[calc(50%_-_160px)] w-[326px] h-[223px] object-cover hidden md:block lg:block"
                alt=""
                src="/designer-1@2x.png"
              />
              <img
                className="absolute top-[219px] right-[0px]   w-[326px] h-[223px] object-cover hidden lg:block"
                alt=""
                src="/designer-1@2x.png"
              />
            </div>
          </div>
        ) : (
          <div className="flex  w-full  ">
            <div className="relative w-full h-[599px] ">
              <img
                className="absolute lg:top-[70px] top-[50px] lg:left-[0px] left-[120px] w-[100px] h-[200px] lg:w-[200px] lg:h-[400px] object-cover block  md:hidden lg:block"
                alt=""
                src="/mobile-mockup2.png"
              />

              <img
                className="absolute top-[15px]  left-[calc(50%_-_210px)] xl:left-[calc(50%_-_220px)] w-[200px] h-[400px] object-cover hidden md:block lg:block"
                alt=""
                src="/mobile-mockup.png"
              />
              <img
                className="absolute top-[70px] right-[0px] w-[200px] h-[400px] object-cover hidden lg:block"
                alt=""
                src="/mobile-mockup4.png"
              />

              <img
                className="absolute top-[20px] left-[calc(50%_+_10px)] xl:left-[calc(50%_+_20px)] w-[200px] h-[400px] object-cover hidden lg:block"
                alt=""
                src="/mobile-mockup5.png"
              />
            </div>
          </div>
        )} */}
        <Carousel />
      </div>

      {/* <h1 className="font-semibold inline-block">
        Nothing speakes{" "}
        <span
          className={`${
            currentText === fullText[1].toString()
              ? "text-wine-red"
              : "text-primary-blue"
          }`}
        >
          {type()}
        </span>{" "}
      </h1>
      <h1 className="font-semibold">than results</h1> */}

      {/* <div className="absolute top-[499px] left-[105px] w-[1230px] h-[599px] overflow-hidden">

 

        <img
          className="absolute top-[219px] left-[0px] w-[412px] h-[282px] object-cover"
          alt=""
          src="/designer-1@2x.png"
        />
        <img
          className="absolute top-[0px] left-[calc(50%_-_221px)] w-[415px] h-[284px] object-cover"
          alt=""
          src="/designer-2@2x.png"
        />
        <img
          className="absolute top-[219px] left-[820px] w-[412px] h-[282px] object-cover"
          alt=""
          src="/designer-1@2x.png"
        />
      </div> */}
    </section>
  );
};

export default HomeInteraction1;
