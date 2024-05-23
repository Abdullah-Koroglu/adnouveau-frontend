'use client'
import { usePathname } from 'next/navigation'
import Link from '@/components/TransitionLink';
import { convertAndCapitalize } from '@/components/helper/index';
import { useEffect } from 'react';
import { animatePageIn } from './animation/animations';
import { FaHashtag } from "react-icons/fa6";


const Breadcrumb = () => {
  const pathname = usePathname()

  useEffect(() => {
    animatePageIn()
  }, [pathname])

  if (pathname) {
    const paths = pathname?.split('/')
    const pathSegments = paths.filter(path => path !== '')

    return (
      <div
        aria-label="Breadcrumb"
        className="breadcrumb max-w-[100vw] transition-all duration-300 overflow-hidden py-2 px-4 md:px-8 lg:px-16 ml-auto mr-auto 3xl:w-2/3 rounded-2xl mt-4 md:mt-10"
        style={{ display: 'flex' }}
      >
        {
          pathSegments.length > 0 ?
            <ol className="list-none flex text-md md:text-3xl lg:text-5xl font-semibold text-zinc-500">
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
                  <li key={index} className="breadcrumb-item flex">
                    {index !== 0 ? <span className="mx-1">/</span> : null}
                    <Link className={`${index + 1 === pathSegments.length ? 'text-black dark:text-white' : ''} text-nowrap transition-all duration-150`} href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                      {convertAndCapitalize(segmentText)}
                      {index === 0 ? 's' : ''}
                    </Link>
                  </li>
                )
              })}
            </ol> :
            null}
        <FaHashtag className="opacity-0" />
      </div>
    );
  }

};

export default Breadcrumb;
