import Image from 'next/image'
import React from 'react'
import { splitPeople } from '../helper'

const Detail = ({children, data}) => {
  const {image, summary, date, contributors} = data

  return (
    <div className="w-full">
      <Image
        id='page-element-1'
        className="w-full rounded-2xl"
        alt={image.name}
        width={image.width ?? 400}
        height={image.height ?? 400}
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
        priority
      />
      <div
        id='page-element-2'
        className="flex mt-8 mb-28 flex-wrap gap-4 flex-col-reverse md:flex-row"
      >
        <p className="md:w-[calc(66%-1rem)] mr-auto dark:text-zinc-300 text-zinc-600 font-medium text-lg">
          {summary}
        </p>
        <div className="w-full md:w-1/3">
          {contributors?.map((person) => 
            <div key={person.id} className="text-zinc-500 w-full flex">
              <div className="font-semibold text-black dark:text-white w-1/2">{person.position}: </div>
              <div className="w-1/2">{splitPeople(person.name).map((name) => <p className='mb-0' key={name}>{name}</p>)}</div>
            </div>
          )}
          <div className="text-zinc-500 w-full flex"><div className="font-semibold text-black dark:text-white w-1/2">Date: </div> <div className="w-1/2">{date}</div></div>
        </div>
      </div>
          {children}
    </div>
  )
}

export default Detail