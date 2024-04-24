'use client'

import { useStore } from "@/hooks/useStore"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"

export const Button = ({href, children}: { href:string, children: ReactNode}) => {
    const setTargetHref = useStore((state) => state.setTargetHref)
    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        router.prefetch(href)
        setTargetHref(href)
    }

    return <Link onClick={handleClick} href={href}>{children}</Link>
}