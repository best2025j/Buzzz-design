import React from "react";
import img from "../Assets/image2.png";
import img1 from "../Assets/art1.png";
import img2 from "../Assets/ct1.png";


const Signup = () => {
  return (
    <div className="w-full h-full">
      <div className="flex h-screen w-full">
        <div className="bg-[#00B380] w-1/2 h-screen mx-auto justify-center flex items-center">
          <img src={img} alt="w-full h-full" width={437} height={450} />
        </div>
        {/*  */}
        <div className="w-1/2 flex flex-col justify-center mx-auto items-center space-y-6">
          <img src={img1} className="w" alt="" />
          <img src={img2} className="" alt="" />
          <div>
            <form action="" className="space-y-5">
              <div>
                <label htmlFor="">Your name or brand</label>
                <input
                  className="w-full p-3 rounded-md outline-none border"
                  placeholder="create buzz"
                  type="text"
                />
              </div>
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
              </div>{" "}
              <div>
                <label htmlFor="">Confrim Password</label>
                <input
                  className="w-full p-3 rounded-md outline-none border"
                  placeholder="**********"
                  type="password"
                />
                <p className="text-sm">
                  Create an account you have agreed to our{" "}
                  <span className="text-[#00B380]">terms </span>
                  and
                  <span className="text-[#00B380]"> condition</span>
                </p>
              </div>
              <div>
                <button className="w-full bg-[#00B380] p-3 text-white rounded-md">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
