import Image from "next/image"
//TODO TITLER LARI KUCULT VE SOLA AL
const SectionRenderer = ({ section }) => {
  let image = null
  switch (section.type) {
    case 'text-sadece':
      return <div className="flex flex-col gap-4 items-center mb-16">
        <h2 className="dark:text-zinc-100 text-zinc-900 font-medium text-5xl">
          {section.title}
        </h2>
        <p className="dark:text-zinc-300 text-zinc-600 font-medium text-2xl">
          {section.text}
        </p>
      </div>
    case 'text-altta':
      image = section.image.data[0].attributes
      return <div className="flex flex-col gap-4 items-center mb-16">
        <h2 className="dark:text-zinc-100 text-zinc-900 font-medium text-5xl">
          {section.title}
        </h2>
        <Image
          className="w-full rounded-2xl"
          alt={image.name}
          width={image.width}
          height={image.height}
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
          priority
        />
        <p className="dark:text-zinc-300 text-zinc-600 font-medium text-lg">
          {section.text}
        </p>
      </div>
    case 'text-sagda':
      image = section.image.data[0].attributes
      return <div className="flex flex-col gap-4 items-center mb-16">
        <h2 className="dark:text-zinc-100 text-zinc-900 font-medium text-5xl">
          {section.title}
        </h2>
        <div className="flex items-center justify-center gap-16">
          <Image
            className="w-1/2 rounded-2xl"
            alt={image.name}
            width={image.width}
            height={image.height}
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
            priority
          />
          <p className="dark:text-zinc-300 text-zinc-600 font-medium text-lg w-1/2">
            {section.text}
          </p>

        </div>
      </div>
    case 'text-solda':
      image = section.image.data[0].attributes
      return <div className="flex flex-col gap-4 items-center mb-16">
        <h2 className="dark:text-zinc-100 text-zinc-900 font-medium text-5xl">
          {section.title}
        </h2>
        <div className="flex items-center justify-center gap-16">
          <p className="dark:text-zinc-300 text-zinc-600 font-medium text-lg w-1/2">
            {section.text}
          </p>
          <Image
            className="w-1/2 rounded-2xl"
            alt={image.name}
            width={image.width}
            height={image.height}
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
            priority
          />

        </div>
      </div>
    case 'image-sadece':
      const images = image = section.image.data
      return <div className="flex flex-col items-center gap-4 mb-16">
        <h2 className="dark:text-zinc-100 text-zinc-900 font-medium text-5xl">
          {section.title}
        </h2>
        <div className="grid grid-cols-4 grid-row-2 gap-4 items-center mb-16">
          {images.map((image, index) => {
            const { width, height, name, url } = image.attributes
            return <Image
              key={image.id}
              className={`rounded-2xl h-full w-full ${index === 0 ? 'col-span-2 row-span-2' :
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