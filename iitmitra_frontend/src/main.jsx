import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { OtpAuthPage } from "../components/auth/OtpAuthPage";
import { Profile } from "../components/Profile/Profile";
import { EditProfile } from "../components/Profile/EditProfile";
import { Header } from "../components/userInterface/Header";
import { MainContent } from "../components/userInterface/MainContent";
import { LeftSideBar } from "../components/userInterface/LeftSideBar";
import { RightSideBar } from "../components/userInterface/RightSideBar";
import { BottomNavForMobile } from "../components/userInterface/BottomNavForMobile";
import { SettingsOptions } from "../components/userInterface/SettingsOptions.jsx";
// import {FriendSuggestions} from "../components/userInterface/FriendSuggestions";
import { AcedemicDetail } from "../components/Profile/AcedemicDetail";
import { ChangePassword } from "../components/password&security/ChangePassword";

const router=createBrowserRouter([
 {
  path:"/",
  element:<App/>,
  children:[ {
    path:'/',
    element:<MainContent/>
  }
  ,{ path:"/profile",
     element:<Profile/>}
  ,{ path:"/settings",
     element:<EditProfile/>}
  ,{path:"/editprofile",
     element:<EditProfile/>},
     { path:"/changepassword",
     element:<ChangePassword/>}
  ,{ path:"/about",
     element:<EditProfile/>}
  ,{path:"/help",
     element:<EditProfile/>}
  ]
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

<RouterProvider router={router} />
    
  </StrictMode>,
)
