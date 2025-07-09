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
import { AllUserContext } from "../../context/AllUserContext";
import { LoadingSpinner } from "../userInterface/LoadingSpinner";
import { StateContext } from "../../context/StateContext";

export const UserProfile = () => {
  const { oneUser, loading } = useContext(AllUserContext);
  const { userPostCount } = useContext(StateContext);
  // if(loading)
  // console.log("profile", oneUser);
  const { user } = oneUser || {};
  const { name, institute, branch, bio, skills, avatar, banner } = user || {};
const posts=userPostCount?.length
  console.log("posts", posts);

  if (loading) {
    return <LoadingSpinner/>
  }

  return (
    <>
      {/* <!-- main container --> */}

      <div className="flex flex-col overflow-hidden mx-1 mt-1 rounded-md ">
        {/* <!-- Banner section --> */}

        <div className="relative bg-gray-300 ">
          <img
            src={banner || "../../src/public/banner.png"}
            alt="Banner"
            className="w-full h-32 sm:h-48 object-cover "
          />

          {/* <!-- Profile image overlapping the banner --> */}
          <img
            src={avatar || "../../src/public/Profile_avatar.png"}
            className="absolute object-cover bottom-[-70px] left-1/2 transform -translate-x-1/2 sm:size-30 size-28  rounded-full border-4 border-white"
          />
        </div>
        {/* <!-- user details --> */}
        <div className="bg-gray-300 pt-18 text-center pb-2 rounded-b-md ">
          <h1 className="font-extrabold text-xl">{name ?? "IIT MITRA"}</h1>
          <p className="text-sm font-bold">
            {institute ?? "INDIAN INSTITUTE OF TECHNOLOGY"}
          </p>
          <p className="text-sm mb-2 font-semibold">
            {branch ?? "COMPUTER SCIENCE"}
          </p>
          <p>{bio ?? "BIO"}</p>
          <p>{skills ?? "SKILLS"}</p>
          <div class=" flex justify-center">
            <button class=" p-2 text-sm mx-1 bg-cyan-500 hover:bg-cyan-600 rounded-md font-semibold">
              Massage
            </button>
            <button class=" p-2 text-sm mx-1 bg-cyan-500 hover:bg-cyan-600 rounded-md font-semibold">
              Mitra Request
            </button>
            <Link class="m-2" to="#">
              <i class="fa-solid fa-ellipsis-h fa-lg"></i>
            </Link>
          </div>

          <div className="flex justify-center space-x-5">
            <div>
              <h1 className="text-black font-bold text-lg">Posts</h1>
              <div className="text-black font-semibold text-lg">{posts ||"0"}</div>
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
              <FaInstagram className="size-5" />
            </Link>
            <Link to="#">
              <IoLogoYoutube className="size-5" />
            </Link>
            <Link to="#">
              <FaGithubSquare className="size-5" />
            </Link>
          </div>
        </div>

        <div className="flex bg-gray-300 p-2 mt-1 rounded-md pl-5 space-x-15 sm:space-x-20 justify-center">
          <Link to="/profile">
            <FaImage className="size-6 active:text-blue-600" />
          </Link>
          <Link to="/profile/videos">
            <MdOutlineMessage className="size-6 active:text-blue-600" />
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
