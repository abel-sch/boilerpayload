'use client'
import { SplitContent as SplitContentProps } from "payload-types"
import { Serialize } from "../blocks/Serialize"
import { SerializedLexicalNode } from "../blocks/RichTextNodeFormat"
import Image from "next/image";


export function SplitContent({ content, image } : SplitContentProps) {
    if (typeof image != 'object' || !image?.url) return null;

    const { url, width, height } = image;

    if (!width || !height || !url) return null;
    console.log(process.env.NEXT_PUBLIC_VERCEL_URL)

    return (
        <div className="grid grid-cols-2 gap-8">
            { content && <Serialize nodes={content.root.children as SerializedLexicalNode[]} /> }
            { image && <Image src={`https://boilerpayload.vercel.app${image.url}`} width={width} height={height} alt=""/> }
        </div>
    )
}