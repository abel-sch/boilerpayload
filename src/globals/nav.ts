import { GlobalConfig } from 'payload/types'

const Nav: GlobalConfig = {
  slug: 'navigation',
  fields: [
    {
      name: 'menu',
      type: 'array',
      maxRows: 8,
      fields: [
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages', // "pages" is the slug of an existing collection
        },
      ],
    },
  ],
}

export default Nav