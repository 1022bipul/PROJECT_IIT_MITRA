import React, { useRef, useState } from "react";
import { Form,  useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const URI=import.meta.env.VITE_APP_URL


export const CreatePost = ({ togglecreatePostBtn, handleToggleCreatePost }) => {
 const [previewName,setPreviewName]=useState(null)
 const [upload,setUpload]=useState(false)
 const navigate=useNavigate()

 const handleOnClickDiscard=()=>{
  setPreviewName("")
 }
 const [postData, setPostData] = useState({
    image: "",
    discription: "",

  });
 const chooseImg=useRef();

 const clickChooseImg =()=>{
  chooseImg.current.click();

 }
 
 

  const handleChange =(e) => {
    const { name, value, files } = e.target;
     
    


    if (files && files.length > 0) {
      // File input
      setPostData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    

    } else {
      // Textarea input
      setPostData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    
    setPreviewName(URL.createObjectURL(files[0]));
   

  };
 

  const handleSubmitPost = async (e) => {

    e.preventDefault();
    console.log(postData);
    const { image, discription } = postData;


   const formData = new FormData();
formData.append("image", image);
formData.append("discription", discription);
 setUpload(true)

const postRes = await fetch(`${URI}/upload/image`, {
  method: "POST",
  body: formData,
  credentials: "include",
});

    const postStatus =await postRes.json();
    if(postRes.ok){ 
     setUpload(false) 
    toast.success(postStatus.message)
    setPostData({
    image:"",
    discription: "",

  })}else{

    setUpload(false) 
    toast.error(postStatus.error)
    navigate("/editprofile")
  }

  };
  if(upload){
    return <div className="absolute bg-gray-500 z-10 justify-self-center p-10 rounded-2xl  "> Image is uploading...</div>
  }

  return (
    <>
      <div
        ref={togglecreatePostBtn}
        className="absolute z-10 left-[30vw] top-[15vh]  min-w-[40vw] mx-auto bg-gray-500 rounded-lg shadow-lg p-6 "
        style={{ display: "none" }}
      >
        {/* <!--Create a post --> */}
       {!previewName&& <div>  <h1 className="text-[#f7e1d7] font-semibold mb-4 text-2xl">Upload your files</h1>
        <h3 className="text-xl text-[#f7e1d7] font-semibold mb-4">
          What would you like to share ?
        </h3>

        <div className="flex space-x-2 mb-4">
          <button className="px-4 py-2  bg-gray-50 rounded hover:bg-blue-950 active:border-b-4 focus:border-b-5 border-blue-800 p-1">
            Text
          </button>
          <button className="px-4 py-2  bg-gray-50 rounded hover:bg-blue-950 active:border-b-4 focus:border-b-5 border-blue-800 p-1">
            Image
          </button>
          <button className="px-4 py-2  bg-gray-50 rounded hover:bg-blue-950 active:border-b-4 focus:border-b-5 border-blue-800 p-1">
            Video
          </button>
        </div></div>}

        <Form
          onSubmit={handleSubmitPost}
          action="/profile"
          method="post"
          encType="multipart/form-data"
        >
          <h1>{previewName}</h1>
          <div className="p-1 bg-blue-500 rounded text-center">
            <input
            ref={chooseImg}
            className="hidden"
              type="file"
              name="image"
              accept='image/*'
              filename={postData.image}
              onChange={handleChange}
            />
          
          {!previewName ? <button onClick={clickChooseImg} type="button" className="text-lg w-full">Share your Pic</button>:(  <div className="w-full flex justify-center">
          <div className="">
            <img className=" max-h-75 max-w-150  object-contain rounded-xl" src={previewName} alt="" />
          </div>
          </div>)}

          </div>
        

          {/* <!-- Text Input Section --> */}
          <div id="textSection" className="hidden mb-4">
            <textarea
              placeholder="Enter Text"
              className="w-full h-fit p-2 bg-zinc-700 rounded text-white mb-2"
            ></textarea>
            <button className="bg-blue-400 rounded-md p-2">Save</button>
          </div>

          {/* <!-- Image Upload Section --> */}
          <div id="imageSection" className="hidden mb-4">
            <label className="cursor-pointer bg-zinc-700 rounded text-white p-2 hover:bg-blue-950 inline-block">
              <i className="fa-solid fa-image"></i> Upload Image
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
            />
            <img
              id="imagePreview"
              className="hidden w-32 h-32 mt-2 object-cover rounded border border-gray-500"
            />
          </div>

          {/* <!-- Video Upload Section --> */}
          <div id="videoSection" className="hidden mb-4">
            <label className="cursor-pointer bg-zinc-700 rounded text-white p-2 hover:bg-blue-950 inline-block">
              <i className="fa-solid fa-video "></i> Upload Video
            </label>
            <input
              type="file"
              id="videoUpload"
              accept="video/*"
              className="hidden"
            />
            <video
              id="videoPreview"
              controls
              className="hidden w-64 mt-2 rounded border border-gray-500"
            ></video>
          </div>

          {/* <!-- Caption --> */}
          <div className="mt-5">
            <textarea
              type="text"
              name="discription"
              value={postData.discription}
              onChange={handleChange}
              placeholder="Discription"
              className="w-full h-20 p-2 bg-gray-50 rounded text-black mb-4"
            ></textarea>
          </div>

          {/* <!-- Buttons --> */}
          <div className="flex justify-end items-center gap-4">
            <div>
              <button
                type="reset"
                onClick={()=>{ 
                  handleToggleCreatePost()
                  handleOnClickDiscard()}}
                className="px-4 py-2 bg-orange-200 rounded text-black hover:bg-blue-800"
              >
                Discard
              </button>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-400 rounded text-white hover:bg-blue-800"
            >
              Share
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};
