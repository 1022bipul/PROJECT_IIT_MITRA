import { useState } from "react";
import "./App.css";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { OtpAuthPage } from "../components/auth/OtpAuthPage";
import { Profile } from "../components/Profile/Profile";
import { EditProfile } from "../components/Profile/EditProfile";
import { Header } from "../components/userInterface/Header";
import { MainContent } from "../components/userInterface/MainContent";
import { LeftSideBar } from "../components/userInterface/LeftSideBar";
import { RightSideBar } from "../components/userInterface/RightSideBar";
import { Link, Outlet } from "react-router-dom";
import { BottomNavForMobile } from "../components/userInterface/BottomNavForMobile";
import { SettingsOptions } from "../components/userInterface/SettingsOptions";
import { AcedemicDetail } from "../components/Profile/AcedemicDetail";
import { ChangePassword } from "../components/password&security/ChangePassword";

import { FriendSuggestions } from "../components/userInterface/FriendSuggestions";
import { ContentAera } from "../components/userInterface/ContentAera";
import { Footer } from "../components/userInterface/Footer";

function App() {
  const [ActivePage, setactivepage] = useState("profile");

  return (
    <>
      <div
        className=""
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Header />
        <div className=" h-[92vh] w-full overflow-y-scroll grid sm:grid-cols-12">
          {/* <!-- left side bar     --> */}
          <div className="sm:col-span-2 hidden sticky h-full sm:block ">
            <LeftSideBar />
          </div>

          {/* <!-- main content bar     --> */}
          <div
            className=" sm:col-span-7 overflow-y-auto h-full"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <Outlet />

            <div className="sm:hidden block fixed bottom-0 left-0 w-full z-50">
              <BottomNavForMobile />
            </div>
          </div>
          {/* <!-- right side bar --> */}
          <div className=" sm:col-span-3  hidden top-0 overflow-hidden sm:block h-full">
            <FriendSuggestions />
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default App;
