"use client";

import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/app/constants";
import { useState, useEffect } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import menu from "../../public/menu.svg";
import close from "../../public/close.svg";
import Mobilemenu from "./Mobilemenu";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [navDisappear, setNavDisappear] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   const removeNavbar = () => {
  //     if (window.scrollY >= 1300) {
  //       setNavDisappear(true);
  //     } else {
  //       setNavDisappear(false);
  //     }
  //   };
  //   window.addEventListener("scroll", removeNavbar);
  // }, []);

  const handleClick = () => {
    setToggle(!toggle);
    router.push("/form");
    console.log("button clicked");
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
            <div className="logo relative lg:w-[100px] lg:h-[80px] w-[70px] h-[63.5px]">
              <Image
                src="/logo.png"
                fill
                alt="SBM Logo"
                title="social brand managers logo"
              />
            </div>
          </Link>
        </div>
        <div className="nav-menu lg:flex hidden">
          <ul>
            {navLinks.map((link) => (
              <a
                onClick={() => {
                  setActive(link.text);
                  router.push(link.href);
                }}
                key={link.key}
                className={`${
                  active === link.text
                    ? "bg-active w-full px-[10px] py-[5px] rounded-md"
                    : "bg-white"
                } hover:text-primary-blue hover:cursor-pointer`}
              >
                {link.text}
              </a>
            ))}
          </ul>
        </div>

        {/* Mobile Navbar */}
        <Mobilemenu />

        <Link href="/form" className="lg:block hidden">
          <Button title="Get Started" handleClick={handleClick} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
