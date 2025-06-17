import { Link } from "react-router-dom";

export const ProfilePic = () => {
  return (
    <>
      <Link to="/profile">
        <img
          className="size-10 sm:11 object-cover rounded-full"
          src="../../public/profile_avatar.png"
          alt=""
        />
      </Link>
    </>
  );
};
