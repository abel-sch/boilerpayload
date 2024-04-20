import { create } from 'zustand'

export interface StoreType {
    targetHref: string | null,
    setTargetHref: (targetHref: string | null) => void,
}

export const useStore = create<StoreType>()((set) => ({
    targetHref: null,
    setTargetHref: (targetHref) => set({ targetHref }),
}))


// import { create } from 'zustand'

// import { TranslatedStringsType } from '@/constants/strings'

// export interface StoreType {
//     preloaderArray: Promise<any>[]
//     isPreloaded: boolean
//     setIsPreloaded: (isPreloaded: boolean) => void

//     volume: 0 | 1
//     setVolume: (volume: 0 | 1) => void

//     isMenuOpen: boolean
//     setIsMenuOpen: (isMenuOpen: boolean) => void

//     isHeaderInView: boolean
//     setIsHeaderInView: (isHeaderInView: boolean) => void

//     globalTranslations: TranslatedStringsType | null
//     setGlobalTranslations: (globalTranslations: TranslatedStringsType) => void
// }

// export const useStore = create<StoreType>()((set) => ({
//     preloaderArray: [],
//     isPreloaded: false,
//     setIsPreloaded: (isPreloaded: boolean) => set({ isPreloaded }),

//     volume: 0,
//     setVolume: (volume: 0 | 1) => set({ volume }),

//     isMenuOpen: false,
//     setIsMenuOpen: (isMenuOpen: boolean) => set({ isMenuOpen }),

//     isHeaderInView: true,
//     setIsHeaderInView: (isHeaderInView: boolean) => set({ isHeaderInView }),

//     globalTranslations: null,
//     setGlobalTranslations: (globalTranslations) => set({ globalTranslations }),
// }))
