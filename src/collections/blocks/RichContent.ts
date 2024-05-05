import {
  BlocksFeature,
  LexicalBlock,
  LinkFeature,
  UploadFeature,
  lexicalEditor
} from '@payloadcms/richtext-lexical'
import { Quote } from './Quote'
import { Block } from 'payload/types'

export const RichContent: Block = {
  slug: 'RichContent',
  interfaceName: 'RichContent',
  fields: [
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          // This is incredibly powerful. You can re-use your Payload blocks
          // directly in the Lexical editor as follows:
          BlocksFeature({
            blocks: [
              Quote as LexicalBlock,
            ],
          }),
        ]
      })
    }
  ],
}