import React from "react";
import logo from "../Assets/logo-1.png";
// import img from "../Assets/BG(2).png";
// import img1 from "../Assets/BG(3).png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full text-white">
      <div className="z-20 w-[90%] mx-auto absolute left-0 right-0 flex justify-between align-center items-center px-4 2xl:px-16 p-4">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div className="flex space-x-5 items-center text-sm">
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>Catalog</li>
            <li>Market Place</li>
            <li>About</li>
          </ul>
          {/* Buttons */}
          <div>
            <button className="border w-28 h-[42px] rounded-[20px]">
              <Link to="/login">Login</Link>
            </button>
          </div>
          <div>
            <button className="bg-[rgba(225,225,225,0.2)] blur-0 w-28 h-[42px] rounded-[20px]">
              <Link to="/signup"> Sign up</Link>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
