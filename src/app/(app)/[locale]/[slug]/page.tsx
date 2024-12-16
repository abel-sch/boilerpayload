import { getPageBySlug } from "@/cms/db/pages"
import Page from "@/components/layouts/Page"
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation"

export default async function SlugPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
    const { slug, locale } = await params;
    const page = await getPageBySlug(slug)

    if (!page) notFound()

    return <Page page={page}/>
}