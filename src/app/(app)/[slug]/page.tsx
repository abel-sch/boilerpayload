import { getPageBySlug } from "@/api/pages"
import { notFound } from "next/navigation"

export default async function Page({ params }: { params: { slug: string } }) {
    const page = await getPageBySlug(params.slug)

    if (!page) notFound()

    return <div>{ page.title }</div>
}