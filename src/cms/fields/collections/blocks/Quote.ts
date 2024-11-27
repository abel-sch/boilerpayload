import type { Block } from 'payload'

export const Quote: Block = {
  slug: 'Quote', // required
  interfaceName: 'Quote', // required
  dbName: 'qte', // required
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