import { Quote } from "../blocks/Quote";
import { Slider } from "../blocks/Slider";
import { SplitContent } from "../blocks/SplitContent";
import { HomeHero } from "../heroes/HomeHero";

export const Default = {
    name: 'Default',
    hero: HomeHero,
    blocks: [Quote, Slider, SplitContent],
}