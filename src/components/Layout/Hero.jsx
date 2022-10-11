import React from "react";
import img1 from "../../Assets/Group 1000001621.png";
import img2 from "../../Assets/header-pic.png";

const Hero = () => {
  return (
    <div className="">
      <img src={img1} alt="" className="w-full md:h-screen h-[30rem]" />
      <div className="flex items-center justify-between absolute top-0 w-full">
        <div className="sm:pl-14 space-y-6 text-center sm:text-start pt-40 sm:pt-0">
          <h1 className="text-5xl sm:w-[18rem] lg:w-[26rem] text-white">
            <b>Create</b> and <b>sell</b> custom products for your <b>fans</b>
          </h1>
          <p className="w-[18rem] text-center sm:text-start mx-auto sm:mx-0">
            Turn your ideas into premium products that leave a lasting
            impression.
          </p>
        </div>
        <div className="w-full h-screen sm:block hidden">
          <img
            src={img2}
            alt=""
            className=" sm:w-[50%] sm:h-[73vh] md:h-screen md:w-[60%] lg:w-[65%]  absolute top-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
// {
//   /* <div className="md:flex absolute h-full w-[90%] top-0 left-0 right-0 mx-auto md:mx-0">
//       <div className="md:pt-[10rem] text-center md:text-start pt-[8rem] relative lg:left-[6rem] md:left-[4rem] z-10 space-y-6">
//         <h1 className="text-5xl md:w-[40%] text-white  md:mx-0 mx-auto">
//           <b>Create</b> and <b>sell</b> custom products for your <b>fans</b>
//         </h1>
//         <p className="w-[18rem] md:mx-0 mx-auto">
//           Turn your ideas into premium products that leave a lasting
//           impression.
//         </p>
//       </div>
//       <img
//         src={img2}
//         alt=""
//         className="hidden md:block md:w-[70%] md:h-screen lg:w-[75%] left-80 absolute" 
//       />
//     </div> */
// }
