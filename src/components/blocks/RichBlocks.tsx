interface Props {
    fields: {
        blockType: string
    }
    blocks?: Record<string, React.FC<any>>
}

export const RichBlock = ({ fields, blocks }: Props) => {
    if (!fields || !blocks) return null
    const Tag = blocks[fields.blockType]

    if (Tag) {
        return <Tag {...fields} />
    } else {
        console.error(`Block not found: ${fields.blockType}`)
        return null
    }
}