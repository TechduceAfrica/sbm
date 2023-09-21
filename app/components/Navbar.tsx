"use client";

import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/app/constants";
import { useState, useEffect } from "react";
import Button from "./Button";
import menu from "../../public/menu.svg";
import close from "../../public/close.svg";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [navDisappear, setNavDisappear] = useState(false);

  // useEffect(() => {
  //   const removeNavbar = () => {
  //     if (window.scrollY >= 900) {
  //       setNavDisappear(true);
  //     } else {
  //       setNavDisappear(false);
  //     }
  //   };
  //   window.addEventListener("scroll", removeNavbar);
  // }, []);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="font-primary font-semibold nav-main-container text-body-text-colour z-20">
      <div className="nav-wrapper-container">
        <div className="logo">
          <Link
            href="/"
            onClick={() => {
              setActive("Home");
              window.scrollTo(0, 0);
            }}
          >
            <div className="logo relative lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]">
              <Image src="/logo.png" fill alt="SBM Logo" />
            </div>
          </Link>
        </div>
        <div className="nav-menu lg:flex hidden">
          <ul>
            {navLinks.map((link) => (
              <Link
                onClick={() => setActive(link.text)}
                href={link.href}
                key={link.key}
                className={`${
                  active === link.text
                    ? "bg-active w-full px-[10px] py-[5px] rounded-md "
                    : "bg-white"
                } hover:text-primary-blue`}
              >
                {link.text}
              </Link>
            ))}
          </ul>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer text-black"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white absolute top-16 right-0  min-w-[140px] z-10`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className={`${
                    active === link.text
                      ? "bg-active w-full px-[10px] py-[5px] rounded-md "
                      : "bg-white"
                  } hover:text-primary-blue mr-3`}
                  onClick={() => {
                    setActive(link.text);
                    setToggle(!toggle);
                  }}
                >
                  {link.text}
                </Link>
              ))}
              <Link href="/form">
                <Button title="Get Started" />
              </Link>
            </ul>
          </div>
        </div>

        <Link href="/form" className="lg:block hidden">
          <Button title="Get Started" onClick={handleClick} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
