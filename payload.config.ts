import path from 'path'
// import { postgresAdapter } from '@payloadcms/db-postgres'
import { en } from 'payload/i18n/en'
import {
  AlignFeature,
  BlockQuoteFeature,
  BlocksFeature,
  BoldFeature,
  CheckListFeature,
  HeadingFeature,
  IndentFeature,
  InlineCodeFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  RelationshipFeature,
  UnorderedListFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical'
//import { slateEditor } from '@payloadcms/richtext-slate'
import { s3Storage } from '@payloadcms/storage-s3'
import { buildConfig } from 'payload/config'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { Media } from '@/collections/Media'
import { Users } from '@/collections/Users'
import { Pages } from '@/collections/Pages'
import Nav from '@/globals/nav'
// import { mongooseAdapter } from '@payloadcms/db-mongodb'
import SiteOptions from '@/globals/siteOptions'
import { resendAdapter } from '@payloadcms/email-resend'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  //editor: slateEditor({}),
  editor: lexicalEditor(),
  localization: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
    fallback: true,
  },
  collections: [Users, Media, Pages],
  globals: [Nav],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  email: resendAdapter({
    defaultFromAddress: 'onboarding@resend.dev',
    defaultFromName: 'Payload CMS',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL,
    },
  }),

  i18n: {
    supportedLanguages: { en },
  },

  admin: {
    autoLogin: {
      email: 'dev@payloadcms.com',
      password: 'test',
      prefillOnly: true,
    },
  },
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: 'dev@payloadcms.com',
          password: 'test',
        },
      })
    }
  },
  sharp,
  plugins: [
    s3Storage({
      collections: {
        [Media.slug]: true,
      },
      disableLocalStorage: true,
      bucket: 'check',
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
      },
    }),
  ],
})
