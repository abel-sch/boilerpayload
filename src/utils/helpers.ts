import { Templates } from "@/collections/templates"
import { Field } from "payload/types"

export const renderPageTemplateFields = () => {
    return [renderTemplateSelect(),...renderTemplateBlocks()]
}

const renderTemplateSelect = (): Field => {
    return {
        name: 'template',
        type: 'select',
        options: Object.keys(Templates).map((key) => {
            return {
                label: Templates[key].name,
                value: `${key}Layout`,
            }
        }),
        defaultValue: Object.keys(Templates)[0],
        admin: {
            position: 'sidebar',
        },
    }
}

const renderTemplateBlocks = () => {
    return Object.entries(Templates).map(([templateKey, template]): Field => {
        return {
            name: `${templateKey}Layout`,
            type: 'blocks',
            minRows: 1,
            localized: true,
            maxRows: 20,
            blocks: template.blocks,
            admin: {
            condition: (data) => {
                return data.template === `${templateKey}Layout`
            }
            },
        }
    })
}