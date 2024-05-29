import { Page, DefaultHero as DefaultHeroT} from "payload-types"

export function DefaultHero({ page, hero }: { page: Page, hero: DefaultHeroT}) {
    return (
        <div className="flex flex-col p-12 gap-4">
            <h1 className="text-5xl font-bold">{ hero.heading || page.title }</h1>
            { hero.subHeading && <h2 className="text-3xl font-bold">{ hero.subHeading }</h2> }
            <div className="text-sm">Default Hero</div>
        </div>
    )
}