import type { Page } from "src/payload-types";
import SectionRenderer from "../sections";

export default async function Sections({ page }: { page: Page}) {
    const { template } = page
    const templateLayout = template

    if (!templateLayout) return null

    const pageSections = page[`${templateLayout}Sections`]

    if (!pageSections) return null

    console.log(pageSections)

    return (
        <div className="flex flex-col px-5">
            <div className="text-xs opacity-50">template: { template}</div>
            <SectionRenderer sections={pageSections} />
        </div>
    )
}