import React from 'react'

export const AcedemicDetail = () => {
    return (
        <>
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
            <h1 className="text-cyan-800 font-bold text-xl">
              Branch/Department
            </h1>
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
        </>
    )
}
