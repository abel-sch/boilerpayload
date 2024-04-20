import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache';
 
export const getMenu = async () => {
    const cachedMenu = unstable_cache(
        async () => {
            const payload = await getPayload({
                config: configPromise,
              })
            const { menu } = await payload.findGlobal({
                slug: 'navigation',
                depth: 2,
                locale: 'en',
              })

              return menu
        },
        undefined,
        { tags: ['menu'], revalidate: 10 }
    );

    return cachedMenu()
}