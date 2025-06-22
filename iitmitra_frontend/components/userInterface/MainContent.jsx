import React from "react";
import { useContext, useEffect,useState } from "react";
import { PostCard } from "../Post&Feed/PostCard";
import { BottomNavForMobile } from "./BottomNavForMobile";
import { ProfilePic } from "../Profile/ProfilePic";
import { useLocation } from "react-router-dom";
export const MainContent = () => {

   const [posts,setposts]=useState();
   const[loading,setLoading]=useState(true);


  const handleGetAllpostsUrls=async()=>{
  
 try {
      const res = await fetch("http://localhost:3000/api/post/feed/urls", {
        method: "GET",
        credentials: "include",
      });
      console.log(res)


      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
console.log('radhe radhe')

      console.log(data)

      setposts(data);
      console.log(posts)
    

    } catch (error) {

    
      console.log(error);

    }
  
  }

   
  useEffect(()=>{
    const handleAllUrls=async()=>await handleGetAllpostsUrls()
     handleAllUrls()
     setLoading(false)
  },[])


  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <>
      <div className="h-full  flex flex-col text-center m-1 gap-1">
        {/* <!-- Direct Post --> */}
        <div className=" px-1 pb-2 rounded-md  max-sm:hidden flex flex-col items-center gap-2 bg-gray-300 ">
          <div className="rounded-md flex w-full  justify-center items-center gap-2 pt-1.5 ">
            <ProfilePic />
            {/* <img src="./icons/Generic avatar.svg" className="size-12 border-1 rounded-full ml-1"/> */}
            {/* <div className=" border-black h-16 mx-2"></div> */}
            <input
              className="bg-white sm:w-1/2 lg:w-10/12 m-1 p-1 w-full outline-none rounded-md h-fit"
              placeholder="What's on your mind?"
            />
            <button className="m-1 mr-0 p-1 w-20 right-0 rounded-md text-white bg-blue-500">
              <a href="#" className="">
                Post
              </a>
            </button>
          </div>
          <div className="flex sm:space-x-1 space-x-1  ">
            <a
              href="#"
              className="bg-gray-600  px-1.5 py-0.5 rounded-3xl text-white"
            >
              <span className="text-green-600">
                <i className="fa-solid fa-image fa-lg "></i>{" "}
              </span>
              Image
            </a>
            <a
              href="#"
              className="bg-gray-600  px-1.5 py-0.5 rounded-3xl text-white "
            >
              <span className="text-blue-600">
                <i className="fa-solid fa-video fa-lg "></i>{" "}
              </span>
              Video
            </a>
            <a
              href="#"
              className="bg-gray-600  px-1.5 py-0.5 rounded-3xl text-white "
            >
              <span className="text-cyan-600">
                <i className="fa-solid fa-calendar fa-lg "></i>{" "}
              </span>
              Calendar
            </a>
            <a
              href="#"
              className="bg-gray-600  px-1.5 py-0.5 rounded-3xl text-white "
            >
              <span className="text-orange-400">
                <i className="fa-solid fa-poll fa-lg "></i>{" "}
              </span>
              Poll
            </a>
            {/* <a href="#" className=" "><i className="fa-solid fa-video fa-lg"></i>Video</a>
              <a href="#" className=" "><i className="fa-solid fa-location-dot fa-lg "></i>Location</a>
              <a href="#" className=" "><i className="fa-solid fa-user fa-lg "></i>Tag</a> */}
          </div>
        </div>




        {/* <!-- Posts or feed --> */}

        {posts?.map(post =>  (<PostCard  post={post}
          
        />))}
       
      </div>
    </>
  );
};
