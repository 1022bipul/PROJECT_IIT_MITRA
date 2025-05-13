import React from "react";

export const EditProfile = () => {
  return (
    <>
      <div className="flex items-center px-2 py-1 bg-gray-200 rounded-md">
        <h1 className="w-full text-xl font-semibold">Edit profile</h1>
        <div className="flex items-center flex-row-reverse w-full gap-4">
          <a href="./profile.html">
            <img
              className="h-10 w-10 object-cover rounded-full"
              src="https://images.pexels.com/photos/31812795/pexels-photo-31812795/free-photo-of-portrait-of-woman-with-pink-flowers-in-spring-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </a>
          <a href="#">
            <i className="fa-solid fa-bell fa-lg hover:text-blue-600"></i>
          </a>
        </div>
      </div>
      {/* <!-- cover img and profile img --> */}
      <div className="grid grid-cols-6 gap-0.5 mt-2">
        <div className="relative flex items-center justify-center col-span-2">
          <img
            src="https://images.pexels.com/photos/6283154/pexels-photo-6283154.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            className="object-cover w-30 h-30 rounded-full border-4 border-white"
          />
          <button className="absolute text-white translate-10 bg-gray-700 hover:bg-blue-800 text-sm rounded-full m-2 p-1">
            <i className="fa-solid fa-pen p-0.5"></i>
          </button>
        </div>

        <div className="relative w-full bg-slate-300 mt-1 rounded-md col-span-4">
          <button className="flex flex-row-reverse absolute right-0 text-white bg-gray-700 hover:bg-blue-800 text-sm rounded-full m-2 p-1">
            <i className="fa-solid fa-camera"></i>
          </button>
          <img
            src="https://images.pexels.com/photos/4121821/pexels-photo-4121821.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt="Banner"
            className="w-full max-h-40 sm:h-48 object-cover rounded-md"
          />
        </div>
      </div>

      {/* <!-- deatail section --> */}
      <div className="w-full max-h-max rounded-md mt-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-cyan-800 font-bold text-xl">Name</h1>
          <input
            className="outline-none bg-gray-200 py-1 px-3 rounded-md"
            type="text"
            placeholder="Enter Your Full Name "
          />
        </div>

        <div className="flex flex-col mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">Email</h1>
          <p className="text-sm">**Email Provide by Your College</p>

          <input
            className="outline-none bg-gray-200 py-1 px-3 rounded-md"
            type="text"
            placeholder="Enter Your Email "
          />
        </div>

        <div className="flex flex-col mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">Phone Number</h1>
          <input
            className="outline-none bg-gray-200 py-1 px-3 rounded-md"
            type="number"
            placeholder="+910000000000"
            maxlength="10"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-0.5 mt-3">
            <h1 className="text-cyan-800 font-bold text-xl">Date of Birth</h1>
            <input
              className="outline-none bg-gray-200 py-1 px-3 rounded-md"
              type="text"
              placeholder="DD/MM/YYYY"
            />
          </div>
          <div className="flex flex-col gap-0.5 mt-3">
            <h1 className="text-cyan-800 font-bold text-xl">Gender</h1>
            <select className="outline-none bg-gray-200 py-1 px-3 rounded-md">
              <option value="text">Option</option>
              <option value="text">Male</option>
              <option value="text">Female</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-0.5 mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">Skills</h1>
          <textarea
            className="outline-none bg-gray-200 py-1 px-3 rounded-md"
            rows="5"
            cols="10"
            placeholder="HTML,JAVA,C++,JavaScript........ "
          ></textarea>
        </div>

        <div className="flex flex-col gap-0.5 mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">Bio</h1>
          <textarea
            className="outline-none bg-gray-200 py-1 px-3 rounded-md"
            rows="5"
            cols="10"
            placeholder="Tell ua something about Yourself... "
          ></textarea>
        </div>

        {/* <!-- Academic Year/Professional Details --> */}
        <div className="flex flex-col gap-0.5 mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">Alumini Status</h1>
          <select className="bg-gray-200 py-1 px-2  rounded-md">
            <option value="text">Your Option</option>

            <option value="text">Current student</option>
            <option value="text">Alumini</option>
            <option value="text">Faculty</option>
          </select>
        </div>
        <div className="flex flex-col mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">Institute Name</h1>
          <p className="text-sm">Indian Institute of Technology **</p>
          <input
            className="outline-none bg-gray-200 py-1 px-3 rounded-md"
            type="text"
            placeholder="Enter Your College Name"
          />
        </div>
        <div className="flex flex-col gap-0.5 mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">Branch/Department</h1>
          <input
            className="outline-none bg-gray-200 py-1 px-3 rounded-md"
            type="text"
            placeholder="Branch/Department"
          />
        </div>
        <div className="flex flex-col gap-0.5 mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">
            Year of Passing/Current year
          </h1>
          <input
            className="outline-none bg-gray-200 py-1 px-3 rounded-md"
            type="text"
            placeholder="2024/2025  "
          />
        </div>
        <div className="flex flex-col gap-0.5 mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">
            Current Job Title (if working)
          </h1>
          <input
            className="outline-none bg-gray-200 py-1 px-3 rounded-md"
            type="text"
            placeholder="Your Job  "
          />
        </div>
        <div className="flex flex-col gap-0.5 mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">Company name</h1>
          <input
            className="outline-none bg-gray-200 py-1 px-3 rounded-md"
            type="text"
            placeholder="Company Name  "
          />
        </div>
        <div className="flex flex-col gap-0.5 mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">
            Linkedin/GitHub URLs
          </h1>
          <input
            className="outline-none border-b-2 pt-1 px-3"
            type="url"
            placeholder="Linkedin/GitHub URLs  "
          />
        </div>

        {/* <!-- Social Media links --> */}
        <div className="flex flex-col gap-0.5 mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">Instagram URLs</h1>
          <input
            className="outline-none border-b-2 pt-1 px-3"
            type="url"
            placeholder="Instagram URLs  "
          />
        </div>
        <div className="flex flex-col gap-0.5 mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">YT Channel URLs</h1>
          <input
            className="outline-none border-b-2 pt-1 px-3"
            type="url"
            placeholder="YT Channel URLs  "
          />
        </div>
        <div className="flex flex-col gap-0.5 mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">Twitter/X URLs</h1>
          <input
            className="outline-none border-b-2 pt-1 px-3"
            type="url"
            placeholder="Twitter/X URLs  "
          />
        </div>
        <div className="flex flex-col gap-0.5 mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">Facebook URLs</h1>
          <input
            className="outline-none border-b-2 pt-1 px-3"
            type="url"
            placeholder="Facebook URLs "
          />
        </div>
        <div className="flex flex-col gap-0.5 mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">
            Personal Website/Portfolio URLs
          </h1>
          <input
            className="border-b-2   pt-1 px-3"
            type="url"
            placeholder="Personal Website/Portfolio URLs  "
          />
        </div>
        {/* <!-- save/discard button --> */}
        <div className="m-3">
          <button className=" p-2 float-left font-semibold rounded-md bg-orange-600 text-lg text-black hover:bg-orange-700">
            Discard Changes
          </button>
          <button className=" p-2 float-right font-semibold rounded-md bg-orange-600 text-lg text-black hover:bg-orange-700">
            Save
          </button>
        </div>
      </div>
    </>
  );
};
