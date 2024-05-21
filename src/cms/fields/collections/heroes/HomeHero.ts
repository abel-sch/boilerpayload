import { Block, CollectionConfig, Field, GroupField } from 'payload/types'

export const HomeHero: GroupField = {
    name: 'HomeHero',
    label: 'Hero',
    type: 'group',
    fields: [
        {
            name: 'heading',
            type: 'text',
            label: 'Heading',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
        },
    ],
}