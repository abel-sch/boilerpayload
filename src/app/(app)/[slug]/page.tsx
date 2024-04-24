import { getHomePage, getPageBySlug } from "@/api/pages"
import Page from "@/components/layouts/Page"
import { notFound, redirect } from "next/navigation"

export default async function SlugPage({ params }: { params: { slug: string } }) {
    const [page, homepage] = await Promise.all([getPageBySlug(params.slug), getHomePage()])

    if (!page) notFound()

    return <Page page={page}/>
}