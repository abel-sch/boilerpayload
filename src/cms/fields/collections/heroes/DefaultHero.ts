import { Block, CollectionConfig, Field, GroupField } from 'payload/types'

export const DefaultHero: GroupField = {
    name: 'DefaultHero',
    label: 'Hero',
    type: 'group',
    interfaceName: 'DefaultHero',
    fields: [
        {
            name: 'heading',
            type: 'text',
            label: 'Heading',
        },
        {
            name: 'subHeading',
            type: 'text',
            label: 'Sub Heading',
        },
    ],
}