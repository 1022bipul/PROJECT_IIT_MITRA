import React, { useState, useContext } from "react";
import iitlogo from "../../src/public/whitelogo.jpg";
import { toast } from 'react-toastify';

const URI=import.meta.env.VITE_APP_URL

import { Form, Link, redirect, useNavigate } from "react-router-dom";
export const Register = () => {
    const [Otp,setOtp]=useState()
    const [inputOtp,setInputOtp]=useState()
    const [isVerified,setIsVerified]=useState(false)
    const [emailError, setEmailError] = useState("");
    const [emailValid, setEmailValid] = useState(false);



  const navigate = useNavigate();
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [userData, setUserData] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };



//email verifying codes
const validateEmail = (value) => {
  const iitpPattern = /^[a-zA-Z0-9._%+-]+@iitp\.ac\.in$/;
  if (!iitpPattern.test(value)) {
    // setEmailValid(iitpPattern.test(value))
    setEmailError("Input valid email Please !");
  }else{
    setEmailError("")
  }
};

 const handleSumbitEmail=async(e)=>{
  e.preventDefault();
  try {
    if(!userData.email){
     return toast.error('Enter Your College Email!')
    }
   const {email}=userData;
   validateEmail(email)

   const isValid = /^[a-zA-Z0-9._%+-]+@iitp\.ac\.in$/.test(email);
    if (!isValid) return;

    //verifying 
   const response=await fetch(`${URI}/auth/verifying`,{
    method:"Post",
    body:JSON.stringify({email}),
    headers: {
          "Content-Type": "application/json",
        },
    credentials:"include"
   })
   const data = await response.json();
     setOtp(data?.verificationCode)
 
 if (response.ok) {
       toast.info('OTP Send Successfully')
      } else {
        toast.error("Please, Fill the details!");
      }

  } catch (error) {
   console.log(error) 
  }
 }
const handleInputOtpChange=(e)=>{
  setInputOtp(e.target.value)


}
const handleOtpVerification=()=>{
  if(Otp==inputOtp){
    setIsVerified(true)
    toast.success("Verified")

  }else{
    toast.error('Wrong OTP')
  }
}








  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    console.log(userData);
    try {
      const { name, email, password } = userData;
      const response = await fetch(`${URI}/auth/register`, {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      // console.log(`your data: ${data}`);

      if (response.ok) {
        toast.success("Registered successfully");

        // console.log(shortDetails) // "User registered successfully"
        setUserData(initialState); // Clear form
        navigate("/login");
      } else {
        toast.error("Please, Fill the details!");
      }
    } catch (error) {
      console.log("fetching failed", error);
    }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="w-screen h-screen flex justify-center items-center flex-col "
      >
        <div className="bg-white/40 backdrop-blur-sm min-h-max min-w-max md:w-110 md:h-150  flex flex-col p-4 rounded-lg shadow-2xl ">
          <div className="flex justify-center items-center flex-col gap-2.5">
            <img
              className="size-20 rounded-full shadow-black shadow-2xl"
              src={iitlogo}
              alt="iitlogo"
            />
            <h3 className="text-3xl m-1.5 font-bold">Create an account</h3>
          </div>
          <div className="flex flex-col gap-2 text-lg mt-10">
            <h3>Name</h3>
            <input
              name="name"
              className="border-black border-1 rounded-md bg-slate-100 px-3 py-0.5"
              type="text"
              value={userData.name}
              placeholder="Enter Your Name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 text-lg mt-2">
            <h3>Email address</h3>
            <input
              name="email"
              className="border-black border-1 rounded-md bg-slate-100 px-3 py-0.5"
              type="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="abc@example.iit.in"
            />
          </div>
          {emailError && <p className="text-red-600 text-sm mt-1">{emailError}</p>}
        {!Otp &&<button
            className="flex flex-row-reverse px-2 underline text-blue-800 text-lg p-1 hover:cursor-pointer"
           onClick={handleSumbitEmail}
          >
            Send OTP 
          </button>}

        {/* your otp */}
          {Otp && <div class="flex flex-col  text-lg mt-2">
            <h3>Enter your Otp</h3>
            <input
            name="Otp"
            onChange={handleInputOtpChange} 
            value={inputOtp} 
           className="border-black border-1 rounded-md bg-slate-100 px-3 py-0.5" type="text" placeholder="Enter your otp" maxlength="6" />
            
         {isVerified ? (<h3  className="flex flex-row-reverse px-2 text-green-800 ">verified</h3>):(  <button type="button" onClick={handleOtpVerification} className="flex flex-row-reverse px-2 text-blue-800 underline hover:cursor-pointer" >Verify</button>)}
         <div>
         
         </div>
          </div>}
         

          {isVerified &&<div className="flex flex-col gap-2 text-lg mt-2">
            <h3>Password</h3>
            <input
              className="border-black border-1 rounded-md bg-slate-100 px-3 py-0.5"
              type="text"
              name="password"
              value={userData.password}
              placeholder="Enter Your Password"
              onChange={handleChange}
            />
            <h3>Confirm password</h3>
            <input
              className="border-black border-1 rounded-md bg-slate-100 px-3 py-0.5"
              type="text"
              name="confirmPassword"
              onChange={handleChange}
              value={userData.confirmPassword}
              placeholder="Enter Your Password"
            />
          </div>}
          {/* <!-- <div className="p-1 "><a className="flex float-right px-2 underline text-blue-800" to="#">Forgot Password</a></div> --> */}
          <button
            className="border-2 border-none rounded-md active:bg-blue-800  bg-blue-600 text-lg p-0.5 mt-7 text-white hover:cursor-pointer"
            type="submit"
          >
            Register
          </button>
          <div className="flex justify-center items-center gap text-1xl m-1">
            <p>Already have account?</p>
            <Link
              className="flex float-right px-2 underline text-blue-800"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </Form>
    </>
  );
};
