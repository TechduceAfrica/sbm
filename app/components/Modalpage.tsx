"use client";
import React from "react";
import Modal from "../components/Modal";
import { motion } from "framer-motion";

const Modalpage = () => {
  return (
    <Modal>
      <motion.h3 className="mt-[50px] lg:ml-[-402px] lg:text-[30px] text-[20px] text-left">
        Social <span className="text-primary-blue ">Media Strategy</span>
        <br /> Development
      </motion.h3>
      <div className=" flex flex-col md:flex-row gap-8 mt-6">
        <div className="rounded-[20px] lg:min-w-[380px] min-w-[300px] h-[302px] bg-[#D4E6FB] p-5">
          <div className="content flex flex-col gap-3">
            <p className="text-[18px] text-primary-blue">Features</p>
            <div className="w-full h-[35px] bg-white"></div>
            <div className="w-full h-[35px] bg-white"></div>
            <div className="w-full h-[35px] bg-white"></div>
            <div className="w-full h-[35px] bg-white"></div>
            <div className="w-full h-[35px] bg-white"></div>
          </div>
        </div>
        <div className="rounded-[20px] lg:min-w-[380px] min-w-[300px] h-[302px] bg-[#E3CCC9] p-5">
          <div className="content flex flex-col gap-3">
            <p className="text-[18px]">Benefits</p>
            <div className="w-full h-[35px] bg-white"></div>
            <div className="w-full h-[35px] bg-white"></div>
            <div className="w-full h-[35px] bg-white"></div>
            <div className="w-full h-[35px] bg-white"></div>
            <div className="w-full h-[35px] bg-white"></div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Modalpage;
