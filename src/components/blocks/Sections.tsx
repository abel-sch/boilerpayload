import { Page } from "payload-types";
import { SectionRenderer } from "../sections";

export default function Sections({ page }: { page: Page}) {
    const { template } = page
    const templateLayout = template
    if (!templateLayout) return null

    return (
        <div className="flex flex-col px-5">
            <div className="text-xs opacity-50">template: { template}</div>
            <SectionRenderer sections={page[templateLayout]} />
        </div>
    )
}