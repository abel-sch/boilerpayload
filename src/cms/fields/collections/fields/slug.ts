import formatSlug from "@/utils/formatSlug";
import { Field } from "payload/types";

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
