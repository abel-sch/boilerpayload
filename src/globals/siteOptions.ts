import { GlobalConfig } from 'payload/types'

const SiteOptions: GlobalConfig = {
  slug: 'siteOptions',
  fields: [
    {
      name: 'homepage',
      type: 'relationship',
      relationTo: 'pages',
    },
  ],
}

export default SiteOptions