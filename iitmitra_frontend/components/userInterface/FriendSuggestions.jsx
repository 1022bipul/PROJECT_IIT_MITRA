import React from 'react'
import { ProfilePic } from '../Profile/ProfilePic'
import { FrndSuggetionCard } from './frndSuggetionCard'

export const FriendSuggestions = () => {
    return (
        <>
           <div className='bg-gray-300 flex flex-col max-h-max w-full rounded-lg mt-1'> 
                  <div className="border-b w-full flex flex-col justify-center items-center text-center ">Suggested for you</div>
                  <FrndSuggetionCard/>
                  <FrndSuggetionCard/>
                  <FrndSuggetionCard/>
                  <FrndSuggetionCard/>
                  <FrndSuggetionCard/>

                  </div>  
        </>
    )
}


