import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="relative bg-gray-300 w-[1440px] h-[434px] overflow-hidden shrink-0 mt-[-7px] text-left text-13xl text-white font-heading-text-2">
      <a
        className="[text-decoration:none] absolute top-[calc(50%_-_62px)] left-[152px] flex flex-row items-start justify-start gap-[5px] text-81xl text-primary-b300"
        href="/"
      >
        <div className="relative font-extrabold">S</div>
        <div className="relative font-extrabold text-primary-b900">B</div>
        <div className="relative font-extrabold text-primary-b100">M</div>
      </a>
      <div className="absolute top-[397px] left-[986px] flex flex-row items-end justify-start gap-[8px] text-xl">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/icbaselinecopyright.svg"
        />
        <div className="relative">2023 SBM. All rights reserved.</div>
      </div>
      <div className="absolute top-[150px] left-[908px] flex flex-col items-start justify-center gap-[40px]">
        <a
          className="[text-decoration:none] flex flex-row items-center justify-start gap-[8px] text-[inherit]"
          href="https://facebook.com"
        >
          <img className="relative w-8 h-8" alt="" src="/component-1.svg" />
          <div className="relative tracking-[-0.04em]">Facebook</div>
        </a>
        <a
          className="[text-decoration:none] flex flex-row items-center justify-start gap-[8px] text-[inherit]"
          href="https://twitter.com"
        >
          <img className="relative w-8 h-8" alt="" src="/component-3.svg" />
          <div className="relative tracking-[-0.04em]">Twitter</div>
        </a>
      </div>
      <div className="absolute top-[150px] left-[1109px] flex flex-col items-start justify-start gap-[40px]">
        <a
          className="[text-decoration:none] flex flex-row items-center justify-start gap-[8px] text-[inherit]"
          href="https://instagram.com"
        >
          <img className="relative w-8 h-8" alt="" src="/component-2.svg" />
          <div className="relative tracking-[-0.04em]">Instagram</div>
        </a>
        <a
          className="[text-decoration:none] flex flex-row items-end justify-start gap-[8px] text-[inherit]"
          href="https://youtube.com"
        >
          <img className="relative w-8 h-8" alt="" src="/component-4.svg" />
          <div className="relative tracking-[-0.04em]">Youtube</div>
        </a>
      </div>
      <a
        className="[text-decoration:none] absolute top-[150px] left-[451px] flex flex-row items-center justify-start gap-[24px] text-[inherit]"
        href="tel:+2349060006734"
      >
        <a
          className="[text-decoration:none] relative w-[50px] h-[50px]"
          href="tel:+2349060006734"
        >
          <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-[50px] h-[50px] border-[1px] border-solid border-white" />
          <img
            className="absolute top-[13px] left-[13px] w-6 h-6"
            alt=""
            src="/vector1.svg"
          />
        </a>
        <b className="relative tracking-[0.04em]">+234 906 000 6734</b>
      </a>
      <a
        className="[text-decoration:none] absolute top-[232px] left-[451px] flex flex-row items-center justify-start gap-[24px] text-[inherit]"
        href="mailto:info@techduce.africa"
      >
        <img
          className="relative w-[50px] h-[50px]"
          alt=""
          src="/group-246.svg"
        />
        <b className="relative tracking-[-0.04em]">info@techduce.africa</b>
      </a>
    </div>
  );
};

export default Footer;
