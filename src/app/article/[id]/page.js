'use client'
import { useBreadcrumb } from '@/app/Providers'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Image from 'next/image'
import React, { useEffect } from 'react'

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page({params}) {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${params.id}?populate=*`,
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
  return (
    <div className="w-full px-16 3xl:w-2/3 ml-auto mr-auto mb-16">
    <Image 
      className="w-full rounded-2xl" 
      alt={image.name} 
      width={image.width} 
      height={image.height} 
      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
      priority
    />
    <div>{data.data.attributes.title}</div>
    <BlocksRenderer content={data.data.attributes.text} />
    </div>
  )
}
