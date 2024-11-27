import type { GroupField } from 'payload'

export const HomeHero: GroupField = {
    name: 'HomeHero',
    label: 'Hero',
    interfaceName: 'HomeHero',
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