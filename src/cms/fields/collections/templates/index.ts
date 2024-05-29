import { Block, Field, GroupField } from "payload/types";
import { Default } from "./Default";
import { Home } from "./Home";

export interface PageTemplate {
    name: string;
    hero?: GroupField;
    blocks: Block[];
}

export const Templates: Record<string, PageTemplate> = {
    Default,
    Home
}