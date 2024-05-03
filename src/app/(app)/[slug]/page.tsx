import { getPageBySlug } from "@/api/pages"
import Page from "@/components/layouts/Page"
import { notFound } from "next/navigation"

export default async function SlugPage({ params }: { params: { slug: string } }) {
    const page = await getPageBySlug(params.slug)

    if (!page) notFound()

    return <Page page={page}/>
}