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
          relationTo: 'pages',
          required: true
        },
      ],
    },
  ],
}

export default Nav