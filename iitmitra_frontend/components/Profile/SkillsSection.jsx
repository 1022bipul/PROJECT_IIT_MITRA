import React from 'react'

export const SkillsSection = ({state,handleChange}) => {
    return (
        <>
            <div className="flex flex-col gap-0.5 mt-3">
            <h1 className="text-cyan-800 font-bold text-xl">Skills</h1>
            <textarea
            name='skills'
            value={state.skills}
            onChange={handleChange}
              className="outline-none bg-gray-200 py-1 px-3 rounded-md"
              rows="5"
              cols="10"
              placeholder="HTML,JAVA,C++,JavaScript........ "
            ></textarea>
          </div>
        </>
    )
}
