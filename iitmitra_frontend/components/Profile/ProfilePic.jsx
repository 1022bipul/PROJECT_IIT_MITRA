import React from 'react'
import { Link } from 'react-router-dom'

export const ProfilePic = () => {
    return (
        <>
            <Link to="/profile"
              ><img
                class="h-10 w-10 object-cover rounded-full"
                src="https://images.pexels.com/photos/31812795/pexels-photo-31812795/free-photo-of-portrait-of-woman-with-pink-flowers-in-spring-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
            /></Link>
        </>
    )
}
