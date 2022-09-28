import React from "react";
import img1 from "../Assets/Male Mannequin Mockups - Sitting Pose - T-Shirt 1.png";

import img from "../Assets/BG(2).png";
import img2 from "../Assets/BG(3).png";

const Hero = () => {
  return (
    <div className="relative">
      <div className="">
        <img src={img2} alt="" className="w-full h-[98vh] " />
      </div>
      <div className="absolute top-4">
        <img src={img} alt="" className="w-full h-[98vh] " />
      </div>

      <div className="flex absolute top-1">
        <div className="relative left-24 pt-[200px] space-y-6">
          <h1 className="text-6xl w-[30rem] text-white">
            <b>Create</b> and <b>sell</b> custom products for your <b>fans</b>
          </h1>
          <p className="w-60 text-black">
            Turn your ideas into premium products that leave a lasting
            impression.
          </p>
        </div>
        <div className="">
          <img src={img1} alt="" className="w-ful h-screen" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
