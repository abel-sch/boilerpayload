'use client';

import {
    DefaultHero as DefaultHeroT,
    HomeHero as HomeHeroT,
    Page
} from "payload-types";
import { DefaultHero } from "../heroes/DefaultHero";
import { HomeHero } from "../heroes/HomeHero";

export default function Hero({ page }: { page: Page }) {
    if (!page.currentHero || !page[page.currentHero]) return null
    if (page.currentHero === "DefaultHero") return <DefaultHero page={page} hero={page[page.currentHero] as DefaultHeroT}/>
    if (page.currentHero === "HomeHero") return <HomeHero page={page} hero={page[page.currentHero] as HomeHeroT}/>

    return null;
}