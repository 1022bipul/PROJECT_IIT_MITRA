import React, { useContext } from "react";
import { ProfilePic } from "../Profile/ProfilePic";
import { Link, useNavigate } from "react-router-dom";
import { AllUserContext } from "../../context/AllUserContext";
import profileBanner from "../../src/public/banner.png";
import profileAvatar from "../../src/public/Profile_avatar.png";
const URI=import.meta.env.VITE_APP_URL

export const FrndSuggetionCard = ({item}) => {
  const navigate=useNavigate()
  const {setOneUser,setLoading}=useContext(AllUserContext)

 const handleUserProfile=async()=>{
  setLoading(true)
  try {
    const id=item._id
   
    const res=await fetch(`${URI}/user/userprofile/${id}`,{
      method:'Get',
      credentials:'include'
    })
    if(res.ok){
      const user=await res.json()
      await setOneUser(user)
      navigate(`profile/${id}`)
  setLoading(false)


    }

  } catch (error) {
    console.log(error)
  setLoading(false)

  }

 }




  return (
    <>
      <div className="relative p-2 flex sm:flex-wrap  ">
        <div className="">
          {/* <ProfilePic/> */}
          <div >
            <img
              className="size-10 sm:11 object-cover rounded-full"
              src={item?.avatar||profileAvatar}
              alt=""
            />
          </div>
        </div>
        <div className="mx-2 flex flex-col">
          <h5 onClick={handleUserProfile} className="text-sm font-semibold hover:text-blue-700 cursor-pointer">{item?.name||""}</h5>
          <p className="text-[12px] text-gray-700">Suggested for you</p>
        </div>
        <button className="md:absolute mx-5 md:right-0 lg:right-8 md:top-3 text-lg text-blue-600 ">
          Mitra Request
        </button>
      </div>
    </>
  );
};
