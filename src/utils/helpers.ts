import { Templates } from "@/cms/fields/collections/templates"
import { Page } from "payload-types"
import { Condition, Field, GroupField } from "payload/types"
import type { FieldHook } from 'payload/types'

export const renderPageTemplateFields = (): Field[] => {

    return [renderTemplateSelect(), {
        type: 'tabs',
        tabs: [
            {
                label: 'Hero',
                fields: renderTemplateHero(),
            },
            {
                label: 'Sections',
                fields: renderTemplateBlocks(),
            },
        ]
    }]
}

const renderTemplateHero = () => {
    const uniqueHeroes = new Set<GroupField>()
    const conditionsMap = new Map<string, string[]>()

    Object.entries(Templates).forEach(([templateKey, template]) => {
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
        type: 'text',
        hidden: true,
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

const renderTemplateSelect = (): Field => {
    return {
        name: 'template',
        type: 'select',
        options: Object.keys(Templates).map((key) => ({
                label: Templates[key].name,
                value: `${key}`,
            })
        ),
        defaultValue: `${Object.keys(Templates)[0]}`,
        admin: {
            position: 'sidebar',
        },
    }
}

const renderTemplateBlocks = () => {
    return Object.entries(Templates).map(([templateKey, template]): Field => {
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
