import React from 'react'
import { Link } from 'react-router-dom'
import { ProfilePic } from '../Profile/ProfilePic'

export const Header = () => {
    return (
        <>
           {/* <!--Top navigation bar--> */}
          <nav  className=" bg-gray-200 w-full h-15 flex justify-between border-0 rounded-xl sticky top-0 overflow-hidden shadow-xs ">
              {/* <!-- Logo and searcbar --> */}
        <div className="flex justify-start items-center w-1/2">
        <img src="./icons/logos.png" className="size-12 ml-1 border-0 rounded-full" />
        {/* <!-- search bar --> */}
        <form className="border-1 rounded-xl ml-1 w-fit flex justify-start items-center ">
        <input type="text" placeholder="Search..." className="w-4/5 h-10 justify-center items-center rounded-l-xl "/>
        <button className="ml-2 p-1 mr-1"><a href="#"><i className="fa-solid fa-magnifying-glass"></i></a></button>
        </form>
        </div>
         {/* <!-- Home upload and Friends button --> */}
        <div className="flex justify-center items-center space-x-3 w-1/2">
        <div className="relative left-1 m-1 p-1 max-sm:hidden"><Link className="active:border-b-3 focus:border-b-3 border-blue-800 p-1" to="/"><i className="fa-solid fa-house fa-2x"></i></Link></div>
        <div className="relative left-1 m-1 p-1 max-sm:hidden"><a href="#"><i className="fa-regular fa-square-plus fa-2x"></i></a></div>
        <div className="relative left-1 m-1 p-1 max-sm:hidden"><a className="active:border-b-3 focus:border-b-3 border-blue-800 p-1" href="#"><i className="fa-solid fa-people-group fa-2x"></i></a></div>
        </div>
          {/* <!-- Right side icons --> */}
        <div className="flex justify-end items-center space-x-3 mr-1 w-1/2">
            <div className="relative right-0"><i className="fa-regular fa-bell fa-2x" ></i></div>
            <div className="relative right-0 mr-2 max-sm:hidden "><i className="fa-regular fa-paper-plane fa-2x"></i></div>
            
            <div className="relative right-0 pr-2"> <ProfilePic/></div>
        </div>
   
    </nav>
        </>
    )
}
