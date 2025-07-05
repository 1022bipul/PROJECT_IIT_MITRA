import React, { useContext } from 'react'
import { AllUserContext } from '../../context/AllUserContext';

export const OtherUserPosts = () => {
  const {oneUser} = useContext(AllUserContext);

  const {allPosts }= oneUser || {};

console.log("one",allPosts)

    return (
        <div>
          {/* <!-- post section --> */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 max-h-max bg-gray-300 mt-1 rounded-lg p-3 gap-1.5">
          {/* <!-- image card --> */}
     
     {
      allPosts?.map((item,index )=> 
        <div className="relative bg-slate-600 h-70 sm:h-70 w-full rounded-lg overflow-hidden">
            {/* <!-- title  --> */}
            {/* <div className="absolute pt-2 flex w-full">
              <img
                src="https://images.pexels.com/photos/31812795/pexels-photo-31812795/free-photo-of-portrait-of-woman-with-pink-flowers-in-spring-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className="h-10 w-12 object-cover rounded-full"
                alt=""
              />
              <div className="h-8 flex flex-col justify-center w-full">
                <Link to="#" className="text-sm active:text-blue-600">
                  userId
                </Link>
                <p className="text-[10px]">UploadTime</p>
              </div>

              <button className="float-right px-2 cursor-pointer">
                <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
              </button>
            </div> */}
            <div className="flex items-center justify-center h-full overflow-hidden">
              <img
              key={index}  
              src={item.url}
                className="object-cover max-h-full max-w-full"
                alt={`img-${index}`} 
              />
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
      )
     }


          
        </div>
        </div>
    )
}
