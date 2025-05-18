import React from "react";

export const SelfProfileCard = () => {
  return (
    <>
    <div className="bg-gray-200 flex flex-col space-y-7 rounded-2xl overflow-hidden p-3">
      <div className=" w-full relative flex justify-center items-end-safe rounded-md  ">
        <img
          src="https://images.pexels.com/photos/236599/pexels-photo-236599.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Banner"
          className="w-full h-20 object-cover rounded-2xl"
        />

        {/* <!-- Profile image overlapping the banner --> */}
        <img
          src="https://images.pexels.com/photos/1580272/pexels-photo-1580272.jpeg?auto=compress&cs=tinysrgb&w=300"
          className="absolute translate-y-2/5 object-cover  h-15 w-15 rounded-full border-4 border-white"
        />
      </div>
      <div className="flex flex-col text-center rounded-md">
        <h1 className="font-bold text-md">IIT MITRA</h1>
        {/* <!-- <p className="text-sm font-bold">IIT PATNA 2024-2027</p>
            <p className="text-sm mb-2 font-semibold">
              B.Sc Computer Science and Data Analytics
            </p> -->
   */}
        <div className="flex justify-center space-x-3">
          <div>
            <h1 className="text-black font-bold text-sm">Posts</h1>
            <div className="text-black font-semibold text-sm">100</div>
          </div>
          <div>
            <h1 className="text-black font-bold text-sm">Follower</h1>
            <div className="text-black font-semibold text-sm">2025</div>
          </div>
          <div className="sm:hidden lg:block">
            <h1 className="text-black font-bold text-sm ">Following</h1>
            <div className="text-black font-semibold text-sm">100</div>
          </div>
          {/* <!-- <div>
      <h1 className="text-black font-bold text-lg">Mitras</h1>
      <div className="text-black font-semibold text-lg">10</div>
    </div> --> */}
        </div>
        <button className="bg-blue-500 w-full my-2 rounded-md hover:bg-cyan-700">
          View Profile
        </button>
      </div>
      </div>
    </>
  );
};
