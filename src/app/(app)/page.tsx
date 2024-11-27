import { getHomePage } from "@/cms/db/pages"
import Page from "@/components/layouts/Page"
import { notFound } from "next/navigation"
import { draftMode } from 'next/headers'

export default async function HomePage() {

  const { isEnabled } = await draftMode()
  const homepage = await getHomePage()

  if (!homepage) notFound()
  
    return <Page page={homepage}/>
}