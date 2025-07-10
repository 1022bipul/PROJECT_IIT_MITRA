import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FriendSuggestions } from './FriendSuggestions'
import { Notifications } from './Notifications'
// import { Settings } from './SettingsOptions'


export const RightSideBar = () => {
    
    return (
        <>
        <div className='mr-2'>
            
            
             <FriendSuggestions/>
       </div>
        </>

       
    )
}
