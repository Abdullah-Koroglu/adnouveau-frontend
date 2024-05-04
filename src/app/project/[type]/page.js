import Image from "next/image"
import Link from "next/link"

async function getData({ type }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects?populate=*&filters[type][$eq]=${type}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page({ params }) {
  const data = await getData({ type: params.type })

  return <main className={`flex min-h-screen justify-center p-2 px-16`}>
    <div className="flex w-fit h-fit flex-wrap">
      {data.data?.map(project => {
        const image = project.attributes.image ? project.attributes.image.data.attributes : null
        const date = new Date(project.attributes.date);

        return (<div key={project.id} className="px-2 w-full md:w-1/2 lg:w-1/3 3xl:w-1/4">
          <Link href={`/project/${params.type}/${project.id}`}>
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
  </main>
}