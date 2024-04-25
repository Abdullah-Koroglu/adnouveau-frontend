import React from 'react'
import Link from 'next/link';
import { GiPlainCircle } from "react-icons/gi";

const title = `About Us`

function createMarkup() {
  return { __html: `Ad Nouveau is an Istanbul based creative advertising agency. Developing <span class='bg-lime-400 px-2 py-0.5 rounded-2xl text-zinc-500'>Nouveau</span> approach to <span class='bg-lime-400 px-2 py-0.5 rounded-2xl text-zinc-500'>Ads</span> with the help of Ai and storytelling.` };
}

const article = () => {
  return (
    <div className='h-full w-full row-span-3 text-white rounded-md bg-zinc-500 p-5 justify'>
      <div className='flex w-full justify-between'>
        <h2 className='text-sm font-semibold'>{title}</h2>
        {/* <p>x</p> */}
        <GiPlainCircle />
      </div>
      <div>
        <span style={{'--n': 271}} dangerouslySetInnerHTML={createMarkup()} className='text-5xl leading-snug type'>
        </span>
      </div>

      <div className='flex w-full justify-end mt-10'>
        <Link className='border-white border px-3 py-2 rounded-md text-lg font-light' href="/article">Read Article</Link>
      </div>
    </div>
  )
}

export default article