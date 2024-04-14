import { Blocks } from "@/collections/blocks"
import { Templates } from "@/collections/templates"
import { Block, Field } from "payload/types"

export const renderPageTemplateFields = () => {
    return [renderTemplateSelect(),...renderTemplateBlocks()]
}

const renderTemplateSelect = (): Field => {
    return {
        name: 'template',
        type: 'radio',
        options: Object.keys(Templates).map((key) => {
            return {
                label: Templates[key].name,
                value: key,
            }
        }),
        defaultValue: Object.keys(Templates)[0],
        admin: {
            layout: 'horizontal',
        },
    }
}

const renderTemplateBlocks = () => {
    return Object.entries(Templates).map(([templateKey, template]): Field => {
        return {
            name: `${templateKey}Layout`,
            type: 'blocks', // required
            minRows: 1,
            maxRows: 20,
            blocks: renderPageBlocks(template.blocks),
            admin: {
            condition: (data) => {
                return data.template === templateKey
            }
            },
        }
    })
}

export const renderPageBlocks = (blockSelection: string[]): Block[] => {
    return blockSelection.map((block: string) => {
        return Blocks[block]
    })
}