import { Block } from 'payload/types'

export const FeaturedArticles: Block = {
  slug: 'FeaturedArticles', // required
  interfaceName: 'FeaturedArticles', // required
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'articles',
      hasMany: true,
      type: 'relationship',
      relationTo: 'articles',
    },
  ],
}