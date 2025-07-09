import { createContext, useState } from "react";

export const StateContext=createContext([])

export const StateProvider=({children})=>{

 const [searchList,setSearchList]=useState(null);
 const [userPostCount,setUserPostCount]=useState(0);




   return (
    <StateContext.Provider value={{searchList,setSearchList,userPostCount,setUserPostCount}}>
        {children}
    </StateContext.Provider>
   )
}

