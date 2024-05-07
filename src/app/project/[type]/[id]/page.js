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


  //TODO client i ayri ekle
  //TODO designer i comma ile separate et
  //TODO tarihi sade yil yap
  //TODO image yada video olsun
  //TODO pdf export sayfa sayfa olsun, ve resim formatinda olmasin




  if (error) return <p>Failed to load.</p>
  if (isLoading) return <p>Loading...</p>

  const image = data.data.attributes.image.data.attributes
  const { title, summary, SectionList, designer, artDirector, date } = data.data.attributes
  return (
    <div ref={printRef} className="w-full px-16 3xl:w-2/3 ml-auto mr-auto">
      <Image
        className="w-full rounded-2xl"
        alt={image.name}
        width={image.width}
        height={image.height}
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
        priority
      />
      <div className="flex mt-8 mb-28">
        <p className="w-1/2 mr-auto dark:text-zinc-300 text-zinc-600 font-medium text-lg">
          {summary}
        </p>
        <div className="w-1/3">
          <div className="text-zinc-500 w-full flex"><div className="font-semibold text-black dark:text-white w-1/2">Client: </div> {title}</div>
          <div className="text-zinc-500 w-full flex"><div className="font-semibold text-black dark:text-white w-1/2">Art Director: </div> {artDirector}</div>
          <div className="text-zinc-500 w-full flex"><div className="font-semibold text-black dark:text-white w-1/2">Designer: </div> {designer}</div>
          <div className="text-zinc-500 w-full flex"><div className="font-semibold text-black dark:text-white w-1/2">Date: </div> {date}</div>
        </div>
      </div>
      {SectionList.map((section) => {
        return <SectionRenderer key={section.id} section={section} />
      })}
    </div>
  )
}
