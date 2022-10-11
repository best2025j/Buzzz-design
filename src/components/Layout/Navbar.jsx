import React, { useState } from "react";
import logo from "../../Assets/image/logo-1.png";
import logo1 from "../../Assets/image/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-full text-white">
      <div className="z-20 w-[90%] mx-auto absolute top-0 left-0 right-0 flex justify-between align-center items-center h-20">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div className="lg:flex hidden space-x-4 items-center text-sm">
          <ul className="flex">
            <NavLink to="#">
              <li className="p-4 font-bold text-sm hover:text-gray-400 active:text-blue-300">
                Home
              </li>
            </NavLink>
            <NavLink to="">
              <li className="p-4 font-bold text-sm hover:text-gray-400 active:text-blue-300">
                Catalog
              </li>
            </NavLink>
            <NavLink to="/market-place">
              <li className="p-4 font-bold text-sm hover:text-gray-400 active:text-blue-300">
                Market Place
              </li>
            </NavLink>
            <NavLink to="">
              <li className="p-4 font-bold text-sm hover:text-gray-400 active:text-blue-300">
                About
              </li>
            </NavLink>
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

        {/* hamburger menu */}
        <div onClick={handClick} className="lg:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* side drawer */}
      <div
        className={
          nav
            ? "lg:hidden fixed left-0 top-0 w-full h-full bg-black/80 z-50"
            : ""
        }
      >
        {/* Side Drawer Menu */}

        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white text-black border-r rounded-r-3xl p-5 ease-in duration-500 "
              : "fixed left-[-100%] h-screen top-0 p-5 ease-out duration-700 bg-white"
          }
        >
          <div className="flex w-full items-center justify-between ">
            <Link to="">
              <a href="/">
                <img src={logo1} alt="" width="122" height="122" />
              </a>
            </Link>
            <div
              onClick={handClick}
              className="rounded-full shadow bg-black shadow-slate-500 p-2 cursor-pointer"
            >
              <AiOutlineClose size={20} className="text-white" />
            </div>
          </div>

          <div className="flex flex-col py-4 ">
            <ul className="font-bold space-y-1">
              <NavLink to="#">
                <li className="text-sm p-4" onClick={handleClose}>
                  Home
                </li>
              </NavLink>
              <NavLink to="">
                <li className="text-sm p-4" onClick={handleClose}>
                  Catalog
                </li>
              </NavLink>
              <NavLink to="/market-place">
                <li className="text-sm p-4" onClick={handleClose}>
                  Market Place
                </li>
              </NavLink>
              <NavLink to="">
                <li className="text-sm p-4" onClick={handleClose}>
                  About
                </li>
              </NavLink>
            </ul>
            {/* Buttons */}
            <div className="space-y-3 absolute bottom-2 sm:bottom-2 w-[90%]">
              <div>
                <button className="border border-black h-[45px] rounded-[20px] w-full">
                  <Link to="/login">Login</Link>
                </button>
              </div>
              <div>
                <button className="bg-[#7a6f6f98] border border-black blur-0 w-full h-[45px] rounded-[20px]">
                  <Link to="/signup"> Sign up</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// import React, { useState } from "react";
// import logo from "../../Assets/image/logo-1.png";
// import logo1 from "../../Assets/image/logo.png";
// import { Link, NavLink } from "react-router-dom";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//    const [nav, setNav] = useState(false);
//    const handClick = () => setNav(!nav);
//   const handleClose = () => setNav(!nav);

//   return (
//     <div className="w-full text-white">
//       <div className="z-20 w-[90%] mx-auto absolute left-0 right-0 flex justify-between align-center items-center h-20">
//         <a href="/">
//           <img src={logo} alt="" />
//         </a>
//         <div className="md:flex hidden space-x-4 items-center text-sm">
//           <ul className="flex">
//             <NavLink to="#">
//               <li className="p-4 font-bold text-sm hover:text-gray-400 active:text-blue-300">
//                 Home
//               </li>
//             </NavLink>
//             <NavLink to="">
//               <li className="p-4 font-bold text-sm hover:text-gray-400 active:text-blue-300">
//                 Catalog
//               </li>
//             </NavLink>
//             <NavLink to="/market-place">
//               <li className="p-4 font-bold text-sm hover:text-gray-400 active:text-blue-300">
//                 Market Place
//               </li>
//             </NavLink>
//             <NavLink to="">
//               <li className="p-4 font-bold text-sm hover:text-gray-400 active:text-blue-300">
//                 About
//               </li>
//             </NavLink>
//           </ul>
//           {/* Buttons */}
//           <div>
//             <button className="border w-28 h-[42px] rounded-[20px]">
//               <Link to="/login">Login</Link>
//             </button>
//           </div>
//           <div>
//             <button className="bg-[rgba(225,225,225,0.2)] blur-0 w-28 h-[42px] rounded-[20px]">
//               <Link to="/signup"> Sign up</Link>
//             </button>
//           </div>
//         </div>
//         {/* hamburger menu */}
//         <div onClick={handClick} className="md:hidden cursor-pointer">
//           <AiOutlineMenu size={25} />
//         </div>
//       </div>

//       {/* side drawer */}
//       <div
//         className={
//           nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80 z-50" : ""
//         }
//       >
//         {/* Side Drawer Menu */}

//         <div
//           className={
//             nav
//               ? " fixed left-0 top-0 w-[50%] sm:w-[60%] md:w-[45%] h-screen bg-slate-700 text-black border-r rounded-r-3xl p-5 ease-in duration-500"
//               : "fixed left-[-100%] h-screen top-0 p-5 ease-out duration-700 bg-white"
//           }
//         >
//           <div className="flex w-full items-center justify-between ">
//             <Link to="">
//               <a href="/">
//                 <img src={logo1} alt="" width="122" height="122" />
//               </a>
//             </Link>
//             <div
//               onClick={handClick}
//               className="rounded-full shadow bg-black/80 shadow-slate-500 p-2 cursor-pointer"
//             >
//               <AiOutlineClose size={20} className="text-white" />
//             </div>
//           </div>

//           <div className="border-b border-gray-400 py-4">
//             <p className="w-[90%] sm:w-[90%] md:w-full py-2">
//               Let&#39; build something legendary together
//             </p>
//           </div>

//           <div className="flex flex-col py-4 ">
//             <ul className="font-bold space-y-1">
//               <NavLink to="#">
//                 <li className="text-sm p-4" onClick={handleClose}>
//                   Home
//                 </li>
//               </NavLink>
//               <NavLink to="">
//                 <li className="text-sm p-4" onClick={handleClose}>
//                   Catalog
//                 </li>
//               </NavLink>
//               <NavLink to="/market-place">
//                 <li className="text-sm p-4" onClick={handleClose}>
//                   Market Place
//                 </li>
//               </NavLink>
//               <NavLink to="">
//                 <li className="text-sm p-4" onClick={handleClose}>
//                   About
//                 </li>
//               </NavLink>
//             </ul>
//             {/* Buttons */}
//             <div className="space-y-3 absolute bottom-2 sm:bottom-2 w-[90%]">
//               <div>
//                 <button className="border h-[42px] rounded-[20px] w-full">
//                   <Link to="/login">Login</Link>
//                 </button>
//               </div>
//               <div>
//                 <button className="bg-[rgba(225,225,225,0.2)] border blur-0 w-full h-[42px] rounded-[20px]">
//                   <Link to="/signup"> Sign up</Link>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
