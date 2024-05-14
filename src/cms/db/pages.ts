import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache as cache } from 'next/cache';
 
export const getPageBySlug = async (slug: string, tags: string[] = []) => {
    return cache(
        async (slug) => {
            const payload = await getPayload({
                config: configPromise,
              })

            const { docs } = await payload.find({
            collection: 'pages',
            depth: 1,
            draft: false,
            pagination: false,
            where:
                { slug: { equals: slug }, _status: { equals: 'published'} }, limit: 1
            })
        
            if (docs.length === 0) {
                return null
            } else {
                return docs[0]
            }
        },
        ['pages'],
        { tags: [`pages_${slug}`, ...tags], revalidate: 36000 }
    )(slug);
}

export const getHomePage = async () => {
    const page = await getPageBySlug('')

    if (!page) return null

    return page
}