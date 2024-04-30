import Link from "next/link"

async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Page() {
    const data = await getData()
   
    return <main>{data.data?.map(article => <div key={article.id}>{article.attributes?.title} <Link href={`/article/${article.id}`}> Go to Article</Link></div>)}</main>
  }