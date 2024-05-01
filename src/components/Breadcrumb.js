'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { capitalize } from '@/components/helper/index';
import { useBreadcrumb } from '@/app/Providers';
import { useEffect } from 'react';


const Breadcrumb = () => {
  const pathname = usePathname()
  const { endBreadcrumb: breadcrumb } = useBreadcrumb()

  if (pathname) {
    const paths = pathname?.split('/')
    const pathSegments = paths.filter(path => path !== '')

    return (
      <nav aria-label="Breadcrumb" className="bg-zinc-100 dark:bg-black py-2 px-16 rounded-2xl mt-10">
        {
          pathSegments.length > 0 ?
            <ol className="list-none flex text-5xl font-bold text-zinc-500">
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
                    {index !== 0 ? <span className="mx-1">/</span> : null}
                    <Link className={`${index + 1 === pathSegments.length ? 'text-white' : ''} text-nowrap`} href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                      {(breadcrumb?.title && index + 1 === pathSegments.length && segmentText.match(/^\d+$/gm)) ? breadcrumb?.title : capitalize(segmentText)}
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
