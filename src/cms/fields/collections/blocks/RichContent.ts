import {
  BlocksFeature,
  LinkFeature,
  UploadFeature,
  lexicalEditor
} from '@payloadcms/richtext-lexical'
import { Quote } from './Quote'
import type { Block } from 'payload'

export const RichContent: Block = {
  slug: 'RichContent',
  interfaceName: 'RichContent',
  fields: [
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor()
    }
  ],
}