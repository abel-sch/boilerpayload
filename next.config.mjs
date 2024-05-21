import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "localhost" }, { hostname: process.env.NEXT_PUBLIC_VERCEL_URL }],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // Your Next.js config here
}

export default withPayload(nextConfig)
