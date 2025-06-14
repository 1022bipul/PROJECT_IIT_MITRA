import React, { useState } from 'react'
import {ProfilePic} from '../Profile/ProfilePic'

export const Message = () => {
    const [selectedFile,setSelectedFile]=useState(null)
    const [previewurl,SetPreviewUrl]=useState(null)
     const handleFileChange=(e)=>{
        const file =e.target.files[0]
        setSelectedFile(file);
        SetPreviewUrl(URL.createObjectURL(file))
        console.log( "video",URL.createObjectURL(file))

     }

    return (
        <div>
            this is message page
            <input type="file" accept='video/*' onChange={handleFileChange} />
        
          
           <img src={previewurl} alt="" />

        </div>
    )
}
