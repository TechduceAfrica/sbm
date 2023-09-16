"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative h-[90px] w-[359px] cursor-pointer rounded-xl overflow-hidden text-body-text-colour border-none bg-lightsteelblue-200 text-left text-[30px] font-heading-text-2">
      <div className="absolute top-[14px] left-[10px] w-[339px] h-[61px]">
        <motion.div className="h-[61px]  w-[164px] rounded-xl bg-switcher-color justify-end z-10" />
        <div className="absolute top-[calc(50%_-_19px)] left-[calc(20%_-_58px)] font-semibold">
          <h4>Desktop</h4>
        </div>
        <div className="absolute top-[11.5px] left-[calc(50%_+_38.5px)] font-semibold">
          <h4>Mobile</h4>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
