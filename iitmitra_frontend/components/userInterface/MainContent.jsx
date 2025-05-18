import React from "react";
import { PostCard } from "../Post&Feed/PostCard";
import { BottomNavForMobile } from "./BottomNavForMobile";
import { ProfilePic } from "../Profile/ProfilePic";

export const MainContent = () => {
  return (
    <>
   
      <div className="h-full  flex flex-col text-center m-1 gap-1">
        {/* <!-- Direct Post --> */}
        <div  className=" px-1 pb-2 rounded-md  max-sm:hidden flex flex-col items-center gap-2 bg-gray-300 " >
          <div className="rounded-md flex w-full  justify-center items-center gap-2 pt-1.5 ">
          <ProfilePic/>
            {/* <img src="./icons/Generic avatar.svg" className="size-12 border-1 rounded-full ml-1"/> */}
            {/* <div className=" border-black h-16 mx-2"></div> */}
            <input className="bg-white sm:w-1/2 lg:w-10/12 m-1 p-1 w-full outline-none rounded-md h-fit" placeholder="What's on your mind?"/>
            <button className="m-1 mr-0 p-1 w-20 right-0 rounded-md text-white bg-blue-500"><a href="#" className="">Post</a></button>
            
          </div>
            <div className="flex sm:space-x-1 space-x-1  ">
            <a href="#" className="bg-gray-600  px-1.5 py-0.5 rounded-3xl text-white"><span className="text-green-600"><i className="fa-solid fa-image fa-lg " ></i> </span>Image</a>
            <a href="#" className="bg-gray-600  px-1.5 py-0.5 rounded-3xl text-white "><span className="text-blue-600"><i className="fa-solid fa-video fa-lg " ></i> </span>Video</a>
            <a href="#" className="bg-gray-600  px-1.5 py-0.5 rounded-3xl text-white "><span className="text-cyan-600"><i className="fa-solid fa-calendar fa-lg " ></i> </span>Calendar</a>
            <a href="#" className="bg-gray-600  px-1.5 py-0.5 rounded-3xl text-white "><span className="text-orange-400"><i className="fa-solid fa-poll fa-lg " ></i> </span>Poll</a>
              {/* <a href="#" className=" "><i className="fa-solid fa-video fa-lg"></i>Video</a>
              <a href="#" className=" "><i className="fa-solid fa-location-dot fa-lg "></i>Location</a>
              <a href="#" className=" "><i className="fa-solid fa-user fa-lg "></i>Tag</a> */}
              
              
            </div>
          
          
        </div>
        {/* <!-- Posts or feed --> */}
        
        <PostCard photolink={"https://images.pexels.com/photos/31812795/pexels-photo-31812795/free-photo-of-portrait-of-woman-with-pink-flowers-in-spring-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} />
        <PostCard photolink={"https://images.pexels.com/photos/32080139/pexels-photo-32080139/free-photo-of-fresh-red-tomatoes-on-a-kitchen-counter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}/>
        <PostCard photolink={"https://images.pexels.com/photos/14598237/pexels-photo-14598237.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}/>
        <PostCard photolink={"https://images.pexels.com/photos/20044830/pexels-photo-20044830/free-photo-of-woman-posing-with-bay-horse-in-blue-bridle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}/>
        <PostCard photolink={"https://images.pexels.com/photos/32056657/pexels-photo-32056657/free-photo-of-black-and-white-close-up-of-a-farm-cow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}/>
        <PostCard photolink={"https://images.pexels.com/photos/32063710/pexels-photo-32063710/free-photo-of-joyful-piggyback-ride-on-a-portuguese-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}/>
        <PostCard photolink={"https://images.pexels.com/photos/5955748/pexels-photo-5955748.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}/>
        <PostCard photolink={"https://images.pexels.com/photos/16547097/pexels-photo-16547097/free-photo-of-couple-dancing-on-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}/>
        <PostCard photolink={"https://images.pexels.com/photos/31859397/pexels-photo-31859397/free-photo-of-sunset-at-coogee-beach-with-heavy-machinery.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}/>
        


      </div>
   

    </>
  );
};
