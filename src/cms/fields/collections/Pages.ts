import type { CollectionConfig } from 'payload'
import { createPostType } from '@/utils/helpers'
import { revalidatePage } from '@/utils/revalidate'
import { Default } from './templates/Default'
import { Home } from './templates/Home'
import { generatePreviewPath } from '@/utils/generatePreviewPath'
import { isAuthenticated } from '@/utils/auth'

export const Pages: CollectionConfig = {
  slug: 'pages',
  hooks: {
    afterChange: [
      revalidatePage,
    ],
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
        })
        // console.log(path)

        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
      },
    },
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
      })

      return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 20,
  },
  access: {
    create: isAuthenticated,
    read: isAuthenticated,
    update: isAuthenticated,
    delete: isAuthenticated
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      localized: true,
    },
    ...createPostType({Home, Default})
  ],
}
