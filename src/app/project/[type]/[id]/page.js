import OtherProjects from '@/components/project/OtherProjects'
import SectionRenderer from '@/components/project/SectionRenderer'

import Detail from '@/components/project/Detail';

async function getData({ params }) {
  console.log('test');
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects/?filters[slug][$eq]=${params.id}&populate=deep,10`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Page = async ({ params }) => {
  const {data: dataArray} = await getData({ params })
  const data = dataArray[0]
  
  const image = data.attributes.image.data.attributes
  const { title, summary, SectionList, date, contributors } = data.attributes

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 3xl:w-2/3 ml-auto mr-auto">
      <Detail data={{ image, title, summary, date, contributors }}>
        {SectionList.map((section, index) => {
          return <SectionRenderer index={index} key={section.id} section={section} />
        })}
      </Detail>

      <OtherProjects />
    </div>
  )
}

export default Page