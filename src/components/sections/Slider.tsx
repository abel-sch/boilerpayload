'use client'

import { imageUrl } from "@/utils/imageUrl";
import Image from "next/image";
import type { SliderBlock } from "src/payload-types"

export default function Slider({ imageSlider} : SliderBlock) {
    return (
        <div className="w-3/4 mx-auto my-4 bg-slate-400 flex flex-col p-12 gap-4 rounded-md">
            { imageSlider && imageSlider.map((slide, i) => {
                const { image } = slide;

                if (typeof image != 'object' || !image?.url) return null;

                const { url, width, height } = image;

                if (!width || !height || !url) return null;

                return <Image key={i} src={imageUrl(url)} width={width} height={height} alt=""/>
            })}
        </div>
    )
}