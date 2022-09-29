import React from "react";
import img from "../Assets/image1.png";
import img1 from "../Assets/art2.png";
import img2 from "../Assets/ct2.png";
import img3 from "../Assets/oR.png";
import img4 from "../Assets/G1.png";
import img5 from "../Assets/Vt(1).png";
import img6 from "../Assets/Vt(1).png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-full">
      <div className="flex h-screen w-full">
        <div className="bg-[#00B380] w-1/2">
          <img src={img} alt="w-full h-full" width={477} height={450} />
        </div>
        {/*  */}

        <div className="w-1/2 flex flex-col justify-center mx-auto items-center space-y-4 p-36">
          <img src={img1} className="" alt="" />
          <img src={img2} className="" alt="" />

          {/*  */}
          <div className="w-full">
            <form action="" className="space-y-4">
              <div>
                <label htmlFor="">Email</label>
                <input
                  className="w-full p-3 rounded-md outline-none border focus:border-[#00b380]"
                  placeholder="mail@abc.com"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input
                  className="w-full p-3 rounded-md outline-none focus:border-[#00b380] border"
                  placeholder="**********"
                  type="password"
                />
              </div>
              {/*  */}
              <div className="items-center flex justify-between text-sm">
                <label>
                  <input className="" type="checkbox" /> Remember Me
                </label>
                <span className="text-smt text-[#00b380]">
                  <Link> Forgot Password?</Link>
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#00B380] p-3 text-white rounded-md"
                >
                  Login
                </button>
              </div>
              <img src={img3} alt="" className="mx-auto" />
              {/*  */}
            </form>
            {/*  */}
            <div className="py-3 space-y-2">
              <button
                type="submit"
                className="border p-3 w-full flex items-center justify-center space-x-2 rounded-md"
              >
                <img src={img4} alt="" />
                <h1> Continue with Google</h1>
              </button>
              <button
                type="submit"
                className="border p-3 w-full flex items-center justify-center space-x-2 rounded-md"
              >
                <img src={img5} alt="" />
                <h1> Continue with Apple</h1>
              </button>
              <button
                type="submit"
                className="border p-3 w-full flex items-center justify-center space-x-2 rounded-md"
              >
                <img src={img6} alt="" />
                <h1>Twitter</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
