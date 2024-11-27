import { getPageBySlug } from "@/cms/db/pages"
import Page from "@/components/layouts/Page"
import { notFound } from "next/navigation"

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const page = await getPageBySlug((await params).slug)

    if (!page) notFound()

    return <Page page={page}/>
}