'use client'

import Link from 'next/link';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Footer() {

  return (
    <footer className="flex justify-between overflow-hidden text-neutral-300	">
      <div className="flex flex-col md:flex-row gap-5 text-neutral-500">
        <Link href="/">
          AdNueveau©2024
        </Link>
          <ThemeSwitch />
        <span>
          <span>En | Tr</span>
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-2 text-neutral-500">
        <Link href="/">
          Home
        </Link>
        <Link href="/project">
          Design
        </Link>
        <Link href="/article">
          Article
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-2 text-neutral-500">
        <Link href="https://twitter.com/yourTwitterHandle" target="_blank" rel="noopener noreferrer">Behance</Link>
        <Link href="https://facebook.com/yourFacebookPage" target="_blank" rel="noopener noreferrer">Facebook</Link>
        <Link href="https://instagram.com/yourInstagramPage" target="_blank" rel="noopener noreferrer">Instagram</Link>
      </div>
      <style jsx>{`
        footer {
          background-color: #333;
          color: white;
          padding: 20px;
        }
        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
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
    </footer>
  );
}
