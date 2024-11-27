import React from 'react'
import './globals.scss'
import { Inter } from 'next/font/google'
import { Header } from '@/components/blocks/Header'
import { TransitionProvider } from '@/providers/TransitionProvider'
import { LivePreviewListener } from '@/providers/LivePreviewListener'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className={`${inter.className} ll-page`}>
      <body>
        <Header/>
        <TransitionProvider>
        <LivePreviewListener />
          {children}
        </TransitionProvider>
      </body>
    </html>
  )
}

export default Layout
