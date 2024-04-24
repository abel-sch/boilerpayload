'use client'

import { Page } from "payload-types";
import { Quote } from "./Quote";

type DefaultLayoutType = Page['DefaultLayout'];
type HomeLayoutType = Page['HomeLayout'];

export function SectionRenderer({sections} : {sections: DefaultLayoutType | HomeLayoutType}) {

    return (
        <>
            {sections && sections.map((section, i) => {
                if (section == null) return null;

                if (section.blockType === "Quote") {
                    return <Quote key={i} {...section} />
                }
            })}
        </>
    );
}