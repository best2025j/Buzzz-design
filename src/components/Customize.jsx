import React from "react";
import img from "../Assets/text2.png";
import img1 from "../Assets/txt.png";
import img2 from "../Assets/btn.png";
import img3 from "../Assets/Ellipse 193.png";
import img4 from "../Assets/Rectangle 80.png";
import img5 from "../Assets/Male Mannequin Mockups - Sitting Pose - T-Shirt (side view) 1.png";

const Customize = () => {
  return (
    <div className="py-40 h-screen w-full">
      <div className="flex justify-around w-[70%] mx-auto">
        <div className="space-y-6">
          <img src={img} alt="" className="w-[18rem] h-[13rem]" />
          <img src={img1} alt="" className="w-[19rem] h-[8rem]" />
          <img src={img2} alt="" className="h-14 w-[14rem]" />
        </div>
        <div className="relative top-10">
          <div className="flex ">
            <img
              src={img3}
              alt=""
              className="relative left-[10rem] -top-[5.5rem] h-[13rem]"
            />
            <img src={img4} alt="" className="z-20 opacity-70 w-[20rem]" />
            <img src={img5} alt="" className="absolute z-20 top-2 right-0 w-[18rem] h-[26rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
