import React from "react";
import { ProfilePic } from "../Profile/ProfilePic";
import { Link } from "react-router-dom";

export const FrndSuggetionCard = () => {
  return (
    <>
      <div className="relative p-2 flex sm:flex-wrap  ">
        <div className="">
          {/* <ProfilePic/> */}
          <Link to="/profile">
            <img
              className="size-10 sm:11 object-cover rounded-full"
              src="https://images.pexels.com/photos/31812795/pexels-photo-31812795/free-photo-of-portrait-of-woman-with-pink-flowers-in-spring-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </Link>
        </div>
        <div className="mx-2 flex flex-col">
          <h5 className="text-sm font-semibold">Radha Rani</h5>
          <p className="text-[12px] text-gray-700">Suggested for you</p>
        </div>
        <button className="md:absolute mx-5 md:right-0 lg:right-8 md:top-3 text-lg text-blue-600 ">
          follow
        </button>
      </div>
    </>
  );
};
