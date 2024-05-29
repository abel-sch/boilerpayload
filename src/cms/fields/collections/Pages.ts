import type { CollectionConfig } from 'payload/types'
import { createPostType } from '@/utils/helpers'
import { revalidatePage } from '@/utils/revalidate'
import { Default } from './templates/Default'
import { Home } from './templates/Home'

export const Pages: CollectionConfig = {
  slug: 'pages',
  hooks: {
    afterChange: [
      revalidatePage,
    ],
  },
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      localized: true,
    },
    ...createPostType({Default, Home})
  ],
}
