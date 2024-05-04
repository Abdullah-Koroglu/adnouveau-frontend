'use client'

import Link from '@/components/TransitionLink';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Footer() {

  return (
    <div className="flex justify-between flex-wrap overflow-hidden text-neutral-300 font-semibold px-8 md:px-16 3xl:w-2/3 mx-auto">
      <div className="w-full md:w-1/3 flex justify-start md:px-0 flex-row gap-5 text-neutral-500">
        <Link className="w-fit " href="/">
          AdNueveau©2024
        </Link>
          <ThemeSwitch />
        {/* <span>
          <span>En | Tr</span>
        </span> */}
      </div>
      <div className="w-2/3 lg:w-1/3 flex flex-col md:flex-row gap-2 text-neutral-500 md:max-lg:hidden">
        <Link className="w-1/3" href="/">
          Home
        </Link>
        <Link className="w-1/3" href="/project/design">
          Design
        </Link>
        <Link className="w-1/3" href="/article">
          Article
        </Link>
      </div>
      <div className="w-1/3 md:w-2/3 lg:w-1/3  flex flex-col md:flex-row gap-2 text-neutral-500">
        <Link className="w-1/3" href="https://twitter.com/yourTwitterHandle" target="_blank" rel="noopener noreferrer">Behance</Link>
        <Link className="w-1/3" href="https://facebook.com/yourFacebookPage" target="_blank" rel="noopener noreferrer">Facebook</Link>
        <Link className="w-1/3" href="https://instagram.com/yourInstagramPage" target="_blank" rel="noopener noreferrer">Instagram</Link>
      </div>
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
