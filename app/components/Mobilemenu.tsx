import React from "react";
import { useState } from "react";
import { navLinks } from "../constants";
import { useRouter } from "next/navigation";
import Button from "./Button";

const Mobilemenu = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  const router = useRouter();

  const handleClick = () => {
    setToggle(!toggle);
    router.push("/form");
    console.log("button clicked");
  };

  return (
    <div className="lg:hidden mobile-menu-wrapper">
      <div className="hamburger">
        {" "}
        <img
          src={toggle ? "/close.svg" : "/menu.svg"}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer text-black"
          onClick={() => setToggle(!toggle)}
        />
      </div>{" "}
      <div className={`mobile-menu ${toggle ? "open" : "close"}`}>
        {" "}
        <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.key}
              className={`${
                active === link.text
                  ? "bg-active w-full px-[10px] py-[5px] rounded-md "
                  : ""
              } hover:text-primary-blue mr-3`}
              onClick={() => {
                setActive(link.text);
                router.push(link.href);
                setToggle(!toggle);
              }}
            >
              {link.text}
            </a>
          ))}

          <Button title="Get Started" handleClick={handleClick} />
        </ul>
      </div>
    </div>
  );
};

export default Mobilemenu;
