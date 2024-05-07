import React from 'react'
import Link from '@/components/TransitionLink';
import { GiPlainCircle } from "react-icons/gi";

const title = `About Us`


const Article = () => {
  return (
    <div id='page-element-1' className='h-full w-full row-span-3 text-white rounded-2xl bg-zinc-500 p-5 flex flex-col justify-between px-8'>
      <div className='flex w-full justify-between'>
        <h2 className='text-sm font-medium'>{title}</h2>
        {/* <p>x</p> */}
        <GiPlainCircle />
      </div>
      <div>
        {/* <span style={{'--n': 271}} dangerouslySetInnerHTML={createMarkup()} className='text-2xl md:text-3xl xl:text-5xl leading-snug type'>
        </span> */}
        <span style={{'--n': 271}} className='font-medium text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl type'>
        Ad Nouveau is an Istanbul based creative advertising agency. Developing <span className='text-lime-400 green-nouveau'>Nouveau</span> approach to <span className='text-lime-400 green-ads'>Ads</span> with the help of Ai and storytelling.
        </span>
      </div>

      <div className='flex w-full justify-end self-end mt-10 mb-4'>
        <Link className='border-white hover:bg-white hover:text-zinc-500 transition-all ease-out duration-500 border  px-2 py-1 rounded-2xl  text-sm md:text-lg xl:text-2xl font-medium' href="/article">Read Article</Link>
      </div>
    </div>
  )
}

export default Article