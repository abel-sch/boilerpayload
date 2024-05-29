'use client';

import { Page } from "payload-types";
import { TemplateType } from "../layouts/Page";

type PrependHero<T> = T extends string ? `Hero${T}` : T;
type HeroPropType = PrependHero<TemplateType>;

export default function Hero({ page }: { page: Page }) {
    type HeroKeys<T> = {
        [K in keyof T]: K extends `${string}Hero` ? K : never
      }[keyof T];
    type HeroProperties = NonNullable<HeroKeys<Page>>;
    console.log(page)

    return (
        <section className="px-5 py-20">
            <h1 className="text-6xl font-bold">{ page.title }</h1>
        </section>
    )
}