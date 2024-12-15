import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache as cache } from 'next/cache';
import { draftMode } from 'next/headers';

const CACHE_KEY = 'pages'

const fetchPageBySlug = async (slug: string, isDraft = false) => {
    const payload = await getPayload({
        config: configPromise,
    })
    
    const { docs } = await payload.find({
        collection: 'pages',
        depth: 1,
        draft: isDraft,
        pagination: false,
        where: { 
            slug: { equals: slug },
        },
        limit: 1
    })

    if (docs.length === 0) {
        return null
    }
    return docs[0]
}

export const getPageBySlug = async (slug: string, tags: string[] = []) => {
    const { isEnabled: draft } = await draftMode()

    if (draft) {
        return fetchPageBySlug(slug, true)
    }

    return cache(
        fetchPageBySlug,
        [`${CACHE_KEY}_${slug}`],
        { tags: [`pages_${slug}`, ...tags], revalidate: 36000 }
    )(slug);
}

export const getHomePage = async () => {
    const page = await getPageBySlug('')
    if (!page) return null
    return page
}