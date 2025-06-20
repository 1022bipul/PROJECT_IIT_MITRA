import { useContext } from "react";
import { Link } from "react-router-dom";
import { DetailsContext } from "../../context/DetailsContext";

export const ProfilePic = () => {
  const{longsDetails}=useContext(DetailsContext)
     
     const{avatar}=longsDetails ||{}
  return (
    <>
      <Link to="/profile">
        <img
          className="size-10 sm:11 object-cover rounded-full"
          src={avatar ||"../../src/public/Profile_avatar.png"}
          alt=""
        />
      </Link>
    </>
  );
};
