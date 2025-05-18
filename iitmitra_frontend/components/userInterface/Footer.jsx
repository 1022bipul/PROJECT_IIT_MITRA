import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
           <div className=" bg-black text-white">
      <div className="grid grid-cols-12 max-h-max   ">
        <div className=" col-span-2"> </div>  





          
        <div className=" col-span-4"> 
          <h1>IITMITRA</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus est blanditiis dolorem </p>
          
          
          </div>        
        <div className="col-span-2 ">
          <div className="dropdown flex flex-col" >
            <h3>Navigation</h3>

    <Link className="hover:bg-gray-300 rounded-md px-1" to="/editprofile">Edit Profile</Link>
    {/* <Link className="hover:bg-gray-300 rounded-md px-1" to="/changepassword">Change Password</Link> */}
    <Link className="hover:bg-gray-300 rounded-md px-1" href="#">About</Link>
    <Link className="hover:bg-gray-300 rounded-md px-1" href="#">Help</Link>
    <Link className="hover:bg-gray-300 rounded-md px-1" href="#">Log Out</Link>
  </div>
          
           </div>        
        <div className=" col-span-2">

          <div className=" flex flex-col" >
            <h3>Services</h3>
    <Link className="hover:bg-gray-300 rounded-md px-1" href="#">Home</Link>

    <Link className="hover:bg-gray-300 rounded-md px-1" href="#">Contact us</Link>
    <Link className="hover:bg-gray-300 rounded-md px-1" href="#">Blog</Link>

    <Link className="hover:bg-gray-300 rounded-md px-1" href="#">404</Link>
  </div>
        </div>












        <div className=" col-span-2"></div>        
              
      </div>
      <div className="border-t-[1px] text-center ">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, deserunt alia</p>
      </div>
    </div>  
        </>
    )
}
