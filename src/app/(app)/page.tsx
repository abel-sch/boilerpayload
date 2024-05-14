import { getHomePage } from "@/cms/db/pages"
import Page from "@/components/layouts/Page"
import { notFound } from "next/navigation"

export default async function HomePage() {
  const homepage = await getHomePage()

  if (!homepage) notFound()
  
    return <Page page={homepage}/>
}