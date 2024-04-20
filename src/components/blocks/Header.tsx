import { getMenu } from "@/api/menu"
import Link from "next/link"
import { Button } from "../parts/Button"

export const Header = async () => {
    const links = await getMenu()

    return (
        <nav>
            { links?.map((link, key) => {
                if (!link || typeof link?.page == 'number' || !link?.page?.slug) return null
                
                return (<Button key={key} href={link.page.slug}>{link.page.title}</Button>)
                })
            }
        </nav>)
}