import { useState } from 'react'
import './App.css'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'
import { OtpAuthPage } from '../components/auth/OtpAuthPage'
import {Profile} from '../components/Profile/Profile'
import {EditProfile} from '../components/Profile/EditProfile'
import { Header } from '../components/userInterface/Header'
import { Main } from '../components/userInterface/MainContent'
import { LeftSideBar } from '../components/userInterface/LeftSideBar'
import { RightSideBar } from '../components/userInterface/RightSideBar'
import { Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Header />
    

      {/* <Login /> */}
      {/* <Register /> */}
      {/* <OtpAuthPage /> */}
      {/* <Profile/> */}
      {/* <div className="bg-slate-800 max-h-full max-w-full grid sm:grid-cols-12 gap-0.5"> */}
      <div className="bg-gray-600 h-screen max-w-full overflow-hidden grid sm:grid-cols-12 gap-0.5">
      {/* <!-- left side bar     --> */}
      <div className="bg-gray-400 sm:col-span-3 hidden top-0 sticky overflow-hidden  sm:block">
        <LeftSideBar/>
      </div>
 
      {/* <!-- main side bar     --> */}
    <div className="bg-gray-400 sm:col-span-6 p-2 overflow-y-auto h-screen "   style={{
    scrollbarWidth: "none",
    msOverflowStyle: "none"
  }}>
      <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/editprofile" element={<EditProfile/>} />

    </Routes>
      </div>
      {/* <!-- right side bar --> */}
      <div className="bg-gray-400 sm:col-span-3 hidden top-0 sticky sm:block">

        <RightSideBar/>
      </div>
    </div>


    </>
  )
}

export default App
