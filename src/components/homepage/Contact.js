"use client"
import React, { useEffect, useState } from 'react'
import { IoSend } from "react-icons/io5";

const Contact = () => {
  const [active, setActive] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [mail, setMail] = useState('')
  const times = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

  useEffect(() => {
    setInterval(() => {
      setAnimate(true)
      setTimeout(() => {
        setAnimate(false)
      }, 1500);
    }, 15000);
  }, [])

  const handleLeave = () => {
    mail !== '' ? null : setActive(false)
  }

  async function POST() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mail-subscribers`, {
      method: 'POST',
      body: JSON.stringify({"data": { "name": "Test name" }}),
    })
   
    const data = await res.json()
    console.log({data});
    // return NextResponse.json(data)
  }

  return (
    <div
      id='page-element-3'
      onMouseEnter={() => setActive(true)}
      onMouseLeave={handleLeave}
      className="bg-zinc-100 w-full lg:h-full rounded-2xl overflow-hidden flex flex-col h-44 md:max-lg:h-44 relative">
      <div className={[`h-full flex flex-col transition-all duration-500 ${animate ? 'translate-y-[-5rem]' : active ? 'translate-y-[-5rem]' : ''}`]}>
        <div className="border-3 border-black rounded-5 overflow-hidden mt-5 bg-yellow-200 w-full mb-auto">
          <div className="text-right animate-scrolling-text text-2xl xl:text-4xl overflow-visible whitespace-nowrap font-medium flex gap-2 text-zinc-600 py-2">
            {
              times.map((time, i) => <p key={i} className="mb-0">Say Merhaba! / Get in Touch!</p>)
            }
          </div>
        </div>

        <h2 className="text-zinc-600 mb-0 pb-8 pl-4 lg:pl-8 font-medium text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
          Contact
        </h2>
      </div>
      <div className={`absolute bottom-[-10rem] w-full transition-all duration-500 ease-in-out justify-around gap-3 px-2 flex  ${animate ? 'bottom-[1rem]' : active ? 'bottom-[1rem]' : ''}`}>
        <input
          type="text"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className="px-3 py-2 rounded-2xl border-zinc-600 border bg-transparent w-full dark:text-zinc-600" />
        <button onClick={() => {POST(mail)}} className="bg-zinc-600 px-5 py-1 rounded-2xl ">
          <IoSend style={{ color: 'white', fontSize: '2rem' }} />
        </button>
      </div>
    </div>
  )
}

export default Contact