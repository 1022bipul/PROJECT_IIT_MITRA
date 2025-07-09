import React, { useState } from 'react'
import { Form, Link } from "react-router-dom";




export const Comments = () => {
  const [like,setLike]=useState(false)
 const [comment,setComment]=useState({
  comment:""
 })

  const handleComments=(e)=>{
    const Value=e.target.value
    const name=e.target.name
   setComment({[name]:Value})
  }

  // console.log(comment)

const handleSubmit=async()=>{
   try {
    const res=await fetch('https://project-iit-mitra.onrender.com/api/comment/user',{
     method:'Post',
     body:JSON.stringify(comment),
     headers:{
         "Content-Type": "application/json",
 
     },credentials:"include"
 
    })
   const userComment=await res.json();
    if(res.ok){
      setComment({comment:''})
      alert(userComment.message)
    }
 
   } catch (error) {
    console.log(error)
   }


}


    return (
        <>
           <Form onSubmit={handleSubmit} className="bg-gray-300 m-1 p-2 rounded-md shadow-md lg:text-right">
              <h2 className="text-lg font-bold">Comments</h2>
              <textarea
              name='comment'
              onChange={handleComments}
              value={comment.comment}
                className="w-full p-2 bg-gray-50 rounded-md"
                placeholder="Write Link comment..."
              ></textarea>
              <button type='submit' className="mt-2 px-2 py-1 bg-blue-500 text-white rounded-md">
                Comment
              </button>
            </Form>  
        </>
    )
}
