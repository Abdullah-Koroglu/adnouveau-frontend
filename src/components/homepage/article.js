import React from 'react'
import Link from 'next/link';
import { GiPlainCircle } from "react-icons/gi";

const text = `Ad Nouveau is an Istanbul based creative advertising agency. Developing Nouveau approach to Ads with the help of Ai and storytelling.`
const title = `About Us`

function createMarkup() {
  return {__html: `Ad Nouveau is an Istanbul based creative advertising agency. Developing <span class='bg-lime-400 px-2 py-1 rounded-2xl text-zinc-500'>Nouveau</span> approach to <span class='bg-lime-400 px-2 py-1 rounded-2xl text-zinc-500'>Ads</span> with the help of Ai and storytelling.`};
}

export default function article() {
  return (
    <div className='text-white w-1/3 rounded-md bg-zinc-500 p-5 justify'>
      <div className='flex w-full justify-between'>
        <h2 className='text-sm font-semibold'>{title}</h2>
        {/* <p>x</p> */}
        <GiPlainCircle />
      </div>
      <div>
        <p dangerouslySetInnerHTML={createMarkup()} className='text-6xl leading-relaxed'>
        </p>
        {/* <p className='text-6xl'>
          {text}
        </p> */}
      </div>

      <div className='flex w-full justify-end alig'>
        <Link className='border-white border px-3 py-2 rounded-md text-lg font-light' href="/article">Read Article</Link>
      </div>
    </div>
  )
}
