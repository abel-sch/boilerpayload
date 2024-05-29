'use client';

import { DefaultHero as DefaultHeroT, Page } from "payload-types";
import { TemplateType } from "../layouts/Page";
import { DefaultHero } from "../heroes/DefaultHero";

type PrependHero<T> = T extends string ? `Hero${T}` : T;
type HeroPropType = PrependHero<TemplateType>;

export default function Hero({ page }: { page: Page }) {
    if (!page.currentHero || !page[page.currentHero]) return null
    if (page.currentHero === "DefaultHero") return <DefaultHero page={page} hero={page[page.currentHero] as DefaultHeroT}/>
    if (page.currentHero === "HomeHero") return <DefaultHero page={page} hero={page[page.currentHero] as DefaultHeroT}/>

    return null;
}