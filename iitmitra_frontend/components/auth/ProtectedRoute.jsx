import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
const URI=import.meta.env.VITE_APP_URL

export const ProtectedRoute = ({ children }) => {
  const [token,setToken]=useState([])
  // console.log(token)
  useEffect(()=>{
    
    const fetchingToken=async ()=>{
       const res=await fetch(`${URI}/auth/token`,{method:'Get',credentials:'include'})
     
      // console.log("tokeeeen",await res.json())
      const {jwtToken}=await res.json()
  //  console.log("Tokaan",jwtToken)

       setToken(jwtToken) 
    }
   
    fetchingToken()
  
  },[])
  //  console.log("Tokausen",token)
 
  
  if (!token) {
    // Token nahi mila, login page pe bhej do
    return <Navigate to="/login" />;
  }


  // Token mila, access allow
  return children;
};

