import React from "react";
import { PhoneSlides } from "../constants";
import Head from "next/head";
import Carousel from "./Carousel";

export default function ProofSection() {
  return (
    <div className="home-proof-container ">
      <div className="home-proof-title mb-20">
        <h3>
          Nothing speaks{" "}
          <span className="pri-color typing-txt-width">
            <span className="text-typing"></span>
          </span>
          <br /> than results
        </h3>
      </div>

      <Carousel />
    </div>
  );
}
