'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { capitalize } from '@/components/helper/index';


const Breadcrumb = () => {
  const pathname = usePathname()
  
  if (pathname) {
    const paths = pathname?.split('/')
    const pathSegments = paths.filter(path  => path !== '')

    return (
      <nav aria-label="Breadcrumb" className="bg-zinc-100 dark:bg-black py-2 px-4 rounded-md mt-10">
        {
          pathSegments.length > 0 ?
          <ol className="list-none flex text-5xl font-bold text-zinc-500">
          <li className="breadcrumb-item">
            <Link href="/">
            Home
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            let segmentText = segment
            switch (segment) {
              case 'postproduction':
                  segmentText = 'Post Production'
                break;
                case 'project':
                  segmentText = 'Work'
                break;
              default:
                break;
            }
            return (
              <li key={index} className="breadcrumb-item">
              <span className="mx-1">/</span>
              <Link className={index + 1 === pathSegments.length ? 'text-white': ''} href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                {capitalize(segmentText)}
              </Link>
            </li>
            )
          })}
        </ol> :
        null}
      </nav>
    );
  }

};

export default Breadcrumb;
