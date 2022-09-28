import React from "react";
import img from "../Assets/Group 16.png";

const Card = () => {
  return (
    <div className="py-10 mx-auto flex justify-center text-center items-center">
      <div className="max-w-[1240px] space-y-4">
        <h1 className="font-medium text-black">
          Trusted by 5,000+ Companies and influencers Worldwide
        </h1>
        <div className="flex space-x-6 ">
          <img src={img} alt="" className="max-w-3xl h-full" />
        </div>
      </div>
    </div>
  );
};

export default Card;
