import React from "react";
import img from "../Assets/image1.png";
import img1 from "../Assets/art1.png";
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
        <div className="w-1/2">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          {/* FORM */}
          <div>
            <form action="">
              <div>
                <label htmlFor="">Email</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input type="text" />
              </div>
              <div>
                <button>Login</button>
              </div>
              <img src={img3} alt="" className="" width={200} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
