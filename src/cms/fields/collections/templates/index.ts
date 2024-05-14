import { Block } from "payload/types";
import { Default } from "./Default";
import { Home } from "./Home";

interface Template {
    name: string;
    blocks: Block[];
}

export const Templates: Record<string, Template> = {
    Default,
    Home
}