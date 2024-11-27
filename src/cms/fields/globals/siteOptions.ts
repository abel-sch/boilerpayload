import type { GlobalConfig } from 'payload'

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