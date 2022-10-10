import React from "react";
import logo from "../../Assets/image/logo.png";
import { Link, NavLink } from "react-router-dom";

const IndexMarket = () => {
  return (
    <div className="w-full p-5">
      <div className="w-[90%] flex justify-between align-center items-center mx-auto">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div className="flex space-x-8 items-center text-sm">
          <ul className="flex space-x-10">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="">
              <li>Catalog</li>
            </NavLink>
            <NavLink to="/market-place">
              <li>Market Place</li>
            </NavLink>
            <NavLink to="">
              <li>About</li>
            </NavLink>
          </ul>
          {/* Buttons */}
          <div>
            <button className="border w-28 h-[42px] rounded-[20px]">
              <Link to="/login">Login</Link>
            </button>
          </div>
          <div>
            <button className="bg-[rgba(225,225,225,0.62)] blur-0 w-28 h-[42px] rounded-[20px]">
              <Link to="/signup"> Sign up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexMarket;
