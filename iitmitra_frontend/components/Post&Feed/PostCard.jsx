import React from "react";
import { ProfilePic } from "../Profile/ProfilePic";

export const PostCard = ({photolink}) => {
  return (
    <>
      <div className="border-none p-2 rounded-xl bg-gray-200">
        <div className="m-1 bg-gray-100 rounded-2xl flex">
        <ProfilePic/>
          {/* <img
            src="./icons/Generic avatar.svg"
            className="size-10 border-2 border-white rounded-full"
          /> */}
          <h1 className="relative left-1 top-2">Anonymous</h1>
        </div>
        <h5 className="mx-1.5 px-1 rounded-2xl bg-gray-100 text-xs font-light text-end">times ago</h5>
        <div className="lg:flex">
          <div className="flex justify-center sm:justify-center md:justify-start p-2">
            <img
              src={photolink}
              className=" relative w-full sm:w-fit md:w-md lg:w-md rounded-xl"
            />
          </div>
          {/* <!-- Interaction buttons --> */}
          <div className="lg:w-xl">
            <div className="flex m-2 space-x-4 lg:justify-end">
              <a className="" href="#">
                <span className="text-black focus:text-red-500"><i className="fa-regular fa-heart fa-xl "></i></span>
              </a>
              <a href="#">
                <i className="fa-regular fa-comment fa-xl"></i>
              </a>
              <a href="#">
                <i className="fa-regular fa-paper-plane fa-xl"></i>
              </a>
              <a href="#">
                <i className="fa-regular fa-bookmark fa-xl"></i>
              </a>
            </div>

            {/* <!-- Comment area --> */}
            <div className="bg-gray-300 p-2 rounded-md shadow-md lg:text-right">
              <h2 className="text-lg font-bold">Comments</h2>
              <textarea
                className="w-full p-2 bg-gray-50 rounded-md"
                placeholder="Write a comment..."
              ></textarea>
              <button className="mt-2 px-2 py-1 bg-blue-500 text-white rounded-md">
                <a href="#">post</a>
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
