import React, { useCallback } from "react";
import { Link, Links } from "react-router-dom";
import { SelfProfileCard } from "../Profile/SelfProfileCard";
import { useRef } from "react";
import { SettingsOptions } from "./SettingsOptions";

export const LeftSideBar = () => {
  let settingbtn = useRef();
  let toggleMenu = () => {
    if (settingbtn.current.style.display ==="none") {
      settingbtn.current.style.display = "block";
    } else {
      settingbtn.current.style.display = "none";
    }
  };

  return (
    <>

       {/* <!--Profile--> */}
       
      <div className="bg-gray-300  relative  w-full h-full flex flex-col space-y-5 top-1 px-5 pt-1  rounded-r-md">
        <SelfProfileCard />
      

        {/* <!--Mitras--> */}
        <Link to="/mitra">
          <div className=" flex justify-start items-center text-lg hover:border-b-2 border-blue-700 hover:text-blue-700">
            <i className="fa-solid fa-people-group text-xl mr-2"></i>Mitras
          </div>
        </Link>

        {/* <!-- Messages --> */}
        <Link to="/message">
          <div className=" flex justify-start items-center text-lg  hover:border-b-2 border-blue-700 hover:text-blue-700">
            <i className="fa-regular fa-paper-plane text-xl mr-2"></i>Messages
          </div>
        </Link>

        {/* <!-- Activity check button --> */}
        <Link to="/activity"
          // onClick={toggleMenu}
          className=" cursor-pointer flex justify-start items-center space-x-1 text-lg hover:border-b-2 border-blue-700 hover:text-blue-700"
        >
       <i className="fa-regular fa-clock text-xl mr-2 "></i>Activity
        </Link>
        {/* <!-- Expandable Div --> */}
       
        {/* <!-- Activity check button ENDS--> */}
        {/* <!-- Notifications --> */}
        <Link to="/notification">
          <div className=" flex justify-start items-center text-lg  hover:border-b-2 border-blue-700 hover:text-blue-700">
            <i className="fa-regular fa-bell text-xl mr-2"></i>Notifications
          </div>
        </Link>
        {/* <!-- Settings button --> */}

        {/* <!-- Expandable Div --> */}

        {/* <Link to="#">
          <button className="flex h-full items-baseline-last cursor-pointer  text-xl   border-blue-700 hover:text-blue-700">
            <i className="fa-solid fa-left "></i> Log Out
          </button>
        </Link> */}

        <SettingsOptions settingbtn={settingbtn} />

        <button
          className="menu-button cursor-pointer absolute bottom-1 mb-2 text-xl "
          onClick={toggleMenu}
        >
          <i className="fa-solid fa-gear text-2xl mr-2 "></i>Settings
        </button>
      </div>
    </>
  );
};
