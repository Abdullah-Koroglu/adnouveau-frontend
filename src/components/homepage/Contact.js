"use client"
import React, { useEffect, useState } from 'react'
import { IoSend } from "react-icons/io5";

const Contact = () => {
  const [active, setActive] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [mail, setMail] = useState('')
  const times = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const LetterByLetter = (sentence) => {
    let counter = 0

    const interval = setInterval(() => {
      if (counter >= sentence.length) {
        clearInterval(interval);

        const interval2 = setInterval(() => {
          if (counter < 0) {
            clearInterval(interval2);
            counter = 0
          } else {
            setDisplayedText(sentence.slice(0, counter))
            counter--;
          }
        }, 100);

      } else {
        setDisplayedText(sentence.slice(0, counter))
        counter++;
      }
    }, 100);
  }

  async function POST() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mail-subscribers`, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { "mail": mail } })
  
      })
      const data = await res.json()
      if (data.data) {
        LetterByLetter('Mail is Taken!')
        setMail('')
      }else {
        LetterByLetter('Error')
        console.log(data.error);
      }
    } catch (error) {
      LetterByLetter('Error')
      console.log(error);
    }
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

        <h2 className="text-zinc-600 w-full mb-0 pb-8 pl-4 lg:pl-8 font-medium text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl gap-4">
          Contact <span className="ml-4">{displayedText}</span>
        </h2>
      </div>
      <div className={`absolute bottom-[-10rem] w-full transition-all duration-500 ease-in-out justify-around gap-3 px-4 lg:px-8 flex mb-2 lg:mb-4  ${animate ? 'bottom-[1rem]' : active ? 'bottom-[1rem]' : ''}`}>
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