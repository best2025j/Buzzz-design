import React from "react";
import img2 from "../Assets/mobile muckup.png";
import img3 from "../Assets/image 290 (Traced).png";
import img4 from "../Assets/image 288.png";
import img5 from "../Assets/image 289.png";

const Content = () => {
  return (
    <div className="relative pt-32 text-white">
      <div className="items-center flex justify-center absolute top-3 left-0 right-40">
        <img src={img3} alt="" />
      </div>
      <div className="w-full bg-[#00B380] h-screen flex">
        <div className="left-24 relative pt-40 space-y-3 justify-center flex-col">
          <h1 className="text-base">Get Our Aplication</h1>
          <h1 className="text-4xl w-[64%] font-bold">
            Your fans SHOP your marketplace on our app
          </h1>
          <p className="text-base w-[65%]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            ametsint. Velit officia consequat duis enim velit mollit.
            Exercitationveniam consequat sunt nostrud amet.
          </p>
          <div className="">
            <img src={img4} alt="apple" className="h-20 w-44" />
            <img src={img5} alt="apple" className="h-14 w-44" />
          </div>
        </div>
        <div className="w-full h-screen ">
          <img src={img2} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Content;
