'use client'
import type { SplitContent as SplitContentProps } from "src/payload-types"
import { Serialize } from "../blocks/Serialize"
import { SerializedLexicalNode } from "../blocks/RichTextNodeFormat"
import Image from "next/image";

export function SplitContent({ content, image } : SplitContentProps) {
    if (typeof image != 'object' || !image?.url) return null;

    const { url, width, height } = image;

    if (!width || !height || !url) return null;

    return (
        <div className="grid grid-cols-2 gap-8">
            { content && <Serialize nodes={content.root.children as SerializedLexicalNode[]} /> }
            { image && <Image src={image.url} width={width} height={height} alt=""/> }
        </div>
    )
}