import type { CollectionConfig } from 'payload/types'
import { QuoteBlock } from './blocks/Quote'
import { Slider } from './blocks/Slider'

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
      name: 'template', // required
      type: 'radio', // required
      options: [
        // required
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Front Page',
          value: 'front_page',
        },
      ],
      defaultValue: 'default', // The first value in options.
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      admin: {
        condition: (data, siblingData) => {
          return data.template === 'front_page'
        }
      },
      blocks: [
        QuoteBlock,
      ],
    },
    {
      name: 'differentBlocks', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        Slider,
      ],
    },
  ],
}
