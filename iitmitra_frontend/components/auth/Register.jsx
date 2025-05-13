import React from 'react'

export const Register = () => {
    return (
        <>
        <div className="w-screen h-screen flex justify-center items-center flex-col ">
        <div className="bg-slate-100 min-h-max min-w-max md:w-110 md:h-150  flex flex-col p-4 rounded-lg shadow-2xl ">
  
          <div className="flex justify-center items-center flex-col gap-2.5">
            
            <img className="size-20 rounded-full shadow-black shadow-2xl" src="../../src/assets/iitlogo.jpg" alt="" />
            <h3 className="text-3xl m-1.5 font-bold">Create an account</h3>
          </div>
          <div className="flex flex-col gap-2 text-lg mt-10">
            <h3>Email address</h3>
            <input className="border-black border-1 rounded-md bg-slate-100 px-3 py-0.5" type="text" placeholder="abc@example.iit.in" />
            
          </div>
          <a className="flex flex-row-reverse px-2 underline text-blue-800 text-lg p-1" href="otpVerify.html">verify </a>

          <div className="flex flex-col gap-2 text-lg mt-2">
            <h3>Create password</h3>
            <input className="border-black border-1 rounded-md bg-slate-100 px-3 py-0.5"  type="text" placeholder="Password" />
            <h3>Repeat password</h3>
            <input className="border-black border-1 rounded-md bg-slate-100 px-3 py-0.5"  type="text" placeholder="Password" />
          </div>
          {/* <!-- <div className="p-1 "><a className="flex float-right px-2 underline text-blue-800" href="#">Forgot Password</a></div> --> */}
          <button className="border-2 border-none rounded-md bg-blue-600 text-lg p-0.5 mt-7 text-white">Register</button>
          <div className="flex justify-center items-center gap text-1xl m-1">
            <p>Already have account?</p>
            <a className="flex float-right px-2 underline text-blue-800" href="login.html">Login</a>
          </div> 
        </div>
      </div>
            
        </>
    )
}
