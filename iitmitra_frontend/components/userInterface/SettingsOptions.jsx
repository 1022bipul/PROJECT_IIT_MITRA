import React from 'react'
import { Link } from 'react-router-dom'
import { EditProfile } from '../Profile/EditProfile'
import { ChangePassword } from '../password&security/ChangePassword'

export const SettingsOptions = ({onOptionClick}) => {
 return (
    <>
    <button onClick={()=>{onOptionClick()}}>Profile    </button>
    <button  onClick={()=>{onOptionClick("changepassword")}}> change password</button>
    
    </>
 )


}
