import { Page } from "payload-types";
import { Quote } from "./Quote";
import { Slider } from "./Slider";
import { RichContent } from "./RichContent";
import { SplitContent } from "./SplitContent";
import { FeaturedArticles } from "./FeaturedArticles";

type TemplateType = NonNullable<Page['template']>;

type ApendSections<T> = T extends string ? `${T}Sections` : T;

type SectionsType = ApendSections<TemplateType>;
type SectionType = {
    [T in SectionsType]: Page[T];
  }[SectionsType];

type NonNullableSectionType = NonNullable<SectionType>;

export function SectionRenderer({sections} : {sections: NonNullableSectionType}) {
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