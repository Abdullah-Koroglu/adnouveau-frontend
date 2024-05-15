'use client'
import Image from "next/image"
import ReactPlayer from "react-player";

const SectionRenderer = ({ section, index }) => {
  let image = null
  switch (section.type) {
    case 'text-sadece':
      return <div id={`page-element-${index}`} className="pagebreak pt-16 justify-center rounded-lg flex flex-col gap-4 mb-6 md:mb-16">
        <h2 className="dark:text-zinc-100 text-zinc-900 font-medium text-3xl">
          {section.title}
        </h2>
        <p className="dark:text-zinc-300 text-zinc-600 font-medium text-2xl">
          {section.text}
        </p>
      </div>
    case 'text-altta':
      image = section.image.data ? section.image.data[0].attributes : null
      const video = section.video.data ? section.video.data?.attributes : null
      return <div id={`page-element-${index}`} className="pagebreak pt-16 justify-center rounded-lg flex flex-col gap-4 mb-6 md:mb-16">
        <h2 className="dark:text-zinc-100 text-zinc-900 font-medium text-3xl">
          {section.title}
        </h2>
        {image && <Image
          className="w-full rounded-2xl"
          alt={image.name}
          width={image.width ?? 400}
          height={image.height ?? 400}
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
          priority
        />}
        {
          video && <ReactPlayer
          
          url={`${process.env.NEXT_PUBLIC_BACKEND_URL}${video.url}`}
          width='100%'
          height="auto"
          controls={true}
          loop={true}
          muted={true}
          playing={true}
          playsinline={true}
        />
        }
        <p className="dark:text-zinc-300 text-zinc-600 font-medium text-lg">
          {section.text}
        </p>
      </div>
    case 'text-sagda':
      image = section.image.data[0].attributes
      return <div id={`page-element-${index}`} className="pagebreak pt-16 justify-center rounded-lg flex flex-col gap-4 mb-6 md:mb-16">
        <h2 className="dark:text-zinc-100 text-zinc-900 font-medium text-3xl">
          {section.title}
        </h2>
        <div className="flex items-center justify-center flex-col md:flex-row gap-4 md:gap-16">
          <Image
            className="md:w-1/2 rounded-2xl max-md:my-0"
            alt={image.name}
            width={image.width ?? 400}
            height={image.height ?? 400}
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
            priority
          />
          <p className="dark:text-zinc-300 text-zinc-600 font-medium text-lg md:w-1/2">
            {section.text}
          </p>

        </div>
      </div>
    case 'text-solda':
      image = section.image.data[0].attributes
      return <div id={`page-element-${index}`} className="pagebreak pt-16 justify-center rounded-lg flex flex-col gap-4 mb-6 md:mb-16">
        <h2 className="dark:text-zinc-100 text-zinc-900 font-medium text-3xl">
          {section.title}
        </h2>
        <div className="flex items-center justify-center flex-col-reverse md:flex-row gap-4 md:gap-16">
          <p className="dark:text-zinc-300 text-zinc-600 font-medium text-lg md:w-1/2">
            {section.text}
          </p>
          <Image
            className="md:w-1/2 rounded-2xl max-md:my-0"
            alt={image.name}
            width={image.width ?? 400}
            height={image.height ?? 400}
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
            priority
          />

        </div>
      </div>
    case 'image-sadece':
      const images = image = section.image.data
      return <div id={`page-element-${index}`} className="pagebreak pt-16 justify-center rounded-lg flex flex-col mb-6 md:mb-16">
        <h2 className="dark:text-zinc-100 text-zinc-900 font-medium text-3xl">
          {section.title}
        </h2>
        <div className="flex flex-col md:grid grid-cols-4 grid-row-2 gap-4 items-center mb-6 md:mb-16">
          {images.map((image, index) => {
            const { width, height, name, url } = image.attributes
            return <Image
              key={image.id}
              className={`max-md:my-0 rounded-2xl h-full w-full ${index === 0 ? 'col-span-2 row-span-2' :
                index === 1 ? 'col-span-2' :
                  ''
                }`}
              alt={name}
              width={width}
              height={height}
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`}
              priority
            />
          })}
        </div>
      </div>

    default:
      break;
  }
}

export default SectionRenderer