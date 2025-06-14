import React from 'react'

export const SocialMediaLink = ({state,handleChange}) => {
    return (
        <>
        <div className="flex flex-col gap-0.5 mt-3">
            <h1 className="text-cyan-800 font-bold text-xl">
              Personal Website/Portfolio URLs
            </h1>
            <input
            name='portfolio'
            value={state.portfolio}
            onChange={handleChange}
              className="border-b-2 outline-none  pt-1 px-3"
              type="url"
              placeholder="Personal Website/Portfolio URLs  "
            />
          </div>
        <div className="flex flex-col gap-0.5 mt-3">
            <h1 className="text-cyan-800 font-bold text-xl">LinkedIn URLs</h1>
            <input
            name='linkedin'
            value={state.linkedin}
            onChange={handleChange}
              className="outline-none border-b-2 pt-1 px-3"
              type="url"
              placeholder="Instagram URLs  "
            />
          </div>
             <div className="flex flex-col gap-0.5 mt-3">
            <h1 className="text-cyan-800 font-bold text-xl">Instagram URLs</h1>
            <input
            name='instagram'
            value={state.instagram}
            onChange={handleChange}
              className="outline-none border-b-2 pt-1 px-3"
              type="url"
              placeholder="Instagram URLs  "
            />
          </div>
          <div className="flex flex-col gap-0.5 mt-3">
            <h1 className="text-cyan-800 font-bold text-xl">YT Channel URLs</h1>
            <input
            name='youtube'
            value={state.youtube}
            onChange={handleChange}
              className="outline-none border-b-2 pt-1 px-3"
              type="url"
              placeholder="YT Channel URLs  "
            />
          </div>
          <div className="flex flex-col gap-0.5 mt-3">
            <h1 className="text-cyan-800 font-bold text-xl">Twitter/X URLs</h1>
            <input
            name='twitter'
            value={state.twitter}
            onChange={handleChange}
              className="outline-none border-b-2 pt-1 px-3"
              type="url"
              placeholder="Twitter/X URLs  "
            />
          </div>
          <div className="flex flex-col gap-0.5 mt-3">
            <h1 className="text-cyan-800 font-bold text-xl">Facebook URLs</h1>
            <input
            name='facebook' 
            value={state.facebook}
            onChange={handleChange}
              className="outline-none border-b-2 pt-1 px-3"
              type="url"
              placeholder="Facebook URLs "
            />
          </div>
          
        </>
    )
}
