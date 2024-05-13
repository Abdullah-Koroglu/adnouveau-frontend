'use client'
import React, { useState, useRef } from 'react'
import Link from '@/components/TransitionLink';

const ImageContainer = ({ src, tags, title, color, href, id }) => {
  const [active, setActive] = useState([])
  const intervalRef = useRef(null)

  let counter = 0;
  const handleActivate = () => {
    intervalRef.current = setInterval(() => {
      if (counter >= tags.length + 1) {
        clearInterval(intervalRef.current);
        intervalRef.current = null
        counter = 0
      } else {
        setActive((prevState) => ([...prevState, counter + 10]))
        counter++;
      }
    }, 100);
  }

  return (
    <Link
      id={id}
      onTouchStart={handleActivate}
      onMouseEnter={handleActivate}
      onMouseLeave={() => {setActive([]); clearInterval(intervalRef.current);}}
      onTouchEnd={() => {setActive([]); clearInterval(intervalRef.current);}}
      href={href}
      className={`${active.length > 1  ? 'container-hovered' : ''} row-span-2 image-container bg-cover bg-center min-h-56 h-full w-full rounded-2xl flex bg-no-repeat`}
      style={{ backgroundImage: "url(/" + src + ")" }}>
      <div
        className={"h-20 lg:h-28 md:hover:rounded-2xl image-container-text transition-h ease-in-out duration-700 self-end w-full rounded-b-2xl mt-auto p-4 lg:p-8 font-semibold flex flex-col justify-between gap-5 overflow-hidden"}
        style={{ backgroundColor: color }}
      >
        <div className='text-zinc-600 text-nowrap font-medium text-3xl xl:text-4xl 2xl:text-5xl py-2 pb-8'>
          {title}
        </div>
        <div className="flex gap-2 flex-wrap self-end image-container-tags">
          {
            tags.map((tag, index) =>
              <div
                className={[`${active.length - 1 >= index ? 'container-hovered' : ''} image-container-tag prevent-select transition-all ease-out duration-500 border border-zinc-500 px-2 py-1 rounded-2xl text-zinc-600 hover:bg-zinc-500 text-sm md:text-lg xl:text-2xl font-medium ${color === '#C9FF7E' ? 'hover:text-[#C9FF7E]' : 'hover:text-[#CED8D4]'}`
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