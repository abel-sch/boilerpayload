import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache as cache } from 'next/cache';

// This runs on every request because:
// 1. The cache key array ['pages'] is too generic - it should include the slug
// 2. The function is recreated on every call since it's defined inside getPageBySlug
// 3. The payload client is recreated on every call

// Create a stable cache key
const CACHE_KEY = 'pages'

// Create stable payload client
let payloadClient: Awaited<ReturnType<typeof getPayload>> | null = null
const getPayloadClient = async () => {
    if (!payloadClient) {
        payloadClient = await getPayload({
            config: configPromise,
        })
    }
    return payloadClient
}

// Create stable fetch function outside of cache
const fetchPageBySlug = async (slug: string) => {
    const payload = await getPayloadClient()
    
    const { docs } = await payload.find({
        collection: 'pages',
        depth: 1,
        draft: false,
        pagination: false,
        where: { 
            slug: { equals: slug },
            _status: { equals: 'published'}
        },
        limit: 1
    })

    if (docs.length === 0) {
        return null
    }
    return docs[0]
}

export const getPageBySlug = async (slug: string, tags: string[] = []) => {
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