import React from "react";
import img1 from "../../Assets/Group 1000001621.png";
import img2 from "../../Assets/header-pic.png";


const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img src={img1} alt="" className="w-full h-screen" />
      <div className="flex absolute h-full w-[90%] top-0">
        <div className="pt-[10rem] relative left-[6rem] z-10 space-y-6">
          <h1 className="text-5xl w-[40%] text-white">
            <b>Create</b> and <b>sell</b> custom products for your <b>fans</b>
          </h1>
          <p className="w-[18rem]">
            Turn your ideas into premium products that leave a lasting
            impression.
          </p>
        </div>
        <img src={img2} alt="" className="w-[80%] h-screen left-80 absolute" />
      </div>
    
    </div>
  );
};

export default Hero;
