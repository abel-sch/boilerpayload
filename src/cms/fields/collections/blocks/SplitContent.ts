import type { Block } from 'payload'

export const SplitContent: Block = {
  slug: 'SplitContent',
  interfaceName: 'SplitContent',
  fields: [
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}