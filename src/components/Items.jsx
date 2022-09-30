import React from "react";
import img1 from "../Assets/3569170.png";
import img2 from "../Assets/3569171.png";
import img3 from "../Assets/T-SHIRT MOCKUP FREE (1) 1.png";
import img4 from "../Assets/T-SHIRT MOCKUP FREE (2) 1.png";
import img5 from "../Assets/Frame 49.png";
import img6 from "../Assets/Vector.png";

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
              <div className="">
                <div className="justify-end flex relative -top-4 left-6">
                  <img
                    src={img6}
                    alt=""
                    className="w-10 bg-white h-10 p-2 rounded-full"
                  />
                </div>
                <img src={img1} alt="" />
              </div>
            </div>
            <h1 className="font-bold text-xl">Create Buzzz Custome</h1>
            <span>₦42942</span>
          </div>
          <div className="flex-col flex items-center space-y-2">
            <div className="w-[295px] h-[349px] bg-[#F1F1F1] border flex justify-center items-center">
              <div className="">
                <div className="justify-end flex relative top-4 left-0">
                  <img
                    src={img6}
                    alt=""
                    className="w-10 bg-white h-10 p-2 rounded-full"
                  />
                </div>
                <img src={img2} alt="" />
              </div>
            </div>
            <h1 className="font-bold text-xl">Create Buzzz Custome</h1>
            <span>₦42942</span>
          </div>
          <div className="flex-col flex items-center space-y-2">
            <div className="w-[295px] h-[349px] bg-[#F1F1F1] border flex justify-center items-center">
              <div className="">
                <div className="justify-end flex relative top-2 left-6">
                  <img
                    src={img6}
                    alt=""
                    className="w-10 bg-white h-10 p-2 rounded-full"
                  />
                </div>
                <img src={img3} alt="" />
              </div>
            </div>
            <h1 className="font-bold text-xl">Create Buzzz Custome</h1>
            <span>₦42942</span>
          </div>
          <div className="flex-col flex items-center space-y-2">
            <div className="w-[295px] h-[349px] bg-[#F1F1F1] border flex justify-center items-center">
              <div className="">
                <div className="justify-end flex relative top-0 left-4">
                  <img
                    src={img6}
                    alt=""
                    className="w-10 bg-white h-10 p-2 rounded-full"
                  />
                </div>
                <img src={img4} alt="" />
              </div>
            </div>
            <h1 className="font-bold text-xl">Create Buzzz Custome</h1>
            <span>₦42942</span>
          </div>
        </div>
        <div className="justify-center flex">
          <button>
            <img src={img5} alt="" className="h-16 w-60" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Items;