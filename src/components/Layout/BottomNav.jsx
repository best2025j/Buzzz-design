import React from "react";
// import img from "../Assets/image/BG.png";
import img from "../../Assets/Group 1000001646.png";
// import img1 from "../../Assets/image/BG(1).png";
import img2 from "../../Assets/image/logo.png";
import img3 from "../../Assets/image/Vector-3.png";
import img4 from "../../Assets/image/Group 77.png";
import img5 from "../../Assets/image/Vector-1.png";

const BottomNav = () => {
  return (
    <div className="py-20">
      <div className="h-full w-full">
        <div className="mx-auto flex flex-col justify-center items-center w-full h-full max-w-[900px] ">
          <div className="relative">
            <img src={img} alt="" className="" />
            {/* <img src={img1} alt="" className="absolute top-9" /> */}
            <div className="max-w-[580px] mx-auto text-center text-white space-y-2 absolute top-12 left-0 right-0 ">
              <h1 className="text-4xl font-bold">Subscribe our newsletter</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="pt-4">
                <form action="">
                  <input
                    type="btn"
                    className="w-full rounded-[1.6rem] border-black border-2 outline-none bg-transparent h-14 text-black placeholder:text-black"
                    placeholder="  Email"
                  />
                  <button
                    type="submit"
                    className="px-8 bg-black rounded-3xl relative -top-14 float-right h-14"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="w-[80%] mx-auto border-b-2 py-10 pt-40 flex justify-between items-center">
          <img src={img2} alt="" />
          <ul className="flex space-x-6">
            <select name="" id="" className="">
              <option value="">Careers</option>
            </select>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <div className="flex-row flex space-x-6">
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="text-center py-6">
          <p>Copyright © 2020 create buzzz</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
