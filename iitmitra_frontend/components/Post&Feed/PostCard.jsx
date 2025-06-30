import React from "react";
import { ProfilePic } from "../Profile/ProfilePic";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Comments } from "./Comments";

export const PostCard = ({post}) => {
   
  if(!post){
    return (
      <div className="border-none p-2 rounded-xl bg-gray-200">

        <h1>No posts yet !!</h1>
</div>
    )
  }

  return (
    <>
      <div className="border-none p-2 my-3 rounded-xl bg-gray-200">
        <div className="m-1 rounded-2xl flex">
        {/* <ProfilePic/> */}
        <Link to="/profile">
        <img
          className="size-10 sm:13 object-cover rounded-full"
          src={post?.user?.avatar ||"../../src/public/profile_avatar.png"}
          alt=""
        />
      </Link>
      
          <div className="flex flex-col">

         
          <h1 className="px-2 text-start font-semibold">{post?.user?.name || "Anonymous bro"}</h1>
        <p className=" px-2 text-xs font-light text-start ">{post?.createdAt}ago</p>
         </div>
        </div>
            <h1 className="text-start text-md py-1 px-2">{post?.discription}</h1>
      
        <div className="lg:flex">
          <div className="flex justify-center sm:justify-center md:justify-start p-2">
            <img
              src={post?.url}
              className=" relative w-full sm:w-fit md:w-md lg:w-md rounded-xl"
            />
          </div>
          {/* <!-- Interaction buttons --> */}
          <div className="lg:w-xl">
            <div className="flex m-2 space-x-4 lg:justify-end">
              <Link className="" href="#">
                <span className="text-black focus:text-red-500"><i className="fa-regular fa-heart fa-xl "></i></span>
              </Link>
              <Link href="#">
                <i className="fa-regular fa-comment fa-xl"></i>
              </Link>
              <Link href="#">
                <i className="fa-regular fa-paper-plane fa-xl"></i>
              </Link>
              <Link href="#">
                <i className="fa-regular fa-bookmark fa-xl"></i>
              </Link>
            </div>

            {/* <!-- Comment area --> */}
           <Comments/>
          </div>
        </div>
      </div>
    </>
  );
};
