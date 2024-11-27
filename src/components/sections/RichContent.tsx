import type { RichContent as RichContentProps } from "src/payload-types"
import { Serialize } from "../blocks/Serialize"
import { SerializedLexicalNode } from "../blocks/RichTextNodeFormat"
import { Quote } from "./Quote"

const blocks = {
    Quote: Quote
}

export function RichContent({ content} : RichContentProps) {
    return (
        <div className="">
            <h2>Rich Content:</h2>
            { content && <Serialize blocks={blocks} nodes={content.root.children as SerializedLexicalNode[]} /> }
        </div>
    )
}