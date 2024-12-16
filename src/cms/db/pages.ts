import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache as cache } from 'next/cache';
import { draftMode } from 'next/headers';
import { getLocale } from 'next-intl/server';

const CACHE_KEY = 'pages'

const fetchPageBySlug = async (slug: string, locale: string, isDraft = false) => {
    const payload = await getPayload({
        config: configPromise,
    })
    
    const { docs } = await payload.find({
        collection: 'pages',
        depth: 1,
        draft: isDraft,
        pagination: false,
        where: { 
            and: [
                { slug: { equals: slug } },
                isDraft ? {} : { _status: { equals: 'published' } }
            ]
        },
        locale: (['en', 'nl'] as const).includes(locale as any) ? (locale as 'en' | 'nl') : 'en',
        fallbackLocale: false,
        limit: 1
    })

    if (docs.length === 0) {
        return null
    }
    return docs[0]
}

export const getPageBySlug = async (slug: string, tags: string[] = []) => {
    const { isEnabled: draft } = await draftMode()
    const locale = await getLocale();

    if (draft) {
        return fetchPageBySlug(slug, locale, true )
    }

    return cache(
        fetchPageBySlug,
        [`${CACHE_KEY}_${locale}_${slug}`],
        { tags: [`pages_${locale}_${slug}`, ...tags], revalidate: 36000 }
    )(slug, locale);
}

export const getHomePage = async () => {
    const page = await getPageBySlug('')
    if (!page) return null
    return page
}