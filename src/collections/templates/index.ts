import { Default } from "./Default";
import { Home } from "./Home";

interface Template {
    name: string;
    blocks: string[];
}

export const Templates: Record<string, Template> = {
    Default,
    Home
}