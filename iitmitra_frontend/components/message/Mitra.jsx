import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const Mitra = () => {
    return (
       <>
       <div className='bg-gray-300 m-1  rounded-lg min-h-full  '>
      <h1 className='py-1 px-5 text-xl font-semibold'>Your Circle</h1>
      <hr/>
     <div className=' flex gap-5'>
      <Link to='/mitra' className='px-1 py-1 ml-4  text-lg hover:border-b-3  active:border-blue-600'>Mitras</Link>  
      <Link to='/mitra/connection' className='py-1 mx-2 text-lg hover:border-b-3 active:border-blue-600'>Connection</Link>  
     </div>
     <hr/>
      <div className='ml-4'>
        <Outlet/>
      </div>
       </div>
       
       </>
    )
}
