import React from "react";
import img from "../../Assets/CTA.png";

const Red = () => {
  return (
    <div className="flex mx-auto items-center justify-center w-full h-full pt-40">
      <div>
        <img src={img} alt="" />
      </div>
      {/* <div className="min:h-screen w-full bg-[#EF0034] text-white">
        <div className="flex justify-around">
          <h1 className="w-[426px] font-bold py-6 text-5xl">What people say</h1>
          <img src={img} alt="" className="w-[18rem] h-[16rem]" />
        </div>
        <div className="h-[450px] w-[700px] relative -top-[8rem] bg-gradient-to-b  from-[#e5f0fd8f] to-opacity-70 border mx-auto z-20 rounded-2xl">
          <div className="flex justify-between z-20 max-w-2xl mx-auto p-8 items-center">
            <img src={img1} alt="home" className="w-[90px] h-[66px]" />
            <img src={img2} alt="home" className="w-[90px] h-[45px]" />
          </div>

          <h1 className="max-w-[36.5rem] text-[1.4rem] mx-auto">
            If anyone is looking to create a book cover, this is the place you
            need to visit.My editor recommended 99design and I am glad she did.
            My only regret is that I didn't here about them for my first 3
            books. That did a great job!!
          </h1>
          <div className="flex items-center space-x-4 p-12">
            <img src={img4} alt="" className="w-16 h-15" />
            <div>
              <h1>Jaydon Bator</h1>
              <p>Sr. Designer</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={img3}
            alt=""
            // className="w-[16rem] h-[14rem] absolute -top-[17.1rem] left-[12.8rem] "
            className="w-[17rem] h-[14rem] absolute -top-[14rem] left-[12.8rem] "
          />
        </div>
      </div> */}
    </div>
  );
};

export default Red;
