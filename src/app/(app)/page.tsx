import { getHomePage, getPageBySlug } from "@/api/pages"
import { notFound } from "next/navigation"
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { getGlobalSettings } from "@/api/settings"
import { Page } from "payload-types"

export default async function HomePage() {
  const homepage = await getHomePage()

  if (!homepage) notFound()
  
    return <div>{ homepage.title }</div>
}