import React from 'react'

export const LoadingSpinner = () => {
    return (
       <div className="w-full flex justify-center">
        <div className="inline-block m-5 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      </div>
    )
}
