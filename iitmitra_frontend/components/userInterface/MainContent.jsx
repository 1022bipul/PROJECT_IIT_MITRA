import React from "react";
import { useContext, useEffect, useState } from "react";
import { PostCard } from "../Post&Feed/PostCard";
import { BottomNavForMobile } from "./BottomNavForMobile";
import { ProfilePic } from "../Profile/ProfilePic";
import { Link } from "react-router-dom";
export const MainContent = () => {
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPages] = useState(1);

  const handleGetAllpostsUrls = async () => {
    try {
      const res = await fetch(
        `https://project-iit-mitra.onrender.com/api/post/feed/urls?page=${page}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      console.log(res);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      console.log("radhe radhe");
      setposts((prev) =>[...prev,...data]);
      // console.log(posts);
    } catch (error) {
      console.log(error);
    }
  };
   useEffect(() => {
    const handleAllUrls = async () => await handleGetAllpostsUrls();
    handleAllUrls();
    setLoading(false);
  },[]);

  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
    


    
      console.log(param);
      if(param[0].isIntersecting){
        observer.unobserve(lastImage)
        setPages(prev=>prev+1)
      }
    });

    const lastImage = document.querySelector(".last-container");

    console.log(lastImage);
    if (lastImage) {
      observer.observe(lastImage);
    }else{
      return;
    } 
   
  },[posts]);

 

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div
        id="feed"
        className="h-full overflow-y-scroll  flex flex-col text-center m-1 gap-1"
      >
        {/* <!-- Direct Post --> */}
        <div className=" px-1 pb-2 rounded-md  max-sm:hidden flex flex-col items-center gap-2 bg-gray-300 ">
          <div className="rounded-md flex w-full  justify-center items-center gap-2 pt-1.5 ">
            <ProfilePic />
            <input
              className="bg-white sm:w-1/2 lg:w-10/12 m-1 p-1 w-full outline-none rounded-md h-fit"
              placeholder="What's on your mind?"
            />
            <button className="m-1 mr-0 p-1 w-20 right-0 rounded-md text-white bg-blue-500">
              <Link to="#" className="">
                Post
              </Link>
            </button>
          </div>
          <div className="flex sm:space-x-1 space-x-1  ">
            <Link
              to="#"
              className="bg-gray-600  px-1.5 py-0.5 rounded-3xl text-white"
            >
              <span className="text-green-600">
                <i className="fa-solid fa-image fa-lg "></i>{" "}
              </span>
              Image
            </Link>
            <Link
              to="#"
              className="bg-gray-600  px-1.5 py-0.5 rounded-3xl text-white "
            >
              <span className="text-blue-600">
                <i className="fa-solid fa-video fa-lg "></i>{" "}
              </span>
              Video
            </Link>
            <Link
              to="#"
              className="bg-gray-600  px-1.5 py-0.5 rounded-3xl text-white "
            >
              <span className="text-cyan-600">
                <i className="fa-solid fa-calendar fa-lg "></i>{" "}
              </span>
              Calendar
            </Link>
            <Link
              to="#"
              className="bg-gray-600  px-1.5 py-0.5 rounded-3xl text-white "
            >
              <span className="text-orange-400">
                <i className="fa-solid fa-poll fa-lg "></i>{" "}
              </span>
              Poll
            </Link>
            {/* <Link to="#" className=" "><i className="fa-solid fa-video fa-lg"></i>Video</Link>
              <Link to="#" className=" "><i className="fa-solid fa-location-dot fa-lg "></i>Location</Link>
              <Link to="#" className=" "><i className="fa-solid fa-user fa-lg "></i>Tag</Link> */}
          </div>
        </div>

        {/* <!-- Posts or feed --> */}

        {posts?.map((post, index) => (
          <PostCard post={post} index={index} />
        ))}
        
      </div>
      <div className="last-container p-2"></div>
    </>
  );
};
