import { PageTemplate } from ".";
import { Quote } from "../blocks/Quote";
import { Slider } from "../blocks/Slider";
import { SplitContent } from "../blocks/SplitContent";
import { DefaultHero } from "../heroes/DefaultHero";

export const Default: PageTemplate = {
    name: 'Default',
    hero: DefaultHero,
    blocks: [Quote,Slider, SplitContent],
}