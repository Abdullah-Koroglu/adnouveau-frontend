import React from 'react'
import Link from '../TransitionLink'
import Image from 'next/image';

async function getData() {
  // Get all projects that are unlited is false or null
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects?filters[unlisted][$not]=true&populate=*&pagination[limit]=3&sort[0]=order:desc`
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const OtherProjects = async () => {
  const data = await getData()

  return (
    <div className="mb-16 hide-on-print">
      <h2 className="dark:text-zinc-100 text-zinc-900 font-medium text-3xl mb-8">
        See Other Works
      </h2>
      <div className="flex w-full h-fit flex-wrap gap-y-4 gap-x-6">
        {data.data?.map((project, index) => {
          const image = project.attributes.image ? project.attributes.image.data.attributes : null
          const date = new Date(project.attributes.date);

          return (<div id={`page-element-${index + 1}`} key={project.id} className="w-full md:w-[calc(33%-1rem)]">
            <Link href={`/project/${project.attributes.type}/${project.attributes?.slug}`}>
              <Image
                className="rounded-2xl max-lg:my-0"
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image?.url}`}
                width={36}
                height={36}
                sizes="36x36"
                alt={image.name}
                priority={false}
                title={image.name}
              />
              <h2 className="font-semibold text-xl mb-0">
                {project.attributes?.title}
              </h2>
              <h3 className="text-lg font-medium dark:text-zinc-200 text-zinc-900 mb-0">
                {project.attributes?.subheader}
              </h3>
              <h4 className="text-sm font-normal text-zinc-500">
                {date.getFullYear()}
              </h4>
            </Link>
          </div>)
        })}
      </div>
    </div>
  )
}

export default OtherProjects