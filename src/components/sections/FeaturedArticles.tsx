import { FeaturedArticles as FeaturedArticlesProps } from "payload-types"
import { Serialize } from "../blocks/Serialize"
import { SerializedLexicalNode } from "../blocks/RichTextNodeFormat"
import Image from "next/image";
import { get } from "http";
import { getArticleBySlug } from "@/cms/db/articles";


export async function FeaturedArticles(props : FeaturedArticlesProps) {
    const { title, articles } = props
    const fetchedArticles = articles ? await Promise.all(articles.map(async (article) => {
        if (typeof article != 'object' || !article?.slug ) return null
        return await getArticleBySlug(article.slug, ['articles'])
    })) : null


    return (
        <div className="grid grid-cols-2 gap-8 py-20">
            { title && <h2 className="text-2xl font-bold">{title}</h2> }
            { fetchedArticles && (
                <div className="grid grid-cols-3">
                { fetchedArticles.map((article, i) => {
                    if (!article) return null

                    return (
                        <article key={article?.slug}><h2>{ article.title }</h2></article>
                    )
                })}
                </div>
            )}
        </div>
    )
}