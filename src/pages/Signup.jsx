import React from "react";
import img from "../Assets/image2.png";

const Signup = () => {
  return (
    <div className="w-full h-full">
      <div className="flex h-screen w-full">
        <div className="bg-[#00B380] w-1/2 h-screen mx-auto justify-center flex items-center">
          <img src={img} alt="w-full h-full" width={437} height={450} />
        </div>
        <div className="w-1/2">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
