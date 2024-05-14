'use client'

import { Page } from "payload-types";
import { Quote } from "./Quote";
import { Slider } from "./Slider";
import { RichContent } from "./RichContent";
import { SplitContent } from "./SplitContent";

type TemplateType = NonNullable<Page['template']>;
type SectionType = {
    [T in TemplateType]: Page[T];
  }[TemplateType];


export function SectionRenderer({sections} : {sections: SectionType}) {
    return (
        <>
            {sections && sections.map((section, i) => {
                if (section == null) return null;

                if (section.blockType === "Quote") {
                    return <Quote key={i} {...section} />
                } else if (section.blockType === "Slider") {
                    return <Slider key={i} {...section}/>
                } else if (section.blockType === "SplitContent") {
                    return <SplitContent key={i} {...section}/>
                } else if (section.blockType === "RichContent") {
                    return <RichContent key={i} {...section}/>
                }
            })}
        </>
    );
}