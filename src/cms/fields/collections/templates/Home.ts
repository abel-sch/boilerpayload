import { PageTemplate } from ".";
import { FeaturedArticles } from "../blocks/FeaturedArticles";
import { Quote } from "../blocks/Quote";
import { RichContent } from "../blocks/RichContent";
import { HomeHero } from "../heroes/HomeHero";

export const Home: PageTemplate = {
    name: 'Home',
    hero: HomeHero,
    blocks: [Quote, RichContent, FeaturedArticles],
}