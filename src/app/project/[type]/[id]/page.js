import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Image from 'next/image'
import React from 'react'

async function getData({id}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects/${id}?populate=*`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Page({params}) {
  const data = await getData({id: params.id})
  const image = data.data.attributes.image.data.attributes

  return (
    <div className="w-full px-4">
    <Image className="w-full rounded-md" alt={image.name} width={image.width} height={image.height} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}/>
    <div>{data.data.attributes.title}</div>
    <BlocksRenderer content={data.data.attributes.description} />
    </div>
  )
}
