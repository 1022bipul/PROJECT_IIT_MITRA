import { createContext, useState } from "react";

export const StateContext=createContext([])

export const StateProvider=({children})=>{

 const [searchList,setSearchList]=useState(null);



   return (
    <StateContext.Provider value={{searchList,setSearchList}}>
        {children}
    </StateContext.Provider>
   )
}

