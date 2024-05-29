import { Page } from "payload-types";
import { Quote } from "./Quote";
import { Slider } from "./Slider";
import { RichContent } from "./RichContent";
import { SplitContent } from "./SplitContent";
import { FeaturedArticles } from "./FeaturedArticles";
import { TemplateType } from "../layouts/Page";

type ApendSections<T> = T extends string ? `${T}Sections` : T;

type SectionsPropType = ApendSections<TemplateType>;

export type SectionType = NonNullable<{
    [T in SectionsPropType]: Page[T];
  }[SectionsPropType]>;

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
                } else if (section.blockType === "FeaturedArticles") {
                    return <FeaturedArticles key={i} {...section}/>
                } else if (section.blockType === "RichContent") {
                    return <RichContent key={i} {...section}/>
                }
            })}
        </>
    );
}