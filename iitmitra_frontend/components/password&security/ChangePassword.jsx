import React, { useState } from "react";
import { Form } from 'react-router-dom';

export const ChangePassword = () => {
   const [password,setPassword]=useState({
    currentPassword:"",
    newPassword:"",
   confirmPassword:""


   })

   const handleChangePass =(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setPassword({[name]:value})

   }
   const handleSubmit=(e)=>{
    e.preventDefault()
    alert('submited')

   }


  return (
    <>
      <div className="h-full  flex flex-col m-1 gap-1 p-2 rounded-md bg-gray-300">

      <div className="flex items-center px-2 py-2 bg-gray-100 rounded-md">
        <h1 className="w-full text-xl font-semibold">Password & Security</h1>
        
      </div>
      <div className="flex flex-col my-3 ">
        <h1 className="font-semibold text-3xl mt-5">Password</h1>
        <p className="font-light  px-1 rounded-md">
          Please enter your current password to change your password :)
        </p>
      </div>

      <Form onSubmit={handleSubmit} className="flex flex-col">
        <div className="pt-7 ">
          <h2 className="font-semibold text-2xl my-2 ">Current Password</h2>
          <input
          name="currentPassword"
          value={password.currentPassword}
          onChange={handleChangePass}
            className="outline-none border-[1px] border-none bg-gray-200 rounded-lg w-full p-1 text-lg"
            type="password"
            placeholder="Enter your current password"
          />
        </div>

        <div className="pt-7">
          <h2 className="font-semibold text-2xl  my-2">New Password</h2>
          <input
          name="newPassword"
          value={password.newPassword}
          onChange={handleChangePass}

            className="outline-none border-[1px] bg-gray-200 rounded-lg w-full border-none  p-1 text-lg"
            type="password"
            placeholder="Enter your current password"
          />
        </div>

        <div className="pt-7">
          <h2 className="font-semibold text-2xl  my-2">Confirm New Password</h2>
          <input
          name="confirmPassword"
          value={password.confirmPassword}
          onChange={handleChangePass}

            className="outline-none border-[1px] bg-gray-200  border-none rounded-lg w-full p-1 text-lg"
            type="password"
            placeholder="Enter your current password"
          />
        </div>

        <div className="pt-5">
          <button
            className="px-2 py-1 float-left font-semibold rounded-md bg-blue-400 text-lg text-black hover:bg-blue-700"
            type="reset"
          >
            Cancel
          </button>
          <button
            className="px-2 py-1 float-right font-semibold rounded-md bg-blue-400 text-lg text-black hover:bg-blue-700"
            type="submit"
          >
            Update Password
          </button>
        </div>
      </Form>
      </div>
    </>
  );
};
