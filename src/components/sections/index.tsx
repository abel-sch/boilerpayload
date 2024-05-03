'use client'

import { Page } from "payload-types";
import { Quote } from "./Quote";
import { Slider } from "./Slider";

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
                }
            })}
        </>
    );
}