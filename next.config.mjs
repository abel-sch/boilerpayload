import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "*.public.blob.vercel-storage.com" }],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // Your Next.js config here
}

export default withPayload(nextConfig)
