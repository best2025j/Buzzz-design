import React from "react";
import img from "../../Assets/image/text2.png";
import img1 from "../../Assets/image/txt.png";
import img2 from "../../Assets/image/btn.png";
import img3 from "../../Assets/Group 13.png";


const Customize = () => {
  return (
    <div className=" h-full w-full pt-10">
      <div className="flex justify-around">
        <div className="space-y-10 pt-16">
          <img src={img} alt="" className="w-[18rem] h-[13rem]" />
          <img src={img1} alt="" className="w-[19rem] h-[8rem]" />
          <button type="submit" className="pt-20">
            <img src={img2} alt="" className="h-14 w-[14rem]" />
          </button>
        </div>
        <img src={img3} alt="" className="w-[35rem] h-full"/>
      </div>
      {/* <div className="flex justify-around w-[70%] mx-auto">
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
      </div> */}
    </div>
  );
};

export default Customize;
