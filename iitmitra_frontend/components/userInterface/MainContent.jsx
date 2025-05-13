import React from "react";

export const Main = () => {
  return (
    <>
      <div className="bg-gray-200 relative  h-[calc(100vh-10vh)] w-full border-0 rounded-xl">
        <div className="bg-white border-0 rounded-xl mx-auto h-[calc(100vh-13vh)] overflow-scroll">
          <div className="bg-gray-200 relative left-0.5 top-1 h-24 w-full border-0 rounded-xl mr-1 p-2">
            <div className="flex justify-start items-center space-x-1">
              <img
                src="./icons/Generic avatar.svg"
                className="size-12 border-1 rounded-full"
              />
              <h1 className="text-2xl">USERNAME</h1>
            </div>
          </div>
          <div className="border-1 p-2 m-2 mt-3 rounded-xl">
            <div className="m-1 flex">
              <img
                src="./icons/Generic avatar.svg"
                className="size-10 border-1 rounded-full"
              />
              <h1 className="relative left-1 top-2">Anonymous</h1>
            </div>
            <hr className="h1 border-0.5 mx-1 " />
            <h5 className="m-2 text-xs font-light">times ago</h5>
            <div className="lg:flex">
              <div className="flex justify-center sm:justify-center md:justify-start p-2">
                <img
                  src="./icons/cartoonish image of KTM Duke 390 2024.png"
                  className=" relative w-full sm:w-fit md:w-md lg:w-md"
                />
              </div>
              {/* <!-- Interaction buttons --> */}
              <div className="lg:w-xl">
                <div className="flex m-2 space-x-4 lg:justify-end">
                  <a href="#">
                    <i className="fa-regular fa-heart fa-2x"></i>
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-comment fa-2x"></i>
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-paper-plane fa-2x"></i>
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-bookmark fa-2x"></i>
                  </a>
                </div>

                {/* <!-- Comment area --> */}
                <div className="bg-gray-100 p-2 rounded-md shadow-md lg:text-right">
                  <h2 className="text-lg font-bold">Comments</h2>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    placeholder="Write a comment..."
                  ></textarea>
                  <button className="mt-2 px-2 py-1 bg-blue-500 text-white rounded-md">
                    <a href="#">post</a>
                  </button>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>


      <div className="sticky bottom-0 w-full m-1 mb-0  bg-gray-200 text-black p-4 sm:hidden z-10 flex justify-between">
      <a href="#"><img src="./icons/Generic avatar.svg" className="size-10 border-1 rounded-full "/></a>
      <a className="active:border-b-3 focus:border-b-3 border-blue-800 p-1" href="#"><i className="fa-solid fa-house fa-2x"></i></a>
      <a className="" href="#"><i className="fa-regular fa-square-plus fa-2x"></i></a>
      <a className="active:border-b-3 focus:border-b-3 border-blue-800 p-1" href="#"><i className="fa-solid fa-people-group fa-2x"></i></a>
      <a href="#"><i className="fa-regular fa-paper-plane fa-2x mr-2"></i></a>
        
      </div>

    </>
  );
};
