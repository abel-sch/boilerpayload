import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache';
 
export const getGlobalSettings = async () => {
    const cachedGlobalSettings = unstable_cache(
        async () => {
            const payload = await getPayload({
                config: configPromise,
              })
            const settings = await payload.findGlobal({
                slug: 'siteOptions',
                depth: 2,
                locale: 'en',
              })
    
              return settings
        },
        undefined,
        { tags: ['options'], revalidate: 3600 }
    );

    return cachedGlobalSettings()
}
