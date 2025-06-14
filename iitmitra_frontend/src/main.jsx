import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Navigate,
} from "react-router-dom";
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
import { DetailsContext, DetailsProvider } from "../context/DetailsContext.jsx";
import { Logout } from "../components/auth/Logout.jsx";
import {  Outlet } from "react-router-dom";
import { Mitra } from "../components/message/Mitra";
import { Notifications } from "../components/userInterface/Notifications.jsx";
import { Activity } from "../components/userInterface/Activity.jsx";
import { Message } from "../components/message/Message.jsx";
import { Posts } from "../components/Profile/Posts.jsx";
import { Video } from "../components/Profile/Video.jsx";
import { Saved } from "../components/Profile/Saved.jsx";
import { CreatePost } from "../components/Post&Feed/CreatePost.jsx";



const router = createBrowserRouter([
  
      {
        path: "/",
        element: <App />,
        children: [
          { path: "", element: <MainContent /> },
          { path: "profile/", element: <Profile />,
            children:[
              {path:"", element: <Posts/>},
              {path:"videos", element: <Video/>},
              {path:"saved", element: <Saved/>}
            ]
           },
          { path: "settings", element: <EditProfile /> },
          { path: "editprofile", element: <EditProfile /> },
          { path: "changepassword", element: <ChangePassword /> },
          { path: "about", element: <EditProfile /> },
          { path: "help", element: <EditProfile /> },
          { path: "mitra", element: <Mitra/> },
          { path: "notification", element: <Notifications/> },
          { path: "activity", element: <Activity/>},
          { path: "post", element: <CreatePost/>,
            // children:[
            //  { path:"",element:},
            //  { path:"image",element:},
            //  { path:"video",element:},

            // ]
          },
           { path: "/message", element: <Message/>},
      { path: "logout", element: <Logout /> },
        ],
      },
    

  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DetailsProvider>
      <RouterProvider router={router} />
    </DetailsProvider>
  </StrictMode>
);
// ✅ Why this works:
// React hooks like useState must be used inside function components or custom hooks.

// Wrapping them in AppWrapper ensures proper usage.

// Let me know if you want help managing the context in separate files or with performance optimization (like memoization).
