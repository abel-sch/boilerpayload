import type { CollectionConfig } from 'payload/types'
import { renderPageTemplateFields } from '@/utils/helpers'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    ...renderPageTemplateFields()
  ],
}
