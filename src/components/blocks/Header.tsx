import { getMenu } from "@/api/menu"
import { Button } from "../parts/Button"

export const Header = async () => {
    const links = await getMenu()
    console.log(links)

    return (
        <nav className="sticky top-0 left-0 right-0 p-4 bg-gray-700 text-white flex justify-center gap-2">
            { links?.map((link, key) => {
                if (!link || typeof link?.page != 'object') return null
                const slug = link.page?.slug || '/'
                
                return (<Button key={key} href={slug}>{link.page.title}</Button>)
                })
            }
        </nav>)
}