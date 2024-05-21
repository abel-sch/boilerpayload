import { Block, Field, GroupField } from "payload/types";
import { Default } from "./Default";
import { Home } from "./Home";

interface Template {
    name: string;
    hero?: GroupField;
    blocks: Block[];
}

export const Templates: Record<string, Template> = {
    Default,
    Home
}