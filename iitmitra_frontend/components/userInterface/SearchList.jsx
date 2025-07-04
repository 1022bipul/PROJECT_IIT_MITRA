import React, { useContext } from "react";
import { ProfilePic } from "../Profile/ProfilePic";
import { Link } from "react-router-dom";
import { StateContext } from "../../context/StateContext";
export const SearchList = () => {
 const {searchList}=useContext(StateContext);
  return (
    <>
   {searchList &&<div className="absolute top-14 left-20 max-h-100 w-60 rounded p-2 z-10 bg-gray-500">
      { searchList?.map((item) =>(<div className="flex gap-2 p-1 m-1 bg-gray-300 rounded-xl">
        <Link to="/profile">
          <img
            className="size-10 sm:11 object-cover rounded-full"
            src={item.avatar || "../../src/public/Profile_avatar.png"}
            alt=""
          />
        </Link>

        <span>{item.name}</span>
      </div>))}

      
    </div>}
    </>
  );
};
