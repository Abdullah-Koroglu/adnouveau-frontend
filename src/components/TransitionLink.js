"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/components/animation/animations"

const Link = (props) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname !== props.href) {
      animatePageOut(props.href, router, props.out)
    }
  }

  return (
    <div
    onClick={handleClick}
    {...props}
    className={`${props.className ? props.className : ''} cursor-pointer`}
    >
      {props.children}
    </div>
  )
}

export default Link