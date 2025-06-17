import { createContext, useEffect, useState } from "react";
export const DetailsContext = createContext(null);

export const DetailsProvider = (props) => {
  const [shortDetails, setShortDetails] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [longsDetails, setlongsDetails] = useState("");
 const [imgUrl,setImgUrls]=useState([])



  const handleGetUrlData = async () => {

    try {
      const res = await fetch("http://localhost:3000/api/post/allurls", {
        method: "GET",
        credentials: "include",
      });
      console.log(res)


      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setImgUrls(data);
      console.log(imgUrl)
    

    } catch (error) {

    
      console.log(error);

    }
  };

  console.log(shortDetails.name)

  const handleGetUserData = async () => {

    try {
      const res = await fetch("http://localhost:3000/api/user/details", {
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
  };

  fetchAllData();


    
  
}, []);



useEffect(() => {
  console.log("imgUrl updated in context:", imgUrl);
 
}, [imgUrl]);

 const logoutUser=async()=>{
 try {
  let logout = await fetch("http://localhost:3000/api/auth/logout", {
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
       imgUrl,
       setImgUrls,
        logoutUser,
        shortDetails,
        setShortDetails,
        longsDetails,
        setlongsDetails,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {props.children}
    </DetailsContext.Provider>
  );
};
