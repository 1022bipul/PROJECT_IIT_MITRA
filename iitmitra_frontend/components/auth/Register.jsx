import React, { useState, useContext } from "react";
import iitlogo from "../../src/public/whitelogo.jpg";

import { Form, Link, useNavigate } from "react-router-dom";
export const Register = () => {
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(userData);
    try {
      const { name, email, password } = userData;
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log(`your data: ${data}`);

      if (response.ok) {
        alert("Registered successfully");

        // console.log(shortDetails) // "User registered successfully"
        setUserData(initialState); // Clear form
        navigate("/login");
      } else {
        alert("please, fill the details!");
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
        <div className="bg-slate-100 min-h-max min-w-max md:w-110 md:h-150  flex flex-col p-4 rounded-lg shadow-2xl ">
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
          <Link
            className="flex flex-row-reverse px-2 underline text-blue-800 text-lg p-1"
            to=""
          >
            verify{" "}
          </Link>

          <div className="flex flex-col gap-2 text-lg mt-2">
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
          </div>
          {/* <!-- <div className="p-1 "><a className="flex float-right px-2 underline text-blue-800" to="#">Forgot Password</a></div> --> */}
          <button
            className="border-2 border-none rounded-md active:bg-blue-800  bg-blue-600 text-lg p-0.5 mt-7 text-white"
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
