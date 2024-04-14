import type { CollectionConfig } from 'payload/types'
import { renderPageTemplateFields } from '@/utils/helpers'
import formatSlug from '@/utils/formatSlug'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
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
