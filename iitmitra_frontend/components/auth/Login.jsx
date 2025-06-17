import React, { useState,useContext } from "react";
import iitlogo from "../../src/assets/iitlogo.jpg";
import { Form, Link,Navigate,useNavigate  } from "react-router-dom";
import { DetailsContext } from "../../context/DetailsContext";

export const Login = () => {
  const {setIsLoggedIn,isLoggedIn}= useContext(DetailsContext)

  const navigate=useNavigate();
  
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserLoginData({ ...userLoginData, [name]: value });
  };
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const {email,password}=userLoginData
   
    let loginData = await fetch("http://localhost:3000/api/auth/login", {
      method: "post",

      body: JSON.stringify({email,password}),

      headers: {
        "Content-Type": "application/json",
      },
      credentials:"include"
    });
    
    const loggedIn=await loginData.json();
    
    if(loginData.ok){
     navigate('/')
      alert(`${loggedIn.massage}`)
    }else{
      alert(`Invalid Credentials`)
      navigate('/login')
    }
    
    
    
   
    
    
  
  

    
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center flex-col  ">
        <Form
          onSubmit={handleSubmit}
          className="relative bg-slate-100 w-120 h-130 flex flex-col p-5 gap-3 rounded-lg shadow-2xl"
        >
          {/* <!-- Floating Header --> */}
          <div className="shadow-xl/40 shadow-blue-700 bg-blue-700 -translate-y-1/3 -top-10 w-110 flex justify-center items-center flex-col   rounded-lg gap-3 p-3">
            <img
              className="size-20 rounded-full bg-auto shadow-black shadow-2xl"
              src={iitlogo}
              alt=""
            />
            <h3 className="text-2xl m-2 font-bold text-white">Log in</h3>
          </div>

          {/* <!-- Email Input --> */}

          <div className="flex flex-col gap-1 text-lg">
            <h3>Email address</h3>

            <input
              className="border-black outline-none border-1 rounded-md bg-slate-100 px-3 py-0.5"
              type="text"
              name="email"
              value={userLoginData.email}
              onChange={handleChange}
              placeholder="abc@example.iit.in"
            />
          </div>
          {/* <!-- Password Input --> */}
          <div className="flex flex-col gap-1 text-lg mt-2">
            <h3>Password</h3>
            <input
              className="border-black outline-none border-1 rounded-md bg-slate-100 px-3 py-0.5"
              type="text"
              name="password"
              onChange={handleChange}
              value={userLoginData.password}
              placeholder="Password"
            />
          </div>

          {/* <!-- Forgot Password --> */}
          <div className="p-1 ">
            <Link
              className="flex float-right px-2 underline text-blue-800"
              to="#"
            >
              Forgot Password
            </Link>
          </div>

          {/* <!-- Sign In Button --> */}
          <button type="submit" className="border-2 border-none rounded-md hover:bg-blue-800 bg-blue-600 text-lg p-0.5 text-white">
            Sign in
          </button>

          {/* <!-- Register Link --> */}
          <div className="flex justify-center items-center text-1xl m-1">
            <p className="text-md">Don't have an account?</p>
            <Link
              className="flex float-right px-2 underline text-blue-800 text-base"
              to="/register"
            >
              Register yourself
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};
