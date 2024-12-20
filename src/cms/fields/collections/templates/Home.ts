import { PageTemplate } from ".";
import { Quote } from "../blocks/Quote";
import { RichContent } from "../blocks/RichContent";
import { Slider } from "../blocks/Slider";
import { HomeHero } from "../heroes/HomeHero";

export const Home: PageTemplate = {
    name: 'Home',
    hero: HomeHero,
    blocks: [Quote, RichContent, Slider],
}
