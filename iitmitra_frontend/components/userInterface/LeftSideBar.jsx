import React from 'react'
import { Link } from 'react-router-dom'

export const LeftSideBar = () => {
    return (
        <>
            <div className="bg-gray-200 max-sm:hidden relative top-0 left-0 h-[calc(100vh-10vh)] w-full ">
      
    <Link  className="m-1 flex justify-start items-center space-x-1 text-xl" to="/profile"><img src="./icons/Generic avatar.svg" className="size-8 border-1 rounded-full"/>Profile
    </Link>
        <a href=""><div className="m-1 flex justify-start items-center space-x-1"></div></a>
        <a href=""><div className="m-1 flex justify-start items-center space-x-1"></div></a>
{/* <!-- Settings button --> */}
      <button onclick="toggleSetting()" className="px-1 py-0 rounded cursor-pointer flex justify-start items-center space-x-1 text-xl shadow-blue-300"><i className="fa-solid fa-gear text-3xl"></i>settings</button>

  {/* <!-- Expandable Div --> */}
  <div id="expandedSetting" className="hidden mt-0 p-1 bg-gray-200 rounded-lg shadow-lg ">
  <ul className="mt-0 space-y-0">
    <li><a href="#"><button className="text-blue-500 cursor-pointer flex justify-start items-center text-xl">Log Out</button></a></li>
    <li><a href="#"><button className="text-blue-500 cursor-pointer flex justify-start items-center text-xl"> Edit Profile</button></a></li>
    <li><a href="#"><button className="text-blue-500 cursor-pointer flex justify-start items-center text-xl">Privacy</button></a></li>
  </ul>
</div>





{/* <!-- Button to Toggle Expansion --> */}
<button onclick="toggleExpand()" className="px-1 py-0 rounded cursor-pointer flex justify-start items-center space-x-1 text-xl"><i className="fa-regular fa-clock text-3xl "></i>Activity</button>

  {/* <!-- Expandable Div --> */}
  <div id="expandableDiv" className="hidden mt-0 p-1 bg-gray-200 rounded-lg shadow-lg ">
  <ul className="mt-0 space-y-0">
    <li><a href="#"><button className="text-blue-500 cursor-pointer flex justify-start items-center text-xl"><i className="fa-regular fa-heart"></i> Likes</button></a></li>
    <li><a href="#"><button className="text-blue-500 cursor-pointer flex justify-start items-center text-xl"><i className="fa-regular fa-comment"></i> Comments</button></a></li>
    <li><a href="#"><button className="text-blue-500 cursor-pointer flex justify-start items-center text-xl"><i className="fa-regular fa-bookmark"></i> Saved</button></a></li>
  </ul>
</div>
{/* <!-- Button to Toggle Expansion ENDS--> */}
</div> 
        </>
    )
}
