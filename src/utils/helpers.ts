import { PageTemplate } from "@/cms/fields/collections/templates"
import { Field, GroupField } from "payload/types"
import { Slug } from "@/cms/fields/collections/fields/slug"

type PageTemplateObject = Record<string, PageTemplate>

export const createPostType = (pageTemplates: PageTemplateObject) => {
    return [
        Slug,
        ...renderPageTemplateFields(pageTemplates)
    ]
}

export const renderPageTemplateFields = (pageTemplates: PageTemplateObject): Field[] => {
    return [renderTemplateSelect(pageTemplates), {
        type: 'tabs',
        tabs: [
            {
                label: 'Hero',
                fields: renderTemplateHero(pageTemplates),
            },
            {
                label: 'Sections',
                fields: renderTemplateBlocks(pageTemplates),
            },
        ]
    }]
}

const renderTemplateHero = (pageTemplates: PageTemplateObject) => {
    const uniqueHeroes = new Set<GroupField>()
    const conditionsMap = new Map<string, string[]>()

    Object.entries(pageTemplates).forEach(([templateKey, template]) => {
        if (template.hero) {
            uniqueHeroes.add(template.hero)
            const conditions = conditionsMap.get(template.hero.name)
            if (conditions) {
                conditions.push(`${templateKey}`)
                conditionsMap.set(template.hero.name, conditions)
            } else {
                conditionsMap.set(template.hero.name, [`${templateKey}`])
            }

        }
    })

    const heroFields = Array.from(uniqueHeroes).map((hero) => {
        return getHeroConditions(hero, conditionsMap)
    })

    const currentHeroField: Field = {
        name: 'currentHero',
        type: 'select',
        options: heroFields.map((hero) => hero.name),
        admin: {
            condition: () => false
        },
        hooks: {
            beforeChange: [({data}) => {
                if (!data || !data.template) return null
                for (let [key, value] of conditionsMap.entries()) {
                    if (value.includes(data.template)) {
                        return key;
                    }
                }
                return null;
            }],
          }
    }

    return [...heroFields, currentHeroField]
}

const getHeroConditions = (hero: GroupField, conditionsMap: Map<string, string[]>): GroupField => {
    const conditions = conditionsMap.get(hero.name)

    if (!conditions) return hero

    return {
        ...hero,
        admin: {
            condition: (data) => {
                return data.template && conditions.includes(data.template)
            }
        },
    }
}

const renderTemplateSelect = (pageTemplates: PageTemplateObject): Field => {
    return {
        name: 'template',
        type: 'select',
        options: Object.keys(pageTemplates).map((key) => ({
                label: pageTemplates[key].name,
                value: `${key}`,
            })
        ),
        defaultValue: `${Object.keys(pageTemplates)[0]}`,
        admin: {
            position: 'sidebar',
        },
    }
}

const renderTemplateBlocks = (pageTemplates: PageTemplateObject) => {
    return Object.entries(pageTemplates).map(([templateKey, template]): Field => {
        return {
            name: `${templateKey}Sections`,
            label: 'Sections',
            type: 'blocks',
            minRows: 1,
            localized: true,
            maxRows: 20,
            blocks: template.blocks,
            admin: {
                condition: (data) => {
                    return data.template === `${templateKey}`
                }
            },
        }
    })
}
