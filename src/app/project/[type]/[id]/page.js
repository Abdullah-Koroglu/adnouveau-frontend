'use client'
import { useBreadcrumb } from '@/app/Providers'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Image from 'next/image'
import React, { useEffect } from 'react'

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

const SectionRenderer = ({section}) => {
  switch (section.type) {
    case 'text-sadece':
      return <div className="flex flex-col gap-4 items-center mb-16">
      <h2 className="text-zinc-100">
        {section.title}
      </h2>
      <p className="text-zinc-300">
        {section.text}
      </p>
    </div>  
    case 'text-altta':
      return <div className="flex flex-col gap-4 items-center mb-16">
      <h2 className="text-zinc-100">
        {section.title}
      </h2>
      <p className="text-zinc-300">
        {section.text}
      </p>
    </div>  
    case 'text-altta':
      return <div className="flex flex-col gap-4 items-center mb-16">
      <h2 className="text-zinc-100">
        {section.title}
      </h2>
      <p className="text-zinc-300">
        {section.text}
      </p>
    </div>  
    case 'text-sagda':
      return <div className="flex flex-col gap-4 items-center mb-16">
      <h2 className="text-zinc-100">
        {section.title}
      </h2>
      <p className="text-zinc-300">
        {section.text}
      </p>
    </div>  
    case 'text-solda':
      return <div className="flex flex-col gap-4 items-center mb-16">
      <h2 className="text-zinc-100">
        {section.title}
      </h2>
      <p className="text-zinc-300">
        {section.text}
      </p>
    </div>  
    case 'image-sadece':
      return <div className="flex flex-col gap-4 items-center mb-16">
      <h2 className="text-zinc-100">
        {section.title}
      </h2>
      <p className="text-zinc-300">
        {section.text}
      </p>
    </div>  
  
    default:
      break;
  }
}

export default function Page({params}) {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects/${params.id}?populate=*`,
    fetcher
  )
  const { setEndBreadcrumbs, endBreadcrumb } = useBreadcrumb()
  useEffect(() => {
    if (!error, !isLoading) {
      setEndBreadcrumbs({
        title: data.data.attributes.title,
        id: data.data.id
      })
    }
  },[error, isLoading])

  
  if (error) return <p>Failed to load.</p>
  if (isLoading) return <p>Loading...</p>
  
  const image = data.data.attributes.image.data.attributes
  const {title, summary, SectionList, designer, artDirector, date} = data.data.attributes
  return (
    <div className="w-full px-16">
    <Image 
      className="w-full rounded-2xl" 
      alt={image.name} 
      width={image.width} 
      height={image.height} 
      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
      priority
    />
    <div className="flex mt-8 mb-28">
      <p className="w-1/2 mr-auto text-zinc-300">
        {summary}
      </p>
      <div className="w-1/3">
        <p className="text-zinc-500 w-full flex"><div className="font-semibold text-black dark:text-white w-1/2">Client: </div> {title}</p>
        <p className="text-zinc-500 w-full flex"><div className="font-semibold text-black dark:text-white w-1/2">Art Director: </div> {artDirector}</p>
        <p className="text-zinc-500 w-full flex"><div className="font-semibold text-black dark:text-white w-1/2">Designer: </div> {designer}</p>
        <p className="text-zinc-500 w-full flex"><div className="font-semibold text-black dark:text-white w-1/2">Date: </div> {date}</p>
      </div>
    </div>
    {SectionList.map((section) => {
      return <SectionRenderer key={section.id} section={section}/>
    })}
    </div>
  )
}
