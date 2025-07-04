import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const ProtectedRoute = ({ children }) => {
  const [token,setToken]=useState([])
  console.log(token)
  useEffect(()=>{
    
    const fetchingToken=async ()=>{
       const res=await fetch('http://localhost:3000/api/auth/token',{method:'Get',credentials:'include'})
     
      // console.log("tokeeeen",await res.json())
      const tok=await res.json()
       setToken(tok) 
    }
   
    fetchingToken()
  
  },[])
  
   console.log("Tokaan",token)
  if (!token) {
    // Token nahi mila, login page pe bhej do
    return <Navigate to="/login" />;
  }

  // Token mila, access allow
  return children;
};

