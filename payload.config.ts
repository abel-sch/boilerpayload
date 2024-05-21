import path from 'path'
import { en } from 'payload/i18n/en'
import {
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig } from 'payload/config'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { Media } from '@/cms/fields/collections/Media'
import { resendAdapter } from '@payloadcms/email-resend'
import { Users } from '@/cms/fields/collections/Users'
import { Pages } from '@/cms/fields/collections/Pages'
import Nav from '@/cms/fields/globals/nav'
import { Articles } from '@/cms/fields/collections/Articles'
import { s3Storage } from '@payloadcms/storage-s3'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  editor: lexicalEditor(),
  localization: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
    fallback: true,
  },
  collections: [Users, Media, Pages, Articles],
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
      bucket: process.env.S3_BUCKET_NAME as string,
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
