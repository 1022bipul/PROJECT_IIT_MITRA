import React from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <>
      {/* <!-- main container --> */}
   
        

        
       
          {/* <!-- Banner section --> */}   

          <div className="relative w-full bg-slate-300">
            {/* <!-- <button
            className="absolute  text-white bg-gray-700 hover:bg-blue-800 text-sm rounded-md m-2 p-1"
          >
            <i className="fa-solid fa-user-pen"></i>
          </button> --> */}
            <img
              src="https://images.pexels.com/photos/236599/pexels-photo-236599.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Banner"
              className="w-full h-32 sm:h-48 object-cover"
            />

            {/* <!-- Profile image overlapping the banner --> */}
            <img
              src="https://images.pexels.com/photos/1580272/pexels-photo-1580272.jpeg?auto=compress&cs=tinysrgb&w=300"
              className="absolute object-cover bottom-[-40px] left-1/2 transform -translate-x-1/2 w-30 h-30 rounded-full border-4 border-white"
            />
            <Link
             
              className="float-right text-black bg-cyan-600 hover:bg-blue-800 text-sm rounded-md m-2 p-1"
             to="/editprofile"
            >
              <i className="fa-solid fa-user-pen"></i>
              Edit Profile
            </Link>
          </div>
          {/* <!-- user details --> */}
          <div className="bg-gray-300 pt-12 text-center pb-2 rounded-b-md">
            <h1 className="font-extrabold text-xl">IIT MITRA</h1>
            <p className="text-sm font-bold">IIT PATNA 2024-2027</p>
            <p className="text-sm mb-2 font-semibold">
              B.Sc Computer Science and Data Analytics
            </p>

            <div className="flex justify-center space-x-5">
              <div>
                <h1 className="text-black font-bold text-lg">Posts</h1>
                <div className="text-black font-semibold text-lg">100</div>
              </div>
              <div>
                <h1 className="text-black font-bold text-lg">Follower</h1>
                <div className="text-black font-semibold text-lg">2025</div>
              </div>
              <div>
                <h1 className="text-black font-bold text-lg">Following</h1>
                <div className="text-black font-semibold text-lg">100</div>
              </div>
              <div>
                <h1 className="text-black font-bold text-lg">Mitras</h1>
                <div className="text-black font-semibold text-lg">10</div>
              </div>
            </div>

            <div className="flex space-x-2 justify-center items-center">
              <a href="#">
                <img
                  src="../../src/assets/linkedin.png"
                  className="size-10"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="../../src/assets/yt.png "
                  className="size-10 mr-2"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="../../src/assets/insta.png"
                  className="size-5 mr-3"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="../../src/assets/fb.png"
                  className="size-5 m-2"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="mt-1 rounded-md flex justify-center space-x-2 bg-gray-300 font-medium">
            <a
              className="active:border-b-3 focus:border-b-3 border-blue-800 p-1"
              href="#"
            >
              Posts
            </a>
            <a
              className="active:border-b-3 focus:border-b-3 border-blue-800 p-1"
              href="#"
            >
              About
            </a>
            <a
              className="active:border-b-3 focus:border-b-3 border-blue-800 p-1"
              href="#"
            >
              Connections
            </a>
            <a
              className="active:border-b-3 focus:border-b-3 border-blue-800 p-1"
              href="#"
            >
              Projects
            </a>

            {/* <!-- <a className="active:border-b-3 hover:border-b-3  border-blue-800 p-1 " href="#">Job Interests</a> --> */}
            <a className="m-1" href="#">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </a>
          </div>
          <div className="flex bg-slate-300 p-2 mt-1 rounded-md pl-5 space-x-15 sm:space-x-20 justify-center">
            <a href="#">
              <i className="fa-solid fa-image fa-xl active:text-blue-600"></i>
            </a>
            <a href="#">
              <i className="fa-solid fa-message fa-xl active:text-blue-600"></i>
            </a>
            <a href="#">
              <i className="fa-solid fa-video fa-xl active:text-blue-600"></i>
            </a>
            <a href="#">
              <i className="fa-solid fa-bookmark fa-xl active:text-blue-600"></i>
            </a>
          </div>

          {/* <!-- post section --> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 max-h-max bg-gray-300 mt-1 rounded-lg p-3 gap-1.5">
            {/* <!-- image card --> */}
            <div className="relative bg-slate-600 h-70 sm:h-70 w-full rounded-lg overflow-hidden">
              {/* <!-- title  --> */}
              <div className="absolute pt-2 flex w-full">
                <img
                  src="../images/icons/user.webp"
                  className="h-8 w-12"
                  alt=""
                />
                <div className="h-8 flex flex-col justify-center w-full">
                  <a href="#" className="text-sm active:text-blue-600">
                    userId
                  </a>
                  <p className="text-[10px]">UploadTime</p>
                </div>

                <button className="float-right px-2 cursor-pointer">
                  <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
                </button>
              </div>
              <div className="flex items-center justify-center h-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=300"
                  className="object-cover max-h-full max-w-full"
                  alt=""
                />
              </div>
              <div className="absolute flex -translate-y-7 px-2">
                <div className="">
                  <i className="fa-solid fa-heart fa-sm"></i>
                  <span className="px-1 md:text-sm">123</span>
                </div>
                <div>
                  <i className="fa-solid fa-eye fa-sm"></i>
                  <span className="px-1">456</span>
                </div>
                {/* <!-- <div>
                <i className="fa-solid fa-bookmark fa-sm"></i
                ><span className="px-1 text-sm">789</span>
              </div> --> */}
              </div>
            </div>
            <div className="relative bg-slate-600 h-70 sm:h-70 w-full rounded-lg overflow-hidden">
              {/* <!-- title  --> */}
              <div className="absolute pt-2 flex w-full">
                <img
                  src="https://images.pexels.com/photos/31812795/pexels-photo-31812795/free-photo-of-portrait-of-woman-with-pink-flowers-in-spring-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  className="h-10 w-12 object-cover rounded-full"
                  alt=""
                />
                <div className="h-8 flex flex-col justify-center w-full">
                  <a href="#" className="text-sm active:text-blue-600">
                    userId
                  </a>
                  <p className="text-[10px]">UploadTime</p>
                </div>

                <button className="float-right px-2 cursor-pointer">
                  <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
                </button>
              </div>
              <div className="flex items-center justify-center h-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/31939309/pexels-photo-31939309/free-photo-of-drip-coffee-maker-with-red-filter-cone.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load "
                  className="object-cover max-h-full max-w-full"
                  alt=""
                />
              </div>
              <div className="absolute flex -translate-y-7 px-2">
                <div className="">
                  <i className="fa-solid fa-heart fa-sm"></i>
                  <span className="px-1 text-sm">123</span>
                </div>
                <div>
                  <i className="fa-solid fa-comment fa-sm"></i>
                  <span className="px-1 text-sm">456</span>
                </div>
                <div>
                  <i className="fa-solid fa-bookmark fa-sm"></i>
                  <span className="px-1 text-sm">789</span>
                </div>
              </div>
            </div>
            <div className="relative bg-slate-600 h-70 sm:h-70 w-full rounded-lg overflow-hidden">
              {/* <!-- title  --> */}
              {/* <!-- <div className="absolute pt-2 flex w-full ">
              <img src="https://images.pexels.com/photos/3867130/pexels-photo-3867130.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-8 w-12" alt="" />
              <div className="h-8 flex flex-col justify-center w-full">
                <a href="#" className="text-sm active:text-blue-600">userId</a>
                <p className="text-[10px]">UploadTime</p>
              </div>

              <button className="float-right px-2 cursor-pointer">
                <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
              </button>
            </div> --> */}
              <div className="flex items-center justify-center h-full">
                <img
                  src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=300"
                  className="object-cover max-h-full max-w-full"
                  alt=""
                />
              </div>
              <div className="absolute flex -translate-y-7 px-2">
                <div className="">
                  <i className="fa-solid fa-heart fa-sm"></i>
                  <span className="px-1 text-sm">123</span>
                </div>
                <div>
                  <i className="fa-solid fa-comment fa-sm"></i>
                  <span className="px-1 text-sm">456</span>
                </div>
                <div>
                  <i className="fa-solid fa-bookmark fa-sm"></i>
                  <span className="px-1 text-sm">789</span>
                </div>
              </div>
            </div>
            <div className="relative bg-slate-600 h-70 sm:h-70 w-full rounded-lg overflow-hidden">
              {/* <!-- title  --> */}
              <div className="absolute pt-2 flex w-full">
                <img
                  src="../images/icons/user.webp"
                  className="h-8 w-12"
                  alt=""
                />
                <div className="h-8 flex flex-col justify-center w-full">
                  <a href="#" className="text-sm active:text-blue-600">
                    userId
                  </a>
                  <p className="text-[10px]">UploadTime</p>
                </div>

                <button className="float-right px-2 cursor-pointer">
                  <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
                </button>
              </div>
              <div className="flex items-center justify-center h-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/26079007/pexels-photo-26079007/free-photo-of-man-in-a-green-shirt-standing-by-the-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  className="object-cover max-h-full max-w-full"
                  alt=""
                />
              </div>
              <div className="absolute flex -translate-y-7 px-2">
                <div className="">
                  <i className="fa-solid fa-heart fa-sm"></i>
                  <span className="px-1 text-sm">123</span>
                </div>
                <div>
                  <i className="fa-solid fa-eye fa-sm"></i>
                  <span className="px-1 text-sm">456</span>
                </div>
                {/* <!-- <div>
                <i className="fa-solid fa-bookmark fa-sm"></i
                ><span className="px-1 text-sm">789</span>
              </div> --> */}
              </div>
            </div>
            <div className="relative bg-slate-600 h-70 sm:h-70 w-full rounded-lg overflow-hidden">
              {/* <!-- title  --> */}
              <div className="absolute pt-2 flex w-full">
                <img
                  src="../images/icons/user.webp"
                  className="h-8 w-12"
                  alt=""
                />
                <div className="h-8 flex flex-col justify-center w-full">
                  <a href="#" className="text-sm active:text-blue-600">
                    userId
                  </a>
                  <p className="text-[10px]">UploadTime</p>
                </div>

                <button className="float-right px-2 cursor-pointer">
                  <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
                </button>
              </div>
              <div className="flex items-center justify-center h-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=300"
                  className="object-cover max-h-full max-w-full"
                  alt=""
                />
              </div>
              <div className="absolute flex -translate-y-7 px-2">
                <div className="">
                  <i className="fa-solid fa-heart fa-sm"></i>
                  <span className="px-1 md:text-sm">123</span>
                </div>
                <div>
                  <i className="fa-solid fa-eye fa-sm"></i>
                  <span className="px-1">456</span>
                </div>
                {/* <!-- <div>
                <i className="fa-solid fa-bookmark fa-sm"></i
                ><span className="px-1 text-sm">789</span>
              </div> --> */}
              </div>
            </div>
          </div>
        
       
    
    </>
  );
};
