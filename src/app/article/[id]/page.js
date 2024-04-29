import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Image from 'next/image'
import React from 'react'

async function getData({id}) {
  const res = await fetch(`http://127.0.0.1:1337/api/articles/${id}?populate=*`)
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
    <>
    <div>{data.data.id}</div>
    <Image width={image.width} height={image.height} src={`http://127.0.0.1:1337${image.url}`}/>
    <div>{data.data.attributes.title}</div>
    <BlocksRenderer content={data.data.attributes.text} />
    </>
  )
}
