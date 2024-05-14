import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache as cache } from 'next/cache';

export const getArticleBySlug = async (slug: string, tags: string[] = [] ) => {
    return cache(
        async (slug) => {
            const payload = await getPayload({
                config: configPromise,
              })

            const { docs } = await payload.find({
                collection: 'articles',
                depth: 0,
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
            } else {
                console.log(docs)
                return docs[0]
            }
        },
        ['articles'],
        { tags: [`articles_${slug}`, ...tags], revalidate: 36000 }
    )(slug);
}