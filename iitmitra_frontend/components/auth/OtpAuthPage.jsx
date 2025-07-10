import React from 'react'
import { Form, Link } from 'react-router-dom'
import iitlogo from "../../src/public/whitelogo.jpg";
import { useState } from 'react';
const URI=import.meta.env.VITE_APP_URL

export const OtpAuthPage = () => {
    
    // const handleverify=()=>{
    //   try {
    //     const res=fetch(`${URI}/auth/otpverify`,{method:"Get",credentials:"include"})
    //   } catch (error) {
        
    //   }
    // }


    return (
        <>
            <Form onSubmit={handleverify} class="w-screen h-screen flex justify-center items-center flex-col">
        <div class="bg-slate-100 max-w-min max-h-max justify-center items-center flex flex-col p-5 rounded-lg shadow-2xl">
  
          <div class="flex justify-center items-center flex-col gap-5">
            
            <img class="size-20 rounded-full shadow-black shadow-2xl" src={iitlogo} alt="" />
            <div class="flex flex-col items-center">
                <h3 class="text-2xl m-2 font-bold flex font-sans">Email Verfication</h3>
            <div class="flex flex-wrap text-center justify-center"><p class="font-sans ">Enter the 6-digit verification code that was sent to abc@example.iit.in</p>
            </div>
         </div>
          <div class="flex gap-2">

            <input onChange={(e)=>setotp(e.target.value)} value={otp}  class="min-w-40 bg-slate-300 text-2xl p-2 rounded-lg border-slate-700 border-none outline-none text-center" type="text" placeholder="000000" maxlength="6" />
            

          </div>
          
          <button class="size-full rounded-md bg-blue-600 text-lg p-1 px-2  text-white" type='submit'>Verify Account</button>
          <div class="flex justify-center items-center  text-1xl m-1">
            <p class="font-sans">Don't receive code?</p>
            <Link class="flex float-right px-2 font-sans text-blue-800" to="">Resend</Link>
          </div>
        </div>
      </div>
       </Form>
        </>
    )
}
