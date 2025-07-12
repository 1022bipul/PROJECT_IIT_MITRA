import { useContext } from "react";
import { Link } from "react-router-dom";
import { DetailsContext } from "../../context/DetailsContext";
import { LoadingSpinner } from "../userInterface/LoadingSpinner";
import profileBanner from "../../src/public/banner.png";
import profileAvatar from "../../src/public/Profile_avatar.png";

export const ProfilePic = () => {
  const{loading,longsDetails}=useContext(DetailsContext)
  if(loading) return  <LoadingSpinner/>
     
     const{avatar}=longsDetails ||{}
  return (
    <>
      <Link to="/profile">
        <img
          className="size-10 sm:11 object-cover rounded-full"
          src={avatar ||profileAvatar}
          alt=""
        />
      </Link>
    </>
  );
};
