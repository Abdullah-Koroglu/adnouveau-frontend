'use client'
import Link from 'next/link'
import React from 'react'

const ImageContainer = ({ src, tags, title, color, href }) => {
  return (
    <Link href={href} className={`row-span-2 image-container bg-cover bg-center min-h-56 h-full w-full rounded-md flex bg-no-repeat`} style={{ backgroundImage: "url(/" + src + ")" }}>
      <div
        className={"hover:h-full h-20 hover:rounded-md image-container-text transition-h ease-in-out duration-200 self-end w-full rounded-b-md mt-auto p-3 font-semibold flex flex-col justify-between gap-5 overflow-hidden"}
        style={{ backgroundColor: color }}
      >
        <div className='text-zinc-600 text-4xl pt-3'>
          {title}
        </div>
        <div className="flex gap-1 flex-wrap self-end image-container-tags">
          {
            tags.map(tag => <div className="border border-zinc-500 px-2 py-1 rounded-md text-zinc-600 text-2xl font-medium" key={tag}>{tag}</div>)
          }
        </div>
      </div>
    </Link>
  )
}

export default ImageContainer