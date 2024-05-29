import { Page as PageType } from "payload-types"
import Hero from "../blocks/Hero"
import Sections from "../blocks/Sections"

export type TemplateType = NonNullable<PageType['template']>;

export default function Page({ page }: { page: PageType}) {
    return (
    <main>
        <Hero page={page}/>
        <Sections page={page}/>
    </main>
    )
}