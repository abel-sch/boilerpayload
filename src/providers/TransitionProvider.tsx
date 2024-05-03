'use client'

import { useStore } from "@/hooks/useStore";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useLayoutEffect } from "react";

export const TransitionProvider = ({ children }: { children: ReactNode}) => {
    const targetHref = useStore((state) => state.targetHref)
    const setTargetHref = useStore((state) => state.setTargetHref)
    const router = useRouter()
    const pathname = usePathname()
    const isTransitioning = targetHref !== null && targetHref.replace(/^\/+/g, '') !== pathname.replace(/^\/+/g, '')

    useLayoutEffect(() => {
        let timeout: NodeJS.Timeout | null = null;
        if (targetHref) {
            if (timeout) clearTimeout(timeout)
            timeout = setTimeout(async () => {
                router.push(targetHref)
            }, 500)
        }

        return () => {
            if (timeout) clearTimeout(timeout)
        }

    }, [targetHref, router, setTargetHref])
    return (

        <div className="transition">
            { isTransitioning && <div className="fixed bottom-4 right-4 rounded-full text-black bg-red-200 px-4 py-2">Transitioning to: {targetHref}</div>}
            {children}
        </div>
    );
}