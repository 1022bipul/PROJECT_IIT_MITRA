import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FriendSuggestions } from './FriendSuggestions'
import { Notifications } from './Notifications'
// import { Settings } from './SettingsOptions'


export const RightSideBar = () => {
     const location=useLocation()
     const isNotificationRoute = location.pathname === "/notification";
    return (
        <>
        <div className='mr-2'>
            
           {isNotificationRoute && <Notifications />}
            
             <FriendSuggestions/>
       </div>
        </>

       
    )
}
