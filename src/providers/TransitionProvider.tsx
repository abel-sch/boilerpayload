'use client'

import { useStore } from "@/hooks/useStore";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useLayoutEffect } from "react";

export const TransitionProvider = ({ children }: { children: ReactNode}) => {
    const targetHref = useStore((state) => state.targetHref)
    const setTargetHref = useStore((state) => state.setTargetHref)
    const router = useRouter()

    useLayoutEffect(() => {
        let timeout: NodeJS.Timeout | null = null;
        if (targetHref) {
            console.log('transition start')
            if (timeout) clearTimeout(timeout)
            timeout = setTimeout(async () => {
                await router.push(targetHref)
                setTargetHref(null)
            }, 500)
        }

        return () => {
            if (timeout) clearTimeout(timeout)
        }

    }, [targetHref, router, setTargetHref])
    return (

        <div className="transition">
            { targetHref && <div className="transition__overlay">{targetHref}</div>}
            {children}
        </div>
    );
}