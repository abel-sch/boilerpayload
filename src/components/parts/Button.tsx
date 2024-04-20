'use client'

import Link from "next/link"
import { ReactNode } from "react"

export const Button = ({href, children}: { href:string, children: ReactNode}) => {
    return <Link onClick={e => e.preventDefault()} href={href}>{children}</Link>
}