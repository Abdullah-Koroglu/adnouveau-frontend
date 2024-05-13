'use client'

import Link from '@/components/TransitionLink';
import ThemeSwitch from '@/components/ThemeSwitch';


const FirstElement = ({className}) => {
  return <div className={`w-full md:w-1/2 lg:w-1/3 flex justify-start items-center pt-4 lg:pt-0 lg:px-4 flex-row lg:gap-5 text-neutral-500 ${className}`}>
  <Link className="hover:text-black hover:dark:text-white transition-all w-2/3 lg:w-fit " href="/">
    Ad Nouveau©2024
  </Link>
    <ThemeSwitch />
  {/* <span>
    <span>En | Tr</span>
  </span> */}
</div>
}

export default function Footer() {

  return (
    <div className="footer flex justify-between items-center flex-wrap overflow-hidden text-neutral-300 font-medium px-4 md:px-8 lg:px-16 3xl:w-2/3 mx-auto pb-8">
      <FirstElement className='hidden lg:flex'/>
      <div className="w-2/3 md:w-1/2 lg:w-1/3 flex flex-col md:flex-row gap-2 text-neutral-500 lg:px-4">
        <Link className="hover:text-black hover:dark:text-white transition-all w-1/3" href="/">
          Home
        </Link>
        <Link className="hover:text-black hover:dark:text-white transition-all w-1/3" href="/project/design">
          Design
        </Link>
        <Link className="hover:text-black hover:dark:text-white transition-all w-1/3" href="/article">
          Article
        </Link>
      </div>
      <div className="w-1/3 md:w-1/2 lg:w-1/3  flex flex-col md:flex-row gap-2 text-neutral-500 lg:px-4">
        <Link className="hover:text-black hover:dark:text-white transition-all w-1/3" out href="https://www.behance.net/adnouveau" target="_blank" rel="noopener noreferrer">Behance</Link>
        {/* <Link className="hover:text-black hover:dark:text-white transition-all w-1/3" href="https://facebook.com/yourFacebookPage" target="_blank" rel="noopener noreferrer">Facebook</Link> */}
        <Link className="hover:text-black hover:dark:text-white transition-all w-1/3" out href="https://www.instagram.com/ad_nouveau" target="_blank" rel="noopener noreferrer">Instagram</Link>
      </div>
      <FirstElement className='lg:hidden'/>
      <style jsx>{`
        a {
          color: white;
          text-decoration: none;
          margin-right: 10px;
        }
        button {
          background: none;
          border: none;
          cursor: pointer;
          color: white;
          font-size: 18px;
        }
        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}
