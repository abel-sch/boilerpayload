'use client'
import { SplitContent as SplitContentProps } from "payload-types"
import { Serialize } from "../blocks/Serialize"
import { SerializedLexicalNode } from "../blocks/RichTextNodeFormat"
import Image from "next/image";
import getUrl from "@/utils/url";


export function SplitContent({ content, image } : SplitContentProps) {
    if (typeof image != 'object' || !image?.url) return null;

    const { url, width, height } = image;

    if (!width || !height || !url) return null;

    return (
        <div className="grid grid-cols-2 gap-8">
            { content && <Serialize nodes={content.root.children as SerializedLexicalNode[]} /> }
            { image && <Image src={getUrl(image.url)} width={width} height={height} alt=""/> }
        </div>
    )
}