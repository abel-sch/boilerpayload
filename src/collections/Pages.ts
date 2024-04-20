import type { CollectionConfig } from 'payload/types'
import { renderPageTemplateFields } from '@/utils/helpers'
import formatSlug from '@/utils/formatSlug'
import { revalidate, revalidatePage } from '@/utils/revalidate'

export const Pages: CollectionConfig = {
  slug: 'pages',
  hooks: {
    afterChange: [
      revalidatePage,
    ],
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
    ...renderPageTemplateFields()
  ],
}
