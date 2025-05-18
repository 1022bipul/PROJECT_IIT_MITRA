import React from 'react'

export const SocialMediaLink = () => {
    return (
        <>
             <div className="flex flex-col gap-0.5 mt-3">
            <h1 className="text-cyan-800 font-bold text-xl">Instagram URLs</h1>
            <input
              className="outline-none border-b-2 pt-1 px-3"
              type="url"
              placeholder="Instagram URLs  "
            />
          </div>
          <div className="flex flex-col gap-0.5 mt-3">
            <h1 className="text-cyan-800 font-bold text-xl">YT Channel URLs</h1>
            <input
              className="outline-none border-b-2 pt-1 px-3"
              type="url"
              placeholder="YT Channel URLs  "
            />
          </div>
          <div className="flex flex-col gap-0.5 mt-3">
            <h1 className="text-cyan-800 font-bold text-xl">Twitter/X URLs</h1>
            <input
              className="outline-none border-b-2 pt-1 px-3"
              type="url"
              placeholder="Twitter/X URLs  "
            />
          </div>
          <div className="flex flex-col gap-0.5 mt-3">
            <h1 className="text-cyan-800 font-bold text-xl">Facebook URLs</h1>
            <input
              className="outline-none border-b-2 pt-1 px-3"
              type="url"
              placeholder="Facebook URLs "
            />
          </div>
          <div className="flex flex-col gap-0.5 mt-3">
            <h1 className="text-cyan-800 font-bold text-xl">
              Personal Website/Portfolio URLs
            </h1>
            <input
              className="border-b-2   pt-1 px-3"
              type="url"
              placeholder="Personal Website/Portfolio URLs  "
            />
          </div>
        </>
    )
}
