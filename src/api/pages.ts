import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache';
import { getGlobalSettings } from './settings';
 
export const getPageBySlug = async (slug: string) => {
    const cachedPage = unstable_cache(
        async (slug) => {
            const payload = await getPayload({
                config: configPromise,
              })
        
            const { docs } = await payload.find({
            collection: 'pages',
            depth: 1,
            pagination: false,
            where:
                { slug: { equals: slug } }, limit: 1
            })
        
            if (docs.length === 0) {
                return null
            } else {
                return docs[0]
            }
        },
    undefined,
    { tags: [`pages_${slug}`, 'pages'], revalidate: 3600 }
    );

    return cachedPage(slug)
}

export const getHomePage = async () => {
    const { homepage } = await getGlobalSettings()
    const slug = homepage != null && typeof homepage != 'string' ? homepage.slug : null
  
  
    if (!slug) return null
  
    const page = await getPageBySlug(slug)

    if (!page) return null

    return page
}