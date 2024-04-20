'use client'

import { useStore } from "@/hooks/useStore"
import Link from "next/link"
import { ReactNode } from "react"

export const Button = ({href, children}: { href:string, children: ReactNode}) => {
    const setTargetHref = useStore((state) => state.setTargetHref)

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setTargetHref(href)
    }

    return <Link onClick={handleClick} href={href}>{children}</Link>
}