import { revalidateNavigation } from '@/utils/revalidate'
import type { GlobalConfig } from 'payload'

const Nav: GlobalConfig = {
  slug: 'navigation',
  hooks: {
    afterChange: [
      revalidateNavigation,
    ],
  },
  fields: [
    {
      name: 'menu',
      type: 'array',
      maxRows: 8,
      fields: [
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages',
          required: true
        },
      ],
    },
  ],
}

export default Nav