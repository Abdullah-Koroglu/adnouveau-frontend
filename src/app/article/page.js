import Image from "next/image"
import Link from '@/components/TransitionLink';

import { headers } from 'next/headers'


async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles?populate=*`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const headersList = headers()
  const data = await getData()

  return <main className={`flex min-h-[calc(100vh-10rem)] justify-center mb-4 md:p-2 px-4 md:px-8 lg:px-16`}>
    <div className="flex w-full h-fit flex-wrap 3xl:w-2/3 gap-y-4 gap-x-4">
      {data.data?.map((article, index) => {
        const image = article.attributes.image ? article.attributes.image.data.attributes : null

        return (<div id={`page-element-${index + 1}`} key={article.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33%-2rem)] 3xl:w-[calc(25%-3rem)]">
          <Link href={`/article/${article?.attributes?.slug}`}>
            <Image
              className="rounded-2xl"
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.formats.medium.url}`}
              width={36}
              height={36}
              sizes="36x36"
              alt={image.name}
              priority={false}
              title={image.name}
            />
            <h2 className="font-semibold text-xl mb-0">
              {article.attributes?.title}
            </h2>
            <h3 className="text-lg font-medium dark:text-zinc-200 text-zinc-900 mb-0">
              {article.attributes?.subheader}
            </h3>
          </Link>
        </div>)
      })}
    </div>
  </main>
}