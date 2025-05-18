import React from 'react'
import { EditProfile } from '../Profile/EditProfile'
import { ChangePassword } from '../password&security/ChangePassword'

export const ContentAera = ({ActivePage}) => {
    
 switch (ActivePage){
    case "profile":
        return <EditProfile/>
    case "changepassword":
        return <ChangePassword/>
 }

}
