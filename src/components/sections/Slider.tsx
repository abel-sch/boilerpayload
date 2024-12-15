'use client'

import { imageUrl } from "@/utils/imageUrl";
import Image from "next/image";
import type { SliderBlock } from "src/payload-types"

export default function Slider({ imageSlider} : SliderBlock) {
    return (
        <div className="relative mx-auto my-4 rounded-md">
            <div className="flex gap-4 px-4 overflow-x-auto scroll-px-4 snap-x snap-mandatory">
                { imageSlider && imageSlider.map((slide, i) => {
                    const { image } = slide;

                    if (typeof image != 'object' || !image?.url) return null;

                    const { url, width, height } = image;

                    if (!width || !height || !url) return null;

                    return (
                        <div key={i} className=" snap-start shrink-0">
                            <Image 
                                src={imageUrl(url)} 
                                width={width} 
                                height={height} 
                                alt=""
                                className="w-full h-auto"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}