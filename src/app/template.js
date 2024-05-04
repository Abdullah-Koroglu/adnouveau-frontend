'use client'

import { animatePageIn } from "@/components/animation/animations"
import { useEffect } from "react"

export default function Template({ children }) {
  useEffect(() => {
    animatePageIn();
  }, []) 
  return <div>{children}</div>
}