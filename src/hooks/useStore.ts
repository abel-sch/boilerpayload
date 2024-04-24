import { create } from 'zustand'

export interface StoreType {
    targetHref: string | null,
    setTargetHref: (targetHref: string | null) => void,
}

export const useStore = create<StoreType>()((set) => ({
    targetHref: null,
    setTargetHref: (targetHref) => set({ targetHref }),
}))
