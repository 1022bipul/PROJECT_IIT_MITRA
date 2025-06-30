import React, { useState } from "react";
import { ProfilePic } from "../Profile/ProfilePic";

export const Message = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewurl, SetPreviewUrl] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    SetPreviewUrl(URL.createObjectURL(file));
    console.log("video", URL.createObjectURL(file));
  };

  return (
    <>
     
      <div class="flex h-screen">
        {/* <!-- Freind Contact List --> */}
        <div class="bg-gray-200  h-screen w-2/5 rounded-md  grid overflow-y-scroll ">
          <ul>
            <li>
              <a
                class="flex justify-start items-center m-1 text-xl hover:bg-white "
                href=""
              >
                <img
                  src="./icons/Generic avatar.svg"
                  class="size-10 border-1 rounded-full m-1 "
                />
                Mitra
              </a>
            </li>
            <hr class=" border-gray-400 ml-1 mr-1 " />
          </ul>
        </div>
        {/* <!-- Chat Box --> */}
        <div class="bg-gray-200 h-screen w-full rounded overflow-y-scroll p-2 justify-start items-start">
          {/* <!--Freind Profile button-->  */}
          <a
            href="#"
            class="flex justify-start items-center m-1 p-1 mt-0 pt-0 mb-0 pb-0 text-2xl"
          >
            <img
              src="./icons/Generic avatar.svg"
              class="size-10 border-1 rounded-full m-1"
            />
            Mitra
          </a>
          <hr class=" border-gray-400 ml-1 mr-1 " />

          {/* <!-- Message area --> */}

          <div class="bg-white w-full h-4/5 rounded-xl mt-1 border overflow-y-scroll scrollbar-none">
            <div class="h-full flex flex-col p-2 space-y-2">
              {/* <!-- Friend's message --> */}
              <div class="flex justify-start">
                <div class="bg-blue-200 text-black w-fit max-w-xs p-2 rounded-xl border-1">
                  Hello! bro
                </div>
              </div>

              {/* <!-- Your message --> */}
              <div class="flex justify-end">
                <div class="bg-blue-400 text-white w-fit max-w-xs p-2 rounded-xl">
                  Hey, how are you?
                </div>
              </div>

              {/* <!-- Friend's reply --> */}
              <div class="flex justify-start">
                <div class="bg-blue-200 text-black w-fit max-w-xs p-2 rounded-xl border-1">
                  I'm good! What about you?
                </div>
              </div>

              {/* <!-- Your response --> */}
              <div class="flex justify-end">
                <div class="bg-blue-400 text-white w-fit max-w-xs p-2 rounded-xl">
                  All great. Just working on a project.
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Message sending area --> */}
          <form class="flex justify-start items-end mt-1">
            <input
              type="text"
              placeholder="Send Message ..."
              class="w-full h-15 bottom-1 border-1 rounded-md bg-white p-2 mr-1"
            />
            <button class="bg-blue-400 size-15 rounded-md justify-center items-center hover:bg-gray-400">
              <a href="#">
                <i class="fa-regular fa-paper-plane text-white text-3xl hover:text-blue-400 "></i>
              </a>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
