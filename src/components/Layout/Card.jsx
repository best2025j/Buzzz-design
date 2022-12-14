import React from "react";
import img2 from "../../Assets/Company.png";

const Card = () => {
  return (
    <div className="w-full h-full py-5">
      <div className="mx-auto hidden md:flex justify-center items-center">
        <img src={img2} alt="" className="max-w-[940px] h-full " />
      </div>

      {/* <div className="max-w-[1240px] tracking-widest py-10 mx-auto flex flex-col justify-center  text-center items-center">
        <h1 className="font-medium text-xl tracking-tight  text-black">
          Trusted by 5,000+ Companies and influencers Worldwide
        </h1>
        <div className="flex space-x-6 ">
          <img src={img} alt="" className="max-w-4xl h-full" />
        </div>
      </div>
      <div className="m-5">
        <h1 className="font-bold text-3xl text-center">
          Why <span className="text-[#00B380]">Buzzz</span>
        </h1>

        <div className="items-center flex flex-row justify-center">
          <div className="grid grid-cols-3 gap-x-6 gap-y-5 py-40 max-w-[1240px]">
            <div className="rounded-xl shadow-lg w-[300px] h-[250px]">
              <div className="mx-auto text-center items-center flex flex-col relative -top-20 space-y-1">
                <div className="bg-[#8100F7] rounded-3xl flex justify-center items-center h-36 w-36 p-4  ">
                  <img src={img1} alt="" />
                </div>
                <h1 className="text-md w-40 font-extrabold">
                  Create custom products
                </h1>
                <p className="text-sm w-48 ">
                  Easily add your designs to a wide range of products using our
                  tools
                </p>
              </div>
            </div>{" "}
            <div className="rounded-xl shadow-lg w-[300px] h-[250px]">
              <div className="mx-auto text-center items-center flex flex-col relative -top-20 space-y-1">
                <div className="bg-[#EF0034] rounded-3xl flex justify-center items-center h-36 w-36 p-4  ">
                  <img src={img2} alt="" />
                </div>
                <h1 className="text-md w-40 font-extrabold">
                  Create custom products
                </h1>
                <p className="text-sm w-48 ">
                  Easily add your designs to a wide range of products using our
                  tools
                </p>
              </div>
            </div>{" "}
            <div className="rounded-xl shadow-lg w-[300px] h-[250px]">
              <div className="mx-auto text-center items-center flex flex-col relative -top-20 space-y-1">
                <div className="bg-[#FFAF0B] rounded-3xl flex justify-center items-center h-36 w-36 p-4  ">
                  <img src={img3} alt="" />
                </div>
                <h1 className="text-md w-40 font-extrabold">
                  Create custom products
                </h1>
                <p className="text-sm w-48 ">
                  Easily add your designs to a wide range of products using our
                  tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
