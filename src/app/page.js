import Article from "@/components/homepage/article";
import Video from "@/components/homepage/video";

// async function getData() {
//   const res = await fetch('http://127.0.0.1:1337/api/landing-page?populate=deep')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }

const Home = async () => {
  // const data = await getData()
  // const video = data?.data.attributes.Video.video.data.attributes

  return (
    <main className="flex min-h-screen flex-col items-center p-2 gap-2">
      <Article />
      <Video/>
    </main>
  );
}

export default Home