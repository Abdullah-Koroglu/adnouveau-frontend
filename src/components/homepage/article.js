import React from 'react'
import Link from '@/components/TransitionLink';
import { GiPlainCircle } from "react-icons/gi";

const title = `About Us`

function createMarkup() {
  return { __html: `Ad Nouveau is an Istanbul based creative advertising agency. Developing <span class='bg-lime-400 px-2 py-0.5 rounded-2xl text-zinc-500'>Nouveau</span> approach to <span class='bg-lime-400 px-2 py-0.5 rounded-2xl text-zinc-500'>Ads</span> with the help of Ai and storytelling.` };
}

const Article = () => {
  return (
    <div id='page-element-1' className='h-full w-full row-span-3 text-white rounded-2xl bg-zinc-500 p-5 flex flex-col justify-between'>
      <div className='flex w-full justify-between'>
        <h2 className='text-sm font-semibold'>{title}</h2>
        {/* <p>x</p> */}
        <GiPlainCircle />
      </div>
      <div>
        {/* <span style={{'--n': 271}} dangerouslySetInnerHTML={createMarkup()} className='text-2xl md:text-3xl xl:text-5xl leading-snug type'>
        </span> */}
        <span style={{'--n': 271}} className='font-medium text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl type'>
        Ad Nouveau is an Istanbul based creative advertising agency. Developing <span className='text-lime-400'>Nouveau</span> approach to <span className='text-lime-400'>Ads</span> with the help of Ai and storytelling.
        </span>
      </div>

      <div className='flex w-full justify-end self-end mt-10'>
        <Link className='border-white border px-3 py-2 rounded-2xl text-lg font-normal transition-colors duration-300 hover:bg-white hover:text-zinc-500' href="/article">Read Article</Link>
      </div>
    </div>
  )
}

export default Article