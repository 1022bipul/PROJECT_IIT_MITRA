import React from "react";
import { Link, Links } from "react-router-dom";
import { SelfProfileCard } from "../Profile/SelfProfileCard";

export const LeftSideBar = () => {
    function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "none" ? "block" : "none";
  }
  document.addEventListener("click", function(event) {
    const menu = document.getElementById("dropdownMenu");
    const button = document.querySelector(".menu-button");
    if (!button.contains(event.target) && !menu.contains(event.target)) {
      menu.style.display = "none";
    }
  });

  return (
    <>
      <div className="bg-gray-300  relative  w-full h-full flex flex-col space-y-5 top-1 px-5 pt-1  rounded-r-md overflow-hidden">
        <SelfProfileCard />
        {/* <Link href="http://127.0.0.1:5500/PROJECT_IIT_MITRA/FRONTEND/LoginSection/profile.html">
          <div className=" flex justify-start items-center space-x-1 text-xl">
            <img
              src="./icons/Generic avatar.svg"
              className="size-8 border-1 rounded-full"
            />
            Profile
          </div>
        </Link> */}

        {/* <!--Mitras--> */}
        <Link href="#">
          <div className=" flex justify-start items-center text-lg hover:border-b-2 border-blue-700 hover:text-blue-700">
            <i className="fa-solid fa-people-group text-xl mr-2"></i>Mitras
          </div>
        </Link>

        {/* <!-- Messages --> */}
        <Link href="#">
          <div className=" flex justify-start items-center text-lg  hover:border-b-2 border-blue-700 hover:text-blue-700">
            <i className="fa-regular fa-paper-plane text-xl mr-2"></i>Messages
          </div>
        </Link>

        {/* <!-- Activity check button --> */}
        <Link
          onClick={toggleMenu}
          className=" cursor-pointer flex justify-start items-center space-x-1 text-lg hover:border-b-2 border-blue-700 hover:text-blue-700"
        >
          <i className="fa-regular fa-clock text-xl mr-2 "></i>Activity
        </Link>
        {/* <!-- Expandable Div --> */}
        <div
          id="expandableDiv"
          className="hidden mt-0 p-1 bg-gray-200 rounded-lg hover:border-b-2 border-blue-700 hover:text-blue-700"
        >
          <ul className="mt-0 space-y-1">
            <li>
              <Link href="#">
                <button className="text-blue-500 cursor-pointer flex justify-start items-center text-xl m-1 p-1">
                  <i className="fa-regular fa-heart"></i> Likes
                </button>
              </Link>
            </li>
            <li>
              <Link href="#">
                <button className="text-blue-500 cursor-pointer flex justify-start items-center text-xl m-1 p-1">
                  <i className="fa-regular fa-comment"></i> Comments
                </button>
              </Link>
            </li>
            <li>
              <Link href="#">
                <button className="text-blue-500 cursor-pointer flex justify-start items-center text-xl m-1 p-1">
                  <i className="fa-regular fa-bookmark"></i> Saved
                </button>
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- Activity check button ENDS--> */}
        {/* <!-- Notifications --> */}
        <Link href="#">
          <div className=" flex justify-start items-center text-lg  hover:border-b-2 border-blue-700 hover:text-blue-700">
            <i className="fa-regular fa-bell text-xl mr-2"></i>Notifications
          </div>
        </Link>
        {/* <!-- Settings button --> */}

        {/* <!-- Expandable Div --> */}
        

        
        {/* <Link href="#">
          <button className="flex h-full items-baseline-last cursor-pointer  text-xl   border-blue-700 hover:text-blue-700">
            <i className="fa-solid fa-left "></i> Log Out
          </button>
        </Link> */}

<div className=" absolute menu-container bottom-6 bg-gray-200 p-4 text-black rounded-xl" id="dropdownMenu">
  <div className="dropdown flex flex-col text-lg" >

    <Link className="hover:bg-gray-300 rounded-md px-1" to="/editprofile">Edit Profile</Link>
    <Link className="hover:bg-gray-300 rounded-md px-1" to="/changepassword">Change Password</Link>
    <Link className="hover:bg-gray-300 rounded-md px-1" href="#">About</Link>
    <Link className="hover:bg-gray-300 rounded-md px-1" href="#">Help</Link>
    <Link className="hover:bg-gray-300 rounded-md px-1" href="#">Log Out</Link>
  </div>
</div>

        <div className="absolute bottom-1 mb-2  ">
          <button
            onClick={toggleMenu}
          
            className="menu-button cursor-pointer   text-xl hover:rounded"
          >
            <i className="fa-solid fa-gear text-2xl mr-2 "></i>Settings
          </button>
        </div>
      </div>
    </>
  );
};
