import React from "react";
import img from "../Assets/image1.png";
import img1 from "../Assets/art2.png";
import img2 from "../Assets/ct2.png";
import img3 from "../Assets/oR.png";

const Login = () => {
  return (
    <div className="w-full h-full">
      <div className="flex h-screen w-full">
        <div className="bg-[#00B380] w-1/2">
          <img src={img} alt="w-full h-full" width={477} height={450} />
        </div>
        {/*  */}
        <div className="w-1/2 flex flex-col justify-center mx-auto items-center space-y-6">
          <img src={img1} className="w" alt="" />
          <img src={img2} className="" alt="" />
          <div>
            <form action="" className="space-y-5">
              <div>
                <label htmlFor="">Email</label>
                <input
                  className="w-full p-3 rounded-md outline-none border"
                  placeholder="mail@abc.com"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input
                  className="w-full p-3 rounded-md outline-none border"
                  placeholder="**********"
                  type="password"
                />
              </div>
              <label>
                <input
                  className="p-3 bg-[#00B380] rounded-md outline-none "
                  type="checkbox"
                />
                <span className="text-sm"> Remember Me</span>
                <span className="text-sm float-right text-[#00b380]">
                  Forgot Password?
                </span>
              </label>
              <div>
                <button className="w-full bg-[#00B380] p-3 text-white rounded-md">
                  Login
                </button>
              </div>
                <img src={img3} alt="" className="mx-auto" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
