import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DetailsContext } from "../../context/DetailsContext";

export const SelfProfileCard = () => {
    const{loading, shortDetails ,longsDetails}=useContext(DetailsContext)
  if(loading) return  <div>Loading user data...</div>;

   const{name}=shortDetails;
   const{avatar,banner}=longsDetails ||{}

  return (
    <>
      <div className="bg-gray-200 flex flex-col space-y-7 rounded-2xl overflow-hidden p-3">
        <div className=" w-full relative flex justify-center items-end-safe rounded-md  ">
          <img
            src={banner||"../../src/public/banner.png"}
            alt="Banner"
            className="w-full h-20 object-cover rounded-2xl"
          />

          {/* <!-- Profile image overlapping the banner --> */}
          <img
            src={avatar||"../../src/public/Profile_avatar.png"}
            className="absolute translate-y-2/5 object-cover  h-15 w-15 rounded-full border-4 border-white"
          />
        </div>
        <div className="flex flex-col text-center rounded-md">
          <h1 className="font-bold text-md">{name ?? "IIT MITRA"}</h1>
    
          <div className="flex justify-center space-x-3">
            <div className="sm:hidden block">
              <h1 className="text-black font-bold text-sm">Posts</h1>
              <div className="text-black font-semibold text-sm">100</div>
            </div>
            <div>
              <h1 className="text-black font-bold text-sm">Mitras</h1>
              <div className="text-black font-semibold text-sm">20</div>
            </div>
            {/* <div className="sm:hidden lg:block">
              <h1 className="text-black font-bold text-sm ">Following</h1>
              <div className="text-black font-semibold text-sm">100</div>
            </div> */}
            {/* <!-- <div>
      <h1 className="text-black font-bold text-lg">Mitras</h1>
      <div className="text-black font-semibold text-lg">10</div>
    </div> --> */}
          </div>
          <Link
            to="/profile"
            className="bg-blue-500 w-full my-2 rounded-md hover:bg-cyan-700"
          >
            View Profile
          </Link>
        </div>
      </div>
    </>
  );
};
