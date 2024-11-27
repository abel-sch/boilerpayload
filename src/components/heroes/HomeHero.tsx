import type { Page, HomeHero as HomeHeroT} from "src/payload-types"

export function HomeHero({ page, hero }: { page: Page, hero: HomeHeroT}) {
    return (
        <div className="flex flex-col p-12 gap-4 bg-slate-200">
            <h1 className="text-5xl font-bold">{ hero.heading || page.title }</h1>
            <div className="text-sm">Home Hero</div>
        </div>
    )
}