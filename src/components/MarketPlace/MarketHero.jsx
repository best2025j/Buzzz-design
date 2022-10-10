import React from "react";
import image from "../../Assets/man(2).png";
import image1 from "../../Assets/man(1).png";
import image2 from "../../Assets/man.png";
import image3 from "../../Assets/man(3).png";
import image4 from "../../Assets/man(4).png";
import BottomNav from "../Layout/BottomNav";

const MarketHero = () => {
  return (
    <div>
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-4xl font-bold">
          <span className="text-green-500">Market</span> Place
        </h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        <div className="flex font-bold space-x-6 items-center pt-10 justify-center">
          <p className="text-[#FFAF0B]">New Arrival</p>
          <p>Featured</p>
          <p>Trending</p>
        </div>
      </div>
      <div className="grid grid-cols-4 mx-auto gap-x-6 gap-y-5 p-4 max-w-[1240px]">
        <img src={image} className="" alt="" />
        <img src={image1} className="" alt="" />
        <img src={image2} className="" alt="" />
        <img src={image3} className="" alt="" />
        {/*  */}
        <img src={image} className="" alt="" />
        <img src={image1} className="" alt="" />
        <img src={image2} className="" alt="" />
        <img src={image3} className="" alt="" />
        {/*  */}
        <img src={image} className="" alt="" />
        <img src={image1} className="" alt="" />
        <img src={image2} className="" alt="" />
        <img src={image4} className="" alt="" />
          </div>
          <div className="">
              <BottomNav />
          </div>
    </div>
  );
};

export default MarketHero;
