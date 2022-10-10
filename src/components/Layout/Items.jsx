import React from "react";
import img from "../../Assets/boy.png"
import img1 from "../../Assets/boy(1).png";
import img2 from "../../Assets/boy(2).png";
import img3 from "../../Assets/boy(3).png";
import img4 from "../../Assets/image/frm.png";


const Items = () => {
  return (
    <div className="h-screen w-full">
      <div>
        <h1 className="text-center font-bold text-5xl">
          Explore Our <span className="text-[#FFAF0B]">Market Place</span>
        </h1>

        <div className="grid grid-cols-4 max-w-[1240px] mx-auto gap-x-4 p-5">
          <img src={img} alt="" />
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>

        {/* <div className="grid grid-cols-4 py-10 mx-auto gap-x-8">
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
        </div> */}
        <div className="justify-center flex py-10">
          <button>
            <img src={img4} alt="" className="h-16 w-60" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Items;