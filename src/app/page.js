import Article from "@/components/homepage/Article";
import Video from "@/components/homepage/Video";
import ImageContainer from '../components/homepage/ImageContainer';
import Contact from '../components/homepage/Contact';

// async function getData() {
//   const res = await fetch('http://127.0.0.1:1337/api/landing-page?populate=deep')

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

const Home = async () => {
  // const data = await getData()
  // const video = data?.data.attributes.Video.video.data.attributes

  return (
    <main className={`flex min-h-screen items-center justify-center p-2 px-8 md:px-16 w-full`}>
      <div className="flex flex-wrap md:grid md:grid-rows-6 md:grid-cols-2 lg:grid-rows-4 lg:grid-cols-3 gap-4 w-full 3xl:w-2/3">

        <Article />
        <Video />
        <ImageContainer tags={["VFX", "Editing", "Color Grading", "Compositing", "CGI", "Cleaning", "Music"]} color={'#CED8D4'} src={'test3.png'} title={'Post Production'} href={'/project/postproduction'} />
        <ImageContainer tags={["Branding", "Concept Design", "Story Board", "Logo Design", "Mailing", "Poster Design", "PM", "Billboard", "AR", "Illustration"]} color={'#C9FF7E'} src={'test.png'} title={'Design'} href={'/project/design'} />
        <Contact />

      </div>
    </main>
  );
}

export default Home