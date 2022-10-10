import React from "react";

export const DashboardHome = () => {
    return (
      <div className="absolute z-20 left-0 right-0 top-0 pl-60 px-4">
        <div className="flex justify-between w-full h-20 items-center">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <button className="px-6 h-[36px] flex-grow-0 text-white rounded-[6px] bg-[#00B380]">
            Create
          </button>
        </div>
      </div>
    );
};


//  <div className="pl-60 w-full h-screen top-0 absolute">
//    <div className="flex justify-between items-center w-[80%] h-20">
//      <h1 className="text-3xl font-semibold">Dashboard</h1>
//      <button className="px-6 py-2 rounded-[6px] bg-[#00B380]">Create</button>
//    </div>
//  </div>;
