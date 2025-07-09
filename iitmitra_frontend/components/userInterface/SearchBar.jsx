import React, { useContext, useState } from 'react'
import { IoSearch } from 'react-icons/io5';
import { SearchList } from './SearchList';
import { StateContext } from '../../context/StateContext';


export const SearchBar = () => {
  const {setSearchList}=useContext(StateContext);
    // const[user,setUser]=useState([])
    const handleOnChange=async(e)=>{
        const value=e.target.value

        if (!value) {
      setSearchList(null);
      return;
    }
//   console.log(value)
  try {
    const res=await fetch(`https://project-iit-mitra.onrender.com/api/user/search/${value}`,{
      method:"Get",
      credentials:"include"
    })
  if(res.ok){
    const result=await res.json()
    setSearchList(result)
  }

  } catch (error) {
    console.log(error)
  }

    }
  // console.log("user",searchList)

    return (
       <div className="bg-gray-200 text-black border-1 rounded-md ml-2 max-w-min flex justify-start items-center ">
        <input onChange={handleOnChange} type="text" placeholder="Search..." className= "w-50 sm:w-48 md:w-55 min-h-7 outline-none justify-center items-center my-0.5 mx-1.5  rounded-l-md  "/>

        <button type="submit" className="px-1 mr-1 "><span ><IoSearch className='size-5'/></span></button>
        {/* {user?.map(item=><SearchList item={item}/>)} */}
        </div>
    )
}
