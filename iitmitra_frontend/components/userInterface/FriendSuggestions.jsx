import React, { useContext, useState } from 'react'
import { ProfilePic } from '../Profile/ProfilePic'
import { FrndSuggetionCard } from './FrndSuggetionCard'
import { AllUserContext } from '../../context/AllUserContext'
import { LoadingSpinner } from './LoadingSpinner'

export const FriendSuggestions = () => {
   const{loading,AllUser }= useContext(AllUserContext);
//    const{name}=AllUser;
//    console.log("suggestion")
//   console.log(AllUser)
 if(loading){
    return <LoadingSpinner/>
 }

    return (
        <>
           <div className='bg-gray-300 flex flex-col max-h-max w-full rounded-lg mt-1'> 
                  <div className="border-b w-full flex flex-col justify-center items-center text-center ">Suggested for you</div>
              {AllUser?.map((item) =>(
                  
                  <FrndSuggetionCard item={item} loading={loading}/>))}
                
                  </div>  
        </>
    )
}


