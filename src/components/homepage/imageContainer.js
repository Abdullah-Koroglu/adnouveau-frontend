'use client'
import Link from 'next/link'
import React from 'react'

const ImageContainer = ({ src, tags, title, color, href }) => {
  return (
    <Link href={href} className={`row-span-2 image-container bg-cover bg-center min-h-56 h-full w-full rounded-2xl flex bg-no-repeat`} style={{ backgroundImage: "url(/" + src + ")" }}>
      <div
        className={"hover:h-full h-20 lg:h-28 hover:rounded-2xl image-container-text transition-h ease-in-out duration-700 self-end w-full rounded-b-2xl mt-auto p-4 lg:p-8 font-semibold flex flex-col justify-between gap-5 overflow-hidden"}
        style={{ backgroundColor: color }}
      >
        <div className='text-zinc-600 text-nowrap text-2xl xl:text-4xl py-2 pb-8'>
          {title}
        </div>
        <div className="flex gap-1 flex-wrap self-end image-container-tags">
          {
            tags.map(tag => 
              <div 
                className={[`transition-colors duration-300 border border-zinc-500 px-2 py-1 rounded-2xl text-zinc-600 hover:bg-zinc-500  text-lg xl:text-2xl font-medium ${color === '#C9FF7E' ? 'hover:text-[#C9FF7E]' : 'hover:text-[#CED8D4]'}`
                ]}
                key={tag}
              >
                  {tag}
              </div>)
          }
        </div>
      </div>
    </Link>
  )
}

export default ImageContainer