import React, { useRef, useEffect, useState } from "react";
import { ProfilePic } from "../Profile/ProfilePic";
import { Link } from "react-router-dom";

export const BottomNavForMobile = () => {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* <!-- Bottom nav FOR SMALL SCREENS --> */}

      {menuOpen && (
        <div
          ref={menuRef}
          className="menu-container absolute bottom-12 right-1 bg-gray-300 p-4 text-black rounded-xl"
        >
          <div className="dropdown flex flex-col text-lg">
            <Link className="hover:bg-gray-300 rounded-md px-1" to="/editprofile">
              Edit Profile
            </Link>
            <Link className="hover:bg-gray-300 rounded-md px-1" to="/changepassword">
              Change Password
            </Link>
            <Link className="hover:bg-gray-300 rounded-md px-1" to="/about">
              About
            </Link>
            <Link className="hover:bg-gray-300 rounded-md px-1" to="/help">
              Help
            </Link>
            <Link className="hover:bg-gray-300 rounded-md px-1" to="/logout">
              Log Out
            </Link>
          </div>
        </div>
      )}

      <div className="bottom-0 w-full right-0 bg-gray-400 text-black p-1 z-10 flex justify-center items-center space-x-18">
        <Link to="/profile">
          <ProfilePic />
        </Link>
        <Link className="active:border-b-3 focus:border-b-3 border-blue-800" to="/">
          <i className="fa-solid fa-house fa-xl"></i>
        </Link>
        <Link to="/create">
          <i className="fa-regular fa-square-plus fa-xl"></i>
        </Link>
        <Link to="/groups" className="active:border-b-3 focus:border-b-3 border-blue-800">
          <i className="fa-solid fa-people-group fa-xl"></i>
        </Link>
        <button
          ref={buttonRef}
          className="menu-button cursor-pointer hover:rounded"
          onClick={toggleMenu}
        >
          <i className="fa-solid fa-gear fa-xl"></i>
        </button>
      </div>
    </>
  );
};
