import React from 'react'
import './globals.scss'
import { Inter } from 'next/font/google'
import { Header } from '@/components/blocks/Header'
import { TransitionProvider } from '@/providers/TransitionProvider'
import { LivePreviewListener } from '@/providers/LivePreviewListener'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const Layout = async ({ children, params }: { children: React.ReactNode, params: Promise<{locale: string}> }) => {
  const { locale } = await params;
  

  return (
    <html lang={locale} className={`${inter.className} ll-page`}>
      <NextIntlClientProvider>
      <body>
        <Header/>
        <TransitionProvider>
        <LivePreviewListener />
          {children}
        </TransitionProvider>
      </body>
      </NextIntlClientProvider>
    </html>
  )
}

export default Layout
