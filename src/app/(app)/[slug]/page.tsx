import { getHomePage, getPageBySlug } from "@/api/pages"
import { notFound, redirect } from "next/navigation"

export default async function Page({ params }: { params: { slug: string } }) {
    const [page, homepage] = await Promise.all([getPageBySlug(params.slug), getHomePage()])

    if (!page) notFound()
    // if (page.slug == homepage?.slug) redirect('/')

    return <div>{ page.title }</div>
}