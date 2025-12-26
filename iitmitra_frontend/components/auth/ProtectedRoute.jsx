import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../userInterface/LoadingSpinner";
const URI=import.meta.env.VITE_APP_URL

export const ProtectedRoute = ({ children }) => {
  const [token,setToken]=useState(null )
  // console.log(token)
  useEffect(()=>{
    
    const fetchingToken=async ()=>{
      try{  const res=await fetch(`${URI}/auth/token`,{method:'Get',credentials:'include'})
     
      // console.log("tokeeeen",await res.json())
      const {jwtToken}=await res.json()
  //  console.log("Tokaan",jwtToken)
       if (jwtToken) {
          setToken(true);
        } else {
          setToken(false);
        }
      } catch (error) {
        console.error("Token fetch error:", error);
        setToken(false);
      }
    };
   
    fetchingToken()
  
  },[])
  //  console.log("Tokausen",token)
 
  
  if (token === null) {
    // Still loading
    return <LoadingSpinner/>
  }

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;


  // Token mila, access allow
 
};

