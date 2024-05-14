'use client'
import { useBreadcrumb } from '@/app/Providers'
import SectionRenderer from '@/components/project/SectionRenderer'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page({ params }) {
  const printRef = useRef();
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects/${params.id}?populate=deep,10`,
    fetcher
  )
  const { setEndBreadcrumbs } = useBreadcrumb()
  useEffect(() => {
    if (!error, !isLoading) {
      setEndBreadcrumbs({
        title: data.data.attributes.title,
        id: data.data.id
      })
    }
  }, [error, isLoading])


  if (error) return <p>Failed to load.</p>
  if (isLoading) return <p>Loading...</p>

  const image = data.data.attributes.image.data.attributes
  const { title, summary, SectionList, designer, artDirector, date, client } = data.data.attributes
  const artDirectors = artDirector?.split(',')
  const designers = designer?.split(',')
  return (
    <div ref={printRef} className="w-full px-4 md:px-8 lg:px-16 3xl:w-2/3 ml-auto mr-auto">
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
          <div className="text-zinc-500 w-full flex"><div className="font-semibold text-black dark:text-white w-1/2">Client: </div> <div className="w-1/2">{client ?? title}</div></div>
          <div className="text-zinc-500 w-full flex"><div className="font-semibold text-black dark:text-white w-1/2">Art Director: </div> <div className="w-1/2">{artDirectors?.map((director) => <p className='mb-0' key={director}>{director}</p>)}</div></div>
          <div className="text-zinc-500 w-full flex"><div className="font-semibold text-black dark:text-white w-1/2">Designer: </div> <div className="w-1/2">{designers?.map((designer) => <p className='mb-0' key={designer}>{designer}</p>)}</div></div>
          <div className="text-zinc-500 w-full flex"><div className="font-semibold text-black dark:text-white w-1/2">Date: </div> <div className="w-1/2">{date}</div></div>
        </div>
      </div>
      {SectionList.map((section, index) => {
        return <SectionRenderer index={index} key={section.id} section={section} />
      })}
    </div>
  )
}
