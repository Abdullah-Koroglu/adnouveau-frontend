import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Image from 'next/image'
import React from 'react'

async function getData(params) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/?filters[slug][$eq]=${params.id}&populate=*`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Page  =  async ({ params }) => {
  const dataArray = await getData(params)
  console.log({dataArray});

  const data = dataArray?.data?.[0]

  const image = data.attributes.image.data.attributes
  return (
    <div className="w-full px-4 md:px-16 3xl:w-2/3 ml-auto mr-auto mb-16">
      <Image
        id='page-element-1'
        className="w-full rounded-2xl"
        alt={image.name}
        width={image.width}
        height={image.height}
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
        priority
      />
      <div
        id='page-element-2'
      >{data.attributes.title}</div>
      <BlocksRenderer
        id='page-element-3'
        content={data.attributes.text} />
    </div>
  )
}

export default Page;