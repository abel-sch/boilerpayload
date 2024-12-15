import { isAuthenticated } from '@/utils/auth'
import { getImageUrl } from '@/utils/url'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: isAuthenticated,
    create: isAuthenticated,
    update: isAuthenticated,
    delete: isAuthenticated
  },
  hooks: {
    afterRead: [
      async ({ doc }) => {
        if (doc.url) {
          doc.url = getImageUrl(doc.url)
        }
        return doc
      }
    ]
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
