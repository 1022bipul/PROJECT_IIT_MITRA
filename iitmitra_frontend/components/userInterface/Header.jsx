import React from 'react'
import { Link } from 'react-router-dom'
import { ProfilePic } from '../Profile/ProfilePic'
import iitlogo from '../../src/public/whitelogo.jpg';
import { useContext } from 'react';
import { DetailsContext } from '../../context/DetailsContext';


export const Header = ({handleTogglePost}) => {
    const {loading,shortDetails}=useContext(DetailsContext)
    // const{name,email}=shortDetails;
  if(loading) return  <div>Loading user data...</div>;

    return (
        <>
         
           {/* <!--Top navigation bar--> */}
          <nav  className="bg-black text-gray-200  w-full h-12 sm:h-14 flex justify-between  sticky  overflow-hidden shadow-xs sm:px-4">
              {/* <!-- Logo and searcbar --> */}
        <div className="flex justify-start gap-1 items-center w-[30vw]">
        <img src={iitlogo} className="bg-white size-11 sm:12 mb-1 ml-2 border-0 rounded-full " />
        {/* <!-- search bar --> */}
        <form className="bg-gray-200 text-black border-1 rounded-md ml-1 max-w-min flex justify-start items-center ">
        <input type="text" placeholder="Search..." className= "w-50 sm:w-55 min-h-7 outline-none justify-center items-center my-0.5 mx-1.5  rounded-l-md  "/>

        <button type="submit" className="w-full mr-1  right-0"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        </div>
         {/* <!-- Home upload and Friends button --> */}
        <div className="flex justify-center items-center flex-wrap max-sm:hidden gap-3 max-w-fit"> 
        <div className="relative left-1 m-1 pb-1 active:border-b-2 focus:border-b-2 border-white"><Link className=" p-1" to="/"><i className="fa-solid fa-house fa-xl"></i></Link></div>
        <div onClick={handleTogglePost} className="relative left-1 m-1 pb-1 active:border-b-2 focus:border-b-2 border-white"><i className="fa-regular fa-square-plus fa-xl"></i></div>
       
        <div className="relative left-1 m-1 pb-1 active:border-b-2 focus:border-b-2 border-white"><a className="p-1" href="#"><i className="fa-solid fa-people-group fa-xl"></i></a></div>
        </div>
          {/* <!-- Right side icons --> */}
        <div className="flex justify-end items-center space-x-4 pr-2  w-[30vw]">
            <div className="relative right-0"><i className="fa-regular fa-bell fa-xl" ></i></div>
            <div className="relative right-0 mr-2 "><i className="fa-regular fa-paper-plane fa-xl"></i></div>
            
            <div className="relative right-0 pl-3 hidden sm:block"> <ProfilePic/> </div>
            <div className="relative right-0 hidden text-xl sm:block">{shortDetails?.name} </div>
        </div>
   
    </nav>
        </>
    )
}
