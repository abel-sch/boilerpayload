import type { Page as PageType } from "src/payload-types"
import Hero from "../blocks/Hero"
import Sections from "../blocks/Sections"

export type TemplateType = NonNullable<PageType['template']>;

export default async function Page({ page }: { page: PageType}) {
    // console.log(page)
    return (
    <main>
        <Hero page={page}/>
        <Sections page={page}/>
    </main>
    )
}