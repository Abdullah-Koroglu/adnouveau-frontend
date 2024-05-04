"use client"
import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";

const Contact = () => {
  const [active, setActive] = useState(false)
  const [mail, setMail] = useState('')

  const handleLeave = () => {
    mail !== '' ? null : setActive(false)
  }

  return (
    <div
      id='page-element-3'
      onMouseEnter={() => setActive(true)}
      onMouseLeave={handleLeave}
      className="bg-zinc-100 w-full h-full rounded-2xl overflow-hidden flex flex-col md:max-lg:h-44 relative">
      <div className={[`h-full flex flex-col transition-all duration-500 ${active ? 'translate-y-[-5rem]' : ''}`]}>
        <div className="border-3 border-black rounded-5 overflow-hidden mt-5 bg-yellow-200 w-full mb-auto">
          <div className="text-right animate-scrolling-text text-2xl xl:text-4xl overflow-visible whitespace-nowrap font-semibold flex gap-2 text-zinc-600 py-2">
            <p className="mb-0">Say Merhaba! / Get in Touch!</p>
            <p className="mb-0">Say Merhaba! / Get in Touch!</p>
            <p className="mb-0">Say Merhaba! / Get in Touch!</p>
            <p className="mb-0">Say Merhaba! / Get in Touch!</p>
            <p className="mb-0">Say Merhaba! / Get in Touch!</p>
            <p className="mb-0">Say Merhaba! / Get in Touch!</p>
          </div>
        </div>

        <h2 className="text-zinc-600 mb-0 pb-8 pl-4 lg:pl-8 font-semibold text-2xl xl:text-4xl">
          Contact
        </h2>
      </div>
      <div className={`absolute bottom-4 w-full transition-all duration-500 ease-in-out justify-around gap-3 px-2 flex  ${!active ? 'bottom-[-10rem]' : ''}`}>
        <input
          type="text"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className="px-3 py-2 rounded-2xl border-zinc-600 border bg-transparent w-full dark:text-zinc-600" />
        <button className="bg-zinc-600 px-5 py-1 rounded-2xl ">
          <IoSend style={{ color: 'white', fontSize: '2rem' }} />
        </button>
      </div>
    </div>
  )
}

export default Contact