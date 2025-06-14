import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { ProfilePic } from "./ProfilePic";
import { BioSection } from "./BioSection";
import { DetailsContext } from "../../context/DetailsContext";
import { useState } from "react";

export const Profile = () => {
  const { shortDetails, longsDetails ,imgUrl } = useContext(DetailsContext);
  const { name, email } = shortDetails;
  const { institute, branch, bio, skills } = longsDetails;
 


  return (
    <>
      {/* <!-- main container --> */}

      <div className="flex flex-col overflow-hidden mx-1 mt-1 rounded-md ">
        {/* <!-- Banner section --> */}

        <div className="relative bg-slate-300 s">
          {/* <!-- <button
            className="absolute  text-white bg-gray-700 hover:bg-blue-800 text-sm rounded-md m-2 p-1"
          >
            <i className="fa-solid fa-user-pen"></i>
          </button> --> */}
          <img
            src="https://images.pexels.com/photos/236599/pexels-photo-236599.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Banner"
            className="w-full h-32 sm:h-48 object-cover"
          />

          {/* <!-- Profile image overlapping the banner --> */}
          <img
            src="https://images.pexels.com/photos/1580272/pexels-photo-1580272.jpeg?auto=compress&cs=tinysrgb&w=300"
            className="absolute object-cover bottom-[-40px] left-1/2 transform -translate-x-1/2 sm:size-30 size-28  rounded-full border-4 border-white"
          />
          <Link
            className="float-right text-black bg-[#00A6FB] hover:bg-blue-800 text-sm rounded-md m-2 p-1 flex justify-center items-center"
            to="/editprofile"
          >
            <i  className="fa-solid fa-user-pen px-0.5"></i>
            <span className="sm:hidden lg:block ">Edit Profile</span>
          </Link>
        </div>
        {/* <!-- user details --> */}
        <div className="bg-gray-300 pt-12 text-center pb-2 rounded-b-md ">
          <h1 className="font-extrabold text-xl">{name ?? "IIT MITRA"}</h1>
          <p className="text-sm font-bold">{institute ?? "INDIAN INSTITUTE OF TECHNOLOGY"}</p>
          <p className="text-sm mb-2 font-semibold">{branch ?? "COMPUTER SCIENCE"}</p>
          <p>{bio ?? "BIO"}</p>
          <p>{skills ?? "SKILLS"}</p>
          <div></div>

          <div className="flex justify-center space-x-5">
            <div>
              <h1 className="text-black font-bold text-lg">Posts</h1>
              <div className="text-black font-semibold text-lg">100</div>
            </div>
            {/* <div>
              <h1 className="text-black font-bold text-lg">Follower</h1>
              <div className="text-black font-semibold text-lg">2025</div>
            </div>
            <div>
              <h1 className="text-black font-bold text-lg">Following</h1>
              <div className="text-black font-semibold text-lg">100</div>
            </div> */}
            <div>
              <h1 className="text-black font-bold text-lg">Mitras</h1>
              <div className="text-black font-semibold text-lg">10</div>
            </div>
          </div>

          <div className="flex space-x-2 justify-center items-center">
            <Link to="#">
              <img
                src="../../src/assets/linkedin.png"
                className="size-10"
                alt=""
              />
            </Link>
            <Link to="#">
              <img
                src="../../src/assets/yt.png "
                className="size-10 mr-2"
                alt=""
              />
            </Link>
            <Link to="#">
              <img
                src="../../src/assets/insta.png"
                className="size-5 mr-3"
                alt=""
              />
            </Link>
            <Link to="#">
              <img
                src="../../src/assets/fb.png"
                className="size-5 m-2"
                alt=""
              />
            </Link>
          </div>
        </div>
      
        <div className="flex bg-slate-300 p-2 mt-1 rounded-md pl-5 space-x-15 sm:space-x-20 justify-center">
          <Link to="/profile">
            <i className="fa-solid fa-image fa-xl active:text-blue-600"></i>
          </Link>
          <Link to="/profile/videos">
            <i className="fa-solid fa-message fa-xl active:text-blue-600"></i>
          </Link>
          <Link to="/profile/saved">
            <i className="fa-solid fa-video fa-xl active:text-blue-600"></i>
          </Link>
          <Link to="#">
            <i className="fa-solid fa-bookmark fa-xl active:text-blue-600"></i>
          </Link>
        </div>

        <div>
          <Outlet />
        </div>

        
      </div>
    </>
  );
};
