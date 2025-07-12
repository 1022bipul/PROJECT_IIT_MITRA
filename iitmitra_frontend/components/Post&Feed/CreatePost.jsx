import React, { useRef, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoadingSpinner } from "../userInterface/LoadingSpinner";

const URI = import.meta.env.VITE_APP_URL;

export const CreatePost = ({ togglecreatePostBtn, handleToggleCreatePost }) => {
  const [selectImage, setSelectImage] = useState(true);
  // const [selectText, setSelectText] = useState(false);
  const [selectVideo, setSelectVideo] = useState(false);

  // const toggleImage=useRef()
  // const toggleVideo=useRef()
  // const toggleText=useRef()

  const [previewName, setPreviewName] = useState(null);
  const [upload, setUpload] = useState(false);
  const navigate = useNavigate();

  const handleOnClickDiscard = () => {
    setPreviewName("");
  };
  const [postData, setPostData] = useState({
   media:"",
    discription: "",
  });
  const chooseImg = useRef();
  const chooseVideo = useRef();

  const clickChooseImg = () => {
    chooseImg.current.click();
  };
  const clickChooseVideo = () => {
    chooseVideo.current.click();
  };

  const handleChange = (e) => {
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
    const { media, discription } = postData;
    
    const formData = new FormData();
    formData.append("media", media);
   
    formData.append("discription", discription);
    setUpload(true);
    console.log(formData)

    const postRes = await fetch(`${URI}/upload/media`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    const postStatus = await postRes.json();
    if (postRes.ok) {
      setUpload(false);
      toast.success(postStatus.message);
      setPostData({
        media: "",
        discription: "",
      });
    } else {
      setUpload(false);
      toast.error(postStatus.error);
      navigate("/editprofile");
    }
  };
  if (upload) {
    return (
      <div className="absolute bg-gray-500 z-10 justify-self-center p-10 rounded-2xl  ">
    
       <h1>Uploading</h1>   
        <LoadingSpinner/>
      </div>
    );
  }

  return (
    <>
      <div
        ref={togglecreatePostBtn}
        className="absolute z-10 left-[30vw] top-[15vh]  min-w-[40vw] mx-auto bg-gray-500 rounded-lg shadow-lg p-6 "
        style={{ display: "none" }}
      >
        {/* <!--Create a post --> */}
        {!previewName && (
          <div>
            {" "}
            <h1 className="text-[#f7e1d7] font-semibold mb-4 text-2xl">
              Upload your files
            </h1>
            <h3 className="text-xl text-[#f7e1d7] font-semibold mb-4">
              What would you like to share ?
            </h3>
            <div className="flex space-x-2 mb-4">
              {/* <button  onClick={
                  () =>{
                    setSelectText((prev) => !prev)
                    {selectVideo && setSelectVideo((prev) => !prev)}
                    {selectImage && setSelectImage((prev) => !prev)}

                  } 

                } className="px-4 py-2  bg-gray-50 rounded hover:bg-blue-800 active:bg-blue-500 p-1">
                Text
              </button> */}
              <button
                 onClick={
                  () =>{
                    setSelectImage((prev) => !prev)
                    {selectVideo && setSelectVideo((prev) => !prev)}
                    // {selectText && setSelectText((prev) => !prev)}
                  
                  } 

                }
                className="px-4 py-2  bg-gray-50 rounded hover:bg-blue-800 active:bg-blue-500 p-1"
              >
                Image
              </button>
              <button
                onClick={
                  () =>{
                    setSelectVideo((prev) => !prev)
                    {selectImage && setSelectImage((prev) => !prev)}
                    // {selectText && setSelectText((prev) => !prev)}

                  } 

                }
                className="px-4 py-2  bg-gray-50 rounded hover:bg-blue-800 active:bg-blue-500 p-1"
              >
                Video
              </button>
            </div>
          </div>
        )}

        <Form
          onSubmit={handleSubmitPost}
          action="/profile"
          method="post"
          encType="multipart/form-data"
        >
          {selectImage && (
            <div>
              <div className="p-1 rounded text-center">
                <input
                  ref={chooseImg}
                  className="hidden"
                  type="file"
                  name="media"
                  accept="image/*"
                  filename={postData.media}
                  onChange={handleChange}
                />

                {!previewName ? (
                  <button
                    onClick={clickChooseImg}
                    type="button"
                     className="text-lg w-full cursor-pointer bg-zinc-700 rounded text-white p-2 hover:bg-blue-950"

                  >
                    Choose Image
                  </button>
                ) : (
                  <div className="w-full flex justify-center">
                    <div className="">
                      <img
                        className=" max-h-75 max-w-150  object-contain rounded-xl"
                        src={previewName}
                        alt=""
                      />
                    </div>
                  </div>
                )}
              </div>
               {/* <!-- Caption --> */}
          <div className="mt-5">
            <textarea
              type="text"
              name="discription"
              value={postData.discription}
              onChange={handleChange}
              placeholder="Discription"
              className="w-full h-20 p-2  outline-none bg-gray-50 rounded text-black mb-4"
            ></textarea>
          </div>
            </div>
            
            
          )}

          {/* <!-- Text Input Section --> */}
          {/* {selectText &&<div id="textSection" className=" mb-4">
            <textarea
              placeholder="Enter Text"
              className="w-full min-h-30 p-2 outline-none bg-zinc-700 rounded text-white mb-2"
            ></textarea>
           
          </div>} */}


          {/* <!-- Video Upload Section --> */}
          {selectVideo && (
            <div id="videoSection" className=" mb-4">
              
              <input
              ref={chooseVideo}
                type="file"
                name="media"
                id="videoUpload"
                accept="video/*"
                className="hidden"
                 filename={postData.media}
                  onChange={handleChange}
              />
              <button
                
                    onClick={clickChooseVideo}
                    type="button"
                    className="text-lg w-full cursor-pointer bg-zinc-700 rounded text-white p-2 hover:bg-blue-950"
                  >
                    
                <i className="fa-solid fa-video "></i> Upload Video
             
              </button>
               {/* <!-- Caption --> */}
          <div className="mt-5">
            <textarea
              type="text"
              name="discription"
              value={postData.discription}
              onChange={handleChange}
              placeholder="Discription"
              className="w-full h-20 p-2 outline-none bg-gray-50 rounded text-black mb-4"
            ></textarea>
          </div>
            </div>
          )}

         

          {/* <!-- Buttons --> */}
          <div className="flex justify-end items-center gap-4">
            <div>
              <button
                type="reset"
                onClick={() => {
                  handleToggleCreatePost();
                  handleOnClickDiscard();
                }}
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
