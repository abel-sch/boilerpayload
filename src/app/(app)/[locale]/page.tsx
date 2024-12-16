import { getHomePage } from "@/cms/db/pages"
import Page from "@/components/layouts/Page"
import { notFound } from "next/navigation"
import { draftMode } from 'next/headers'
import { routing } from "@/i18n/routing"

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { isEnabled } = await draftMode()
  const homepage = await getHomePage()

  if (!homepage) notFound()
  if (!routing.locales.includes(locale as any)) {
    console.log('notFound')
    notFound()
  }
  
    return <Page page={homepage}/>
}