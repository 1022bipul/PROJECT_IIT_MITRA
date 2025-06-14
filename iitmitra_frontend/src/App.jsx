import { useRef, useEffect, useContext } from "react";
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
import { CreatePost } from "../components/Post&Feed/CreatePost";

function App() {
  
  const togglecreatePostBtn = useRef();

  const togglePost = useRef();
  const handleTogglePost = () => {
    // alert("okk")
    // togglePost.current.style.display="none"

    if (togglePost.current.style.display === "none") {
      togglePost.current.style.display = "block";
    } else {
      togglePost.current.style.display = "none";
    }
  };

  const handleToggleCreatePost = () => {
    if (togglecreatePostBtn.current.style.display === "none") {
      togglecreatePostBtn.current.style.display = "block";
    } else {
      togglecreatePostBtn.current.style.display = "none";
    }
  };

  return (
    <>
      {/* post toggleMenu */}
      <div
        ref={togglePost}
        className="bg-black    rounded absolute top-14 w-50% cursor-pointer z-10 sm:left-5/12 md:left-5/12 lg:left-6/12 px-2 py-1 mt-0.5"
        style={{ display: "none" }}
      >
        <button
          onClick={handleToggleCreatePost}
          className="bg-black px-2 py-0.5 rounded text-lg text-white"
        >
          Post
        </button>
        <button className="bg-black  px-2 py-0.5 mt-1 rounded  text-lg  text-white">
          Story
        </button>
      </div>
     
      <div
        className=""
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Header handleTogglePost={handleTogglePost} />

        <div className=" h-[92vh] w-full overflow-y-scroll grid sm:grid-cols-12">
          <CreatePost
          togglecreatePostBtn={togglecreatePostBtn}
          handleToggleCreatePost={handleToggleCreatePost}
        />
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
            <RightSideBar />
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default App;
