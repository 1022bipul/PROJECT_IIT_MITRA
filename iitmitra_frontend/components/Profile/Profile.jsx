import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ProfilePic } from "./ProfilePic";
import { BioSection } from "./BioSection";
import { DetailsContext } from "../../context/DetailsContext";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FaImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { LoadingSpinner } from "../userInterface/LoadingSpinner";
import profileBanner from "../../src/public/banner.png";
import profileAvatar from "../../src/public/Profile_avatar.png";

export const Profile = () => {
 

  const {loading, shortDetails, longsDetails ,imgCount } = useContext(DetailsContext);
  if(loading) return  <LoadingSpinner/>

  const { name, email } = shortDetails;
  const { institute, branch, bio, skills,avatar,banner } = longsDetails ||{};




  return (
    <>
      {/* <!-- main container --> */}

      <div className="flex flex-col overflow-hidden mx-1 mt-1 rounded-md ">
        {/* <!-- Banner section --> */}

        <div className="relative bg-gray-300 ">
          <img
            src={banner||profileBanner}
            alt="Banner"
            className="w-full h-32 sm:h-48 object-cover "
          />

          {/* <!-- Profile image overlapping the banner --> */}
          <img
            src={avatar||profileAvatar}
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
          <h1 className="font-extrabold text-xl">{name??"IIT MITRA"}</h1>
          <p className="text-sm font-bold">{institute??"INDIAN INSTITUTE OF TECHNOLOGY"}</p>
          <p className="text-sm mb-2 font-semibold">{branch??"COMPUTER SCIENCE"}</p>
          <p>{bio ?? "BIO"}</p>
          <p>{skills ?? "SKILLS"}</p>
          <div></div>

          <div className="flex justify-center space-x-5">
            <div>
              <h1 className="text-black font-bold text-lg">Posts</h1>
              <div className="text-black font-semibold text-lg">{imgCount ||0}</div>
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
              <div className="text-black font-semibold text-lg">0</div>
            </div>
          </div>

          <div className="flex space-x-4 mt-2 justify-center items-center">
            <Link to="#">
             <FaLinkedin className="size-5" />
            </Link>
            <Link to="#">
              <FaInstagram className="size-5"/>
            </Link>
            <Link to="#">
             <IoLogoYoutube className="size-5"/>
            </Link>
            <Link to="#">
              <FaGithubSquare className="size-5" />

            </Link>
          </div>
        </div>
      
        <div className="flex bg-gray-300 p-2 mt-1 rounded-md pl-5 space-x-15 sm:space-x-20 justify-center">
          <Link to="/profile">
            <FaImage className="size-6 active:text-blue-600"/>
          </Link>
          <Link to="/profile/videos">
            <MdOutlineMessage className="size-6 active:text-blue-600"/>
          </Link>
          <Link to="/profile/saved">
            <FaVideo className="size-6 active:text-blue-600" />
          </Link>
          <Link to="#">
            <FaBookmark className="size-6 active:text-blue-600" />
          </Link>
        </div>

        <div className="">
          <Outlet />
        
         

        </div>

        
      </div>
    </>
  );
};
