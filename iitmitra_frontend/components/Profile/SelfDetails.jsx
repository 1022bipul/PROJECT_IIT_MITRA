import React, { useContext } from "react";


import { DetailsContext } from "../../context/DetailsContext";


export const SelfDetails = ({ state, handleChange }) => {
  const { shortDetails } = useContext(DetailsContext);
  const { name, email } = shortDetails;
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-cyan-800 font-bold text-xl">Name</h1>
        <input
          name="name"
          value={state.name}
          onChange={handleChange}
          className="outline-none bg-gray-200 py-1 px-3 rounded-md"
          type="text"
          placeholder="Enter Your Full Name "
        />
      </div>

      <div className="flex flex-col mt-3">
        <h1 className="text-cyan-800 font-bold text-xl">Email</h1>
        {/* <p className="text-sm">**Email Provide by Your College</p> */}

        <input
          name="email"
          value={email}
          readOnly
          className="outline-none bg-gray-100 py-1 px-3 rounded-md cursor-not-allowed"
          type="text"
          placeholder="Enter Your Email "
        />
      </div>

      <div className="flex flex-col mt-3">
        <h1 className="text-cyan-800 font-bold text-xl">Phone Number</h1>
        <input
          name="phone"
          value={state.phone}
          onChange={handleChange}
          className="outline-none bg-gray-200 py-1 px-3 rounded-md"
          type="number"
          placeholder="+910000000000"
          maxLength="10"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-0.5 mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">Date of Birth</h1>
          <input
            name="dob"
            value={state.dob}
            onChange={handleChange}
            className="outline-none bg-gray-200 py-1 px-3 rounded-md"
            type="text"
            placeholder="DD/MM/YYYY"
          />
        </div>
        <div className="flex flex-col gap-0.5 mt-3">
          <h1 className="text-cyan-800 font-bold text-xl">Gender</h1>
          <select
            name="gender"
            value={state.gender}
            onChange={handleChange}
            className="outline-none bg-gray-200 py-1 px-3 rounded-md"
          >
            <option value="text">Option</option>
            <option value="Male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
    </>
  );
};
