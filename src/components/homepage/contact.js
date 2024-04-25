"use client"
import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";

const contact = () => {
  const [active, setActive] = useState(false)
  const [mail, setMail] = useState('')

  const handleLeave = () => {
    mail !== '' ? null : setActive(false)
  }

  return (
    <div onMouseEnter={() => setActive(true)} onMouseLeave={handleLeave} className="bg-zinc-100 w-full h-full rounded-md overflow-hidden ">
      <div className={[`transition-all ${active ? 'translate-y-[-5rem]' : ''}`]}>
        <div className="border-3 border-black rounded-5 overflow-hidden mt-5 bg-yellow-200 w-full">
          <div className="text-right animate-scrolling-text text-4xl overflow-visible whitespace-nowrap font-semibold flex gap-2 text-zinc-600 py-2">
            <p className="mb-0">Say Merhaba! / Get in Touch!</p>
            <p className="mb-0">Say Merhaba! / Get in Touch!</p>
            <p className="mb-0">Say Merhaba! / Get in Touch!</p>
            <p className="mb-0">Say Merhaba! / Get in Touch!</p>
            <p className="mb-0">Say Merhaba! / Get in Touch!</p>
            <p className="mb-0">Say Merhaba! / Get in Touch!</p>
          </div>
        </div>

        <h2 className="text-zinc-600 pt-10 px-5 pb-3 font-semibold text-5xl">
          Contact
        </h2>
      </div>
      <div className={`transition-all justify-around mb-2 gap-3 px-2 flex  ${active ? '' : 'translate-y-[5rem]'}`}>
        <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} className="px-3 py-2 rounded-lg border-zinc-600 border bg-transparent w-full" />
        <button className="bg-zinc-600 px-5 py-1 rounded-lg ">
          <IoSend style={{ color: 'white', fontSize: '2rem' }} />
        </button>
      </div>
    </div>
  )
}

export default contact