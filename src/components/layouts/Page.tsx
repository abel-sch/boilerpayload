import { Page as PageType } from "payload-types"
import Hero from "../blocks/Hero"
import Sections from "../blocks/Sections"

export default function Page({ page }: { page: PageType}) {
    console.log(page)
    
    return (
    <main>
        <Hero title={page.title}/>
        <Sections page={page}/>
    </main>
    )
}