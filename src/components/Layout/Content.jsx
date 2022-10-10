import React from "react";
import img from "../../Assets/Why buz.png";
import img1 from "../../Assets/CTA(1).png";


const Content = () => {
  return (
    <div className="w-full h-full">
      <div className="mx-auto flex flex-col justify-center items-center ">
        <div className="z-20 relative">
          <img src={img} alt="" className="" />
        </div>{" "}
        <div className="relative -top-[7.5rem]">
          <img src={img1} alt="" className="" />
        </div>
      </div>

      {/* <div className="w-full bg-[#00B380] h-screen flex">
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
      </div> */}
    </div>
  );
};

export default Content;
