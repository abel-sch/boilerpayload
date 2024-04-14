import { Block } from 'payload/types'

export const Quote: Block = {
  slug: 'Quote', // required
  fields: [
    // required
    {
      name: 'quoteHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'quoteText',
      type: 'text',
    },
  ],
}