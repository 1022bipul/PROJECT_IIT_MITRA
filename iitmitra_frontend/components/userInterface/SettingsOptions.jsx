import { Link } from 'react-router-dom'
import { useContext } from "react";
import { DetailsContext } from '../../context/DetailsContext';


export const SettingsOptions = ({settingbtn})=> {
 const {logoutUser} = useContext(DetailsContext)

 return (
    <>
   <div ref={settingbtn} className="absolute menu-container bottom-6 bg-gray-200 p-4 text-black rounded-xl" style={{display:"none"}} id="dropdownMenu">
  <div className="dropdown flex flex-col text-lg" >

    <Link className="hover:bg-gray-300 rounded-md px-1" to="/editprofile">Edit Profile</Link>
    <Link className="hover:bg-gray-300 rounded-md px-1" to="/changepassword">Change Password</Link>
    <Link className="hover:bg-gray-300 rounded-md px-1" href="#">About</Link>
    <Link className="hover:bg-gray-300 rounded-md px-1" href="#">Help</Link>
    <Link  onClick={()=>{logoutUser()}} className="hover:bg-gray-300 rounded-md  px-1" to="/logout">Log Out</Link>
  </div>
</div>

    </>
 )


}
