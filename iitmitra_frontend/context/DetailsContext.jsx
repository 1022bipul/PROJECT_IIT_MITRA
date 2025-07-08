import { createContext, useEffect, useState } from "react";
export const DetailsContext = createContext(null);

export const DetailsProvider = (props) => {
  const [shortDetails, setShortDetails] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [longsDetails, setlongsDetails] = useState("");
  const [loading, setLoading] = useState(true);
 const [imgUrl,setImgUrls]=useState([])


//all img url of a user (only self post img)
  const handleGetUrlData = async () => {

    try {
      const res = await fetch("https://project-iit-mitra.onrender.com/api/post/allurls", {
        method: "GET",
        credentials: "include",
      });
      console.log(res)


      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setImgUrls(data);
  
      console.log("radhe radhe")
      console.log(imgUrl)
    

    } catch (error) {

    
      console.log(error);

    }
  };

  // console.log(shortDetails.name)

  //details of a user (only self)

  const handleGetUserData = async () => {

    try {
      const res = await fetch("https://project-iit-mitra.onrender.com/api/user/details", {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setShortDetails(data[0]);
      setlongsDetails(data[1]);
      setIsLoggedIn(true)
    } catch (error) {

      setIsLoggedIn(false)

      console.log(error);

    }
  };


useEffect(() => {
  
     const fetchAllData = async () => {
    await handleGetUserData();
    await handleGetUrlData();
    setLoading(false);
  };

  fetchAllData(); 
  
}, []);




//imgCount code (self)

const[imgCount,setImgCount]=useState()

useEffect(() => {
 
    setImgCount(imgUrl.length)
  
}, [imgUrl]);

 



//logout logic

 const logoutUser=async()=>{
 try {
  let logout = await fetch("https://project-iit-mitra.onrender.com/api/auth/logout", {
    method:'GET',
    credentials:"include"
  })
  const logoutsms=await logout.json()

  if(logout.ok){
    setIsLoggedIn(false)
    alert(logoutsms.message)
  }

  
 } catch (error) {
  console.log(error)
 }
}





  return (
    <DetailsContext.Provider
      value={{
        loading,
        imgUrl,
        imgCount,
        logoutUser,
        shortDetails,
        longsDetails,
        isLoggedIn,
      }}
    >
      {props.children}
    </DetailsContext.Provider>
  );
};
