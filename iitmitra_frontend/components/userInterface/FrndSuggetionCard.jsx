import React, { useContext } from "react";
import { ProfilePic } from "../Profile/ProfilePic";
import { Link } from "react-router-dom";


export const FrndSuggetionCard = ({item ,loading}) => {
  if(loading){
    return <div>loading......</div>
  }
 const handleUserProfile=()=>{
  const userId=item._id
  console.log(userId)
 }




  return (
    <>
      <div className="relative p-2 flex sm:flex-wrap  ">
        <div className="">
          {/* <ProfilePic/> */}
          <Link to="/profile">
            <img
              className="size-10 sm:11 object-cover rounded-full"
              src={item?.avatar||"../../src/public/Profile_avatar.png"}
              alt=""
            />
          </Link>
        </div>
        <div className="mx-2 flex flex-col">
          <h5 onClick={handleUserProfile} className="text-sm font-semibold cursor-pointer">{item?.name||""}</h5>
          <p className="text-[12px] text-gray-700">Suggested for you</p>
        </div>
        <button className="md:absolute mx-5 md:right-0 lg:right-8 md:top-3 text-lg text-blue-600 ">
          Mitra Request
        </button>
      </div>
    </>
  );
};
