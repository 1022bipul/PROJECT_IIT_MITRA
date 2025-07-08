import React from 'react'
import { Link } from 'react-router-dom'
import { ProfilePic } from '../Profile/ProfilePic'
import iitlogo from '../../src/public/whitelogo.jpg';
import { useContext } from 'react';
import { DetailsContext } from '../../context/DetailsContext';
import { FaPlusSquare } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { SearchBar } from './SearchBar';
import { LoadingSpinner } from './LoadingSpinner';

export const Header = ({handleTogglePost}) => {
    const {loading,shortDetails}=useContext(DetailsContext)
    // const{name,email}=shortDetails;
  if(loading) return  <LoadingSpinner/>

    return (
        <>
         
           {/* <!--Top navigation bar--> */}
          <nav  className="bg-black text-gray-200  w-full h-12 sm:h-14 flex justify-between  sticky  overflow-hidden shadow-xs sm:px-4">
              {/* <!-- Logo and searcbar --> */}
        <div className="flex justify-start gap-1 items-center w-[30vw]">
        <img src={iitlogo} className="bg-white size-11 sm:12 mb-1 ml-2 border-0 rounded-full " />
        {/* <!-- search bar --> */}
        <SearchBar/>
       
        </div>
         {/* <!-- Home upload and Friends button --> */}
         
        <div className="flex justify-center items-center flex-wrap max-sm:hidden gap-3 max-w-fit"> 
        <div className="relative left-1 m-1 pb-1 active:border-b-2 focus:border-b-2 border-white"><Link to="/"><span><AiFillHome className='size-7'/></span></Link></div>
        <div onClick={handleTogglePost} className="relative left-1 m-1 pb-1 active:border-b-2 focus:border-b-2 border-white"><span><FaPlusSquare className='size-6'/></span></div>
      
        <div className="relative left-1 m-1 pb-1 active:border-b-2 focus:border-b-2 border-white"><Link href="#"><span><FaUserFriends className='size-8'/></span></Link></div>
        </div>
          {/* <!-- Right side icons --> */}
        <div className="flex justify-end items-center space-x-4 pr-2  w-[30vw]">
            <div className="relative right-0"><Link to="/message"><FaPaperPlane className='size-6'/></Link></div>
            <div className="relative right-0 mr-2 "><Link to="/notification"><IoMdNotifications className='size-8'/></Link></div>
            
            <div className="relative right-0 pl-3 hidden sm:block"> <ProfilePic/> </div>
            <div className="relative right-0 hidden text-xl sm:block">{shortDetails?.name} </div>
        </div>
   
    </nav>
        </>
    )
}
