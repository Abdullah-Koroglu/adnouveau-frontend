import Article from "@/components/homepage/article";
import Video from "@/components/homepage/video";
import ImageContainer from './../components/homepage/imageContainer';
import Contact from './../components/homepage/contact';

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
    <main className={`flex min-h-screen items-center justify-center p-2 w-full `}>
      <div className="grid grid-rows-4 grid-cols-3 gap-4  w-2/3">
        
      <Article/>
      <Video/>
      <ImageContainer tags={["Branding", "Concept Design", "Story Board", "Logo Design", "Mailing", "Poster Design", "PM", "Billboard", "AR", "Illustration"]} color={'#C9FF7E'} src={'test1.jpg'} title={'Design'} href={'/project'}/>
      <ImageContainer tags={["VFX", "Editing", "Color Grading", "Compositing", "CGI", "Cleaning", "Music"]} color={'#CED8D4'} src={'test2.jpg'} title={'Post Production'} href={'/project'}/>
      <Contact />
    
      </div>
    </main>
  );
}

export default Home