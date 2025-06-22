import React, { useReducer, useRef, useContext , useState } from "react";
import { AcedemicDetail } from "./AcedemicDetail";
import { SocialMediaLink } from "./SocialMediaLink";
import { BioSection } from "./BioSection";
import { SkillsSection } from "./SkillsSection";
import { SelfDetails } from "./SelfDetails";
import { Profile } from "./Profile";
import { DetailsContext } from "../../context/DetailsContext";

export const EditProfile = () => {
   const { loading,shortDetails ,longsDetails} = useContext(DetailsContext);

  if(loading) return  <div>Loading user data...</div>;

  const { email } = shortDetails;
   const{name,avatar,banner }=longsDetails ||{};

  const [profile,setProfile]=useState(null)
  const [coverImage,setCoverImage]=useState(null)

  const setProfilePic=useRef();

  const clickProfile=()=>{
    setProfilePic.current.click();
  }
  const setBanner=useRef();

  const clickBanner=()=>{
    setBanner.current.click();
  }
 
  const initialState = {
    name: "",
    email:email,
    phone: "",
    dob: "",
    gender: "",
    skills: "",
    bio: "",
    aluminiStatus: "",
    institute: "",
    branch: "",
    year: "",
    jobTitle: "",
    company: "",
    linkedin: "",
    github: "",
    twitter: "",
    instagram: "",
    youtube: "",
    facebook: "",
    portfolio: "",
  };
  function reducer(state, action) {
    switch (action.type) {
      case "updateField":
        return {
          ...state,
          [action.field]: action.value,
        };
      case "reset":
        return initialState;
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "updateField",
      field: e.target.name,
      value: e.target.value,
    });
  };
 
  const handleInputChange=(e)=>{
    const file=e.target.files[0]
    setProfile(file)
  }
  const handleBannerInputChange=(e)=>{
    const file=e.target.files[0]
    setCoverImage(file)
  }
  




  const handleSubmit = async(e) => {
    e.preventDefault();
    // Submit form logic
    console.log(profile)
    console.log(coverImage)
    console.log(state);
    dispatch({ type: "reset" });

    const formData= new FormData()
    formData.append("userData",JSON.stringify(state))
    formData.append("avatar",profile)
    formData.append("banner",coverImage)

    try {
      const detailsRes= await fetch('http://localhost:3000/api/profile/profile-data',{
        method:'POST',
        body:formData,
        credentials: "include",
      });
 console.log(detailsRes)
      if (detailsRes.ok) {
        alert("Details Saved"); 
      } else {
        alert("Oops! some error occrued");
      }
    } catch (error) {
      console.log("fetching failed", error);
      
    }
  };

  return (
    <>
      <form action="/profile-data" method="post" encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="bg-gray-300 p-2 overflow-y-auto h-screen mx-1 mt-1 rounded-md"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex items-center px-2 py-1  bg-gray-200 rounded-md">
          <h1 className="w-full text-lg px-2 font-semibold">Edit profile</h1>
        </div>
        {/* <!-- cover img and profile img --> */}
        <div className="grid grid-cols-6 gap-0.5 mt-2">
          <div className="relative flex items-center justify-center col-span-2">
            <input type="file" name="avatar"  onChange={handleInputChange} ref={setProfilePic} className="hidden" />
            <img
              src={avatar ||"../../src/public/Profile_avatar.png"}
              className="object-cover w-30 h-30 rounded-full border-4 border-white"
            />
            <button onClick={clickProfile} type="button" className="absolute text-white translate-10 bg-gray-700 hover:bg-blue-800 text-sm rounded-full m-2 p-1">
              <i className="fa-solid fa-pen p-0.5"></i>
            </button>
          </div>

          <div className="relative w-full bg-slate-300 mt-1 rounded-md col-span-4">
            <button onClick={clickBanner} type="button" className="flex flex-row-reverse absolute right-0  text-white bg-gray-700 hover:bg-blue-800 text-sm rounded-full m-2 p-1">
              <i className="fa-solid fa-camera"></i>
           
            </button>
            <input type="file" name="coverImage" onChange={handleBannerInputChange} ref={setBanner} className="hidden" />
           
            <img
              src={banner ||"../../src/public/banner.png"}
              alt="Banner"
              className="w-full max-h-40 sm:h-48 object-cover rounded-md"
            />
          </div>
        </div>

        {/* <!-- deatail section --> */}

        <div className="w-full max-h-max rounded-md mt-4">
          <SelfDetails state={state} handleChange={handleChange} />
         

          {/* skills section  */}

          <SkillsSection state={state} handleChange={handleChange} />

         

          <BioSection state={state} handleChange={handleChange} />
        

          {/* <!-- Academic Year/Professional Details --> */}

          <AcedemicDetail state={state} handleChange={handleChange} />
        

          {/* <!-- Social Media links --> */}
          <SocialMediaLink state={state} handleChange={handleChange} />

          

          {/* <!-- save/discard button --> */}
          <div className="m-3">
            <button type='reset' className=" py-1 px-1.5 float-left font-semibold rounded-md bg-[#00A6FB] text-md text-black hover:bg-[#0582CA]">
              Discard Changes
            </button>
            <button
              type="submit"
              className=" py-1 px-1.5 float-right font-semibold rounded-md bg-[#00A6FB] text-md text-black hover:bg-[#0582CA]"
            >
              Save
            </button>
          </div>
        </div>

        <div className="h-1/2"></div>
      </form>
    </>
  );
};
