import React from "react";
import { Link } from "react-router-dom";
import img from "../Assets/Frame 32(1).png";
import img1 from "../Assets/frm 2.png";
// import img2 from "../Assets/image/ct1.png";
import img3 from "../Assets/image/Frame 33.png";
import img4 from "../Assets/image/logo-1.png";

const Signup = () => {
  return (
    <div className="w-full h-full  text-xs">
      <div className="flex justify-between w-[80%] mx-auto z-20 relative py-10">
        <div>
          <img src={img4} alt="" className="" />
        </div>
        <div>
          <button className="border-black border px-4 rounded-3xl py-2">
            Sign up
          </button>
        </div>
      </div>
      <div className="flex absolute left-0 right-0 top-0">
        <img src={img} alt="" className="w-1/2 h-screen" />
        <div className="w-1/2 ">
          <div className="flex flex-col mx-auto justify-center items-center h-[90vh] pt-16">
            <img src={img1} alt="" className=" h-[8rem] py-4" />
            <form action="" className="">
              <div className="space-y-5">
                <div className="">
                  <label htmlFor="">Your name or brand</label>
                  <input
                    className="w-full p-3 rounded-md outline-none focus:border-[#00b380] border"
                    placeholder="create buzz"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="">Email</label>
                  <input
                    className="w-full p-3 rounded-md outline-none focus:border-[#00b380] border"
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
                <div>
                  <label htmlFor="">Confrim Password</label>
                  <input
                    className="w-full p-3 rounded-md outline-none focus:border-[#00b380] border"
                    placeholder="**********"
                    type="password"
                  />
                  <p className="text-[11px]">
                    Create an account you have agreed to our
                    <span className="text-[#00B380]"> terms </span>
                    and
                    <span className="text-[#00B380]"> condition</span>
                  </p>
                </div>
                <div>
                  <button className="w-full bg-[#00B380] p-3 text-white rounded-md">
                    Create Account
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="float-right">
            <Link to="/">
              <button>
                <img src={img3} alt="" className="h-10 w-28 relative top-0 right-20 " />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;


//  
//     <div className="bg-[#00B380] w-1/2 h-screen mx-auto justify-center flex items-center">
//           <img src={img} alt="w-full h-full" width={437} height={450} />
//      </div> 
//  }
// 

  //  
  //    <div className="py-4">
  //             <img src={img1} className="mx-auto" alt="" />
  //             <img src={img2} className="" alt="" />
  //    </div> 
  //  