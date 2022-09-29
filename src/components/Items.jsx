import React from "react";
import img1 from "../Assets/3569170.png";
import img2 from "../Assets/3569171.png";
import img3 from "../Assets/T-SHIRT MOCKUP FREE (1) 1.png";
import img4 from "../Assets/T-SHIRT MOCKUP FREE (2) 1.png";
import img5 from "../Assets/Frame 49.png";

const Items = () => {
  return (
    <div className="py-20 h-screen w-full">
      <div>
        <h1 className="text-center font-bold text-5xl">
          Explore Our <span className="text-[#FFAF0B]">Market Place</span>
        </h1>

        <div className="grid grid-cols-4 py-10 mx-auto gap-x-8 max-w-[1240px]">
          <div className="flex-col flex items-center space-y-2">
            <div className="w-[295px] h-[349px] bg-[#F1F1F1] border flex justify-center items-center">
              <img src={img1} alt="" />
            </div>
            <h1 className="font-bold text-xl">Create Buzzz Custome</h1>
            <span>₦42942</span>
          </div>{" "}
          <div className="flex-col flex items-center space-y-2">
            <div className="w-[295px] h-[349px] bg-[#F1F1F1] border flex justify-center items-center">
              <img src={img2} alt="" />
            </div>
            <h1 className="font-bold text-xl">Create Buzzz Custome</h1>
            <span>₦42942</span>
          </div>{" "}
          <div className="flex-col flex items-center space-y-2">
            <div className="w-[295px] h-[349px] bg-[#F1F1F1] border flex justify-center items-center">
              <img src={img3} alt="" />
            </div>
            <h1 className="font-bold text-xl">Create Buzzz Custome</h1>
            <span>₦42942</span>
          </div>{" "}
          <div className="flex-col flex items-center space-y-2">
            <div className="w-[295px] h-[349px] bg-[#F1F1F1] border flex justify-center items-center">
              <img src={img4} alt="" />
            </div>
            <h1 className="font-bold text-xl">Create Buzzz Custome</h1>
            <span>₦42942</span>
          </div>
        </div>
        <div className="justify-center flex">
          <img src={img5} alt="" className="h-16" />
        </div>
      </div>
    </div>
  );
};

export default Items;
