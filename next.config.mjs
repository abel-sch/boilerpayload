import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "localhost" }, { hostname: "*.vercel.app" }],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // Your Next.js config here
}

export default withPayload(nextConfig)
