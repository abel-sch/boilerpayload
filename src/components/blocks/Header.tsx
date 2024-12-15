import { getMenu } from "@/cms/db/menu"
import { Button } from "../parts/Button"

export const Header = async () => {
    const links = await getMenu()

    return (
        <nav className="sticky top-0 left-0 right-0 z-50 flex justify-center gap-2 p-4 text-white bg-gray-700">
            { links?.map((link, key) => {
                if (!link || typeof link?.page != 'object') return null
                const slug = link.page?.slug || '/'
                
                return (<Button key={key} href={slug}>{link.page.title}</Button>)
                })
            }
        </nav>)
}