import React from "react";
import img from "../Assets/Frame 32.png";
import img1 from "../Assets/Frame 2.png";
// import img2 from "../Assets/";
// import img5 from "../Assets/";
// import img6 from "../Assets/";
import img3 from "../Assets/image/Frame 33.png";
import img4 from "../Assets/image/logo-1.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between w-[80%] mx-auto z-20 relative py-5">
        <div>
          <img src={img4} alt="" className="" />
        </div>
        <div>
          <button className="border-black border px-4 rounded-3xl py-2 text-sm">
            Sign up
          </button>
        </div>
      </div>
      <div className="flex h-full w-full absolute top-0">
        <img src={img} className="w-1/2 " alt="" />
        <div className="w-1/2">
          <div className="w-full flex flex-col justify-center mx-auto items-center space-y-4 h-[90vh] text-sm">
            <img src={img1} className="h-[5rem] " alt="" />
            <form action="" className="space-y-4">
              <div>
                <label htmlFor="">Email</label>
                <input
                  className="w-full p-2 rounded-md outline-none border focus:border-[#00b380]"
                  placeholder="mail@abc.com"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input
                  className="w-full p-2 rounded-md outline-none focus:border-[#00b380] border"
                  placeholder="**********"
                  type="password"
                />
              </div>
              {/*  */}
              <div className="">
                <input className="" type="checkbox" /> Remember Me
                <span className=" float-right text-[#00b380]">
                  <Link> Forgot Password?</Link>
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#00B380] p-2 text-white rounded-md"
                >
                  Login
                </button>
              </div>
              <div className="py-3 space-y-2 ">
                <button
                  type="submit"
                  className="border p-2 w-full flex items-center justify-center space-x-2 rounded-md"
                >
                  {/* <img src={img5} alt="" /> */}
                  <h1> Continue with Google</h1>
                </button>
                <button
                  type="submit"
                  className="border p-2 w-full flex items-center justify-center space-x-2 rounded-md"
                >
                  {/* <img src={img6} alt="" /> */}
                  <h1> Continue with Apple</h1>
                </button>
                <button
                  type="submit"
                  className="border p-2 w-full flex items-center justify-center space-x-2 rounded-md"
                >
                  {/* <img src={img7} alt="" /> */}
                  <h1>Twitter</h1>
                </button>
              </div>
            </form>
          </div>
          <div className="float-right">
            <Link to="/">
              <button>
                <img
                  src={img3}
                  alt=""
                  className="h-10 w-28 relative -top-5 right-28"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

  // <div className="bg-[#00B380] w-1/2">
  //   <img src={img} alt="w-full h-full" width={477} height={450} />
  // </div> 
    // /* <img src={img3} alt="" className="mx-auto" /> */
