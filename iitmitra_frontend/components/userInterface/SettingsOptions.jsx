import { Link } from 'react-router-dom'
import { useContext } from "react";
import { DetailsContext } from '../../context/DetailsContext';
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";


export const SettingsOptions = ({settingbtn})=> {
 const {logoutUser} = useContext(DetailsContext)

 return (
    <>
   <div ref={settingbtn} className="absolute menu-container bottom-6 bg-gray-200 p-4 text-black rounded-xl" style={{display:"none"}} id="dropdownMenu">
  <div className="dropdown flex flex-col text-lg space-y-2" >

    <Link className="hover:bg-gray-300 rounded-md flex justify-Start items-center " to="/editprofile"><span className='pl-3 pr-1.5'><FaUserEdit className='size-6' /></span>Edit Profile</Link>
    <Link className="hover:bg-gray-300 rounded-md flex justify-start items-center " to="/changepassword"><span className='px-2'><RiLockPasswordLine className='size-6' /> </span> Change Password</Link>
    <Link className="hover:bg-gray-300 rounded-md flex justify-start items-center " to="/#"><span className='px-2'><FcAbout className='size-6' /></span>About</Link>
    <Link className="hover:bg-gray-300 rounded-md flex justify-start items-center " to="/#"><span className='px-2'><IoIosHelpCircleOutline className='size-6' /></span>Help</Link>
    <Link  onClick={()=>{logoutUser()}} className="hover:bg-gray-300 rounded-md  flex justify-start items-center " to="/logout"><span className='px-2'><CiLogout className='size-6' /></span>Log Out</Link>
  </div>
</div>

    </>
 )


}
