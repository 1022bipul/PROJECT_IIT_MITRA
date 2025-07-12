import React, { useContext, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { DetailsContext } from "../../context/DetailsContext";
import { toast } from "react-toastify";

const URI=import.meta.env.VITE_APP_URL

export const Posts = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const { imgUrl } = useContext(DetailsContext);

  const togglePostMenu = (index) => {
    if (openMenuIndex === index) {
      setOpenMenuIndex(null);
    } else {
      setOpenMenuIndex(index); 
    }
  };
//deleting post

  const deletePost=async(id)=>{
    try {
      console.log(id)
      const res=await fetch(`${URI}/post/delete/${id}`,{method:'DELETE',credentials:'include'})
      
       if(res.ok){
        const deleted =await res.json()
        toast.success(deleted.message)
       }

    } catch (error) {
      console.log(error)
    }

        
  }




  return (
    <div>
      {/* <!-- post section --> */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 max-h-max bg-gray-300 mt-1 rounded-lg p-3 gap-1.5">
        {/* <!-- image card --> */}

        {imgUrl.map((item, index) => (
          <div className="relative bg-slate-600 h-70 sm:h-70 w-full rounded-lg overflow-hidden">
            <button
              onClick={()=>togglePostMenu(index)}
              className="absolute z-10 right-2 top-2 text-xl"
            >
              <BsThreeDotsVertical />
            </button>

              {openMenuIndex === index && (
              <div className="absolute bg-gray-300 p-2 right-4 top-7 rounded z-10">
                <button onClick={()=>deletePost(item._id)} className="text-red-700 active:text-blue-500">Delete</button>
              </div>
            )}

            <div className="flex items-center justify-center h-full overflow-hidden">
              {item.media === "image" ? (
                <img
                  src={item.url}
                  alt="Post"
                  className="image-post object-fill relative w-full sm:w-fit md:w-md lg:w-md rounded-xl"
                />
              ) : item.media === "video" ? (
                <video
                  src={item.url}
                  controls
                  autoPlay
                  loop
                  className="image-post object-fill relative w-full sm:w-fit md:w-md lg:w-md rounded-xl"
                />
              ) : null}
            </div>
            {/* <div className="absolute flex -translate-y-7 px-2">
              <div className="">
                <i className="fa-solid fa-heart fa-sm"></i>
                <span className="px-1 text-sm">123</span>
              </div>
              <div>
                <i className="fa-solid fa-comment fa-sm"></i>
                <span className="px-1 text-sm">456</span>
              </div>
              <div>
                <i className="fa-solid fa-bookmark fa-sm"></i>
                <span className="px-1 text-sm">789</span>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
