import type { CollectionConfig } from 'payload/types'
import formatSlug from '@/utils/formatSlug'
import { revalidate, revalidateArticle, revalidatePage } from '@/utils/revalidate'

export const Articles: CollectionConfig = {
  slug: 'articles',
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
  },
  hooks: {
    afterChange: [revalidateArticle],
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      index: true,
      admin: {
        position: 'sidebar',
      },
      unique: true,
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
  ],
}
