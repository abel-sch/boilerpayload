import formatSlug from "@/utils/formatSlug";
import type { Field } from "payload";

export const Slug: Field = {
    name: 'slug',
    label: 'Slug',
    type: 'text',
    index: true,
    admin: {
        position: 'sidebar',
    },
    unique: true,
    hooks: {
        beforeValidate: [formatSlug('title')],
    },
}
